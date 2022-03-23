import React from 'react';
import { nanoid } from "nanoid";
import s from './ContactForm.module.css'

class ContactForm  extends React.Component{
    state = {
        name: '',
        number: '',
    }
    
    NameInputId = nanoid();
    NumberInputId = nanoid();

    handleInputChange = (event) =>{
        const {name, number, value } = event.currentTarget;
        this.setState({[name]: value,[number]: value})

    }
    
    handleSubmit = (e) => {
        e.preventDefault();

        this.props.onSubmit(this.state)

        this.reset()
    }

    reset = () => {
        this.setState({ name: '', number: '' });
    };

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor={this.NameInputId}> Name
                    <input className={s.contactsItem}
                        type="text"
                        value={this.state.name}
                        name='name'
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        onChange={this.handleInputChange}
                        id={this.NameInputId}
                    />
                </label>
                <label  htmlFor={this.NumberInputId}>Number 
                    <input className={s.contactsItem}
                        type="tel"
                        value={this.state.number}
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        onChange={this.handleInputChange}
                        id={this.NumberInputId}
                    />
                </label>
                <button type="submit">Add contact</button>
            </form>
        )
    }
}

export default ContactForm ;