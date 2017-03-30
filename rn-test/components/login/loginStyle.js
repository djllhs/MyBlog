/**
 * Created by admin on 2017/3/23.
 */
import {StyleSheet} from 'react-native'

const loginStyle = StyleSheet.create({
    container: {
        flex:0,
        alignItems: 'center'
    },

    logo: {
        width: 70,
        height: 70,
        marginVertical: 40
        // borderColor: 'red',
        // borderWidth: 1
    },

    accountFormItem: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 240,
        height: 44,
        borderBottomWidth: 1,
        borderColor: '#ddd',
    },
    accountImg: {
        width: 19,
        height:19,
        marginHorizontal: 11,
        // border: 'none'
    },

    accountInput: {
        width: 170
    },

    accountCloseImg: {
        width: 22,
        height: 22,

    },
    pwdInput:{
      width: 140,
    },
    pwdViewDownImg: {
        marginLeft: 11
    },
    loginBtn: { // 登录按钮
        width: 240,
        height: 44,
        backgroundColor: '#ddd',
        // backgroundColor: '#3ca6fe',
        marginTop: 30,
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginBtnImg: {
        width: 30,
        height: 21
    },
    registerFormItem: {
        // borderColor: "#f2f5f7",
        flexDirection: 'row',
        borderBottomWidth: 0

    },

    registerBtn: {
        width: 55,
        height: 22,
        borderColor: "#3ca6fe",
        borderWidth: 1,
        borderRadius: 11,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    registerDifficult: {
        fontSize: 12,
        color: '#999',
        textDecorationLine: 'underline',
    },
    registerText: {
        fontSize: 12,
        height: 22,
        color: "#3ca6fe",
        textAlignVertical: 'center',
    },
    registerNull: {
        flex: 0.5
    },

    loginFooter: {
        width: 240,
        height: 180,
        // borderColor: 'red',
        // borderWidth: 1,
        // marginVertical: 30,
        // marginBottom: 30,
        // marginTop: 60
        justifyContent: 'flex-end',
        // flex: 0.2

    },

    loginFooterLineWrap: {
        width: 240,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 22
    },
    loginFooterLineItem: {
        width: 100,
        height: 0,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        // backgroundColor: "#ccc"
    },
    loginFooterLineText: {
        fontSize: 10,
        color: '#999',
        marginHorizontal: 11,

    },

    loginFooterSocial: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    loginFooterSocialImg: {
        width: 37,
        height: 37
    },
    loginFooterSocialText: {
        width: 37,
        fontSize: 10,
        color: '#999',
        marginTop: 11,
        textAlign: 'center'
    }
});

export default loginStyle;