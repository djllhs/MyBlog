
<!--<template>-->
  <!--<div id="app">-->
    <!--<img src="./assets/logo.png">-->
    <!--<h1></h1>-->
    <!--<h2>Essential Links</h2>-->
    <!--<ul>-->
      <!--<li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>-->
      <!--<li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>-->
      <!--<li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>-->
      <!--<li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>-->
    <!--</ul>-->
    <!--<h2>Ecosystem</h2>-->
    <!--<ul>-->
      <!--<li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>-->
      <!--<li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>-->
      <!--<li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>-->
      <!--<li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>-->
    <!--</ul>-->
  <!--</div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
  <!--name: 'app',-->
  <!--data () {-->
    <!--return {-->
      <!--msg: 'Welcome to Your Vue.js App'-->
    <!--}-->
  <!--}-->
<!--}-->
<!--</script>-->

<!--<style lang="scss">-->
<!--#app {-->
  <!--font-family: 'Avenir', Helvetica, Arial, sans-serif;-->
  <!-- -webkit-font-smoothing: antialiased;-->
  <!-- -moz-osx-font-smoothing: grayscale;-->
  <!--text-align: center;-->
  <!--color: #2c3e50;-->
  <!--margin-top: 60px;-->
<!--}-->

<!--h1, h2 {-->
  <!--font-weight: normal;-->
<!--}-->

<!--ul {-->
  <!--list-style-type: none;-->
  <!--padding: 0;-->
<!--}-->

<!--li {-->
  <!--display: inline-block;-->
  <!--margin: 0 10px;-->
<!--}-->

<!--a {-->
  <!--color: #42b983;-->
<!--}-->
<!--</style>-->
<template>
  <div id="app">
    <img src="./assets/img/myself-login.jpg" alt="">
    <div class="form">
      <div class="input-user">
        <input type="text">
      </div>
      <div class="input-pwd">
        <input type="text">
      </div>
      <div class="login-btn">登录</div>
    </div>
  </div>
</template>


<script>
    export default {
        name: 'app',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>
<style lang="scss">
  #app {
    width: 100%;
    height: 100%;
    /*display: flex;*/
    /*align-items: flex-end;*/
  }

  #app img{
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 0;
    /*opacity: 0.1;*/
    filter: blur(10px);
  }
  .form{
    width: 100%;
    /*height: auto;*/
    position: absolute;
    z-index: 1;
    /*margin: 0 auto;*/
    outline: 1px solid  red;
    bottom: 10%;
    display: flex;
    flex-direction: column;

  }
  .input-user, .input-pwd{
    width: 80%;
    /*padding: 10px;*/

    margin: auto;
    /*border-radius: 20%;*/
    margin-top: 20px;
  }

  .input-user input, .input-pwd input{
    width: 100%;
    height: 40px;
    /*outline: 1px solid rebeccapurple;*/
    border: none;
    background-color: rgba(255, 255, 255, 0.24);
    border-radius: 20px;
    margin: auto;
    color: white;
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

</style>