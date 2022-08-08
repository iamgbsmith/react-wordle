import { atom } from 'recoil';
import { SelectedLetter } from '../types';

const initialState: SelectedLetter[] = [
  // { letter: 'a', matchType: 'none' },
];

export const keysAtom = atom<SelectedLetter[]>({
  key: 'keysState',
  default: initialState
});
