import React, {useState,useEffect} from 'react';
import { nanoid } from "nanoid";
import s from './App.module.css'
import ContactForm  from 'components/ContactForm/ContactForm ';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter'


export default function App(){
    const [contacts, setContact] = useState(() => {
        return JSON.parse(window.localStorage.getItem('contacts')) ?? []
      });
    const [filter, setFilter] = useState('')

    useEffect(() => {
        window.localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);

    const saveContact = ({ name, number }) => {
        const contact = {
          id: nanoid(),
          name,
          number,
        };
        const normalizedName = name.toLowerCase();

        if (contacts.find((contact) => contact.name.toLowerCase() === normalizedName)) {
            alert(`${name} is already in contacts list`);
            return;
        } 
        else if (contacts.find((contact) => contact.number === number)) {
            alert(`${number} is already in contacts list`);
            return;
        } 
        else {
            setContact(prevContacts => ([...prevContacts, contact]));
        }

    }

    const deleteContact = (IdContact) => {
        setContact(prevState => (prevState.filter(contact => contact.id !== IdContact)
        ))
    }

    const getVisibleContacts = () => {
        const normalizedFilter = filter.toLocaleLowerCase().trim();

        return contacts.filter(contact =>
            contact.name.toLocaleLowerCase().includes(normalizedFilter));

    }
    const changeFilter = e => {
        setFilter(e.currentTarget.value)
    }
    return (
        <div className={s.container}>
            <h1>Phonebook</h1>
            <ContactForm onSubmit={saveContact} />
            <h2>Contacts</h2>
            <Filter value={filter} onChange={changeFilter}/>
            <ContactList contacts={getVisibleContacts()} onDeleteContact={deleteContact}>
            </ContactList>
        </div>  )

}



// class App extends React.Component{
//     state = {
//         contacts: [    
//             {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//             {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//             {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//             {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
//         ],
//         filter: ''
//     }

//     saveContact = data => {
//         const {name,number} = data
//         const contact = {
//             id: nanoid(),
//             name,
//             number,
//         };
//         const { contacts } = this.state;
//         const normalizedName = name.toLowerCase();
//         if (contacts.find((contact) => contact.name.toLowerCase() === normalizedName)) {
//         alert(`${name} is already in contacts list`);
//         return;
//         } else if (contacts.find((contact) => contact.number === number)) {
//         alert(`${number} is already in contacts list`);
//         return;
//         } else {
//         this.setState(({ contacts }) => {
//         return {
//           contacts: [...contacts, contact],
//         };
//         });
//     }}

//     deleteContact = (IdContact) => {
//         this.setState(prevState => ({
//             contacts: prevState.contacts.filter(contact => contact.id !== IdContact)
//         }))
//     }

//     changeFilter = e => {
//         this.setState({filter: e.currentTarget.value})
//     }

//     getVisibleContacts = () => {
//         const {contacts, filter} = this.state;
//         const normalizedFilter = filter.toLocaleLowerCase();

//         return contacts.filter(contact =>
//             contact.name.toLocaleLowerCase().includes(normalizedFilter));

//     }

//     componentDidMount(){
//         const contacts = localStorage.getItem('contacts');
//         const parsedContacts = JSON.parse(contacts);
//         if(parsedContacts){
//             this.setState({contacts: parsedContacts})
//         }
    

//     }

//     componentDidUpdate(prevProps, prevState){
//         if(this.state.contacts !== prevState.contacts){
//             localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
//         }
//     }

//     render(){
//         const {filter} = this.state;
//         const visibleContacts = this.getVisibleContacts();
//         return (
//             <div className={s.container}>
//                 <h1>Phonebook</h1>
//                 <ContactForm onSubmit={this.saveContact} />
//                 <h2>Contacts</h2>
//                 <Filter value={filter} onChange={this.changeFilter}/>
//                 <ContactList contacts={visibleContacts} onDeleteContact={this.deleteContact}>
//                 </ContactList>
//             </div>
//         )
//     }
// }

// export default App;