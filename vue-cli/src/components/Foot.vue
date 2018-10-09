<template>
  <footer v-on:click="callBackTitle">
    <h1>{{title}} {{changeTitle}}</h1>
  </footer>
</template>
<script>
export default {
  name: "foot",
  props:{
  	changeTitle:{
  		type:String,
  		required:true
  	}
  },
  data() {
    return {
      title: "hello vue 组件  foot copy right 2017 jimmy"
    }
  },
  methods:{
  	callBackTitle:function(){
  		this.$emit("titleChanged","title changed");
  	}
  }
}
</script>
<style scoped>
h1 {
  color: gray;
}
footer{
	background:green;
}
</style>
