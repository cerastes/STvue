<template>
  <div class="users">
    <ul>
      <li v-for="user in users">
        {{user}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'users',
  // props:["users"],
  props:{
  	users:{
  		type:Array,
  		required:true
  	}
  },
  data () {
    return  {
      // users: ["aaaa", "bbbb", "ccccc"]
    }
  }
}
</script>
<!-- scoped 域  定义后 样式只能在当前页面生效 -->
<style scoped>
	
</style>
