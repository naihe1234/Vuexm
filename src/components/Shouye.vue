<template>
	<div id="ds">
		<div id="d1" @mouseover="xsjt" @mouseleave="ycjt">
			<ul>
				<transition v-bind:name="dongh">
					<li v-if="show1" key="l1">
						<a href="#/cakes"><img src="../assets/100sh.jpg" alt=""></a>
					</li>
					<li v-else-if="show2" key="l2">
						<a href="#/cakes"><img src="../assets/110sh.jpg" alt=""></a>
					</li>
					<li v-else-if="show3" key="l3">
						<a href="#/cakes"><img src="../assets/120sh.jpg" alt=""></a>
					</li>
					<li v-else key="l4">
						<a href="#/cakes"><img src="../assets/130sh.jpg" alt=""></a>
					</li>
				</transition>
			</ul>
			<transition name="dongh1">
				<div v-if="jt1">
					<div id="jiantou1" @click="dianji1"><img src="../assets/jiantou1.png" alt=""></div>
					<div id="jiantou2" @click="dianji2"><img src="../assets/jiantou.png" alt=""></div>
				</div>
			</transition>
		</div>
		<div id="d2">
			<ul>
				<li v-for="item in items"><a :href="item.cakes"><img :src="item.cake" alt=""><br><span>{{item.wenzi}}</span><br><span>{{item.wenzi1}}</span></a></li>
			</ul>
		</div>
		<div id='d3'>
			<p class="p1">经典推荐</p>
			<p class="p2">BEST SELLER</p>
			<img src="../assets/1523.png" alt="">
		</div>
		<div id="d4">
			<ul>
				<li @mouseover="huaru1" @mouseleave="huachu1" :style="st1">
					<a href="#/cakes"><img src="../assets/25C4.jpg" alt="">
					<div>雪域牛乳芝士<br><p>经典之作 热销多年</p><p class="p1">￥218</p></div></a>
				</li>
				<li @mouseover="huaru2" @mouseleave="huachu2" :style="st2">
					<a href="#/cakes"><img src="../assets/06DC.jpg" alt="">
					<div>璀璨星愿<br><p>光影粲动，点亮星愿</p><p class="p1">￥436</p></div></a>
				</li>
				<li @mouseover="huaru3" @mouseleave="huachu3" :style="st3">
					<a href="#/cakes"><img src="../assets/5336.jpg" alt="">
					<div>光之雪域牛乳<br><p>浪漫造型至臻风味，十年经典之作</p><p class="p1">￥398</p></div></a>
				</li>
				<li @mouseover="huaru4" @mouseleave="huachu4" :style="st4">
					<a href="#/cakes"><img src="../assets/5224.jpg" alt="">
					<div>魔鬼蛋糕<br><p>浓郁巧巧 无法抵挡的魔鬼诱惑</p><p class="p1">￥218</p></div></a>
				</li>
			</ul>
			<ul>
				<li @mouseover="huaru5" @mouseleave="huachu5" :style="st5">
					<a href="#/cakes"><img src="../assets/2287.jpg" alt="">
					<div>环游世界<br><p>五星好评 9种口味一次过瘾</p><p class="p1">￥258</p></div></a>
				</li>
				<li @mouseover="huaru6" @mouseleave="huachu6" :style="st6">
					<a href="#/cakes"><img src="../assets/3573.jpg" alt="">
					<div>雪域莓莓燕麦芝士<br><p>清新莓果邂逅雪域燕麦芝士</p><p class="p1">￥298</p></div></a>
				</li>
				<li @mouseover="huaru7" @mouseleave="huachu7" :style="st7">
					<a href="#/cakes"><img src="../assets/2903.jpg" alt="">
					<div>巧克力松露·熠彩<br><p>巧克力爱好者的福音</p><p class="p1">￥258</p></div></a>
				</li>
				<li @mouseover="huaru8" @mouseleave="huachu8" :style="st8">
					<a href="#/cakes"><img src="../assets/0027.jpg" alt="">
					<div>提拉米苏·写意<br><p>80%的雪域老友也爱这一款</p><p class="p1">￥298</p></div></a>
				</li>
			</ul>
			<ul>
				<li @mouseover="huaru9" @mouseleave="huachu9" :style="st9">
					<a href="#/cakes"><img src="../assets/3579.jpg" alt="">
					<div>雪域芒芒燕麦芝士<br><p>甄选OATLY燕麦露 纵享芒芒香甜</p><p class="p1">￥298</p></div></a>
				</li>
				<li @mouseover="huaru10" @mouseleave="huachu10" :style="st10">
					<a href="#/cakes"><img src="../assets/2486.jpg" alt="">
					<div>王子<br><p>小王子的专属宠溺</p><p class="p1">￥218</p></div></a>
				</li>
				<li @mouseover="huaru11" @mouseleave="huachu11" :style="st11">
					<a href="#/cakes"><img src="../assets/4342.jpg" alt="">
					<div>白玉麻麻<br><p>芝麻配上白玉丸 清香软糯很有料</p><p class="p1">￥218</p></div></a>
				</li>
				<li @mouseover="huaru12" @mouseleave="huachu12" :style="st12">
					<a href="#/cakes"><img src="../assets/5206.jpg" alt="">
					<div>栗栗蒙布朗<br><p>软糯栗泥加蓝莓，纵享法式滋味</p><p class="p1">￥258</p></div></a>
				</li>
			</ul>
		</div>
		<div id="more">
			<span><a href="#/cakes">更多蛋糕 More+</a></span>
		</div>
	</div>
