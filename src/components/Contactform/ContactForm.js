import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import phonebookOperations from '../../redux/phonebook/phonebook-operations'
import styles from './ContactForm.module.css'
import shortid from 'shortid'
import './ContactForm.css'
import Notification from '../Notification/Notification'
import PropTypes from 'prop-types'

class ContactForm extends Component {
    state = {
        name: '',
        number: '',
        alert: false,
    }

    handleContact = (event) => {
        const { name, value } = event.currentTarget
        this.setState({
            [name]: value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if (this.checkContact()) {
            return
        } else {
            const contact = {
                id: shortid.generate(),
                name: this.state.name,
                number: this.state.number,
            }
            this.props.addContact(contact)
            this.clearInput()
        }
    }
    checkContact = () => {
        if (
            this.props.contacts.find((contact) => {
                return (
                    contact.name.toLowerCase() ===
                        this.state.name.toLowerCase() &&
                    contact.number.toLowerCase() ===
                        this.state.number.toLowerCase()
                )
            }) ||
            this.state.name == '' ||
            this.state.number == ''
        ) {
            this.setState({ alert: true })
            this.alertState()
            return true
        }
    }

    clearInput = () => {
        this.setState({ name: '', number: '' })
    }

    alertState = () => {
        setTimeout(() => {
            this.setState({ alert: false })
        }, 2000)
    }

    render() {
        return (
            <div className={styles.Container}>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name <br />
                        <input
                            type="text"
                            value={this.state.name}
                            name="name"
                            onChange={this.handleContact}
                            className={styles.FormInput}
                        />
                    </label>
                    <br />
                    <label>
                        Number <br />
                        <input
                            type="text"
                            value={this.state.number}
                            name="number"
                            onChange={this.handleContact}
                            className={styles.FormInput}
                        />
                    </label>
                    <button type="submit" className={styles.FormBtn}>
                        Add contact
                    </button>
                </form>

                <CSSTransition
                    in={this.state.alert}
                    timeout={250}
                    classNames={{
                        enter: styles.ContactFormNotificationFadeEnter,
                        enterActive:
                            styles.ContactFormNotificationFadeEnterActive,
                        exit: styles.ContactFormNotificationFadeExit,
                        exitActive:
                            styles.ContactFormNotificationFadeExitActive,
                    }}
                    unmountOnExit
                >
                    <Notification
                        sameContact={this.state.name}
                        currentNumber={this.state.number}
                    ></Notification>
                </CSSTransition>
            </div>
        )
    }
}

ContactForm.propTypes = {
    contacts: PropTypes.array.isRequired,
    addContact: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    contacts: state.contacts.items,
})
const mapDispatchToProps = (dispatch) => ({
    addContact: (contact) => dispatch(phonebookOperations.addContact(contact)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm)
