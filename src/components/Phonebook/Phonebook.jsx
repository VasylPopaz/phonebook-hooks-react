import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form, FormInput, FormLabel } from './Phonebook.styled';
import { Button } from 'components/Button.styled';

export class Phonebook extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit({ id: nanoid(), ...this.state });
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormLabel>
          Name
          <FormInput
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            required
          />
        </FormLabel>
        <FormLabel>
          Number
          <FormInput
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
            required
          />
        </FormLabel>
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}
