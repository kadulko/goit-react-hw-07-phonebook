import Contacts from './Contacts/Contacts/Contacts';
import AddNewContact from './NewContact/AddNewContact/AddNewContact';

export const App = () => {
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
