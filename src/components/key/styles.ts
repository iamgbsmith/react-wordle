import styled, { css } from 'styled-components';

export const KeyWrapper = styled.button<{ match?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  user-select: none;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  margin: 0.2rem;
  min-width: 2rem;
  height: 55px;
  background: #d3d6da;
  color: black;
  border-style: none;
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
    props.match === 'unused' &&
    css`
      border: none;
      background-color: lightgrey;
      color: black;
    `} /* @media (max-width: 600px) {
    mid-width: 1em;
  } */
`;
