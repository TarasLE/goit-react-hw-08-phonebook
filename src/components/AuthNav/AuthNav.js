import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import styles from './AuthNav.module.css'

const AuthNav = () => (
    <div>
        <NavLink
            to="/register"
            exact
            className={styles.Link}
            activeClassName={styles.LinkActive}
        >
            Registration
        </NavLink>
        <NavLink
            to="/login"
            exact
            className={styles.Link}
            activeClassName={styles.LinkActive}
        >
            Login
        </NavLink>
    </div>
)

AuthNav.propTypes = {}

export default AuthNav
