import React from 'react';
import PropTypes from 'prop-types';
import styles from './Contact.module.css';

const Contact = ({ contact, deleteContact }) => {
  const { id, name, number } = contact;

  return (
    <li className={styles.contact}>
      <span>{name}:</span>
      <span>{number}</span>
      <button onClick={() => deleteContact(id)}>Delete</button>
    </li>
  );
};

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default Contact;
