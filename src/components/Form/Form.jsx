import React, { useState } from 'react';
import css from './Form.module.css';
import PropTypes from 'prop-types';

export default function Form({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = evt => {
    if (evt.currentTarget.name === 'name') setName(evt.currentTarget.value);
    else if (evt.currentTarget.name === 'number')
      setNumber(evt.currentTarget.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit({ name, number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <div className={css.formSection}>
      <h1 className={css.formTitle}>Phonebook</h1>{' '}
      <form onSubmit={handleSubmit} className={css.inputForm}>
        <label className={css.inputNameLabel}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Enter contact"
            onChange={handleChange}
            value={name}
            className={css.inputName}
          />
        </label>
        <label className={css.inputNumberLabel}>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="Enter number"
            onChange={handleChange}
            value={number}
            className={css.inputNumber}
          />
        </label>
        <button type="submit" className={css.submitFormButton}>
          Add contact
        </button>
      </form>
    </div>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
