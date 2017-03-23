/**
 * Created by admin on 2017/3/13.
 */

import {
    ADD_TODO,
    COMPLETE_TODO
} from '../actions'
function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            console.log("ADD_TODO--------",action.type);
            console.log("ADD_TODO--------",[
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]);
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ];
            // return Object.assign({}, state, {text: 3333});

        case COMPLETE_TODO:
            console.log('COMPLETE_TODO--------',
                [
                    ...state.slice(0, action.index),
                    Object.assign({}, state[action.index], {
                        completed: true
                    }),
                    ...state.slice(action.index + 1)
                ]
            )
            return [
                ...state.slice(0, action.index),
                Object.assign({}, state[action.index], {
                    completed: true
                }),
                ...state.slice(action.index + 1)
            ];
            // return Object.assign({}, state, {text: 88888});

        default:
            return state
    }
}

export default todos;