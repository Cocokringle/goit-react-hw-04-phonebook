import React from 'react';
import ContactListItem from 'components/ContactList/ContactListItem/ContactListItem';
import PropTypes from 'prop-types';

const ContactList = ({contacts, onDeleteContact}) => {
   return (
    <ul>{contacts.map((contact) => (<ContactListItem  key={contact.id} contact={contact} onDeleteContact={onDeleteContact}/>))}
    </ul>
   )
 
}

ContactList.propTypes = {
   onDeleteContact: PropTypes.func.isRequired,
   contacts: PropTypes.array.isRequired
}

export default ContactList;