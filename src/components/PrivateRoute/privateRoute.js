import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import authSelectors from '../../redux/auth/auth-selectors'
import PropTypes from 'prop-types'

const PrivateRoute = ({
    component: Component,
    isAuthenticated,
    reDirectTo,
    ...routeProps
}) => (
    <Route
        {...routeProps}
        render={(props) =>
            isAuthenticated ? (
                <Component {...props} />
            ) : (
                <Redirect to={reDirectTo} />
            )
        }
    />
)

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    reDirectTo: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => ({
    isAuthenticated: authSelectors.getIsAuthenticated(state),
})

export default connect(mapStateToProps, null)(PrivateRoute)
