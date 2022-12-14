import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'mobx-react';
import store from './store';
import App from './App'
import './reset.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider {...store}>
        <App />
    </Provider>
)
