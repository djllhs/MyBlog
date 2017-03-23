/**
 * Created by admin on 2017/3/23.
 */
import React, {Component}  from 'react';
import {ScrollView, Text, Navigator, View, Image, TextInput, TouchableHighlight} from 'react-native';
import loginStyle from './loginStyle.js';
import Personal from '../Personal.js';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobile: null,
            pwd: null,
            accessible: false, // 是否可登录
            visible: false, // 密码是否可见
        };
        this.mobileChange = this.mobileChange.bind(this);
        this.pwdChange = this.pwdChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.pwdIsVisible = this.pwdIsVisible.bind(this);
    }

    mobileChange(text) {
        const {pwd} = this.state;
        this.setState({
            mobile: text,
            accessible: (!!pwd && !!text ) ? true : false
        });
    }

    pwdChange(text) {
        const {mobile} = this.state;

        this.setState({
            pwd: text,
            accessible: (!!mobile && !!text ) ? true : false,
        });
    }

    pwdIsVisible() {

        const {visible} = this.state;
        this.setState({
            visible: !visible
        })
    }

    handleSubmit() {
        const {accessible, mobile, pwd} = this.state,
            {navigator} = this.props;
        // alert(this.state.accessible)
        if(accessible){
            if(mobile === '15196787186' && pwd === '235448'){
                if (navigator) {
                    navigator.push({
                        name: 'Personal',
                        component: Personal
                    })
                }
            }
        }

    }

    render() {
        const {
            container, logo, accountImg, accountFormItem, accountInput,
            accountCloseImg, loginBtn, pwdInput, pwdViewDownImg, registerFormItem,
            registerBtn, loginBtnImg, registerNull, registerDifficult, registerText,
            loginFooter, loginFooterLineWrap, loginFooterLineItem, loginFooterLineText,
            loginFooterSocial, loginFooterSocialImg, loginFooterSocialText
        } = loginStyle;
        const {accessible, visible} = this.state;
        const loginBtnNode = accessible ?
            <TouchableHighlight onPress={this.handleSubmit} accessible={false} underlayColor="#fff">
                <View style={[loginBtn, {backgroundColor: '#3ca6fe'}]}>
                    <Image style={loginBtnImg} source={require('../../img/login/ic_hook.png')}/>
                </View>
            </TouchableHighlight> :
            <View style={[loginBtn, {backgroundColor: '#ddd'}]}>
                <Image style={loginBtnImg} source={require('../../img/login/ic_hook.png')}/>
            </View>;
        const visibleImgNode = visible ?
            <Image style={[accountCloseImg, pwdViewDownImg]} source={require('../../img/login/ic_To view.png')}/>
            : <Image style={[accountCloseImg, pwdViewDownImg]} source={require('../../img/login/ic_To view_down.png')}/>
        return (
            <View style={container}>
                <View>
                    <Image style={logo} source={require('../../img/login/ic_logo.png')}/>
                </View>
                <View>
                    <View style={accountFormItem}>
                        <Image style={accountImg}
                               source={require('../../img/login/ic_account.png')}/>
                        <TextInput
                            style={accountInput}
                            maxLength={11}
                            underlineColorAndroid="transparent"
                            keyboardType="numeric"
                            placeholder="手机"
                            onChangeText={this.mobileChange}
                        />
                    </View>
                    <View style={accountFormItem}>
                        <Image style={accountImg}
                               source={require('../../img/login/ic_password.png')}/>
                        <TextInput
                            style={[accountInput, pwdInput]}
                            maxLength={11}
                            underlineColorAndroid="transparent"
                            secureTextEntry={visible ? false : true}
                            placeholder="密码"
                            onChangeText={this.pwdChange}
                        />
                        <TouchableHighlight onPress={this.pwdIsVisible}>
                            {visibleImgNode}
                        </TouchableHighlight>

                    </View>

                    {loginBtnNode}
                    <View style={[accountFormItem, registerFormItem]}>
                        <Text style={registerDifficult}>登录遇到困难？</Text>
                        <View style={registerNull}></View>
                        <View style={registerBtn}>
                            <Text style={registerText}>注册</Text>
                        </View>

                    </View>

                </View>
                <View style={loginFooter}>
                    <View style={loginFooterLineWrap}>
                        <View style={loginFooterLineItem}></View>
                        <Text style={loginFooterLineText}>or</Text>
                        <View style={loginFooterLineItem}></View>
                    </View>
                    <View style={loginFooterSocial}>
                        <View>
                            <Image style={loginFooterSocialImg} source={require('../../img/login/ic_qq.png')}/>
                            <Text style={loginFooterSocialText}>QQ</Text>
                        </View>
                        <View>
                            <Image style={loginFooterSocialImg} source={require('../../img/login/ic_weixin.png')}/>
                            <Text style={loginFooterSocialText}>微信</Text>
                        </View>
                        <View style={loginFooterSocialImg}>
                            <Image style={loginFooterSocialImg} source={require('../../img/login/ic_weibo.png')}/>
                            <Text style={loginFooterSocialText}>微博</Text>
                        </View>

                    </View>
                </View>
            </View>
        )
    }
}