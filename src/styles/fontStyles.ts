import { createGlobalStyle } from 'styled-components';

import LobsterRegularTtf from '../assets/fonts/Lobster/Lobster-Regular.ttf';
import LobsterRegularWoff from '../assets/fonts/Lobster/Lobster-Regular.woff';

export const FontStyles = createGlobalStyle`
  @font-face {
    font-family: 'Lobster Regular';
    font-style: normal;
    src: url(${LobsterRegularTtf}) format('truetype'),
         url(${LobsterRegularWoff}) format('woff');   
    font-display: swap;
  }
`;
