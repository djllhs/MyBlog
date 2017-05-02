/**
 * Created by admin on 2017/5/2.
 */
import Vue from 'vue';
const loginCom = new Vue({
    el: '#login',
    data() {
    return {
        msg: 'Welcome to Your Vue.js App'
    }},
    methods: {
        loginClick: () => {
            alert(11);
        }
    }
});