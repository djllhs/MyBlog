/**
 * Created by admin on 2017/2/28.
 */
import React, {Component} from 'react';
import {Router, Route, Redirect, hashHistory, IndexRoute, browserHistory} from 'react-router';
import Index from '../components/Index';

class Roots extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

class RouterConfig extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Roots}>
                    <IndexRoute component={Index}/>
                </Route>
            </Router>
        )
    }
}

export default RouterConfig;