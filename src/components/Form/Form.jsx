import React, { Component } from 'react';
import css from './Form.module.css';

export default class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <div className={css.formSection}>
        <h1 className={css.formTitle}>Phonebook</h1>{' '}
        <form onSubmit={this.handleSubmit} className={css.inputForm}>
          <label className={css.inputNameLabel}>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              placeholder="Enter contact"
              onChange={this.handleChange}
              value={this.state.name}
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
              onChange={this.handleChange}
              value={this.state.number}
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
}
