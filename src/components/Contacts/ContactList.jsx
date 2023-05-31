import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem';
import styles from './ContactList.module.css';

function ContactList(props) {
  const { contacts, onDeleteContact } = props;
  return (
    <ul className={styles['contact-list']}>
      {' '}
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDeleteContacts: PropTypes.func,
};

export default ContactList;
