import React from 'react';
import ContactListItem from '../ContactListItem/ContactListItem';
import styles from './ContactList.module.css';

function ContactList(props) {
  const { contacts } = props;

  return (
    <ul className={styles['contact-list']}>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
}

export default ContactList;
