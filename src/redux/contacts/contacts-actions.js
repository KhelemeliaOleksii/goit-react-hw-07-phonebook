import contactsTypes from "./contacts-types";
import { createAction } from "@reduxjs/toolkit";

const addContact = createAction(contactsTypes.ADD);

const deleteContact = createAction(contactsTypes.DELETE);

const contactsActions = {
    addContact,
    deleteContact,
}

export default contactsActions;