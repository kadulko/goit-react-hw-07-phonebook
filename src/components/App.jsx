import Contacts from './Contacts/Contacts/Contacts';
import AddNewContact from './NewContact/AddNewContact/AddNewContact';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <div className="phonebook">
        <h4>My Phonebook</h4>
        <AddNewContact />
        <Contacts title="Contacts" />
      </div>
    </div>
  );
};
