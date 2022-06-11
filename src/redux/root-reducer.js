import { combineReducers } from 'redux'
import { contactReducer } from './contacts/contacts-reducer'
import { filterReducer } from './filter/filter-reducer'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const contactsReducer = combineReducers({
    items: contactReducer,
    filter: filterReducer,
})

const contactPersistConfig = {
    key: 'contacts',
    storage,
    blacklist: ['filter']
}

export const rootReducer = combineReducers({
    contacts: persistReducer(contactPersistConfig, contactsReducer),
})

