import axios from 'axios'
import authActions from './auth-actions'

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com'

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
    },
    unset() {
        axios.defaults.headers.common.Authorization = ''
    },
}

const register = (credentials) => async (dispatch) => {
    dispatch(authActions.registerRequest())

    try {
        const response = await axios.post('/users/signup', credentials)
        token.set(response.data.token)

        dispatch(authActions.registerSuccess(response.data))
    } catch (error) {
        dispatch(authActions.registerError(error.message))
    }
}

const login = (credentials) => async (dispatch) => {
    dispatch(authActions.loginRequest())

    try {
        const response = await axios.post('/users/login', credentials)
        token.set(response.data.token)

        dispatch(authActions.loginSuccess(response.data))
    } catch (error) {
        dispatch(authActions.loginError(error.message))
    }
}

const logout = () => async (dispatch) => {
    dispatch(authActions.logoutRequest())

    try {
        await axios.post('/users/logout')
        token.unset()
        dispatch(authActions.logoutSuccess())
    } catch (error) {
        dispatch(authActions.logoutError(error.message))
    }
}

const getCurrentUser = () => (dispatch, getState) => {}

export default { register, login, logout, getCurrentUser }
