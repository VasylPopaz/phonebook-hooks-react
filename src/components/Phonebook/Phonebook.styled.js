import styled from 'styled-components';

export const Form = styled.form`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 18px;
  font-weight: 600;
`;

export const FormInput = styled.input`
  outline: lightblue;
  font-size: 18px;
  padding: 4px 8px;
`;
