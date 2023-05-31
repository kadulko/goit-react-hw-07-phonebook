import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactListItem.module.css';

function ContactListItem(props) {
  const { id, name, number, onDeleteContact } = props;

  const onClickHandler = event => {
    onDeleteContact(event.target.dataset.id);
  };

  return (
    <li key={id} className={styles['contact-list__item']}>
      <div className={styles['contact-list__data']}>
        <span> {name}</span>
        <span>{number}</span>
      </div>{' '}
      <button onClick={onClickHandler} type="button" data-id={id}>
        Delete
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  onDelete: PropTypes.func,
};

export default ContactListItem;
