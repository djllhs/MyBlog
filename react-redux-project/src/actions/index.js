/**
 * Created by admin on 2017/3/13.
 */


export function addTodo(text) {
    return {
        type: 'ADD_TODO',
        text
    };
}

export function completeTodo(index) {
    return {
        type: COMPLETE_TODO,
        index
    };
}