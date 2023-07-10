import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getContacts, getContactFilter } from 'redux/selectors';
import ls from 'services/storage';
import ContactList from '../ContactList/ContactList';
import ContactFilter from '../ContactFilter/ContactFilter';
import styles from './Contacts.module.css';

function Contacts(props) {
  const { title } = props;

  const contacts = useSelector(getContacts);
  const filter = useSelector(getContactFilter);

  let filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    if (contacts.length > 0) {
      ls.save('contacts', contacts);
    } else ls.remove('contacts');
  });

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
      <ContactFilter />
      {!filter && <ContactList contacts={contacts} />}
      {filter &&
        (filteredContacts.length > 0 ? (
          <ContactList contacts={filteredContacts} />
        ) : (
          <p className={styles.message}>No matching contacts</p>
        ))}
    </div>
  );
}

Contacts.propTypes = {
  title: PropTypes.string,
};

export default Contacts;
