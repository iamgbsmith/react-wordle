import styled from 'styled-components';

export const ButtonWrapper = styled.button<{ width?: string; height?: string; border?: string; cursor?: string }>`
  font-size: 1rem;
  margin: 10px;
  text-align: center;
  width: ${props => props.width};
  height: ${props => props.height};
  cursor: ${props => props.cursor};
  border: ${props => props.border};
  background: none;
`;
