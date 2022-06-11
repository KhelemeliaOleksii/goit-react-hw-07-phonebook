import { createReducer } from "@reduxjs/toolkit";
import filterActions from "./filter-actions";

export const filterReducer = createReducer('', {
    [filterActions.filterContacts.toString()]: (_, { payload }) => payload,
})
