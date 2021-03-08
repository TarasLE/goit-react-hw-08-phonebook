import { createSelector } from '@reduxjs/toolkit'
const getLoading = (state) => state.contacts.loading
const getFilter = (state) => state.contacts.filter
const getContacts = (state) => state.contacts.items

const getfilteredElements = createSelector(
    [getFilter, getContacts],
    (filter, contacts) => {
        const normalizedFilter = filter.toLowerCase()
        return contacts.filter((contact) =>
            contact.name.toLowerCase().includes(normalizedFilter)
        )
    }
)

export default {
    getLoading,
    getFilter,
    getfilteredElements,
    getContacts,
}
