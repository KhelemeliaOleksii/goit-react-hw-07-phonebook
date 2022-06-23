import { useState } from 'react';
import { useAddContactsMutation, useGetContactsQuery } from 'redux/contacts/contactsApi';
import styles from './ContactForm.module.css'
import notify from 'services/notify';
import Loader from '../Loader';

const INITIAL_STATE = {
    name: '',
    phoneNumber: '',
}

const ContactForm = () => {
    //locale state
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    //add contact hook
    const [addConact, { isLoading }] = useAddContactsMutation();

    // button submit is disabled (no name OR no phonenumber OR data is loading )
    const isButtonSubmitDisabled = !name || !phoneNumber || isLoading;

    // current contact list 
    const { data: contactList } = useGetContactsQuery();

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
        if (isContactWithNameExist(name, contactList)) {
            notify.warning("Contact exists");
            reset();
            return;
        }
        addConact({ name, number: phoneNumber })
            .then(() => notify.success("Contact is added"))
            .catch((error) => notify.error("Something wrong!", error))
            .finally(reset());
    }

    function reset() {
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
                autoComplete={"false"}
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
            <button type="submit" disabled={isButtonSubmitDisabled}
            >   {isLoading ? <Loader />
                : <span>Add contact</span>
                }
            </button>
        </form>

    )
};

export default ContactForm;

function isContactWithNameExist(contactName, contactList) {
    const result = contactList.find(({ name }) =>
        contactName.toLowerCase() === name.toLowerCase());
    return !!result;
}