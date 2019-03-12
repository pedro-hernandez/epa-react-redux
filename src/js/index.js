// src/js/index.js

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index';
import { enterZIP } from './actions/index';
import App from './components/App.jsx';

render (
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);

// used to test store and enterZIP action
window.store = store;
window.enterZIP = enterZIP;