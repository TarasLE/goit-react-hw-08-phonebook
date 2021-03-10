import { React, Component } from 'react'
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
        this.setState({ name: '', email: '', password: '' })
    }

    render() {
        const { email, password } = this.state
        return (
            <div>
                <h1>Login Page</h1>

                <form onSubmit={this.handleSubmit} autoComplete="off">
                    <lable>
                        Email
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={this.handleChange}
                        ></input>
                    </lable>
                    <lable>
                        Password
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={this.handleChange}
                        ></input>
                    </lable>
                </form>
            </div>
        )
    }
}

export default Login
