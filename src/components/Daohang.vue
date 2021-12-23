<template>
	<div id="ds">
		<div class="daohanglan">
			<img src="../assets/logo.png" alt="">
				<ul>
					<li class="c1" @mouseenter="xs" @mouseleave="xs"><a href="#/">首页</a><br><a href="#/">HOME</a><br><transition name="guodu"><span v-show="show" class="xuanfu" key="k1"></span></transition></li>
					<li class="c1" @mouseenter="xs1" @mouseleave="xs1"><a href="#/cakes">蛋糕</a><br><a href="#/cakes">CAKES</a><transition name="guodu"><span v-show="show1" class="xuanfu" key="k2"></span></transition></li>
					<li class="c1" @mouseenter="xs2" @mouseleave="xs2"><a href="#/snack">下午茶</a><br><a href="#/snack">SNACK</a><transition name="guodu"><span v-show="show2" class="xuanfu" key="k3"></span></transition></li>
					<li class="c1" @mouseenter="xs3" @mouseleave="xs3"><a href="#/enterprise">关于我们</a><br><a href="#/about_us">ABOUT US</a><transition name="guodu"><span v-show="show3" class="xuanfu" key="k4"></span></transition></li>
					<li class="c1" @mouseenter="xs4_1" @mouseleave="xs4_2"><a href="#">其他</a><br><a href="#">Other</a>
						<transition name="guodu">
							<span v-show="show4" id="Dd1" key="k5">
								<ul>
									<li><a href="#/message/yinsibh">购物指南<br>Guide</a></li>
									<li><a href="#/news">留言页<br>Message</a></li>
								</ul>
							</span>
						</transition>
					</li>
				</ul>
			<div class="c2"><img class="tp" src="../assets/R-C.png" alt=""><a href='#'>4008-557-667</a></div>
			<ul>
				<li v-if="slzc" class="c2"><a style="cursor: pointer;" @click="dengli=true,zhuce=false">登录</a>/<a style="cursor: pointer;" @click="dengli=false,zhuce=true">注册</a></li>
				<li v-else class="c2">用户名：{{this.$store.state.uName}} <button @click="slzc=true">注销</button></li>
			</ul>
		</div>
		<div v-if="dengli" id="content" class="content">
			<h1>用户登录<img @click="dengli=false" id="guanb" src="../assets/R-C123.png" alt=""></h1>
			<form action="" method="" id="form1">
				<div class="form-group">
					<input name="yhm" type="text" class="form-control" v-model="uName" id="yhm" placeholder="请输入用户名"/>
				</div>
				<div id="yhmts"></div>
				<div class="form-group">
					<input name="mm" type="password" class="form-control" v-model="uPwd" id="mm" placeholder="请输入密码" />
				</div>
				<div id="mmts"></div>
				<div class="form-check">
					<input type="checkbox" class="form-check-input" id="jzmm" checked="checked" />
					<label class="form-check-lable" for="jzmm" id="jz">记住密码</label>
					<a href="zhuce.html">注册</a>
				</div>
				<button id="dl" type="button" class="btn btn-primary" @click="dengl">登录</button>
			</form>
		</div>
		<div v-if="zhuce" id="content" class="content">
			<h1>用户注册<img @click="zhuce=false" id="guanb" src="../assets/R-C123.png" alt=""></h1>
			<form action="" method="" id="form1">
				<div class="form-group">
					<input type="text" name="yhm" class="form-control" value="" id="yhm" placeholder="请输入用户名"/>
				</div>
				<div id="yhmts"></div>
				<div class="form-group">
					<input type="password" class="form-control" id="mm" placeholder="请输入密码" />
				</div>
				<div id="mmts"></div>
				<div class="form-group">
					<input type="password" name="mm" class="form-control" id="qrmm" placeholder="请再次输入密码" />
				</div>
				<div id="qrmmts"></div>
				<button id="zc" type="button" class="btn btn-primary">注册</button>
				<div id="yzm" class="yzm" style="margin-top: 20px;"></div>
			</form>
		</div>
	</div>
</template>

