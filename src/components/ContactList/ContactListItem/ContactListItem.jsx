import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css'

const ContactListItem = ({contact, onDeleteContact}) => {
    const {number, id, name} = contact;
    return (
     <li className={s.contact} key={id}>
         <p className={s.contact_name}>{name}</p>
          <a className={s.contact_number} href="tel:{number}">{number}</a>
          <button className={s.contact_button} type='button' onClick={() => onDeleteContact(id)}>Delete</button>
     </li>
    )
 
 }
 
 ContactListItem.propTypes = {
    contact: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
    onDelete: PropTypes.func,
  };
 
 export default ContactListItem;