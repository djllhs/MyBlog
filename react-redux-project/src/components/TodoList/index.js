/**
 * Created by admin on 2017/3/14.
 */

import React, {Component, PropTypes} from 'react';
import Todo from '../Todo';

export default class TodoList extends Component {
    render() {
        return (
            <ul>
                {
                    this.props.todos.map((todo, index) =>
                    {
                        console.log('...todo----', ...todo);
                        return (
                            <Todo
                                {...todo}
                                onClick={() => this.props.onTodoClick(index)}
                                key = {index}
                            />
                        )
                    }

                    )
                }
            </ul>
        )
    }
}

TodoList.propTypes = {
    onTodoClick: PropTypes.func.isRequired,
    todos: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    }).isRequired).isRequired
};
