import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

function ContactForm(props) {
  const { onAddContact } = props;

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
    console.log(newContact);
    onAddContact(newContact);
    setName('');
    setNumber('');
  };

  return (
    <form className={styles['contact-form']} onSubmit={onSubmitHandler}>
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
      <button type="submit">Add New Contact</button>
    </form>
  );
}

ContactForm.propTypes = { onAddContact: PropTypes.func.isRequired };

export default ContactForm;
