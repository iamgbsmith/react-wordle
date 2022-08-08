import styled, { css, keyframes } from 'styled-components';

// Create the keyframes
const scale = keyframes`
  from {
    transform: scaleY(-1);
  }
  to {
    transform: scaleY(1);
  }
`;

const popIn = keyframes`
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  40% {
    transform: scale(1.1);
    opacity: 1;
  }
`;

export const LetterWrapper = styled.div<{ match?: string }>`
  display: flex;
  animation: ${scale} 0.5s ease-in;
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
  color: black;
  border: 2px solid #d8d8d8;
  text-transform: uppercase;
  font-size: 32px;
  margin: 3px;
  padding: 7px;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  font-weight: 700;
  ${props =>
    props.match === 'exact' &&
    css`
      border: none;
      background-color: #6aaa64;
      color: white;
    `}
  ${props =>
    props.match === 'close' &&
    css`
      border: none;
      background-color: #c9b458;
      color: white;
    `}
  ${props =>
    props.match === 'none' &&
    css`
      border: none;
      background-color: darkgrey;
      color: white;
    `}
  ${props =>
    props.match === 'placeholder' &&
    css`
      animation: ${popIn} 0.5s ease-in;
      background-color: ${({ theme }) => theme.body};
      color: ${({ theme }) => theme.text};
    `}
`;
