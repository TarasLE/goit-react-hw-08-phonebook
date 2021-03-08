import axios from 'axios'
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
} from './phonebook-actions'

axios.defaults.baseURL = 'http://localhost:4040'

const fetchContacts = () => async (dispatch) => {
    dispatch(fetchContactRequest())
    try {
        const { data } = await axios.get('/contacts')
        dispatch(fetchContactSuccess(data))
    } catch (error) {
        dispatch(fetchContactError(error))
    }
}

const addContact = (contact) => async (dispatch) => {
    dispatch(addContactRequest())

    try {
        const { data } = await axios.post('/contacts', contact)
        dispatch(addContactSuccess(data))
    } catch (error) {
        dispatch(addContactError(error))
    }
}

const deleteContact = (contactId) => async (dispatch) => {
    dispatch(deleteContactRequest())
    try {
        const { data } = await axios.delete(`/contacts/${contactId}`)
        dispatch(deleteContactSuccess(contactId))
    } catch (error) {
        dispatch(deleteContactError(error))
    }
}

export default { addContact, deleteContact, fetchContacts }
