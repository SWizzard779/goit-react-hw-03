import React from 'react';
import PropTypes from 'prop-types';
import styles from './Contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser, faPhone} from '@fortawesome/free-solid-svg-icons'

const Contact = ({ contact }) => {
  return (
    <li className={styles.contact}>
      <div>
        <div>
          <FontAwesomeIcon icon={faUser} className={styles.icon} />
          <p>{contact.name}</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faPhone} className={styles.icon} />
          <p>{contact.number}</p>
        </div>
      </div>
      
      <button>Delete</button>
    </li>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

export default Contact;