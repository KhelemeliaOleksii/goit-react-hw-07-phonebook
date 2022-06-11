import filterTypes from "./filter-types";
import { createAction } from "@reduxjs/toolkit";

const filterContacts = createAction(filterTypes.CHANGE_FILTER);

const filterActions = {
    filterContacts,
}

export default filterActions;