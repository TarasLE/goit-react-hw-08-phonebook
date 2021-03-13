import React, { Component, Suspense, lazy } from 'react'
import Container from './components/Container/Container'
import AppBar from './components/AppBar/AppBar'
import styles from './App.module.css'
import './App.css'
import { Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import authOperations from './redux/auth/auth-operations'
import PrivateRoute from './components/PrivateRoute/privateRoute'
import PublicRoute from './components/PublicRoute/publicRoute'
import { CSSTransition } from 'react-transition-group'

const HomePage = lazy(() => import('./components/HomePage/Homepage'))
const Login = lazy(() => import('./components/Login/Login'))
const Register = lazy(() => import('./components/Register/Register'))
const Phonebook = lazy(() => import('./components/Phonebook/Phonebook'))

class App extends Component {
    componentDidMount() {
        this.props.onRefreshUser()
    }
    render() {
        return (
            <Container>
                <AppBar />
                <Suspense fallback={<h1>Loading...</h1>}>
                    <Switch>
                        <PublicRoute exact path="/" component={HomePage} />
                        <PublicRoute
                            path="/register"
                            restricted
                            component={Register}
                            reDirectTo="/contacts"
                        />

                        <PublicRoute
                            path="/login"
                            restricted
                            component={Login}
                            reDirectTo="/contacts"
                        />
                        <PrivateRoute
                            exact
                            path="/contacts"
                            component={Phonebook}
                            reDirectTo="/login"
                        />
                    </Switch>
                </Suspense>
            </Container>
        )
    }
}

const mapDispatchToProps = {
    onRefreshUser: authOperations.getCurrentUser,
}

export default connect(null, mapDispatchToProps)(App)
