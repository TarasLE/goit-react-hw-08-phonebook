import React from 'react'
import PropTypes from 'prop-types'
import authSelectors from '../../redux/auth/auth-selectors'
import { connect } from 'react-redux'
import defaultAvatar from '../../img/user_logo.png'
import authOperations from '../../redux/auth/auth-operations'

const UserMenu = ({ avatar, name, onLogout }) => {
    return (
        <div>
            <img src={avatar} alt="" width="32" />
            <span>Welcome {name}</span>
            <button type="button" onClick={onLogout}>
                Logout
            </button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    name: authSelectors.userName(state),
    avatar: defaultAvatar,
})

const mapDispatchToProps = { onLogout: authOperations.logout }

UserMenu.propTypes = {
    onLogout: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu)
