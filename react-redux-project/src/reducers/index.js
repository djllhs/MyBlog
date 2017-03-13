/**
 * Created by admin on 2017/3/13.
 */

import {combineReducers} from 'redux';
import todos from './todos';

const rootReducer = combineReducers({
    todos
});

export default  rootReducer;