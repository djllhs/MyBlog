/**
 * Created by admin on 2017/3/14.
 */

import React, {Component, PropTypes } from 'react';

export default class  Todo extends Component {
    render() {
        const {onClick, completed, text} = this.props;
        return (
            <li
                onClick={onClick}
                style={{
                    textDecoration: completed ? 'line-through' : 'none',
                    cursor: completed ? 'default' : 'pointer'
                }}
            >
                {text}
            </li>
        );
    }

}

Todo.propTypes  = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}