import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import phonebookOperations from '../src/redux/phonebook/phonebook-operations'
import ContactForm from './components/Contactform/ContactForm'
import ContactList from './components/ContactList/ContactList'
import contactSelectors from './redux/phonebook/phonebook-selectors'
import Loader from '../src/components/Loader/Loader'
import Filter from './components/Filter/Filter'
import styles from './App.module.css'
import PropTypes from 'prop-types'
import './App.css'

class App extends Component {
    componentDidMount() {
        this.props.fetchContacts()
    }

    render() {
        return (
            <div className={styles.Container}>
                <CSSTransition
                    in={true}
                    appear={true}
                    timeout={500}
                    classNames={{
                        appear: styles.HeaderFadeAppear,
                        appearActive: styles.HeaderFadeAppearActive,
                    }}
                >
                    <h1>Phonebook</h1>
                </CSSTransition>

                <ContactForm />

                <CSSTransition
                    in={this.props.contacts.length >= 1}
                    timeout={0}
                    unmountOnExit
                >
                    <Filter />
                </CSSTransition>
                {this.props.isLoadingContats && <Loader />}
                <CSSTransition
                    in={this.props.contacts.length > 0}
                    timeout={250}
                    unmountOnExit
                >
                    <ContactList />
                </CSSTransition>
            </div>
        )
    }
}

App.propTypes = {
    contacts: PropTypes.array.isRequired,
    isLoadingContats: PropTypes.bool.isRequired,
    fetchContacts: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    contacts: state.contacts.items,
    isLoadingContats: contactSelectors.getLoading(state),
})

const mapDispatchToProps = (dispatch) => ({
    fetchContacts: () => dispatch(phonebookOperations.fetchContacts()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
