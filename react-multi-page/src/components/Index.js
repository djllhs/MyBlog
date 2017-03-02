/**
 * Created by admin on 2017/2/28.
 */

import React, {Component} from 'react';

export default class Index extends Component {

    render() {
        return(
            <div className="menu">
                <ul>
                    <li className="menu-item"><a href="../../public/personal.html">个人中心</a></li>
                    <li className="menu-item"><a href="../../public/myCollection.html">我的收藏</a></li>
                    <li className="menu-item"><a href="../../public/bookshelf.html">书架</a></li>
                </ul>
            </div>
        )
    }
}