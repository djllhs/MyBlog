/**
 * Created by admin on 2017/3/13.
 */

import {combineReducers} from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

const rootReducer = combineReducers({
    todos,
    visibilityFilter
});

export default  rootReducer;