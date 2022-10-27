import React from 'react'
import PropTypes from 'prop-types'
import authSelectors from '../../redux/auth/auth-selectors'
import { connect } from 'react-redux'
import defaultAvatar from '../../img/avatar.svg'
import logoutIcon from '../../img/logout-icon.svg'
import authOperations from '../../redux/auth/auth-operations'
import styles from './UserMenu.module.css'

const UserMenu = ({ avatar,logout, name, onLogout }) => {
    return (
        <div className={styles.Container}>
            <img
                src={avatar}
                alt=""
                width="42"
                height="42"
                className={styles.Avatar}
            />
            <div className={styles.ContainerUserCorner}>
                <h2 className={styles.UserName}>Welcome {name}</h2>
                <button
                    type="button"
                    onClick={onLogout}
                    className={styles.LogOutBtn}
                >
                    <img
                        src={logout}
                        alt=""
                        width="24"
                        height="24"
                        className={styles.Avatar}
                    />
                </button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    name: authSelectors.userName(state),
    avatar: defaultAvatar,
    logout: logoutIcon,
})

const mapDispatchToProps = { onLogout: authOperations.logout }

UserMenu.propTypes = {
    onLogout: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu)
