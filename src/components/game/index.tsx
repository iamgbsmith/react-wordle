import React from 'react';

import { ThemeProvider } from 'styled-components';
import Header from '../header';
import Wordboard from '../wordboard';
import Keyboard from '../keyboard';
import { GlobalStyles } from '../../styles/globalStyles';
import { lightTheme, darkTheme } from '../../styles/theme';
import { GameWrapper } from './styles';
import { FontStyles } from '../../styles/fontStyles';
import { useRecoilValue } from 'recoil';
import { darkModeAtom } from '../../atoms/darkModeAtom';

const Game:React.FC = () => {  
  const darkMode = useRecoilValue(darkModeAtom);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles theme={darkMode ? darkTheme : lightTheme}/>
      <FontStyles/>
      <GameWrapper>
        <Header/>
        <Wordboard/>
        <Keyboard/>
      </GameWrapper>
    </ThemeProvider>
  );
}

export default Game;
