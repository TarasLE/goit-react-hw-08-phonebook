import React from 'react'
import { connect } from 'react-redux'
import { changeFilter } from '../../redux/phonebook/phonebook-actions'
import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'
import styles from './Filter.module.css'
import phonebookSelectors from '../../redux/phonebook/phonebook-selectors'

function Filter({ contacts, value, filter }) {
    return (
        <CSSTransition
            in={contacts.length > 1}
            timeout={250}
            unmountOnExit
            classNames={{
                enter: styles.FilterFadeEnter,
                enterActive: styles.FilterFadeEnterActive,
                exit: styles.FilterFadeExit,
                exitActive: styles.FilterFadeExitActive,
            }}
        >
            <div className={styles.Container}>
                <label className={styles.InputContainer}>
                    <h1 className={styles.FilterHeader}>
                        Find contacts by Name
                    </h1>

                    <input
                        type="text"
                        value={value}
                        onChange={filter}
                        className={styles.FilterInput}
                    />
                </label>
            </div>
        </CSSTransition>
    )
}

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    filter: PropTypes.func.isRequired,
    contacts: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => ({
    contacts: state.contacts.items,
    value: phonebookSelectors.getFilter(state),
})
const mapDispatchToProps = (dispatch) => ({
    filter: (event) => dispatch(changeFilter(event.currentTarget.value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
