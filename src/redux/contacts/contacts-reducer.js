import contactsTypes from "./contacts-types";
import { nanoid } from 'nanoid';
import messenger from "services/messenger";

export const contactReducer = (state = [], { type, payload }) => {
    switch (type) {
        case contactsTypes.ADD:
            const contact = contactCreator(payload);
            if (isContactExist(contact, state)) {
                messenger.warning(`Contact with name ${contact.name} exists!`);
                return state;
            }
            return [contact, ...state];
        case contactsTypes.DELETE:
            return state.filter(({ id }) => id !== payload);
        default:
            return state;
    }
}

function isContactExist(contact, contactList) {
    const result = contactList.find(({ name }) =>
        contact.name.toLowerCase() === name.toLowerCase());
    return !!result;
}

function contactCreator(data) {
    const { name, number } = data;
    const personId = nanoid();
    return {
        "id": personId,
        "name": name,
        "number": number,
    };
}