</template>

<script>
export default {
	name:'Shouye',
	data(){
		return{
			jt1:false,
			show:true,
			show1:true,
			show2:false,
			show3:false,
			show4:false,
			dongh:'xianshi',
			st1:'',
			st2:'',
			st3:'',
			st4:'',
			st5:'',
			st6:'',
			st7:'',
			st8:'',
			st9:'',
			st10:'',
			st11:'',
			st12:'',
			items:[
				{cakes:'#/cakes',cake:require('../assets/cake.png'),wenzi:'BLACK POOL CAKE',wenzi1:'黑池蛋糕'},
				{cakes:'#/snack',cake:require('../assets/ice_scream.png'),wenzi:'AFTERNOON TEA',wenzi1:'下午茶'},
				{cakes:'#/enterprise',cake:require('../assets/salon.png'),wenzi:'TASTE SALON',wenzi1:'赏味沙龙'}
			]
			
		}
	},
	mounted(){
		this.add();
	},
	methods:{
		xsjt(){
			this.show=false;
			this.jt1=true;
		},
		ycjt(){
			this.show=true;
			this.jt1=false;
		},
		add(){
			setInterval(()=>{
				if(this.show){
					this.dongh='xianshi';
					if(this.show1){
						this.show2=true,
						this.show1=false
					}else if(this.show2){
						this.show3=true,
						this.show2=false
					}else if(this.show3){
						this.show4=true,
						this.show3=false
					}else{
						this.show1=true,
						this.show4=false
					}
				}
			},5000)
		},
		dianji1(){
			this.dongh='xianshi';
			if(this.show1){
				this.show4=true,
				this.show1=false
			}else if(this.show2){
				this.show1=true,
				this.show2=false
			}else if(this.show3){
				this.show2=true,
				this.show3=false
			}else{
				this.show3=true,
				this.show4=false
			}
		},
		dianji2(){
			this.dongh='xianshi1';
			if(this.show1){
				this.show4=true,
				this.show1=false
			}else if(this.show2){
				this.show1=true,
				this.show2=false
			}else if(this.show3){
				this.show2=true,
				this.show3=false
			}else{
				this.show3=true,
				this.show4=false
			}
			this.dongh='xianshi1';
		},
		huaru1(){
			this.st1='background-color:#ffdbf0;box-shadow:0px 5px 12px rgba(0,0,0,0.3)';
		},
		huachu1(){
			this.st1='undefined';
		},
		huaru2(){
			this.st2='background-color:#ffdbf0;box-shadow:0px 5px 12px rgba(0,0,0,0.3)';
		},
		huachu2(){
			this.st2='undefined';
		},
		huaru3(){
			this.st3='background-color:#ffdbf0;box-shadow:0px 5px 12px rgba(0,0,0,0.3)';
		},
		huachu3(){
			this.st3='undefined';
		},
		huaru4(){
			this.st4='background-color:#ffdbf0;box-shadow:0px 5px 12px rgba(0,0,0,0.3)';
		},
		huachu4(){
			this.st4='undefined';
		},
		huaru5(){
			this.st5='background-color:#ffdbf0;box-shadow:0px 5px 12px rgba(0,0,0,0.3)';
		},
		huachu5(){
			this.st5='undefined';
		},
		huaru6(){
			this.st6='background-color:#ffdbf0;box-shadow:0px 5px 12px rgba(0,0,0,0.3)';
		},
		huachu6(){
			this.st6='undefined';
		},
		huaru7(){
			this.st7='background-color:#ffdbf0;box-shadow:0px 5px 12px rgba(0,0,0,0.3)';
		},
		huachu7(){
			this.st7='undefined';
		},
		huaru8(){
			this.st8='background-color:#ffdbf0;box-shadow:0px 5px 12px rgba(0,0,0,0.3)';
		},
		huachu8(){
			this.st8='undefined';
		},
		huaru9(){
			this.st9='background-color:#ffdbf0;box-shadow:0px 5px 12px rgba(0,0,0,0.3)';
		},
		huachu9(){
			this.st9='undefined';
		},
		huaru10(){
			this.st10='background-color:#ffdbf0;box-shadow:0px 5px 12px rgba(0,0,0,0.3)';
		},
		huachu10(){
			this.st10='undefined';
		},
		huaru11(){
			this.st11='background-color:#ffdbf0;box-shadow:0px 5px 12px rgba(0,0,0,0.3)';
		},
		huachu11(){
			this.st11='undefined';
		},
		huaru12(){
			this.st12='background-color:#ffdbf0;box-shadow:0px 5px 12px rgba(0,0,0,0.3)';
		},
		huachu12(){
			this.st12='undefined';
		}
	}
}
</script>


