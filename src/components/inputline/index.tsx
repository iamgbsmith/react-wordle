import React from 'react'
import { useRecoilValue } from 'recoil';
import { wordAtom } from '../../atoms/wordAtom';
import Letter from '../letter';
import { WordlineWrapper } from './styles';

/**
 * Renders a row of letters when the user is entering them prior to submission.
 */
const Inputline:React.FC = () => {
  const placeholder = '';
  const word = useRecoilValue(wordAtom);
  const placeholders:string[] = Array(5 - word.length).fill(placeholder);

  return (
    <WordlineWrapper>
      {
        word.split('').map((letter, index) =>
          <Letter key={index} match={'placeholder'} letter={letter}/>
        )
      }
      {
        placeholders.map((letter, index) =>
          <Letter key={index} match={'placeholder'} letter={letter}/>
        )
      }
    </WordlineWrapper>
  );
}

export default Inputline;