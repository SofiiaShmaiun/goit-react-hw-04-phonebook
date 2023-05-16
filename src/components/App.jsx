import React, { Component } from 'react';
import Form from './Form/Form';
import Contacts from 'components/Contacts/Contacts';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    if (JSON.parse(localStorage.getItem('contact'))) {
      this.setState({
        contacts: JSON.parse(localStorage.getItem('contact')),
      });
    }
  }

  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contact', JSON.stringify(this.state.contacts));
    }
  }

  handleFormSubmit = data => {
    if (this.state.contacts.find(option => option.name === data.name)) {
      alert(`${data.name} is already in contacts`);
    } else {
      const contact = {
        id: nanoid(),
        name: data.name,
        number: data.number,
      };

      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
    }
  };

  changeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(option => option.id !== contactId),
    }));
  };

  render() {
    const normalizedFilter = this.state.filter.toLocaleLowerCase();

    const filteredContacts = this.state.contacts.filter(contact =>
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
        <Form onSubmit={this.handleFormSubmit} />

        <Contacts
          contacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        >
          <Filter
            value={this.state.filter}
            onFilterChange={this.changeFilter}
          />
        </Contacts>
      </div>
    );
  }
}
