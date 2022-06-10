import PropTypes from 'prop-types';

import ContactItem from "components/ContactItem";
import styles from './ContactsList.module.css'
import { connect } from 'react-redux';
import contactsActions from 'redux/contacts/contacts-actions';

const ContactsList = ({ contacts, onClickDelete }) => {
    return (
        <ul className={styles.List}>
            {contacts.map((item) =>
                <ContactItem key={item.id}
                    contact={item} onClickDelete={onClickDelete} />
            )}
        </ul>
    )
};


ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape(
        {
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
    onClickDelete: PropTypes.func.isRequired,
}

//   const filteredArray = contacts.filter((item) => item.name.toLowerCase().includes(filter.toLowerCase()))
//   return filteredArray;
const normilizedComparision = (basicName, testName) =>
    basicName.toLowerCase().includes(testName.toLowerCase());

const configureContactsToShow = (contacts, keyFilter) => {
    if (keyFilter === '') {
        return contacts;
    }
    return contacts.filter(({ name }) => normilizedComparision(name, keyFilter));
}

const mapStateToProps = ({ contacts }) => ({
    contacts: configureContactsToShow(contacts.items, contacts.filter),
})

const mapDispatchToProps = (dispatch) => ({
    onClickDelete: (contactId) => dispatch(contactsActions.deleteContact(contactId)),
})
export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);