import React from 'react';
import PropTypes from 'prop-types';
import ContactList from './ContactList';
import ContactFilter from './ContactFilter';
import styles from './Contacts.module.css';

function Contacts(props) {
  const { title, contacts, filter, onFilterChange, onDeleteContact } = props;

  let filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div className={styles.contacts}>
      <h4>
        {title}{' '}
        <span className={styles.counter}>Total: {contacts.length} </span>{' '}
        {filter && (
          <span className={styles.counter}>
            | Found: {filteredContacts.length}
          </span>
        )}
      </h4>
      <ContactFilter onFilterChange={onFilterChange} />
      {!filter && (
        <ContactList contacts={contacts} onDeleteContact={onDeleteContact} />
      )}
      {filter &&
        (filteredContacts.length > 0 ? (
          <ContactList
            contacts={filteredContacts}
            onDeleteContact={onDeleteContact}
          />
        ) : (
          <p className={styles.message}>No matching contacts</p>
        ))}
    </div>
  );
}

Contacts.propTypes = {
  title: PropTypes.string,
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contacts;
