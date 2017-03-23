import React, {Component} from 'react';
import {ScrollView, Text, Navigator, StyleSheet, View, Image, TouchableHighlight } from 'react-native';

import commonStyle from './commomCss.js';
import bookshelfStyle from './bookshelfCss';
import action from './interface.js';

export default class Bookshelf extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(11);
        fetch(action.bookShelf)
            .then(response => response.json())
            .then(responseJson => {
                console.log(responseJson)
            })
            .catch(error => {
                console.log(error);
            })
    }

    goBack() {
        const {navigator} = this.props;
        if(navigator){
            navigator.pop();
        }
    }
    render() {
        return (
            <View style={bookshelfStyle.body}>
                <View  style={commonStyle._navigator}>
                    <TouchableHighlight onPress = {this.goBack.bind(this)}>
                        <Text style={commonStyle.back}>返回</Text>
                    </TouchableHighlight>

                    <Text style={commonStyle.titleContent}>书架</Text>
                    <Text style={commonStyle.right}></Text>

                </View>
               <View style={bookshelfStyle.container}>
                 <View style={bookshelfStyle.itemWrap}>
                    <View style={bookshelfStyle.itemImg}></View>
                     <Text  numberOfLines={2} style={commonStyle.twoLine} >我是React Native</Text>
                 </View>
                 <View style={bookshelfStyle.itemWrap}>
                     <View style={bookshelfStyle.itemImg}></View>
                     <Text  numberOfLines={2} style={commonStyle.twoLine}>我是React Native</Text>
                 </View>
                 <View style={bookshelfStyle.itemWrap}>
                     <View style={bookshelfStyle.itemImg}></View>
                     <Text  numberOfLines={2} style={commonStyle.twoLine}>我是React Native</Text>
                 </View>
                 <View style={bookshelfStyle.itemWrap}>
                     <View style={bookshelfStyle.itemImg} ></View>
                     <Text  numberOfLines={2}>我是React Native我是React Native我是React Native我是React Native我是React Native</Text>
                 </View>
                 <View style={bookshelfStyle.itemWrap}>
                     <View style={bookshelfStyle.itemImg}></View>
                     <Text  numberOfLines={2}>我是React Native灌灌灌灌灌过过过过过</Text>
                 </View>

               </View>
            </View>

        )
    }
}
