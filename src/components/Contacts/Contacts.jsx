import React from 'react';
import PropTypes from 'prop-types';
import ContactList from './ContactList';
import ContactFilter from './ContactFilter';
import styles from './Contacts.module.css';

function Contacts(props) {
  const {
    title,
    contacts,
    filteredContacts,
    filter,
    onFilterChange,
    onDelete,
  } = props;
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
      {!filter && <ContactList contacts={contacts} onDelete={onDelete} />}
      {filter &&
        (filteredContacts.length > 0 ? (
          <ContactList contacts={filteredContacts} onDelete={onDelete} />
        ) : (
          <p className={styles.message}>No matching contacts found</p>
        ))}
    </div>
  );
}

Contacts.propTypes = {
  title: PropTypes.string,
  contacts: PropTypes.array.isRequired,
  filteredContacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contacts;
