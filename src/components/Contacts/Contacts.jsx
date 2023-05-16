import React from 'react';
import PropTypes from 'prop-types';
import css from './Contacts.module.css';

const Contacts = ({ contacts, children, onDeleteContact }) => (
  <div className={css.contactsSection}>
    <h2 className={css.contactsTitle}>Contacts</h2>
    {children}
    <ul className={css.contactsList}>
      {contacts.map(({ name, number, id }) => (
        <li key={id} className={css.contactsListItem}>
          {'  '}
          {name}
          {' — '}
          {number}
          <button
            type="button"
            onClick={() => {
              onDeleteContact(id);
            }}
            className={css.deleteContactButton}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  </div>
);

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contacts;
