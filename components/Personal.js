import React, {Component} from 'react';
import {ScrollView, Text, Navigator, StyleSheet, View, Image, TouchableHighlight} from 'react-native';
import {
    StackNavigator,
} from 'react-navigation';
import styles from './personalCss.js';
import Bookshelf from './Bookshelf.js';
import MyCollection from './MyCollection.js';
import Purchased from './Purchased.js';


export default class Personal extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.goBookShelf = this.goBookShelf.bind(this);
        this.goMyCollection = this.goMyCollection.bind(this);
        this.goPurchased = this.goPurchased.bind(this);
    }

    goBookShelf() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name: 'bookshelf',
                component: Bookshelf
            })
        }
    }

    goMyCollection() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name: 'MyCollection',
                component: MyCollection
            })
        }
    }

    goPurchased() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name: 'Purchased',
                component: Purchased
            })
        }
    }

    render() {
        // console.log(this.props.navigator);
        return (
            <View>

                <Text style={styles._navigator}>个人中心 </Text>


                <ScrollView style={styles.container}>
                    <TouchableHighlight onPress={this.goBookShelf}>
                        <View style={styles.listItem}>
                            <Image source={require('../img/ic_my_bookcase.png')}/>
                            <Text style={styles.listItemText}>书架</Text>
                            <View style={styles.listItemRightImgView}>
                                <Image source={require('../img/ic_Right_arrow.png')}/>
                            </View>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight onPress={this.goMyCollection}>
                        <View style={styles.listItem}>
                            <Image source={require('../img/ic_my_collection.png')}/>
                            <Text style={styles.listItemText}>我的收藏</Text>
                            <View style={styles.listItemRightImgView}>
                                <Image source={require('../img/ic_Right_arrow.png')}/>
                            </View>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight onPress={this.goPurchased}>
                        <View style={styles.listItem}>
                            <Image source={require('../img/ic_my_bought.png')}/>
                            <Text style={styles.listItemText}>已购买的</Text>
                            <View style={styles.listItemRightImgView}>
                                <Image source={require('../img/ic_Right_arrow.png')}/>
                            </View>
                        </View>
                    </TouchableHighlight>

                </ScrollView>
            </View>


        )

    }
}
