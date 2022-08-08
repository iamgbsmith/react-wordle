import Letter from '../letter';
import { WordlineWrapper } from './styles';

type WordlineProps = {
  answer: string;
  correctAnswer: string; // should not be optional
}

// Given a 5 letter word, for each word, display a separate character
// If the character exactly matches that for the word to guess, the display as green
// If the character does not, then check to see if it is in another part of the word, if so display as yellow
// If no matches for the word or character at, then display normally
const Wordline = ({ answer, correctAnswer }: WordlineProps) => {

  // Determine the match type for the letter
  const getMatchType = (letter: string, index: number, correctAnswer: string) => { 
    let matchType = '';
    if (letter === ' ') {
      return matchType = '';
    }
    if (correctAnswer.charAt(index) === letter) {
      matchType = 'exact';
    } else {
      if (correctAnswer.indexOf(letter) !== -1) {
        matchType = 'close';
      } else {
        matchType = 'none';
      }
    }
    return matchType;
  };

  return (
    <WordlineWrapper>
      {
        answer.split('').map((letter, index) =>
          <Letter key={index} match={getMatchType(letter, index, correctAnswer)} letter={letter}/>
        )
      }
    </WordlineWrapper>
  )
}

export default Wordline;
