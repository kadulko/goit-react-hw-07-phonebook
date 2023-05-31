import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

function ContactForm(props) {
  const { contacts, onAddContact, onCancel } = props;

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onNameChange = event => {
    setName(event.target.value);
  };
  const onNumberChange = event => {
    setNumber(event.target.value);
  };

  const onSubmitHandler = event => {
    event.preventDefault();
    const newContact = {
      id: Math.random().toString(),
      name: name,
      number: number,
    };

    if (
      contacts
        .map(({ name }) => name.toLowerCase())
        .indexOf(newContact.name.toLowerCase()) === -1
    ) {
      onAddContact(newContact);
      setName('');
      setNumber('');
    } else {
      alert('Contact already exists!');
    }
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={styles['contact-form__controls']}>
        <div className={styles['contact-form__control']}>
          <label htmlFor="name">Name</label>
          <input
            onChange={onNameChange}
            type="text"
            id="name"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </div>
        <div className={styles['contact-form__control']}>
          <label htmlFor="name">Number</label>
          <input
            onChange={onNumberChange}
            type="tel"
            id="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </div>
      </div>
      <div className={styles['contact-form__actions']}>
        <button type="submit">Add</button>
        <button onClick={onCancel} type="button">
          Cancel
        </button>
      </div>
    </form>
  );
}

ContactForm.propTypes = {
  contacts: PropTypes.array.isRequired,
  onAddContact: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default ContactForm;
