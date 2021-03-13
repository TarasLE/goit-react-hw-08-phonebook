import React from 'react'
import PropTypes from 'prop-types'
import styles from './Navigation.module.css'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import authSelectors from '../../redux/auth/auth-selectors'

const Navigation = ({ isAuthenticated }) => (
    <nav className={styles.Container}>
        <NavLink
            to="/"
            exact
            className={styles.Link}
            activeClassName={styles.LinkActive}
        >
            <h1 className={styles.HeaderTitle}>Home</h1>
        </NavLink>

        {isAuthenticated && (
            <NavLink
                to="/contacts"
                exact
                className={styles.Link}
                activeClassName={styles.LinkActive}
            >
                <h1 className={styles.HeaderTitle}>Contacts</h1>
            </NavLink>
        )}
    </nav>
)

Navigation.propTypes = { isAuthenticated: PropTypes.bool.isRequired }

const mapStateToProps = (state) => ({
    isAuthenticated: authSelectors.getIsAuthenticated(state),
})

export default connect(mapStateToProps, null)(Navigation)
