import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import phonebookOperations from '../../redux/phonebook/phonebook-operations'
import { changeFilter } from '../../redux/phonebook/phonebook-actions'
import phonebookSelectors from '../../redux/phonebook/phonebook-selectors'
import PropTypes from 'prop-types'
import styles from './ContactList.module.css'
import './ContactList.css'

class ContactList extends Component {
    render() {
        const {
            filteredContacts,
            contacts,
            deleteContact,
            resetFilter,
        } = this.props
        return (
            <div className={styles.Container}>
                <TransitionGroup
                    component="ul"
                    classnames={styles.ListContainer}
                >
                    {filteredContacts.map((contact) => (
                        <CSSTransition
                            timeout={750}
                            classNames={{
                                enter: styles.ContactListItemFadeEnter,
                                enterActive:
                                    styles.ContactListItemFadeEnterActive,
                                exit: styles.ContactListItemFadeExit,
                                exitActive:
                                    styles.ContactListItemFadeExitActive,
                            }}
                            key={contact.id}
                        >
                            <li className={styles.Contact}>
                                <span className={styles.ContactInfo}>
                                    {contact.name} : {contact.number}
                                </span>
                                <button
                                    type="button"
                                    onClick={() => {
                                        deleteContact(contact.id)
                                        if (contacts.length == 2) {
                                            resetFilter()
                                        }
                                    }}
                                    className={styles.DeleteBtn}
                                >
                                    Delete
                                </button>
                            </li>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </div>
        )
    }
}

ContactList.propTypes = {
    filteredContacts: PropTypes.array.isRequired,
    contacts: PropTypes.array.isRequired,
    deleteContact: PropTypes.func.isRequired,
    resetFilter: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    filteredContacts: phonebookSelectors.getfilteredElements(state),
    contacts: phonebookSelectors.getContacts(state),
})

const mapDispatchToProps = (dispatch) => ({
    deleteContact: (id) => {
        dispatch(phonebookOperations.deleteContact(id))
    },
    resetFilter: () => {
        dispatch(changeFilter(''))
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactList)
