import { React, Component } from 'react'
import PropTypes from 'prop-types'

class Register extends Component {
    state = {
        name: '',
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
        const { name, email, password } = this.state
        return (
            <div>
                <h1>Registration Page</h1>

                <form onSubmit={this.handleSubmit} autoComplete="off">
                    <lable>
                        Name
                        <input
                            type="name"
                            name="name"
                            value={name}
                            onChange={this.handleChange}
                        ></input>
                    </lable>
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

export default Register
