import React, { useState } from 'react';
import ContactForm from '../ContactForm/ContactForm';

import styles from './AddNewContact.module.css';

function AddNewContact() {
  const [showContactForm, setShowContactForm] = useState(false);

  const toggleShowContactForm = () => {
    setShowContactForm(oldState => !oldState);
  };

  return (
    <div className={styles['new-contact']}>
      {!showContactForm && (
        <button onClick={toggleShowContactForm} type="button">
          Add New Contact
        </button>
      )}
      {showContactForm && <ContactForm onClose={toggleShowContactForm} />}
    </div>
  );
}

export default AddNewContact;
