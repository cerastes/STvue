Vue.component("greeting",{
template:"<a>{{namej}}dsadsadsa</a>",
data:function(){
	return{
		namej:"jimmy  "
	}
}
})
Vue.component("hh",{
template:"<a>hhhhhhhhhhhhhhhh</a>"
})
new Vue({
    el:"#vue-test",
    data:{
    	name:"这个是名字",
    	website:"http://www.baidu.com",
    	webtag:"<a href=\"http://www.baidu.com\">baidu</a>",
    	age:10,
    	isred:true,
    	showborder:true,
    	show:true,
    	users:["aa","bb","cc"]
    },
    methods:{
    	greet:function (time) {
    		return 'good    '+time;
    	},
    	add:function(){
    		this.age++;
    	},
    	consol:function(){
    		console.log(this.$refs.inputa.value);
    		this.name = this.$refs.inputa.value;
    	},
    	changecolor:function(){
    		this.isred = !this.isred;
    	},
    	changeborder:function(){
    		this.showborder = !this.showborder;
    	}
    },
    computed:{
    	allchange:function(){
    		return {
    			red:this.isred,
    			bord:this.showborder
    		};
    	}
    }
});

new Vue({
    el:"#compent",
});


