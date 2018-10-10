<template>
<div>
    <h1>Home</h1>
    <button @click="goback" class="btn btn-success">Let'Go</button>
</div>
    
</template>
<script>
export default {
  methods: {
    goback() {
        // 后退一步
        // this.$router.go(-1);
        // 路径跳转
        // this.$router.replace('/menu');
        // 名字跳转
        // this.$router.replace({name:"logInLink"});
        // push跳转
        this.$router.push({name:"logInLink"});

    }
  }
};
</script>