/**
 * Created by admin on 2017/3/18.
 */
import React, {Component} from 'react';
import {ScrollView, ListView, Text, Navigator, StyleSheet, View, Image, TouchableHighlight} from 'react-native';

import commonStyle from './commomCss.js';
import purchasedStyle from './purchasedCss.js';

import action from './interface.js';
import Null from './Null.js';

export default class MyCollection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0,
            activeView: [commonStyle.tabsItemActive],
            activeText: [commonStyle.tabsItemActiveText],
            hiddenStyle: [purchasedStyle.show],
            res: [],

        };
    }

    componentDidMount() {
        fetch(action.bought)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({res: responseJson});
            })
            .catch((error) => {
                console.error(error);
            });
    }

    tabsChange(index) {
        this.setState({
            currentIndex: index,
            activeView: [],
            activeText: [],
            hiddenStyle: []
        }, () => {
            this.tabsItemStyle(index)
        });
    }

    tabsItemStyle(index) {
        const {tabsItemActive, tabsItemActiveText} = commonStyle,
            {show} = purchasedStyle,
            {currentIndex, activeView, activeText, hiddenStyle} = this.state;
        activeView[index] = index === currentIndex && tabsItemActive;
        activeText[index] = index === currentIndex && tabsItemActiveText;
        hiddenStyle[index] = index === currentIndex && show;
        this.setState({
            activeView,
            activeText,
            hiddenStyle
        })
    }

    goBack() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.pop();
        }
    }

    render() {
        const {
                container,
                tabsWrap,
                tabsItem,
                tabsItemText,
            } = commonStyle,
            {} = purchasedStyle,
            {
                activeView,
                activeText,
                hiddenStyle,
                currentIndex
            } = this.state,
            {res} = this.state;
        console.log(this.state.res);
        const content = currentIndex === 0 ? <Teletext show={hiddenStyle[0]} res={res}/> :
            currentIndex === 1 ? <SpotReadBooks show={hiddenStyle[1]} res={res}/> :
                <Course show={hiddenStyle[2]}/>
        return (
            <View>
                <View style={commonStyle._navigator}>
                    <TouchableHighlight onPress={this.goBack.bind(this)}>
                        <Text style={commonStyle.back}>返回</Text>
                    </TouchableHighlight>

                    <Text style={commonStyle.titleContent}>已购买的</Text>
                    <Text style={commonStyle.right}></Text>
                </View>
                <View style={container}>
                    <View style={ tabsWrap}>
                        <TouchableHighlight onPress={this.tabsChange.bind(this, 0)}>
                            <View style={[tabsItem, activeView[0]]}>
                                <Text style={[tabsItemText, activeText[0]]}>图书资源</Text>
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight onPress={this.tabsChange.bind(this, 1)}>
                            <View style={[tabsItem, activeView[1]]}>
                                <Text style={[tabsItemText, activeText[1]]}>点读书</Text>
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight onPress={this.tabsChange.bind(this, 2)}>
                            <View style={[tabsItem, activeView[2]]}>
                                <Text style={[tabsItemText, activeText[2]]}>课程</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                    {content}
                </View>
            </View>
        )
    }
}

class Teletext extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([
                'John', 'Joel', '大三的撒大所大所大所大所多撒大所大所大所', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin', '232', '大三的撒大所大所大所大所多撒大所大所大所', '11',
                'John', 'Joel', '大三的撒大所大所大所大所多撒大所大所大所', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin', '232', '大三的撒大所大所大所大所多撒大所大所大所', '11'
            ])
        };
        this._renderRow = this._renderRow.bind(this);
    }

    _renderRow(rowData) {
        const {mainItemWrap, mainItem, mainItemText} = purchasedStyle;
        console.log(rowData);
        return (
            <View style={mainItemWrap}>
                <View style={mainItem}></View>
                <Text numberOfLines={2} style={mainItemText}>{rowData}</Text>
            </View>
        )
    }

    render() {
        const {main} = purchasedStyle,
            {show, res} = this.props;
        console.log(res);
        return (
            <ListView contentContainerStyle={main}
                      dataSource={this.state.dataSource}
                      renderRow={ this._renderRow}
            />
        )
    }

}

class SpotReadBooks extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([
                'Jimmy', 'Jackson', '232', '大三的撒大所大所大所大所多撒大所大所大所', '11',
            ])
        };
        this._renderRow = this._renderRow.bind(this);
    }

    _renderRow(rowData) {
        const {mainItemWrap, mainItem, mainItemText} = purchasedStyle;
        console.log(rowData);
        return (
            <View style={mainItemWrap}>
                <View style={mainItem}></View>
                <Text numberOfLines={2} style={mainItemText}>{rowData}</Text>
            </View>
        )
    }

    render() {
        const {
                main,
            } = purchasedStyle,
            {
                show
            } = this.props;
        return (
            <ListView contentContainerStyle={main}
                      dataSource={this.state.dataSource}
                      renderRow={ this._renderRow}
            />
        )
    }
}
class Course extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([])
        };
        this._renderRow = this._renderRow.bind(this);
    }

    _renderRow(rowData) {
        const {mainItemWrap, mainItem, mainItemText} = purchasedStyle;
        console.log(rowData);
        return (
            <View style={mainItemWrap}>
                <View style={mainItem}></View>
                <Text numberOfLines={2} style={mainItemText}>{rowData}</Text>
            </View>
        )
    }
    render() {
        const {
                main,
            } = purchasedStyle,
            {
                show
            } = this.props;
        return this.state.dataSource.length > 0 ? (
            <ListView contentContainerStyle={main}
                      dataSource={this.state.dataSource}
                      renderRow={ this._renderRow}
            />
        ):
         (
            <View style={[main, show]}>
                <Null />
            </View>
        )
    }
}

