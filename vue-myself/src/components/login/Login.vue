<template>
    <div id="login">
        <img class="background" src="../../assets/img/fpic9008.jpg" alt="">
        <div class="log">
            <img src="../../assets/img/You-and-Me.png" alt="">
        </div>
        <div class="form">
            <div class="input-user">
                <i class="iconfont">&#xe619;</i>
                <input type="text" placeholder="请输入用户名或手机号">
            </div>
            <div class="input-pwd">
                <i class="iconfont">&#xe617;</i>
                <input type="password" autocomplete="new-password" placeholder="请输入密码">
            </div>
            <div class="login-btn" v-on:click="loginClick">登录</div>
        </div>
    </div>
</template>
<script src="./index.js"></script>
<style lang="scss">
    @import "../../assets/scss/font.scss";
    .background{
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: -1;
        /*opacity: 0.7;*/
        filter: blur(2px);
    }
    .log{
        width: 100%;
        height: 50px;
        text-align: center;
        line-height: 50px;
        position: relative;
        top: 150px;

    }
    .log img{
        width: 60%;
    }
    .form{
        width: 100%;
        position: absolute;
        z-index: 1;
        bottom: 10%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        /*outline: 1px solid red;*/
    }
    .input-user, .input-pwd{
        width: 300px;
        height: 40px;
        background-color: rgba(255, 255, 255, 0.21);
        border-radius: 20px;
        margin: auto;
        /*border: 1px solid firebrick;*/
        text-align: center;
        margin-top: 20px;
        color: white;
    }

    .input-user input, .input-pwd input{
        width: 80%;
        height: 40px;
        border: none;
        outline: none;
        background: none;
        /*background-color: rgba(255, 255, 255, 0.21);*/
        border-radius: 20px;
        margin: auto;
        color: white;
        font-size: 14px;

    }

    input::-webkit-input-placeholder{
        color: #c5c5c5;
    }
    .login-btn{
        width: 80%;
        height: 40px;
        border-radius: 20px;
        background-image: linear-gradient(90deg,#E83265,#F9613A);
        margin: auto;
        margin-top: 20px;
        text-align: center;
        line-height: 40px;
        color: white;
    }
    /*input:-webkit-autofill, textarea:-webkit-autofill, select:-webkit-autofill {*/
    /*background: none !important;*/
    /*!*background-image: none;*!*/
    /*color: white;*/
    /*}*/
</style>