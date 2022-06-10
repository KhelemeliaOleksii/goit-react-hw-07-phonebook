import filterTypes from "./filter-types";

const filterContacts = (value) => ({
    type: filterTypes.CHANGE_FILTER,
    payload: value,
});

export default filterContacts;