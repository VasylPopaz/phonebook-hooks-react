import styled from 'styled-components';

export const Button = styled.button`
  padding: 12px 8px;
  border-radius: 10px;
  background-color: lightgray;
  color: black;
  font-weight: 600;
  text-transform: capitalize;
  transition: all 350ms ease;

  &:hover,
  &:focus {
    background-color: gray;
    color: white;
  }
`;
