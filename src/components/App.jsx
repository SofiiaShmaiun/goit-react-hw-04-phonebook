import React, { useState, useEffect } from 'react';
import Form from './Form/Form';
import Contacts from 'components/Contacts/Contacts';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('contact'))) {
      setContacts(JSON.parse(localStorage.getItem('contact')));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contact', JSON.stringify(contacts));
  }, [contacts]);

  const handleFormSubmit = data => {
    if (contacts.find(option => option.name === data.name)) {
      alert(`${data.name} is already in contacts`);
    } else {
      const contact = {
        id: nanoid(),
        name: data.name,
        number: data.number,
      };

      setContacts([contact, ...contacts]);
    }
  };

  const changeFilter = evt => {
    setFilter(evt.currentTarget.value);
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const normalizedFilter = filter.toLocaleLowerCase();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
      }}
    >
      <Form onSubmit={handleFormSubmit} />

      <Contacts contacts={filteredContacts} onDeleteContact={deleteContact}>
        <Filter value={filter} onFilterChange={changeFilter} />
      </Contacts>
    </div>
  );
}