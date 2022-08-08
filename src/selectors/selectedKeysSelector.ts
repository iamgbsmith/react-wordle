import { selector } from 'recoil';
import { keysAtom } from '../atoms/keysAtom';

// https://dev-to-dev.com/how-to-re-render-large-lists-optimally-when-states-change-in-react/
export const selectedKeysSelector = selector({
  key: 'selectedKeysState',
  get: ({ get }) => {
    return get(keysAtom);
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  set: ({ get, set }, updatedKey: any) => {
    const keys = get(keysAtom);
    // Clone the keys to prevent error related to updating read-only array
    const clonedKeys = [...keys];
    const index = keys.findIndex(key => key.letter === updatedKey.letter);
    // Update the key status if the key is already not an exact match
    if (index !== -1 && keys[index].matchType !== 'exact') {
      const newValueItem = { letter: updatedKey.letter, matchType: updatedKey.matchType };
      clonedKeys[index] = newValueItem;
    } else {
      // Adding new item
      clonedKeys.push({ letter: updatedKey.letter, matchType: updatedKey.matchType });
    }
    set(keysAtom, clonedKeys); // Update the atom with the new array of values
  }
});
