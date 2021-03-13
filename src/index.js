import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import store from './redux/phonebook/store'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Router } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
    <Provider store={store.store}>
        <PersistGate loading={'Loading'} persistor={store.persistor}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </PersistGate>
    </Provider>,
    document.querySelector('#root')
)
