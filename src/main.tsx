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
        <div className="page-footer flex-center">
            <a className="icp" href="https://beian.miit.gov.cn/" target="_blank">
                浙ICP备2023039790号-1
            </a>
        </div>
    </Provider>
)
