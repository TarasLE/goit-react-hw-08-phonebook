import axios from 'axios'
import authActions from './auth-actions'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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
        toast.error('This user is already registered', {
            position: 'top-center',
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
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
        toast.error(
            'Login data is incorrect. Please check data and try again',
            {
                position: 'top-center',
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            }
        )
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

const getCurrentUser = () => async (dispatch, getState) => {
    const {
        auth: { token: persistedToken },
    } = getState()
    if (!persistedToken) {
        return
    }
    token.set(persistedToken)
    dispatch(authActions.getCurrentUserRequest())

    try {
        const response = await axios.get('/users/current')
        dispatch(authActions.getCurrentUserSuccess(response.data))
    } catch (error) {
        dispatch(authActions.getCurrentUserError(error.message))
    }
}

export default { register, login, logout, getCurrentUser }
