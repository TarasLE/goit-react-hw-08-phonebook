import React from 'react'
import PropTypes from 'prop-types'
import Navigation from '../Navigation/Navigation'
import UserMenu from '../UserMenu/UserMenu'
import AuthNav from '../AuthNav/AuthNav'
import styles from './AppBar.module.css'

const AppBar = ({ isAuthenticated }) => (
    <header>
        <Navigation />
        {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
)

export default AppBar
