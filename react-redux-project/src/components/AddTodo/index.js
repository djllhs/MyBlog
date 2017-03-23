/**
 * Created by admin on 2017/3/14.
 */

import React, {Component, PropTypes} from 'react';
import {findDOMNode} from 'react-dom'

export default class AddTodo extends Component {
    render() {
        return (
            <div>
                <input type="text" ref='input'/>
                <button onClick={ e => this.handleClick(e)}>ADD_TODO</button>
            </div>
        )
    }

    handleClick(e) {
        // e.preventDefault();
        e.stopPropagation();
        console.log(3333);
        // return;
        const inputNode = findDOMNode(this.refs.input);
        const text = inputNode.value.trim();
        this.props.onAddClick(text);
        inputNode.value = '';
    }
}

AddTodo.propTypes = {
    onAddClick: PropTypes.func.isRequired
};