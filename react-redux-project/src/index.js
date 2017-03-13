/**
 * Created by admin on 2017/3/13.
 */

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import configureStore from './store/configureStore';
import App from './container/App';


const store = configureStore();
render(
    <Provider  store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);