import { atom } from 'recoil';

export const wordAtom = atom({
  key: 'wordState', // unique ID to prevent clashes with other atoms/selectors
  default: '' // default value (aka initial value)
});
