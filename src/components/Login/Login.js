import { React, Component } from 'react'
import { connect } from 'react-redux'
import authOperations from '../../redux/auth/auth-operations'
import PropTypes from 'prop-types'

class Login extends Component {
    state = {
        email: '',
        password: '',
    }

    handleChange = (event) => {
        const { name, value } = event.currentTarget
        this.setState({
            [name]: value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.onLogin(this.state)
        this.setState({ name: '', email: '', password: '' })
    }

    render() {
        const { email, password } = this.state
        return (
            <div>
                <h1>Login</h1>

                <form onSubmit={this.handleSubmit} autoComplete="off">
                    <lable is="webview">
                        Email
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={this.handleChange}
                        ></input>
                    </lable>
                    <lable is="webview">
                        Password
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={this.handleChange}
                        ></input>
                    </lable>
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}

Login.propTypes = { onLogin: PropTypes.func.isRequired }

const mapDispatchToProps = {
    onLogin: authOperations.login,
}

export default connect(null, mapDispatchToProps)(Login)
