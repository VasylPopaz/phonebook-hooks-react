import React from 'react';
import { nanoid } from 'nanoid';
import { Button } from 'components/Button.styled';
import { ContactsDescr, ContactsItem, ContactsList } from './Contacts.styled';

export const Contacts = ({ contacts, onClick }) => {
  return (
    <ContactsList>
      {contacts.map(elem => {
        return (
          <ContactsItem key={nanoid()}>
            <ContactsDescr>
              {elem.name}: {elem.number}
            </ContactsDescr>
            <Button type="button" onClick={() => onClick(elem.id)}>
              Delete
            </Button>
          </ContactsItem>
        );
      })}
    </ContactsList>
  );
};
