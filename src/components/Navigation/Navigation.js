import React from 'react'
import PropTypes from 'prop-types'
import styles from './Navigation.module.css'
import { NavLink } from 'react-router-dom'

const Navigation = () => (
    <nav>
        <NavLink
            to="/"
            exact
            className={styles.Link}
            activeClassName={styles.LinkActive}
        >
            Главная
        </NavLink>

        <NavLink
            to="/contacts"
            exact
            className={styles.Link}
            activeClassName={styles.LinkActive}
        >
            Заметки
        </NavLink>
    </nav>
)

Navigation.propTypes = {}

export default Navigation
