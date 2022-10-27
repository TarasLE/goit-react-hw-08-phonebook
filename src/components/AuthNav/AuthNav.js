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
            <h3 className={styles.Registration}>Registration</h3>
        </NavLink>
        <NavLink
            to="/login"
            exact
            className={styles.Link}
            activeClassName={styles.LinkActive}
        >
            <h3>Login</h3>
        </NavLink>
    </div>
)

AuthNav.propTypes = {}

export default AuthNav
