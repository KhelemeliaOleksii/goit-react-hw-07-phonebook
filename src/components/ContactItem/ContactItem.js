import PropTypes from 'prop-types'
import { useDeleteContactsMutation } from 'redux/contacts/contactsApi';
import notify from 'services/notify'

const ContactItem = ({ contact }) => {
    const { id, name, number } = contact;
    const [deleteContact, isLoading] = useDeleteContactsMutation();
    const onClickDeleteContact = (id) => {
        deleteContact(id)
            .then(notify.success("Contact is removed"))
            .catch((error) => notify.error("Something wrong!", error))
    }
    return (
        <li className="item"
        >
            <span>{name} : </span>
            <span>{number} </span>
            <button type="button" onClick={() => onClickDeleteContact(id)}
            >
                {!isLoading ?
                    <span>Deleting...</span>
                    :
                    <span>Delete</span>
                }
            </button>
        </li>
    )
};

ContactItem.propTypes = {
    contacts: PropTypes.shape(
        {
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        }),
}

export default ContactItem;
