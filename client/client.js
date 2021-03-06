import React from 'react'
import { render } from 'react-dom'
import { Provider } from "react-redux"

import App from '../components/app'
import store from "../redux/store"

import style from '../css/style.css'

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)