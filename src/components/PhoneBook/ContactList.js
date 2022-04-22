import React from "react";
import s from './PhoneBook.module.css';
import PropTypes from 'prop-types';

const ContactList = ({contacts, onDeleteContact}) => (
    <ul className={s.contactList}>{contacts.map(({ id, name, number }) => (
        <li key={id}>
            <p className={s.contactItem}>{name}: {number}  <button className={s.removeButton} onClick={() => onDeleteContact(id)}>Remove</button></p>        
        </li>
          ))}
    </ul>
);

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object),
    onDeleteContact: PropTypes.func
};

export default ContactList;