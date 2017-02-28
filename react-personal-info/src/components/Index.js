/**
 * Created by admin on 2017/2/28.
 */

import React, {Component} from 'react';

export default class Index extends Component {
    componentDidMount(){
        this.f(1, 1, 1);
    }
    f( a=(x,y) =>{console.log(111)},
       b=(x,y) =>{console.log(111)},
       c=(x,y) =>{console.log(111)}
    ){
        console.log(2222)
    }
    render() {
        return(
            <div className="menu">
                <ul>
                    <li className="menu-item">个人中心</li>
                    <li className="menu-item">个人中心</li>
                    <li className="menu-item">个人中心</li>
                </ul>
            </div>
        )
    }
}