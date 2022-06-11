import { createReducer } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid';
import messenger from "services/messenger";
import contactsActions from "./contacts-actions";

export const contactReducer = createReducer([], {
    [contactsActions.addContact]: (state, { payload }) => addConact(payload, state),
    [contactsActions.deleteContact]: (state, { payload }) => deleteContact(payload, state),
})

/* function addConact
in: - "payload" - contact data
    - "state" - array of contacts
do: - create contact using contact data ("payload")
    - if contact exist
        <> return "state"
    else
        <> add contact to "state"
out:- array of contacts
 */
function addConact(payload, state) {
    const contact = contactCreator(payload);
    if (isContactExist(contact, state)) {
        messenger.warning(`Contact with name ${contact.name} exists!`);
        return state;
    }
    return [contact, ...state];
}
/* 
function deleteContact
in: - "payload" - contact id
    - "state" - array of contacts
do: - filter contacts by id: id !== payload
out:- array of contacts
    */
function deleteContact(payload, state) {
    return state.filter(({ id }) => id !== payload);
}

/* 
function isContactExist
in: - "contact"
    - "contactList"
do: - perform searching "contact" in "contactList"
out: boolean result of searching
*/
function isContactExist(contact, contactList) {
    const result = contactList.find(({ name }) =>
        contact.name.toLowerCase() === name.toLowerCase());
    return !!result;
}

/* 
function contactCreator
in: -"data" of a contact
do: - destruction data
    - create Id
    - create the contact
out:- "contact" object
*/
function contactCreator(data) {
    const { name, number } = data;
    const personId = nanoid();
    return {
        "id": personId,
        "name": name,
        "number": number,
    };
}
