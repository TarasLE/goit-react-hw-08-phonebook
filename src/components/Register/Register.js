import { React, Component } from 'react'
import { connect } from 'react-redux'
import authOperations from '../../redux/auth/auth-operations'
import PropTypes from 'prop-types'
import styles from './Register.module.css'

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
            <div className={styles.Container}>
                <h1>Registration</h1>
                <form
                    onSubmit={this.handleSubmit}
                    autoComplete="off"
                    className={styles.FormContainer}
                >
                    <lable is="webview">
                        NAME
                        <input
                            type="name"
                            name="name"
                            value={name}
                            onChange={this.handleChange}
                            className={styles.FormItem}
                        ></input>
                    </lable>
                    <lable is="webview">
                        EMAIL
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={this.handleChange}
                            className={styles.FormItem}
                        ></input>
                    </lable>
                    <lable is="webview">
                        PASSWORD
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={this.handleChange}
                            className={styles.FormItem}
                        ></input>
                    </lable>
                    <button type="submit" className={styles.FormBtn}>
                        <h3>REGISTER</h3>
                    </button>
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
