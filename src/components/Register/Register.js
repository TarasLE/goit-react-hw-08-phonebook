import { React, Component } from 'react'
import { connect } from 'react-redux'
import authOperations from '../../redux/auth/auth-operations'
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
        this.props.onRegister(this.state)
        this.setState({ name: '', email: '', password: '' })
    }

    render() {
        const { name, email, password } = this.state
        return (
            <div>
                <h1>Registration</h1>

                <form onSubmit={this.handleSubmit} autoComplete="off">
                    <lable is="webview">
                        Name
                        <input
                            type="name"
                            name="name"
                            value={name}
                            onChange={this.handleChange}
                        ></input>
                    </lable>
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
                    <button type="submit">Register</button>
                </form>
            </div>
        )
    }
}

Register.propTypes = {
    onRegister: PropTypes.func.isRequired,
}

const mapDispatchToProps = {
    onRegister: authOperations.register,
}

export default connect(null, mapDispatchToProps)(Register)
