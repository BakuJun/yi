import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'mobx-react';
import { HashRouter } from 'react-router-dom';
import store from './store';
import App from './App'
import './reset.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider {...store}>
        <div className='app'>
            <HashRouter>
                <App />
            </HashRouter>
        </div>
    </Provider>
)
