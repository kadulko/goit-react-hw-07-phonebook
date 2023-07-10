import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import PropTypes from 'prop-types';
import styles from './ContactListItem.module.css';

function ContactListItem(props) {
  const { id, name, number } = props;
  const dispatch = useDispatch();

  const onClickHandler = event => {
    dispatch(deleteContact(event.target.dataset.id));
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
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};

export default ContactListItem;
