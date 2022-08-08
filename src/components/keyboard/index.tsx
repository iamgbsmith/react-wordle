import React, { useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil';
import { answersAtom } from '../../atoms/answersAtom';
import { confettiAtom } from '../../atoms/confettiAtom';
import { indexAtom } from '../../atoms/indexAtom';
import { keysAtom } from '../../atoms/keysAtom';
import { solvedAtom } from '../../atoms/solvedAtom';
import { wordAtom } from '../../atoms/wordAtom';
import Key from '../key';
import { Container, KeyRow } from './styles';

import {data} from '../../data/words';
import { selectedKeysSelector } from '../../selectors/selectedKeysSelector';
import toast from 'react-hot-toast';
import { SelectedLetter } from '../../types';

const Keyboard:React.FC = () => {

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    }
  });

  const index = useRecoilValue(indexAtom);
  const keys = useRecoilValue(keysAtom);
  const [answers, setAnswers] = useRecoilState(answersAtom);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [, setConfetti] = useRecoilState(confettiAtom);
  const [solved, setSolved] = useRecoilState(solvedAtom);
  const [word, setWord] = useRecoilState(wordAtom);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [, setSelectedKeys] = useRecoilState(selectedKeysSelector);
  
  const correctAnswer = data[index];

  /**
   * If the character exactly matches that for the word to guess, the display as green.
   * If the character does not, then check to see if it is in another part of the word, if so display as yellow.
   * If no matches for the word or character at, then display normally.
   * @param letter 
   * @param index 
   * @param correctAnswer 
   * @returns string value for the style to be used on the key
   */
  const updateSelectedLetterColors = () => {
    let matchType = 'none';
    for (let i = 0; i < word.length; i++) {
      const letter = word.charAt(i); // Letter being guessed
      const solutionLetter = correctAnswer.charAt(i);
      if (letter === solutionLetter) {
        matchType = 'exact';
      } else if (correctAnswer.indexOf(letter) !== -1) {
        matchType = 'close';
      } else {
        matchType = 'none';
      }
      const selectedLetter: SelectedLetter = {letter, matchType};
      setSelectedKeys(selectedLetter);
    }
  };

  // Selects a letter if there are less than 5 characters and the puzzle is not solved
  const selectLetter = (key: string) => {
    if (!solved && word.length < 5) {
      const newWord = word + key; 
      setWord(newWord);
    }
  };

  const submitWord = () => {
    if (word.length < 5) {
      toast('Not enough letters',
      {
        icon: '😵‍💫',
        style: {
          borderRadius: '10px',
          background: '#ed3254',
          color: '#fff',
        },
      });
      return;
    }

    // Check if word exists, if not notify the player
    if (!data.includes(word.toLowerCase())) {
      toast('Word not found',
      {
        icon: '😞',
        style: {
          borderRadius: '10px',
          background: '#ed3254',
          color: '#fff',
        },
      });
      return;
    }

    if (!solved && answers !== undefined && word.length === 5 && data.includes(word.toLowerCase())) {
      if (word.toLowerCase() === correctAnswer.toLowerCase()) {
        setSolved(true);
        setConfetti(true);
      }
      if (answers.length < 6 && answers.length !== 5) {
        setAnswers([...answers, word]);
        updateSelectedLetterColors();
        setWord(''); 
      } else if (answers.length < 6 && answers.length === 5) {
        setAnswers([...answers, word]);
        updateSelectedLetterColors();
        // If we haven't solved on the last attempt
        if (word !== correctAnswer) {
          // Show a dialog with the correct answer
          setWord(correctAnswer);
          setSolved(true);
          toast('Correct answer: ' + correctAnswer.toUpperCase(),
          {
            icon: '😎',
            duration: 4000,
            style: {
              borderRadius: '10px',
              background: '#525be4',
              color: '#fff',
            },
          });
        }
      }
    }
  };

  // Removes the last letter if there is more than 1 character
  const deleteLetter = () => {
    if (word.length > 0) {
      setWord(word.substring(0, word.length - 1));
    }
  };

  const getMatchType = (letter: string) : string => {
    const index = keys.findIndex(key => key.letter === letter);
    if (index !== -1) {
      return String(keys[index].matchType);
    } else {
      return 'unused';
    }
  };

  /**
   * Process the key event for delete, enter, and all character keys
   * @param event 
   * @returns 
   */
  const onKeyDown = (event: KeyboardEvent) => {
    // Handle delete and enter keys
    const key = event.key;
    if (key === 'Enter') {
      submitWord();
      return;
    }
    if (key === 'Backspace') {
      deleteLetter();
      return;
    }
    // Handle all keys from a to z and A to Z
    if ((event.keyCode >= 97 && event.keyCode <= 122) || (event.keyCode >= 60 && event.keyCode <= 90)) {
      selectLetter(key);
    }
  }

  return (
    <>  
      <Container>
        <KeyRow>
          <Key letter='q' match={getMatchType('q')} action={() => selectLetter('q')}/>
          <Key letter='w' match={getMatchType('w')} action={() => selectLetter('w')}/>
          <Key letter='e' match={getMatchType('e')} action={() => selectLetter('e')}/>
          <Key letter='r' match={getMatchType('r')} action={() => selectLetter('r')}/>
          <Key letter='t' match={getMatchType('t')} action={() => selectLetter('t')}/>
          <Key letter='y' match={getMatchType('y')} action={() => selectLetter('y')}/>
          <Key letter='u' match={getMatchType('u')} action={() => selectLetter('u')}/>
          <Key letter='i' match={getMatchType('i')} action={() => selectLetter('i')}/>
          <Key letter='o' match={getMatchType('o')} action={() => selectLetter('o')}/>
          <Key letter='p' match={getMatchType('p')} action={() => selectLetter('p')}/>
        </KeyRow>
        <KeyRow>
          <Key letter='a' match={getMatchType('a')} action={() => selectLetter('a')}/>
          <Key letter='s' match={getMatchType('s')} action={() => selectLetter('s')}/>
          <Key letter='d' match={getMatchType('d')} action={() => selectLetter('d')}/>
          <Key letter='f' match={getMatchType('f')} action={() => selectLetter('f')}/>
          <Key letter='g' match={getMatchType('g')} action={() => selectLetter('g')}/>
          <Key letter='h' match={getMatchType('h')} action={() => selectLetter('h')}/>
          <Key letter='j' match={getMatchType('j')} action={() => selectLetter('j')}/>
          <Key letter='k' match={getMatchType('k')} action={() => selectLetter('k')}/>
          <Key letter='l' match={getMatchType('l')} action={() => selectLetter('l')}/>
        </KeyRow>
        <KeyRow>
          <Key letter='↵' match={'unused'} action={() => submitWord()}/>
          <Key letter='z' match={getMatchType('z')} action={() => selectLetter('z')}/>
          <Key letter='x' match={getMatchType('x')} action={() => selectLetter('x')}/>
          <Key letter='c' match={getMatchType('c')} action={() => selectLetter('c')}/>
          <Key letter='v' match={getMatchType('v')} action={() => selectLetter('v')}/>
          <Key letter='b' match={getMatchType('b')} action={() => selectLetter('b')}/>
          <Key letter='n' match={getMatchType('n')} action={() => selectLetter('n')}/>
          <Key letter='m' match={getMatchType('m')} action={() => selectLetter('m')}/>
          <Key letter='del' match={'unused'} action={() => deleteLetter()}/>
        </KeyRow>
      </Container>
    </>
  )
}

export default Keyboard;

