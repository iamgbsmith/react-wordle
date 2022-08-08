import Confetti from 'react-confetti'

import { useRecoilState } from 'recoil';
import { confettiAtom } from '../../atoms/confettiAtom';
import { darkModeAtom } from '../../atoms/darkModeAtom';
import { Button, Container, Title } from '../header/styles';
import { ReactComponent as RestartIcon } from '../../assets/icons/restart.svg';

import useResetApplicationState from '../../hooks/useResetApplicationState';
import useWindowSize from '../../hooks/useWindowSize';

import { Size } from '../../types';

const Header = () => {

  const [confetti, setConfetti] = useRecoilState(confettiAtom);
  const [darkMode, setDarkMode] = useRecoilState(darkModeAtom);
  const resetApplicationState = useResetApplicationState();
  const windowSize: Size = useWindowSize();

  const shouldRunConfetti = () => {
    return confetti;
  }

  // Set confetti loop as complete
  const setConfettiComplete = () => {
    return setConfetti(false);  
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <>  
      <Confetti 
        width={windowSize.width}
        height={windowSize.height}
        numberOfPieces={500}
        recycle={false}
        run={shouldRunConfetti()}
        onConfettiComplete={confetti => {
          setConfettiComplete();
          confetti?.reset();
        }}
      />
      <Container>
        <Button onClick={() => resetApplicationState()} disabled={shouldRunConfetti()}>
          {darkMode ?
              <RestartIcon fill='white' width='20' height='20' title='Restart'/> :
              <RestartIcon width='20' height='20' title='Restart'/>}
        </Button>
        <div>
          <Title>Boardle</Title>
        </div>
        <Button onClick={() => toggleDarkMode()}>
          {darkMode ?
            <span aria-label='Dark mode' role='img'>🌒</span> :
            <span aria-label='Light mode' role='img'>☀️</span> }
        </Button>
      </Container>
    </>   
  );
}

export default Header;
