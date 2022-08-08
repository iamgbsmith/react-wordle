import { atom } from 'recoil';

// https://stackoverflow.com/questions/65706021/recoil-atom-typescript-default-undefined
export const answersAtom = atom<string[]>({
  key: 'answersState',
  default: []
});
