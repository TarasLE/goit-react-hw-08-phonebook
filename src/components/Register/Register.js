import { React, Component } from 'react'
import { connect } from 'react-redux'
import authOperations from '../../redux/auth/auth-operations'
import PropTypes from 'prop-types'
import styles from './Register.module.css'
import { CSSTransition } from 'react-transition-group'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

class Register extends Component {
    state = {
        name: '',
        email: '',
        password: '',
    }

    checkRegisterData = () => {
        if (
            this.state.email == '' ||
            this.state.password == '' ||
            this.state.name == ''
        ) {
            toast.error('Name, email or password cant be empty', {
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
        if (this.checkRegisterData()) {
            return
        }
        this.props.onRegister(this.state)
        this.setState({ name: '', email: '', password: '' })
    }

    render() {
        const { name, email, password } = this.state
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
                </CSSTransition>
                <ToastContainer />
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
