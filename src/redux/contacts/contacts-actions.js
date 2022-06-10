import contactsTypes from "./contacts-types";

const addContact = (contact) => ({
    type: contactsTypes.ADD,
    payload: contact,
})

const deleteContact = (contactId) => ({
    type: contactsTypes.DELETE,
    payload: contactId,
})

const contactsActions = {
    addContact,
    deleteContact,
}

export default contactsActions;