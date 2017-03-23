/**
 * Created by admin on 2017/3/13.
 */

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {
    addTodo,
    completeTodo,
    setVisibilityFilter,
    VisibilityFilters
} from '../actions'
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';

class App extends Component {
    render() {
        console.log(this.props);
        const {dispatch, visibleTodos, visibilityFilter} = this.props;
        return (
            <div>
                <AddTodo onAddClick={ text => {
                    dispatch(addTodo(text));
                    console.log('dispatch----', addTodo(text))
                    console.log('dispatch----', dispatch(addTodo(text)))
                }}/>

                <TodoList todos = {visibleTodos}
                          onTodoClick = {index => dispatch(completeTodo(index))}
                />

                <Footer filter={visibilityFilter}
                        onFilterChange = { nextFilter => dispatch(setVisibilityFilter(nextFilter))}
                />
            </div>
        )
    }
}

App.propTypes  = {
    visibleTodos: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    })),
    visibilityFilter: PropTypes.oneOf([
        'SHOW_ALL',
        'SHOW_COMPLETED',
        'SHOW_ACTIVE'
    ]).isRequired
}

function selectTodos(todos, filter) {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos;

        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed);

        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed);
    }
}
function select(state) {
    console.log("state-----", state);
    return {
        visibleTodos: selectTodos(state.todos, state.visibilityFilter),
        visibilityFilter: state.visibilityFilter
    }
}



export default connect(select)(App);