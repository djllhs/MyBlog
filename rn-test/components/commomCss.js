/**
 * Created by admin on 2017/3/17.
 */
import {StyleSheet} from 'react-native';

const commonStyle = StyleSheet.create({
    _container: {
        flex: 1,
    },
    _navigator: {
        height: 44,
        backgroundColor: '#0b1e30',
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10
        // justifyContent: 'space-between',

    },
    _navigator_img: {
        width: 22,
        height: 22
    },
    _navigator_title: {
        color: '#fff',
        fontSize: 18,
    },
    _body: {
        backgroundColor: '#f2f5f7',
        flex: 1,
        justifyContent: 'center'
    },
    // _navigator: { // 导航器
    //     width: 368,
    //     height: 50,
    //     backgroundColor: '#0b1e30',
    //     flex:0,
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     // justifyContent:'center'
    // },

    back: {
        color: '#fff',
        fontSize: 18,
    },
    titleContent: {
        color: '#fff',
        fontSize: 18,
        flex: 0.8,
        textAlign: 'center',
    },
    right: {
        flex: 0.1
    },

    container: {
        width: 368,
        flex: 0,
        alignItems: 'center',
    },

    tabsWrap: {
        width: 300,
        height: 30,
        borderWidth: 1,
        borderColor: '#3ca6fe',
        flex: 0,
        flexDirection: 'row',

        marginTop: 7,
        borderRadius: 2,
        marginBottom: 10,
        justifyContent: 'center'
        // marginLeft: 30
    },

    tabsItem: {
        width: 100,
        height: 30,
        borderRightWidth: 1,
        borderColor: '#3ca6fe',
    },

    tabsItemText: {
        height: 30,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: '#222'
    },

    tabsItemActive:　{
        backgroundColor: '#3ca6fe',
    },

    tabsItemActiveText: {
        color: '#fff',
    },


});

export default commonStyle;
