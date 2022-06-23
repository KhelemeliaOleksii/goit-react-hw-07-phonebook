// import logger from 'redux-logger'
import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './root-reducer'
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import { contactsApi } from 'redux/contacts/contactsApi'


export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
        const ignoreActionsReduxToolKit = getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        })
        return [...ignoreActionsReduxToolKit, contactsApi.middleware]
    },
    devTools: process.env.NODE_ENV !== 'production',
})
