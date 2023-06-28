import React, { useState, useEffect } from 'react';
import Contacts from './Contacts/Contacts/Contacts';
import AddNewContact from './NewContact/AddNewContact/AddNewContact';
import ls from 'services/storage';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const addContactHandler = contact => {
    setContacts(oldContacts => [contact, ...oldContacts]);
  };

  const deleteContactHandler = contactId => {
    setContacts(oldContacts => [
      ...oldContacts.filter(({ id }) => !(id === contactId)),
    ]);
  };

  useEffect(() => {
    const savedContacts = ls.load('contacts');
    if (savedContacts) setContacts([...savedContacts]);
  }, []);

  useEffect(() => {
    contacts.length ? ls.save('contacts', contacts) : ls.remove('contacts');
  }, [contacts]);

  return (
    <div>
      <div className="phonebook">
        <h4>My Phonebook</h4>
        <AddNewContact contacts={contacts} onAddContact={addContactHandler} />
        <Contacts
          title="Contacts"
          contacts={contacts}
          filter={filter}
          onAddContact={addContactHandler}
          onDeleteContact={deleteContactHandler}
          onFilterChange={setFilter}
        />
      </div>
    </div>
  );
};
