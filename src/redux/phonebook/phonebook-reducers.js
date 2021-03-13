import { combineReducers } from 'redux'
import { createReducer } from '@reduxjs/toolkit'
import {
    addContactSuccess,
    addContactRequest,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
    fetchContactRequest,
    fetchContactSuccess,
    fetchContactError,
    changeFilter,
} from './phonebook-actions'

const items = createReducer([], {
    [fetchContactSuccess]: (state, { payload }) => payload,
    [addContactSuccess]: (state, { payload }) => [...state, payload],

    [deleteContactSuccess]: (state, { payload }) =>
        state.filter(({ id }) => id !== payload),
})
const filter = createReducer('', {
    [changeFilter]: (state, { payload }) => payload,
})
const loading = createReducer(false, {
    [addContactRequest]: () => true,
    [addContactSuccess]: () => false,
    [addContactError]: () => false,
    [deleteContactRequest]: () => true,
    [deleteContactSuccess]: () => false,
    [deleteContactError]: () => false,
    [fetchContactRequest]: () => true,
    [fetchContactSuccess]: () => false,
    [fetchContactError]: () => false,
})

const error = createReducer(null, {})

export default combineReducers({
    items,
    filter,
    loading,
    error,
})
