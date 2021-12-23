<template>
	<div id="News">
		<span class="Ne">留言页</span>
		<span class="New1"><img src="../assets/21680255.jpg" alt=""></span>
		<span class="New2">
			<div class="New2_1" v-html="mess">
				
			</div>
		</span>
		<span class="New3">
			<textarea name="" v-model="neir" placeHolder="请输入留言" id=""></textarea>
			<br>
			<input type="button" @click="tijiao" value="提交">
		</span>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				nam1:'',
				neir:'',
				mess:"",
				nowtime:''
			}
		},
		methods:{
			tijiao(data){
				this.nowtime = new Date().toLocaleString()
				this.nam1 = this.$store.state.uName;
				if(this.nam1!=null){
					if(this.neir!=null){
						this.mess += "<span class='New2_1_1'><p>用户名："+this.nam1+"</p><p class='New2_1_2'>"+this.neir+"</p><span class='New2_1_3'>"+this.nowtime+"</span></span>";
						this.neir='';
					}else{
						alert("留言不能为空！");
					}
				}else{
					alert("请先登录！");
				}
			}
		}
	}
</script>

<style>
	#News{
		text-align: center;
	}
	#News .New1 img{
		width: 80%;
	}
	#News .Ne{
		width: 80%;
		height: 47%;
		font-size: 100px;
		padding-top: 200px;
		font-weight: bold;
		color: #ffffff;
		position: absolute;
		background-color: #000000;
		opacity: 0.5;
		z-index: 9;
		border: 1px solid #000000;
	}
	#News .New2{
		display: table;
		width: 100%;
		height: 630px;
	}
	#News .New2 .New2_1{
		width: 70%;
		height: 500px;
		padding: 30px;
		overflow-y: scroll;
		background-color: #ecd8c3;
		border-radius: 5px;
		margin-left: 13%;
		margin-top: 20px;
		border: 4px solid #9d8f81;
	}
	#News .New3 textarea{
		width: 640px;
		padding: 20px 30px 20px 30px;
		height: 160px;
		border-radius: 10px;
		margin-top: 8px;
		background-color: #ffe9d2;
		border: 0;
	}
	#News .New3 input{
		margin-top: 20px;
		width: 640px;
		height: 60px;
		margin-bottom: 30px;
	}
	#News .New2_1 .New2_1_1{
		display: table;
		width: 100%;
		height: 140px;
		border-radius: 7px;
		background-color: #FFFFFF;
		border: 1px solid #000000;
		margin-bottom: 10px;
		box-shadow:0px 0px 12px rgba(0,0,0,0.3);
	}
	#News .New2_1 .New2_1_1 p{
		padding-top: 10px;
	}
	#News .New2_1 .New2_1_2{
		height: 60px;
		padding-left: 10px;
		padding-bottom: 10px;
		padding-right: 10px;
	}
	#News .New2_1 .New2_1_3{
		float: right;
		padding-right: 30px;
	}
</style>
