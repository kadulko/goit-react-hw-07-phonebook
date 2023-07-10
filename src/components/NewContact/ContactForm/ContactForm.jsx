import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { nanoid } from '@reduxjs/toolkit';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';
import { addContact } from 'redux/contactsSlice';

function ContactForm(props) {
  const { onClose } = props;
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

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
      name: name,
      number: number,
      id: nanoid(),
    };

    if (
      contacts
        .map(({ name }) => name.toLowerCase())
        .indexOf(newContact.name.toLowerCase()) === -1
    ) {
      dispatch(addContact(newContact));
      setName('');
      setNumber('');
      onClose();
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
        <button onClick={onClose} type="button">
          Cancel
        </button>
      </div>
    </form>
  );
}

ContactForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ContactForm;
