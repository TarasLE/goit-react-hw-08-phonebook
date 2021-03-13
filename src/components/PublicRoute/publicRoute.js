import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import authSelectors from '../../redux/auth/auth-selectors'
import PropTypes from 'prop-types'

const PublicRoute = ({
    component: Component,
    isAuthenticated,
    reDirectTo,
    ...routeProps
}) => (
    <Route
        {...routeProps}
        render={(props) =>
            isAuthenticated && routeProps.restricted ? (
                <Redirect to={reDirectTo} />
            ) : (
                <Component {...props} />
            )
        }
    />
)

PublicRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    reDirectTo: PropTypes.string,
}

const mapStateToProps = (state) => ({
    isAuthenticated: authSelectors.getIsAuthenticated(state),
})

export default connect(mapStateToProps, null)(PublicRoute)
