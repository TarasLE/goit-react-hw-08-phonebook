import React from 'react'
import PropTypes from 'prop-types'
import styles from './Navigation.module.css'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import authSelectors from '../../redux/auth/auth-selectors'

const Navigation = ({ isAuthenticated }) => (
    <nav>
        <NavLink
            to="/"
            exact
            className={styles.Link}
            activeClassName={styles.LinkActive}
        >
            Home
        </NavLink>

        {isAuthenticated && (
            <NavLink
                to="/contacts"
                exact
                className={styles.Link}
                activeClassName={styles.LinkActive}
            >
                Contacts
            </NavLink>
        )}
    </nav>
)

Navigation.propTypes = { isAuthenticated: PropTypes.bool.isRequired }

const mapStateToProps = (state) => ({
    isAuthenticated: authSelectors.getIsAuthenticated(state),
})

export default connect(mapStateToProps, null)(Navigation)
