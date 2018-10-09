<template>
  <header>
    <h1>{{title}} {{changeTitle}}</h1>
  </header>
</template>
<script>
export default {
  name: "headers",
  props:{
  	changeTitle:{
  		type:String,
  		required:true
  	}
  },
  data() {
    return {
      title:"hello vue 组件 header"
    }
  },
  beforeCreate:function(){
    console.log("beforeCreate 组件实例化之前");
  },
  created:function(){
    console.log("created 组件实例化后，页面还没有显示");
  },
  beforeMount:function(){
    console.log("beforeMount 组件挂载前，dom已配置，页面任未显示 ");
  },
  mounted:function(){
    console.log("mounted 组件挂载后，此方法执行后，页面显示");
  },
  beforeUpDate:function(){
    console.log("beforeUpDate 组件更新前，虚拟dom已配置，页面任未更新 ");
  },
  updated:function(){
    console.log("updated 组件更新后，此方法执行后，页面显示");
  },
  beforeDestory:function(){
    console.log("beforeDestory 组件销毁前 ");
  },
  destoryed:function(){
    console.log("destoryed 组件销毁");
  }
}
</script>
<style scoped>
h1{
	color:red;
}
</style>