import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import phoneBookReducer from '../phonebook/phonebook-reducers'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger'
import authReducer from '../auth/auth-reducers'

const persistConfig = {
    key: 'myRoot',
    storage,
}

const phonebookPersistConfig = {
    key: 'contacts',
    storage,
    blacklist: ['filter'],
}
const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
    logger,
]

const authPersistConfig = { key: 'auth', storage, whitelist: ['token'] }

const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        contacts: phoneBookReducer,
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
})

const persistor = persistStore(store)

export default { store, persistor }
