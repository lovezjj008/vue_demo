<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <header class = "header">
       <router-link :to="{'path': '/'}">home</router-link>
       <router-link :to="{'path': '/page2', query: {'id': '123'}}">page2</router-link>
       <router-link :to="{'path': '/dolist', query: {'id': '1234'}}">dolist</router-link>
    </header>
    <div class = "row">
      <div class = "col-md-1">
        <div class = "nav"  @click="routelink">nav</div>
      </div>
      <div class = "col-md-11"> 
        <router-view/>
      </div>
    </div>
   
  </div>
</template>

<script>

import * as demo from './demo';
export default {
  name: 'App',
  data () {
    return {
      data1: '222',
      green: 'green'
    }
  },
  mounted() {
    console.log(demo.a)
     console.log(demo.b)
  },
  methods: {
    routelink () {
      this.$router.push({'path': '/page1', query: {id: 999}})
    }
  },
}
</script>

<style scope="scope">
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
.header {
  height: 40px;
  line-height: 40px;
  background: #ddd;
  padding: 0px 30px;
}
.nav {
  height: 600px;
  background: red;
}
</style>
