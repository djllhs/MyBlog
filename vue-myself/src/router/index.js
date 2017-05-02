/**
 * Created by admin on 2017/5/2.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

const router = new VueRouter({
    routes:[
    {path: '/', name: 'login', component:  require('../components/login/Login.vue')},
    {path: '/home', name: 'home', component:  require('../components/Home.vue')}
]});
export default  router;
