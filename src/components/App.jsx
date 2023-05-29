import React, { useState } from 'react';
import ContactForm from './NewContact/ContactForm';
import Contacts from './Contacts/Contacts';

export const App = () => {
  const initialContacts = [
    {
      id: '0.020094273215832237',
      name: 'Donald Trump',
      number: '+1-777-777-777',
    },
    {
      id: '0.020094273215832238',
      name: 'Donald Tusk',
      number: '+48-666-999-999',
    },
    {
      id: '0.020094273215832239',
      name: 'Andrzej Duda',
      number: '+48-999-999-997',
    },
    {
      id: '0.020094273215832240',
      name: 'Mateusz Morawiecki',
      number: '+48-999-999-998',
    },
    {
      id: '0.020094273215832241',
      name: 'Jarosław Kaczyński',
      number: '+48-999-999-999',
    },
    {
      id: '0.020094273215832242',
      name: 'Emanuel Macron',
      number: '+33-000-000-000',
    },
    {
      id: '0.020094273215832243',
      name: 'Olaf Scholz',
      number: '+49-111-111-111',
    },
    {
      id: '0.020094273215832244',
      name: 'Klaudia Jachira',
      number: '+48-123-123-123',
    },
  ];

  const [contacts, setContacts] = useState([...initialContacts]);
  const [filter, setFilter] = useState('');

  let filteredContacts = contacts.filter(contact =>
    contact.name.includes(filter)
  );

  const addContactHandler = contact => {
    setContacts(oldContacts => [contact, ...oldContacts]);
  };

  const deleteContactHandler = contactId => {
    setContacts(oldContacts => [
      ...oldContacts.filter(({ id }) => !(id === contactId)),
    ]);
  };

  const updateFilterHandler = filter => {
    filteredContacts = contacts.filter(contact =>
      contact.name.includes(filter)
    );
    setFilter(filter);
    console.log(filter);
  };

  return (
    <div
      style={
        {
          // fontSize: '30',
          // color: '#010101',
        }
      }
    >
      <div className="phonebook">
        <h4>My Phonebook</h4>
        <ContactForm onAddContact={addContactHandler} />
        <Contacts
          title="Contacts"
          contacts={contacts}
          filter={filter}
          filteredContacts={filteredContacts}
          onAddContact={addContactHandler}
          onDelete={deleteContactHandler}
          onFilterChange={updateFilterHandler}
        />
      </div>
    </div>
  );
};
