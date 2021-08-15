import styled from 'styled-components';
import { darken } from 'polished';

export const ButtonWrapper = styled.button`
  padding: 1rem;
  border: none;
  border-radius: 2rem;
  background-color: ${props => props.backgroundColor};
  transition: background-color .2s;
  color: white;
  text-transform: uppercase;
  font-weight: bold;

  &:hover {
    background-color: ${props => darken(0.1, props.backgroundColor)};
  }
`;