import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid;
  border-bottom-color: lightgray;
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.text};
  font-family: 'Lobster Regular';
  font-size: 36px;
  letter-spacing: 0.1rem;
  font-weight: 900;
`;

export const Button = styled.div<{ disabled?: boolean }>`
  padding: 10px;
  font-size: 1rem;
  cursor: pointer;
  pointer-events: ${props => (props.disabled ? 'none' : 'all')};
`;
