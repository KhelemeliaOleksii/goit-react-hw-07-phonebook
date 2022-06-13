import { useDispatch, useSelector } from 'react-redux';
import ContactItem from "components/ContactItem";
import styles from './ContactsList.module.css'
import contactsActions from 'redux/contacts/contacts-actions';
import selectorConfigureContactsToShow from "redux/contacts/contacts-selectors";

const ContactsList = () => {

    const contacts = useSelector(selectorConfigureContactsToShow);

    const dispatch = useDispatch();
    const onClickDelete = (contactId) => dispatch(contactsActions.deleteContact(contactId));

    return (
        <ul className={styles.List}>
            {contacts.map((item) =>
                <ContactItem key={item.id}
                    contact={item} onClickDelete={onClickDelete} />
            )}
        </ul>
    )
};

export default ContactsList;

