/**
 * Created by admin on 2017/3/13.
 */

import {createStore} from 'redux';

import rootReducer from '../reducers';


export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState);

    return store;
}