<style>
	::-webkit-scrollbar{
		display: none;
	}
	*{
		padding: 0;
		margin: 0;
	}
	#d1{
		height: 500px;
	}
	#d1 li{
		list-style-type: none;
	}
	#d1 li img{
		width: 100%;
		position: absolute;
	}
	.xianshi-enter-active,.xianshi-leave-active{
		transition: all 1s ease;
	}
	.xianshi-enter{
		transform: translateX(100%);
	}
	.xianshi-leave-to{
		transform: translateX(-100%);
	}
	.xianshi1-enter-active,.xianshi1-leave-active{
		transition: all 1s ease;
	}
	.xianshi1-enter{
		transform: translateX(-100%);
	}
	.xianshi1-leave-to{
		transform: translateX(100%);
	}
	.dongh1-enter-active,.dongh1-leave-active{
		transition: opacity 0.5s;
	}
	.dongh1-enter,.dongh1-leave-to{
		opacity: 0;
	}
	#jiantou1{
		float: left;
		z-index: 9;
		position: relative;
		margin-top: 180px;
	}
	#jiantou2{
		float: right;
		z-index: 9;
		position: relative;
		margin-top: 180px;
	}
	#d2{
		text-align: center;
	}
	#d2 ul li{
		float: left;
		list-style-type: none;
		padding-left: 55px;
		padding-right: 98px;
	}
	#d2 ul li img{
		width: 50px;
		padding: 10px;
	}
	#d2 ul li span{
		font-size: 15px;
		font-weight: 600;
	}
	#d2 ul{
		margin-top: 50px;
		display: inline-block;
	}
	#d3{
		padding-top: 35px;
		text-align: center;
	}
	#d3 .p1{
		font-size: 17px;
		font-weight: 600;
		display: inline-block;
		padding-left: 10px;
		color: #6b5656;
		letter-spacing: 10px;
	}
	#d3 .p2{
		padding-top: 10px;
		font-size: 17px;
		font-weight: 600;
	}
	#d3 img{
		padding-top: 5px;
		width: 200px;
	}
	#d4{
		height: 1250px;
		text-align: center;
	}
	#d4 ul{
		text-align: center;
		display: inline-block;
	}
	#d4 ul li{
		float: left;
		list-style-type: none;
		width: 250px;
		height: 360px;
		margin: 20px;
		text-align: center;
	}
	#d4 ul li img{
		width: 250px;
	}
	#d4 ul li div{
		width: 250px;
		height: 100px;
		color: #5a4848;
		font-size: 18px;
		font-weight: bold;
		margin-top: 20px;
	}
	#d4 ul li p{
		width: 250px;
		color: #b9b8b8;
		font-size: 16px;
		margin-top: 6px;
	}
	#d4 ul li .p1{
		font-size: 14px;
		color: #dfcf1d;
		margin-top: 8px;
	}
	.donghua-enter-active,.donghua-leave-active{
		transition: opacity 1s;
	}
	.donghua-enter,.donghua-leave-to{
		opacity: 1;
	}
	#more{
		display: flex;
		text-align: center;
		height: 200px;
	}
	#more span{
		border: 1px solid #cecdcb;
		width: 950px;
		height: 50px;
		margin-left: auto;
		margin-right: auto;
		margin-top: 30px;
		padding-top: 27px;
		background-color: #fff8f2;
	}
	#more span a{
		margin-top: 20px;
	}
</style>
