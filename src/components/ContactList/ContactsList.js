import PropTypes from 'prop-types';

import ContactItem from "components/ContactItem";
import styles from './ContactsList.module.css'

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
export default ContactsList;