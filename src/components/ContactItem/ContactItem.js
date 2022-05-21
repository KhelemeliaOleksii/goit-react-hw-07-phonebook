import PropTypes from 'prop-types'

const ContactItem = ({ contact, onClickDelete }) => {
    const { id, name, number } = contact;
    return (
        <li className="item"
        >
            <span>{name} : </span>
            <span>{number} </span>
            <button type="button" onClick={() => onClickDelete(id)}> Delete</button>
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
    onClickDelete: PropTypes.func.isRequired,
}

export default ContactItem;
