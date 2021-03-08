import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { CSSTransition } from 'react-transition-group'
// import phonebookOperations from '../src/redux/phonebook/phonebook-operations'
// import ContactForm from './components/Contactform/ContactForm'
// import ContactList from './components/ContactList/ContactList'
// import contactSelectors from './redux/phonebook/phonebook-selectors'
// import Loader from '../src/components/Loader/Loader'
// import Filter from './components/Filter/Filter'
import Phonebook from './components/Phonebook/Phonebook'
import Container from './components/Container/Container'
import AppBar from './components/AppBar/AppBar'
import HomePage from './components/HomePage/Homepage'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import styles from './App.module.css'
// import PropTypes from 'prop-types'
import './App.css'
import { Route, Switch } from 'react-router-dom'

const App = () => (
    <Container>
        <AppBar />

        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/contacts" component={Phonebook} />
        </Switch>
    </Container>
)

export default App
