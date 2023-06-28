import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ContactForm from '../ContactForm/ContactForm';

import styles from './AddNewContact.module.css';

function AddNewContact(props) {
  const { contacts, onAddContact } = props;

  const [showContactForm, setShowContactForm] = useState(false);

  const toggleShowContactForm = () => {
    setShowContactForm(oldState => !oldState);
  };

  const addContactDataHandler = enteredContactData => {
    const contactData = {
      ...enteredContactData,
      id: Math.random().toString(),
    };
    onAddContact(contactData);
    toggleShowContactForm();
  };

  return (
    <div className={styles['new-contact']}>
      {!showContactForm && (
        <button onClick={toggleShowContactForm} type="button">
          Add New Contact
        </button>
      )}
      {showContactForm && (
        <ContactForm
          contacts={contacts}
          onAddContact={addContactDataHandler}
          onCancel={toggleShowContactForm}
        />
      )}
    </div>
  );
}

AddNewContact.propTypes = {
  contacts: PropTypes.array.isRequired,
  onAddContact: PropTypes.func,
};

export default AddNewContact;
