import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import phonebookOperations from '../../redux/phonebook/phonebook-operations'
import ContactForm from '../Contactform/ContactForm'
import ContactList from '../ContactList/ContactList'
import contactSelectors from '../../redux/phonebook/phonebook-selectors'
import Loader from '../Loader/Loader'
import Filter from '../Filter/Filter'
import styles from './Phonebook.module.css'
import PropTypes from 'prop-types'
import './Phonebook.css'

class Phonebook extends Component {
    componentDidMount() {
        this.props.fetchContacts()
    }

    render() {
        return (
            <CSSTransition
                in={true}
                appear={true}
                timeout={500}
                classNames={{
                    appear: styles.HeaderFadeAppear,
                    appearActive: styles.HeaderFadeAppearActive,
                }}
            >
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
            </CSSTransition>
        )
    }
}

Phonebook.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Phonebook)
