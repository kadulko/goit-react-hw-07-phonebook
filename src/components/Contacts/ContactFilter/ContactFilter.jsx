import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactFilter.module.css';

function ContactFilter(props) {
  const { onFilterChange } = props;

  const filterChangeHandler = event => {
    onFilterChange(event.target.value);
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

ContactFilter.propTypes = { onFilterChange: PropTypes.func };

export default ContactFilter;
