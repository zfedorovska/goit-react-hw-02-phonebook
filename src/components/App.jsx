import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './PhoneBook/ContactForm';
import Filter from './PhoneBook/Filter';
import ContactList from './PhoneBook/ContactList';
import s from '../components/PhoneBook/PhoneBook.module.css';

export default class App extends Component {
  state = {
    contacts: [ {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }],
    filter: ''
  }

  addContact = data => {
    const {contacts} = this.state
    let isContactNameFound = contacts.find(contact => (contact.name === data.name))
    if (isContactNameFound) {
      alert(`${data.name} is already in contacts`);
    }
    else {
       const contact = {
      id: nanoid(),
      name: data.name,
      number: data.number
    };
    this.setState(({contacts}) => ({
      contacts: [contact, ...contacts]
    }))
    }  
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  }

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  }

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <div className={s.container}> 
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList contacts={visibleContacts} onDeleteContact={this.deleteContact} />
      </div>
    );
  }
}


