<template>
  <div id="home">
    <div>Home</div>
    <img src="../assets/logo.png">
    <users v-bind:users="users"></users>
    <app-header v-bind:changeTitle="changeTitle" ></app-header>
    <app-footer v-bind:changeTitle="changeTitle"  v-on:titleChanged="updateTitle($event)"></app-footer>
  </div>
</template>

<script>
import HelloWorld from './HelloWorld'
import Users from './User'
import Header from './Header'
import Footer from './Foot'



export default {
  name: 'home',
  data(){
     return {
      users: [],
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
  },
  created(){
    this.$http.get("http://jsonplaceholder.typicode.com/users").then((data)=>{
      console.log(data);
      this.users=data.body;
    });
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
