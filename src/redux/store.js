import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { contactReducer } from './contacts/contacts-reducer'
import { filterReducer } from './filter/filter-reducer'

const contactsReducer = combineReducers({
    items: contactReducer,
    filter: filterReducer,
})

const rootReducer = combineReducers({
    contacts: contactsReducer,
})

export const store = createStore(rootReducer, composeWithDevTools())

