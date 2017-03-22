/**
 * Created by admin on 2017/3/20.
 */
import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

class Null extends Component {
    render() {
        const {style, text} = this.props;
        return (
            <View style={[style,myCollectionStyle._null]}>
                <Image source={require('../img/ic_cache.png')} alt=""/>
                <Text>{text}</Text>
            </View>
        )
    }

}


Null.propTypes = {
    style: React.PropTypes.object,
    text: React.PropTypes.string,
    className: React.PropTypes.string,
    src: React.PropTypes.string,
};

Null.defaultProps = {
    text: "什么都木有"
};

const myCollectionStyle = StyleSheet.create({
    _null: {
        // justifyContent: 'center'
        flex: 1,
        alignItems: 'center',
        marginTop: 100
    }
})

export default Null;