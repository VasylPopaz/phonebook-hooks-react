import { FormInput, FormLabel } from 'components/Phonebook/Phonebook.styled';
import React from 'react';

export const Filter = ({ onChange }) => {
  return (
    <FormLabel>
      Find contacts by name
      <FormInput type="text" onChange={onChange} />
    </FormLabel>
  );
};
