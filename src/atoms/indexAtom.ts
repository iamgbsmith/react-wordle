import { atom } from 'recoil';
import { Constants } from '../constants';

export const indexAtom = atom({
  key: 'indexState',
  default: Math.floor(Math.random() * Constants.WORD_COUNT), // For choosing a random index offset from the collection of words
  effects: [
    ({ onSet }) => {
      onSet(index => {
        console.log(`Array index value is ${index}`);
      });
    }
  ]
});
