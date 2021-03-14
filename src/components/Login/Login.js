import { React, Component } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { connect } from 'react-redux'
import authOperations from '../../redux/auth/auth-operations'
import PropTypes from 'prop-types'
import styles from './Login.module.css'
import { CSSTransition } from 'react-transition-group'

class Login extends Component {
    state = {
        email: '',
        password: '',
    }

    checkLoginData = () => {
        if (this.state.email == '' || this.state.password == '') {
            toast.error('Email or password cant be empty', {
                position: 'top-center',
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })

            return true
        }
    }

    handleChange = (event) => {
        const { name, value } = event.currentTarget
        this.setState({
            [name]: value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log('beforeCHECK')
        console.log(this.props.authError)
        if (this.checkLoginData()) {
            return
        }

        this.props.onLogin(this.state)
        this.setState({ name: '', email: '', password: '' })
    }

    render() {
        const { email, password } = this.state
        return (
            <div>
                <CSSTransition
                    in={true}
                    appear={true}
                    timeout={500}
                    classNames={{
                        appear: styles.HeaderFadeAppear,
                        appearActive: styles.HeaderFadeAppearActive,
                    }}
                >
                    <div className={styles.Container}>
                        <h1>Login</h1>

                        <form
                            onSubmit={this.handleSubmit}
                            autoComplete="off"
                            className={styles.FormContainer}
                        >
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
                                <h3>LOGIN</h3>
                            </button>
                        </form>
                    </div>
                </CSSTransition>
                <ToastContainer />
            </div>
        )
    }
}

Login.propTypes = {
    onLogin: PropTypes.func.isRequired,
}

const mapDispatchToProps = {
    onLogin: authOperations.login,
}

export default connect(null, mapDispatchToProps)(Login)
