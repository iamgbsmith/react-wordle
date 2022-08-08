import { useRecoilState, useResetRecoilState } from 'recoil';
import { answersAtom } from '../atoms/answersAtom';
import { confettiAtom } from '../atoms/confettiAtom';
import { indexAtom } from '../atoms/indexAtom';
import { keysAtom } from '../atoms/keysAtom';
import { solvedAtom } from '../atoms/solvedAtom';
import { wordAtom } from '../atoms/wordAtom';
import { Constants } from '../constants';

/**
 * Reset application state to default values.
 */
const useResetApplicationState = () => {
  // code to run after render goes here
  const resetAnswers = useResetRecoilState(answersAtom);
  // const [, setAnswers] = useRecoilState(answersAtom);
  const resetConfetti = useResetRecoilState(confettiAtom);
  const [, setIndex] = useRecoilState(indexAtom);
  const resetKeys = useResetRecoilState(keysAtom);
  const resetSolved = useResetRecoilState(solvedAtom);
  const resetWord = useResetRecoilState(wordAtom);

  return () => {
    console.log('Resetting application state');
    resetAnswers();
    // setAnswers([]);
    setIndex(Math.floor(Math.random() * Constants.WORD_COUNT)); // Set directly because this call to resetIndex has a bug
    resetKeys();
    resetSolved();
    resetWord();
    resetConfetti();
  };
};

export default useResetApplicationState;
