import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ContactForm from './ContactForm';

import styles from './AddNewContact.module.css';

function AddNewContact(props) {
  const { onAddContact } = props;

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
          onAddContact={addContactDataHandler}
          onCancel={toggleShowContactForm}
        />
      )}
    </div>
  );
}

AddNewContact.propTypes = { onAddContact: PropTypes.func };

export default AddNewContact;
