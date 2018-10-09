<template>
  <div id="app">
    <img src="./assets/logo.png">
    <users v-bind:users="users"></users>
    <app-header v-bind:changeTitle="changeTitle" ></app-header>
    <app-footer v-bind:changeTitle="changeTitle"  v-on:titleChanged="updateTitle($event)"></app-footer>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Users from './components/User'
import Header from './components/Header'
import Footer from './components/Foot'



export default {
  name: 'App',
  data(){
     return {
      users: ["aaaa", "bbbb", "ccccc"],
      changeTitle:"use for change"
   }
  },
  components: {
    HelloWorld,
    Users,
    "app-header":Header,
    "app-footer":Footer
  },
  methods:{
    updateTitle:function(newTitle){
      console.log("updateTitle"+newTitle);
      this.changeTitle=newTitle;
    }
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
