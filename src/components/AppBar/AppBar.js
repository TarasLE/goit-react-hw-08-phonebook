import React from 'react'
import PropTypes from 'prop-types'
import Navigation from '../Navigation/Navigation'
import UserMenu from '../UserMenu/UserMenu'
import AuthNav from '../AuthNav/AuthNav'
import styles from './AppBar.module.css'
import { connect } from 'react-redux'
import authSelectors from '../../redux/auth/auth-selectors'
import BckgroundImage from '../../img/background.jpg'

const AppBar = ({ isAuthenticated }) => (
    <div className={styles.Container}>
        <header className={styles.Header}>
            <Navigation />
            {isAuthenticated ? <UserMenu /> : <AuthNav />}
        </header>
    </div>
)

AppBar.propTypes = { isAuthenticated: PropTypes.bool.isRequired }

const mapStateToProps = (state) => ({
    isAuthenticated: authSelectors.getIsAuthenticated(state),
})

export default connect(mapStateToProps, null)(AppBar)
