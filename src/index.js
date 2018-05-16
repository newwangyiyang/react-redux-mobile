import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Route from './route/index';
import store from './redux/store';
import {Provider} from 'react-redux';
ReactDOM.render(
    <Provider store={store}>
        <Route />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
