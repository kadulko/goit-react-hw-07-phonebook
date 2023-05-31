import React, { useState } from 'react';
import Contacts from './Contacts/Contacts';
import AddNewContact from './NewContact/AddNewContact';

export const App = () => {
  const DUMMY_CONTACTS = [
    {
      id: '0.020094273215832233',
      name: 'Fernando Santos',
      number: '+351 123 456 789',
    },
    {
      id: '0.020094273215832234',
      name: 'Joe Biden',
      number: '+1 888 888 888',
    },
    {
      id: '0.020094273215832235',
      name: 'Lucy Hot',
      number: '+1 69 69 69 69',
    },
    {
      id: '0.020094273215832236',
      name: 'Vladimir Putin',
      number: '+7 *** *** ***',
    },
    {
      id: '0.020094273215832237',
      name: 'Donald Trump',
      number: '+1 777 777 777',
    },
    {
      id: '0.020094273215832238',
      name: 'Donald Tusk',
      number: '+48 666 999 999',
    },
    {
      id: '0.020094273215832239',
      name: 'Andrzej Duda',
      number: '+48 999 999 997',
    },
    {
      id: '0.020094273215832240',
      name: 'Mateusz Morawiecki',
      number: '+48 999 999 998',
    },
    {
      id: '0.020094273215832241',
      name: 'Jarosław Kaczyński',
      number: '+48 999 999 999',
    },
    {
      id: '0.020094273215832242',
      name: 'Emanuel Macron',
      number: '+33 000 000 000',
    },
    {
      id: '0.020094273215832243',
      name: 'Olaf Scholz',
      number: '+49 111 111 111',
    },
    {
      id: '0.020094273215832244',
      name: 'Klaudia Jachira',
      number: '+48 123 123 123',
    },
  ];

  const [contacts, setContacts] = useState([...DUMMY_CONTACTS]);
  const [filter, setFilter] = useState('');

  const addContactHandler = contact => {
    setContacts(oldContacts => [contact, ...oldContacts]);
  };

  const deleteContactHandler = contactId => {
    setContacts(oldContacts => [
      ...oldContacts.filter(({ id }) => !(id === contactId)),
    ]);
  };

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
