import { combineReducers } from 'redux'
import { createReducer } from '@reduxjs/toolkit'
import authActions from './auth-actions'

const initialUserState = { name: null, email: null }

const user = createReducer(initialUserState, {
    [authActions.registerSuccess]: (_, { payload }) => payload.user,
    [authActions.loginSuccess]: (_, { payload }) => payload.user,
    [authActions.logoutSuccess]: () => initialUserState,
})
const token = createReducer(null, {
    [authActions.registerSuccess]: (_, { payload }) => payload.token,
    [authActions.loginSuccess]: (_, { payload }) => payload.token,
    [authActions.logoutSuccess]: (_, { payload }) => null,
})
const error = createReducer(null, {
    [authActions.registerError]: (_, { payload }) => payload,
    [authActions.loginError]: (_, { payload }) => payload,
    [authActions.logoutError]: (_, { payload }) => payload,
})

export default combineReducers({
    user,
    token,
    error,
})
