import React from 'react';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className="contact-list">
      {contacts.map(contact => (
        <li key={contact.id} className="contact-item">
          <span>{contact.name} - {contact.number}</span>
          <button onClick={() => onDeleteContact(contact.id)} className="delete-btn">Delete</button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;