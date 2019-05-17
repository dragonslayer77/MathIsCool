import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import './application.scss';

const root = document.getElementById('root');
if (root) {
    ReactDOM.render(
        <HashRouter basename={process.env.ROUTER_BASE_URL}>
            <App />
        </HashRouter>, root
    );
}
serviceWorker.unregister();
