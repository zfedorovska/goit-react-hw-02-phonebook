import React from 'react';
import { nanoid } from 'nanoid'
import s from './PhoneBook.module.css';

class ContactForm extends React.Component {

    state = {
        contacts: [],
        name: '',
        number: ''
    }

    nameInputId = nanoid();
    phoneInputId = nanoid();

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    }

    handleChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({
            [name]: value
        });
    }

    reset = () => {
        this.setState({ name: '', number: '' });
    };

    render() {
        return (
            <div>
                <form className={s.contactForm} onSubmit={this.handleSubmit}>
                    <label htmlFor={this.nameInputId} className={s.label}>Name</label>
                     <input
                            type="text"
                            name="name"
                        id={this.nameInputId}
                        className={s.input}
                            value={this.state.name}
                            onChange={this.handleChange}
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                        />
                    <label htmlFor={this.phoneInputId} className={s.label}>Phone</label>
                     <input
                            type="tel"
                            name="number"
                        id={this.phoneInputId}
                        className={s.input}
                            value={this.state.number}
                            onChange={this.handleChange}
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                            />
                    <button type="submit" className={s.submitButton}>Add contact</button>
                </form>
            </div>
        )
    }
}

export default ContactForm;