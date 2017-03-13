/**
 * Created by admin on 2017/3/13.
 */

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {
    addTodo,
    completeTodo
} from '../actions'

class App extends Component {
    render() {
        console.log(this.props);
        return(
            <div>
                <h2 style={{fontSize: 30}}>I am learning redux</h2>
            </div>
        )
    }
}

App.propTypes = {

}
export default connect()(App);