<script>
	
	const axios = require('axios');
	
	export default {
		name:'daohang',
		data(){
			return{
				show:false,
				show1:false,
				show2:false,
				show3:false,
				show4:false,
				dengli:false,
				zhuce:false,
				uName:"",
				uPwd:"",
				slzc:true,
				dh:false
			}
		},
		methods:{
			xs(){
				this.show=!this.show;
			},
			xs1(){
				this.show1=!this.show1;
			},
			xs2(){
				this.show2=!this.show2;
			},
			xs3(){
				this.show3=!this.show3;
			},
			xs4_1(){
				this.show4=true;
			},
			xs4_2(){
				this.show4=false;
			},
			xs5_1(){
				this.dh=true;
			},
			xs5_2(){
				this.dh=false;
			},
			dengl(){
				axios.get('../static/denglu.json').then((response)=>{
					console.log(this.$store.state.uName)
					for(let i of response.data.shujv){
						if(i.name == this.uName && i.pwd == this.uPwd ){
							this.$store.state.uName = this.uName;
							this.slzc=false;
							this.dengli=false;
							alert("登陆成功");
							return;
						}
					}
					alert("用户名或密码错误！");
				}).catch(function(err){
					console.log(err);
				});
			}
		}
	}
</script>

<style>
	*{
		padding: 0;
		margin: 0;
	}
	a{
		text-decoration: none;
		color: #422f2f;
		font-size: 14px;
	}
	a:hover{
		color: #ac9090;
	}
	.daohanglan{
		background-color: #FFFFFF;
		width: 100%;
		height: 80px;
		vertical-align: middle;
	}
	.daohanglan img{
		float: left;
		width: 150px;
		padding: 15px;
	}
	.c1 div{
		width: 100px;
	}
	.daohanglan ul{
		float: left;
		display: table;
		z-index: 9999;
		margin-left: 200px;
		text-align: center;
	}
	#Dd1{
		width: 300px;
		height: 150px;
		position: absolute;
		background-color: #FFFFFF;
		z-index: 99;
		border: 1px solid #ababab;
		display: block;
		position: relative;
		margin-top: 18px;
	}
	#Dd1 ul{
		margin-left: 35px;
		margin-top: 45px;
	}
	#Dd1 ul li{
		width: 100px;
		height: 50px;
		float: left;
		margin-right: 22px;
		list-style-type: none;
	}
	#Dd1 ul li a{
		font-size: 17px;
	}
	.c1{
		float: left;
		padding-top: 20px;
		margin-right: 50px;
		list-style-type: none;
		width: 75px;
		height: 59px;
	}
	.c2 a{
		font-size: 17px;
	}
	.c2{
		float: left;
		list-style-type: none;
		margin-top: 28px;
	}
	.c2 img{
		width: 20px;
		position: relative;
		padding: 3px;
	}
	.xuanfu{
		background-color: #675656;
		display: block;
		position: relative;
		margin-top: 15px;
		width: 75px;
		height: 3px;
	}
	.guodu-enter-active,.guodu-leave-active{
		transition: opacity 0.7s;
		z-index: 10;
	}
	.guodu-enter,.guodu-leave-to{
		opacity: 0;
		z-index: 10;
	}
	.content{
		width: 450px;
		border: 1px solid #000000;
		border-radius: 8px;
		text-align: center;
		padding: 8px;
		margin-top: 10%;
		margin-left: 32%;
		background-color: #ececec;
		padding: 0 30px 30px 30px;
		z-index: 99999;
		position: fixed;
	}
	#guanb{
		width: 60px;
		position: absolute;
		float: right;
		margin-left: 110px;
	}
	#content h1{
		text-align: center;
		margin-top: 7px;
		padding-bottom: 35px;
		padding-top: 10px;
	}
	.form-group{
		padding-bottom: 10px;
	}
	.form-group img{
		width: 20px;
		height: 20px;
	}
	.form-group input{
		width: 380px;
		height: 40px;
	}
	.form-check label{
		font-family: "简体";
	}
	#form1 button{
		width: 380px;
		height: 45px;
		padding-bottom: 10px;
	}
	.form-check a{
		font-family: "简体";
		margin-left: 267px;
	}
	.high{
		color:red;
	}
	.ts{
		margin-bottom: 10px;
		margin-left: 5px;
	}
	#mmts{
		margin-bottom: 10px;
		margin-left: 5px;
	}
</style>
