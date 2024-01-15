import { useState } from 'react';
import { SectionContainer } from './Section/Section.styled';
import { Section, Filter, Contacts, Phonebook } from 'components';
import { useLocalStorage } from 'hooks/useLocalStorage';

export function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const handleFormSubmit = data => {
    !contacts.find(elem => elem.name.toLowerCase() === data.name.toLowerCase())
      ? setContacts(prevState => [...prevState, data])
      : alert(`${data.name} is already in contacts!`);
  };

  const changeFilter = event => {
    setFilter(event.target.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(elem =>
      elem.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(elem => id !== elem.id));
  };

  const filteredContacts = getFilteredContacts();
  return (
    <div>
      <SectionContainer>
        <Section title="Phonebook">
          <Phonebook onSubmit={handleFormSubmit} />
        </Section>
      </SectionContainer>

      <SectionContainer>
        <Section title="Contacts">
          <Filter onChange={changeFilter} />
          <Contacts contacts={filteredContacts} onClick={deleteContact} />
        </Section>
      </SectionContainer>
    </div>
  );
}
