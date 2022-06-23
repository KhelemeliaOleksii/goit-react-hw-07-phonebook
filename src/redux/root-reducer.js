import { combineReducers } from 'redux'
import { filterReducer } from './filter/filter-reducer'
import { contactsApi } from 'redux/contacts/contactsApi'

export const rootReducer = combineReducers({
    filter: filterReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
})

