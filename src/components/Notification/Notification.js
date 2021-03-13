import React, { Component } from 'react'
import styles from './Notification.module.css'
import PropTypes from 'prop-types'

Notification.propTypes = {
    sameContact: PropTypes.string.isRequired,
    currentNumber: PropTypes.string.isRequired,
}

function Notification({ sameContact, currentNumber }) {
    return (
        <div className={styles.Notification}>
            {sameContact && currentNumber ? (
                <div>
                    <h2>{sameContact} is already in contacts</h2>
                    <h3>Please check name and try again</h3>
                </div>
            ) : (
                <div>
                    <h2>Name or number is epmty</h2>
                    <h3>Please fill data and try again</h3>
                </div>
            )}
        </div>
    )
}

export default Notification
