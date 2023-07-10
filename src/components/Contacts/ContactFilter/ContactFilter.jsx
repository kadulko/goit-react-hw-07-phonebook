import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import styles from './ContactFilter.module.css';

function ContactFilter() {
  const dispatch = useDispatch();

  const filterChangeHandler = event => {
    console.log(event.target.value);
    dispatch(setFilter(event.target.value));
  };
  return (
    <div className={styles['contact-filter']}>
      <div className={styles['contact-filter__control']}>
        <label htmlFor="contactFilter">Search by name</label>
        <input
          onChange={filterChangeHandler}
          type="search"
          id="name"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </div>
    </div>
  );
}

export default ContactFilter;
