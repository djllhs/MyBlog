/**
 * Created by admin on 2017/2/24.
 */

import React from 'react';
import {render} from  'react-dom';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import counter from './redux/index';
import RouterConfig from './router/routes';

import './css/index.scss';

const store = createStore(counter);
store.subscribe(() => { //监听state变化
    console.log(store.getState());
});
render(
    <Provider store={store}>
        <RouterConfig />
    </Provider>
    ,
    document.getElementById("root")
);