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
  }
}
</script>
<style scoped>
h1{
	color:red;
}
</style>