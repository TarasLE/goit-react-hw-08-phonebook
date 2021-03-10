import React from 'react'
import PropTypes from 'prop-types'

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

UserMenu.propTypes = {}

export default UserMenu
