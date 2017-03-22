/**
 * Created by admin on 2017/3/18.
 */
import React, {Component} from 'react';
import {ScrollView, ListView, Text, Navigator, StyleSheet, View, Image, TouchableHighlight, ActivityIndicator} from 'react-native';

import commonStyle from './commomCss.js';
import myCollectionStyle from './myCollectionCss.js';
import Null from './Null.js';
import action from './interface.js';


export default class MyCollection extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !==  r2
        });
        this.state = {
            currentIndex: 0,
            activeView: [commonStyle.tabsItemActive],
            activeText: [commonStyle.tabsItemActiveText],
            hiddenStyle: [myCollectionStyle.show],
            res: [],
            dataSource: ds,
            favType: 4,
        };
        this.fetchData = this.fetchData.bind(this);
        this._renderRow = this._renderRow.bind(this);
    }

    componentDidMount() {
        this.fetchData();
        // this.setState({
        //     res: [
        //         {title: 'hhhhh', times: 3213},
        //         {title: 'sfsdsf', times: 3213},
        //         {title: 'dasdasd', times: 3213},
        //         {title: 'gfdgdfgdsg', times: 3213},
        //         {title: 'gfdgdfgdsg', times: 3213},
        //         {title: 'gfdgdfgfdsfdssfdsg', times: 3213},
        //         {title: 'gfdgdfgdsfdsfsdfsg', times: 3213},
        //     ]
        // })
    }
    fetchData() {
        const {favType } = this.state;
        fetch(action.favorites+'?favType=' + favType )
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    res: responseJson.data.sources
                });
                // alert(responseJson);
                // console.log((responseJson.data));
                console.log((responseJson.data.sources));
            })
            .catch((error) => {
                // console.error(error);
            })
            .done();
    }
    tabsChange(index) {
        this.setState({
            currentIndex: index,
            favType: index === 0 ? 3 : 4,
            activeView: [],
            activeText: [],
            hiddenStyle: []
        }, () => {
            this.componentDidMount();
            this.tabsItemStyle(index);
        });
    }

    tabsItemStyle(index) {
        const {tabsItemActive, tabsItemActiveText} = commonStyle,
            {show} = myCollectionStyle,
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
    _renderRow(rowData) {
        const {
            mainItemWrap, mainItem, mainVideoItem, mainItemText,
            mainVideoItemImg, mainVideoItemInfoWrap, mainItemInfo,
            mainItemInfoImg, mainItemInfoText
        } = myCollectionStyle;
        console.log('rowData=='+rowData);
        return (
            <View style={[ mainItemWrap]}>
                <View style={[mainItem, mainVideoItem]}>
                    <Image style={mainVideoItemImg} source={require('../img/ic_default_video.png')}/>
                    <View style={mainVideoItemInfoWrap}>
                        <Text numberOfLines={2} style={mainItemText}>{rowData.title}</Text>
                        <View style={[mainItemInfo]}>
                            <Image style={mainItemInfoImg} source={require('../img/min_icon_times.png')}/>
                            <Text style={mainItemInfoText}>02:01</Text>
                            <Image style={mainItemInfoImg} source={require('../img/min_icon_length.png')}/>
                            <Text style={mainItemInfoText}>1.3M</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
    render() {
        const {
                container,
                tabsWrap,
                tabsItem,
                tabsItemText,
            } = commonStyle,

            {
                activeView,
                activeText,
                hiddenStyle,
                currentIndex,
                res,
                // dataSource
            } = this.state;
        console.log(this.state.res);
        const content = currentIndex === 0 ? <Video show={hiddenStyle[0]} res={res}/> :
            currentIndex === 1 ? <Audio show={hiddenStyle[1]} res={res}/> :
                <Course show={hiddenStyle[2]}/>;
        const a = this.state.res ? <ListView contentContainerStyle={myCollectionStyle.main}
                                             dataSource={this.state.dataSource.cloneWithRows(this.state.res)}
                                             renderRow={this._renderRow}
            /> : <ActivityIndicator/>
        return (
            <View>
                <View style={commonStyle._navigator}>
                    <TouchableHighlight onPress={this.goBack.bind(this)}>
                        <Text style={commonStyle.back}>返回</Text>
                    </TouchableHighlight>
                    <Text style={commonStyle.titleContent}>我的收藏</Text>
                    <Text style={commonStyle.right}></Text>
                </View>
                <View style={container}>
                    <View style={ tabsWrap}>
                        <TouchableHighlight onPress={this.tabsChange.bind(this, 0)}>
                            <View style={[tabsItem, activeView[0]]}>
                                <Text style={[tabsItemText, activeText[0]]}>视频</Text>
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight onPress={this.tabsChange.bind(this, 1)}>
                            <View style={[tabsItem, activeView[1]]}>
                                <Text style={[tabsItemText, activeText[1]]}>音频</Text>
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
        );
    }
}
const _data = [
    {
        title:"测试切片m3u8-1",
        thumbnails:"http://qiniu-user.koudaitiku.com/ti10138_63849fe10228a8de7b3e3097e9de007d00826cc2.png"
    },
    {
        title:"测试切片m3u8-2",
        thumbnails:"http://qiniu-user.koudaitiku.com/ti10138_63849fe10228a8de7b3e3097e9de007d00826cc2.png"
    },
    {
        title:"测试切片m3u8-3",
        thumbnails:"http://qiniu-user.koudaitiku.com/ti10138_63849fe10228a8de7b3e3097e9de007d00826cc2.png"
    },
    {
        title:"测试切片m3u8-4",
        thumbnails:"http://qiniu-user.koudaitiku.com/ti10138_63849fe10228a8de7b3e3097e9de007d00826cc2.png"
    },

]
class Video extends Component {
    constructor(props){
        super(props);
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !==  r2
        });
        this.state = {
            dataSource: ds,
            data: []
        };
        this.renderLoading = this.renderLoading.bind(this);
    }

    // componentWillReceiveProps(nextProps) {
    //     console.log(nextProps);
    //     console.log(this.props.res);
    // }
    _renderRow(rowData) {
        const {
            mainItemWrap, mainItem, mainVideoItem, mainItemText,
            mainVideoItemImg, mainVideoItemInfoWrap, mainItemInfo,
            mainItemInfoImg, mainItemInfoText
        } = myCollectionStyle;
        console.log('rowData=='+rowData);
        return (
            <View style={[ mainItemWrap]}>
                <View style={[mainItem, mainVideoItem]}>
                    <Image style={mainVideoItemImg} source={require('../img/ic_default_video.png')}/>
                    <View style={mainVideoItemInfoWrap}>
                        <Text numberOfLines={2} style={mainItemText}>{rowData.title}</Text>
                        <View style={[mainItemInfo]}>
                            <Image style={mainItemInfoImg} source={require('../img/min_icon_times.png')}/>
                            <Text style={mainItemInfoText}>02:01</Text>
                            <Image style={mainItemInfoImg} source={require('../img/min_icon_length.png')}/>
                            <Text style={mainItemInfoText}>1.3M</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    renderLoading() {
        return (
                <ActivityIndicator />
            )
    }

    render() {
        const {
            main,
        } = myCollectionStyle;
        console.log(this.props.res);
        if(!this.props.res){
           return this.renderLoading();
        }
        if(!this.props.res.length ){
            return (
                <ListView contentContainerStyle={main}
                          dataSource={this.state.dataSource.cloneWithRows(this.props.res)}
                          renderRow={this._renderRow}
                />
            );
        }else {
            return(
                <View style={[main]}>
                    <Null />
                </View>
            )
            }
    }
}

class Audio extends Component {
    render() {
        const {
            main,
            mainItemWrap,
            mainItem,
            mainItemText,
            mainItemInfo,
            mainItemInfoImg,
            mainItemInfoText,
            mainAudioItemWrap,
            mainAudioItem,
            mainAudioItemImg,
            mainAudioItemInfoWrap,

        } = myCollectionStyle
        return (

                <View style={[main]}>
                    <View style={[mainItemWrap]}>
                        <View style={[mainItem, mainAudioItem]}>
                            <Image style={mainAudioItemImg} source={require('../img/ic_audio.png')}/>
                            <View style={mainAudioItemInfoWrap}>
                                <Text numberOfLines={1} style={mainItemText}>雅思口语7.0课程雅思口语7.0课程雅思口语7.0课程</Text>
                                <View style={[mainItemInfo]}>
                                    <Image style={mainItemInfoImg} source={require('../img/min_icon_times.png')}/>
                                    <Text style={mainItemInfoText}>02:01</Text>
                                    <Image style={mainItemInfoImg} source={require('../img/min_icon_length.png')}/>
                                    <Text style={mainItemInfoText}>1.3M</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={[mainItemWrap, mainAudioItemWrap]}>
                        <View style={[mainItem,mainAudioItem]}>
                            <Image style={mainAudioItemImg} source={require('../img/ic_audio.png')}/>
                            <View style={mainAudioItemInfoWrap}>
                                <Text numberOfLines={1} style={mainItemText}>雅思口语7.0课程雅思口语7.0课程雅思口语7.0课程</Text>
                                <View style={[mainItemInfo]}>
                                    <Image style={mainItemInfoImg} source={require('../img/min_icon_times.png')}/>
                                    <Text style={mainItemInfoText}>02:01</Text>
                                    <Image style={mainItemInfoImg} source={require('../img/min_icon_length.png')}/>
                                    <Text style={mainItemInfoText}>1.3M</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={[mainItemWrap, mainAudioItemWrap]}>
                        <View style={[mainItem,mainAudioItem]}>
                            <Image style={mainAudioItemImg} source={require('../img/ic_audio.png')}/>
                            <View style={mainAudioItemInfoWrap}>
                                <Text numberOfLines={1} style={mainItemText}>雅思口语7.0课程雅思口语7.0课程雅思口语7.0课程</Text>
                                <View style={[mainItemInfo]}>
                                    <Image style={mainItemInfoImg} source={require('../img/min_icon_times.png')}/>
                                    <Text style={mainItemInfoText}>02:01</Text>
                                    <Image style={mainItemInfoImg} source={require('../img/min_icon_length.png')}/>
                                    <Text style={mainItemInfoText}>1.3M</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
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
        const {mainItemWrap, mainItem, mainItemText} = myCollectionStyle;
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
            } = myCollectionStyle,
            {
                show
            } = this.props;
        return this.state.dataSource.length > 0 ? (
                <ListView contentContainerStyle={main}
                          dataSource={this.state.dataSource}
                          renderRow={ this._renderRow}
                />
            ) :
            (
                <View style={[main, show]}>
                    <Null />
                </View>
            )
    }
}
