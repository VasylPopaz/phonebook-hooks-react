import { useState } from 'react';
import { Form, FormInput, FormLabel } from './Phonebook.styled';
import { Button } from 'components/Button.styled';
import { nanoid } from 'nanoid';

export function Phonebook({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    const obj = {
      name: () => setName(value),
      number: () => setNumber(value),
    };
    return obj[name]();
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ id: nanoid(), name, number });
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormLabel>
        Name
        <FormInput
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
      </FormLabel>
      <FormLabel>
        Number
        <FormInput
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          required
        />
      </FormLabel>
      <Button type="submit">Add contact</Button>
    </Form>
  );
}
