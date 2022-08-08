import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil';
import { answersAtom } from '../../atoms/answersAtom';
import { indexAtom } from '../../atoms/indexAtom';
import Wordline from '../wordline';
import Inputline from '../inputline';
import { data } from '../../data/words';
import { AnswersWrapper } from './styles';

const Wordboard:React.FC = () => {
  const placeholder = '     '; // Used to fill out blank rows and tiles
  const [answers,] = useRecoilState(answersAtom);
  const answersLength = answers ? answers.length : 0;
  const index = useRecoilValue(indexAtom);
  const placeholders:string[] = answersLength < 5 ? Array(5 - answersLength).fill(placeholder) : [];
  const correctAnswer = data[index];
  const inputLine = answersLength < 6 ? <Inputline/> : null;

  return (
    <AnswersWrapper>
      {
        answers.map((answer, index) => 
          <Wordline key={index} answer={answer} correctAnswer={correctAnswer}/>
        )
      }
      {inputLine}
      {
        placeholders.length > 0 && placeholders.map((answer, index) => 
          <Wordline key={index} answer={answer} correctAnswer={correctAnswer}/>
        )
      }
    </AnswersWrapper>
  )

}

export default Wordboard;