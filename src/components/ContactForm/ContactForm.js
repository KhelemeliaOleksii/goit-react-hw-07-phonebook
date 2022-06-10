import { useState } from 'react';
import PropTypes from 'prop-types'

import styles from './ContactForm.module.css'
import { connect } from 'react-redux';
import contactsActions from 'redux/contacts/contacts-actions';

const INITIAL_STATE = {
    name: '',
    phoneNumber: '',
}

const ContactForm = ({ onSubmitForm }) => {

    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const onChangeInput = ({ target }) => {
        const { name, value } = target;
        if (name === 'name') {
            setName(value.toString());
            return;
        }
        if (name === "phoneNumber") {
            setPhoneNumber(value.toString());
            return;
        }
    }
    const onSubmit = (event) => {
        event.preventDefault();
        onSubmitForm({ name: name, number: phoneNumber });
        reset();
    }
    const reset = () => {
        setName(INITIAL_STATE.name);
        setPhoneNumber(INITIAL_STATE.phoneNumber);
    }
    return (
        <form className={styles.ContactForm} onSubmit={onSubmit}>
            <label htmlFor="inputNameId">Name</label>
            <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                onChange={onChangeInput}
                id="inputNameId"
                value={name}
                required
            />
            <label htmlFor="inputPhoneId">Phone</label>
            <input
                type="tel"
                name="phoneNumber"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                onChange={onChangeInput}
                id="inputPhoneId"
                value={phoneNumber}
                required
            />
            <button type="submit"><span>Add contact</span></button>
        </form>
    )
};

ContactForm.propTypes = {
    onSubmitForm: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => ({
    onSubmitForm: (data) => dispatch(contactsActions.addContact(data)),
});

export default connect(null, mapDispatchToProps)(ContactForm);