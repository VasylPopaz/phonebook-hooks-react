import React, { Component } from 'react';
import { Contacts, Filter, Section, Phonebook } from 'components';
import { SectionContainer } from './Section/Section.styled';
import { loadFromLS, saveToLS } from 'helpers/storage';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = loadFromLS('contacts');
    if (contacts) {
      this.setState({ contacts });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      saveToLS('contacts', this.state.contacts);
    }
  }

  formSubmitHandler = data => {
    const { contacts } = this.state;

    !contacts.find(elem => elem.name.toLowerCase() === data.name.toLowerCase())
      ? this.setState(prevState => ({
          contacts: [...prevState.contacts, data],
        }))
      : alert(`${data.name} is already in contacts!`);
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(elem =>
      elem.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(elem => id !== elem.id),
    }));
  };

  render() {
    const filteredContacts = this.getFilteredContacts();

    return (
      <div>
        <SectionContainer>
          <Section title="Phonebook">
            <Phonebook onSubmit={this.formSubmitHandler} />
          </Section>
        </SectionContainer>

        <SectionContainer>
          <Section title="Contacts">
            <Filter onChange={this.changeFilter} />
            <Contacts
              contacts={filteredContacts}
              onClick={this.deleteContact}
            />
          </Section>
        </SectionContainer>
      </div>
    );
  }
}
