import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import './application.scss';

const root = document.getElementById('root');
if (root) {
    ReactDOM.render(
        <BrowserRouter basename={process.env.ROUTER_BASE_URL}>
            <App />
        </BrowserRouter>, root
    );
}
serviceWorker.unregister();
