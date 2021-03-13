import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import styles from './AuthNav.module.css'

const AuthNav = () => (
    <div className={styles.Container}>
        <NavLink
            to="/register"
            exact
            className={styles.Link}
            activeClassName={styles.LinkActive}
        >
            <h2 className={styles.Registration}>Registration</h2>
        </NavLink>
        <NavLink
            to="/login"
            exact
            className={styles.Link}
            activeClassName={styles.LinkActive}
        >
            <h2>Login</h2>
        </NavLink>
    </div>
)

AuthNav.propTypes = {}

export default AuthNav
