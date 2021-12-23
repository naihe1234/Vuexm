<template>
	<div id="Cds">
		<div><img src="../assets/1448452809.jpg" alt=""></div>
		<div id="Cd1">
			<ul style="font-size: 10px;font-weight: 200;">
				<li v-for="item in items1"><a :href="item.cakes">{{item.wenzi}}</a></li>
			</ul>
		</div>
		<div id="Cd2">
			<ul v-if="show1">
				<li v-for="item in items2">
					<a :href="item.cakes">
						<img :src="item.cake" alt="">
						<p>{{item.wenzi}}</p>
						<span class="Cd2_cs">
							<span class="Cd2_c1">{{item.wenzi1}}</span>
							<div><span class="Cd2_c2">元/{{item.wenzi2}}(建议<br>&nbsp;&nbsp;&nbsp;{{item.wenzi3}})</span>
							</div>
						</span>
					</a>
					<a href="#"><div class="Cd2_p1">>>  详情</div></a>
					<a href="#" class="Cd2_c3"><img src="../assets/addcart.jpg" alt=""></a>
				</li>
			</ul>
			<ul v-if="show2">
				<li v-for="item in items3">
					<a :href="item.cakes">
						<img :src="item.cake" alt="">
						<p>{{item.wenzi}}</p>
						<span class="Cd2_cs">
							<span class="Cd2_c1">{{item.wenzi1}}</span>
							<div><span class="Cd2_c2">元/{{item.wenzi2}}(建议<br>&nbsp;&nbsp;&nbsp;{{item.wenzi3}})</span>
							</div>
						</span>
					</a>
					<a href="#"><div class="Cd2_p1">>>  详情</div></a>
					<a href="#" class="Cd2_c3"><img src="../assets/addcart.jpg" alt=""></a>
				</li>
			</ul>
			<ul v-if="show3">
				<li v-for="item in items4">
					<a :href="item.cakes">
						<img :src="item.cake" alt="">
						<p>{{item.wenzi}}</p>
						<span class="Cd2_cs">
							<span class="Cd2_c1">{{item.wenzi1}}</span>
							<div><span class="Cd2_c2">元/{{item.wenzi2}}(建议<br>&nbsp;&nbsp;&nbsp;{{item.wenzi3}})</span>
							</div>
						</span>
					</a>
					<a href="#"><div class="Cd2_p1">>>  详情</div></a>
					<a href="#" class="Cd2_c3"><img src="../assets/addcart.jpg" alt=""></a>
				</li>
			</ul>
			<div id="Cd3">
					<a @click="shouye">首页</a>
					<a @click="syy">上一页</a>
					<a v-bind:class="{active:show1}">1</a>
					<a v-bind:class="{active:show2}">2</a>
					<a v-bind:class="{active:show3}">3</a>
					<a @click="xyy">下一页</a>
					<a @click="wy">尾页</a>
				</ul>
			</div>
			<div id="Cd4">订购专线：4008557667|客服电话：4008557667|客服邮箱：service@blackpool.com.cn</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				show1:true,
				show2:false,
				show3:false,
				ti1:true,
				items1:[
					{cakes:'#/cakes',wenzi:'法式浪漫'},
					{cakes:'#/cakes',wenzi:'熔岩经典'},
					{cakes:'#/cakes',wenzi:'味蕾系列'},
					{cakes:'#/cakes',wenzi:'儿童蛋糕'},
					{cakes:'#/cakes',wenzi:'水果奶油'},
					{cakes:'#/snack',wenzi:'下午茶系列'},
					{cakes:'#/cakes',wenzi:'杯子蛋糕'}
				],
				items2:[
					{cakes:'#/cakes',cake:require('../assets/1639119765.jpg'),wenzi:'【射手座·宙斯♐️】性感而洒脱 由当季红颜草莓形成红宝石冠冕 海盐豆腐芝士慕斯',wenzi1:'￥258.00',wenzi2:'4.5吋',wenzi3:'2~4人食用'},
					{cakes:'#/cakes',cake:require('../assets/1639119234.jpg'),wenzi:'【圣诞树·海盐豆腐芝士慕斯 】圣诞夜，松林赏雪 会下雪的圣诞树 一起DIY降雪',wenzi1:'￥268.00',wenzi2:'4.5吋',wenzi3:'2~4人食用'},
					{cakes:'#/cakes',cake:require('../assets/1628678892.jpg'),wenzi:'【旋转木马·海盐豆腐芝士慕斯 】圣诞旋转木马，欢乐颂歌响起 跃上木马，一起浪',wenzi1:'￥268.00',wenzi2:'4.5吋',wenzi3:'2~4人食用'},
					{cakes:'#/cakes',cake:require('../assets/1495016226.jpg'),wenzi:'荔枝覆盆子白巧克力慕斯Lychee Raspberry White Chocolate Mousse',wenzi1:'￥258.00',wenzi2:'4.5吋',wenzi3:'2~4人食用'},
					{cakes:'#/cakes',cake:require('../assets/1628678892.jpg'),wenzi:'【丘比兔之恋（粉色）】浪漫之于玫瑰，童趣之于气球，像你之于我 帕巴纳-伯爵红茶慕斯',wenzi1:'￥258.00',wenzi2:'4.5吋',wenzi3:'2~4人食用'},
				],
				items3:[
					{cakes:'#/cakes',cake:require('../assets/1602473883.jpg'),wenzi:'（赠银杏薄脆片）【低糖·银杏王国栗子蛋糕】 香草布雷-栗子慕斯， 低卡半糖·好吃又健康',wenzi1:'￥258.00',wenzi2:'4.5吋',wenzi3:'2~4人食用'},
					{cakes:'#/cakes',cake:require('../assets/1528169600.jpg'),wenzi:'【绅士】父亲节专款--巧克力绅士外衣，轻熔入口，内藏香浓榛子醇厚口感',wenzi1:'￥258.00',wenzi2:'4.5吋',wenzi3:'2~4人食用'},
					{cakes:'#/cakes',cake:require('../assets/1548822272.jpg'),wenzi:'女神之约',wenzi1:'￥268.00',wenzi2:'4.5吋',wenzi3:'2~4人食用'},
					{cakes:'#/cakes',cake:require('../assets/1619693237.jpg'),wenzi:'【莫奈花园·凤梨芒果慕斯】以甜品和心意 构筑一座莫奈花园',wenzi1:'￥258.00',wenzi2:'4.5吋',wenzi3:'2~4人食用'},
					{cakes:'#/cakes',cake:require('../assets/1627026653.jpg'),wenzi:'【狮子座·阿波罗】浩瀚星河 璀璨之光 海盐-多肉葡萄慕斯',wenzi1:'￥258.00',wenzi2:'4.5吋',wenzi3:'2~4人食用'},
				],
				items4:[
					{cakes:'#/cakes',cake:require('../assets/1629445386.jpg'),wenzi:'【处女座·艾斯特莱雅】抵达白金国度，许愿仪式开启，愿一切皆如愿',wenzi1:'￥258.00',wenzi2:'4.5吋',wenzi3:'2~4人食用'},
					{cakes:'#/cakes',cake:require('../assets/1628678743.jpg'),wenzi:'【丘比兔之恋（灰色）】浪漫之于玫瑰，童趣之于气球，像你之于我 帕巴纳-伯爵红茶慕斯',wenzi1:'￥268.00',wenzi2:'4.5吋',wenzi3:'2~4人食用'}
				]
			}
		},
		methods:{
			shouye(){
				this.show1=true;
				this.show2=false;
				this.show3=false;
			},
			syy(){
				if(this.show1){
					this.show1=false;
					this.show3=true;
				}else if(this.show2){
					this.show2=false;
					this.show1=true;
				}else{
					this.show3=false;
					this.show2=true;
				}
			},
			xyy(){
				if(this.show1){
					this.show1=false;
					this.show2=true;
				}else if(this.show2){
					this.show2=false;
					this.show3=true;
				}else{
					this.show3=false;
					this.show1=true;
				}
			},
			wy(){
				this.show3=true;
				this.show2=false;
				this.show1=false;
			}
		}
	}
</script>

<style>
	#Cds{
		margin-top: 30px;
		margin-bottom: 30px;
		padding-left: 13px;
		padding-right: 13px;
		padding-bottom: 20px;
		display: table;
		background-color: #f4f0ed;
		margin-left: auto;
		margin-right: auto;
	}
	#Cd1{
		float: left;
	}
	#Cd1 ul{
		padding-top: 10px;
		display: table;
		width: 120px;
	}
	#Cd1 ul li{
		list-style-type: none;
		padding-top: 20px;
		display: table;
	}
	#Cd2{
		float: right;
		width: 830px;
	}
	#Cd2 ul li{
		list-style-type: none;
		height: 180px;
		clear: both;
		margin-bottom: 5px;
	}
	#Cd2 ul li img{
		width: 200px;
		height: 180px;
		padding-right: 10px;
		float: left;
	}
	#Cd2 ul li p{
		padding: 5px;
		font-size: 17px;
		color: #4d4040;
	}
	#Cd2 div{
		float: left;
	}
	#Cd2 span{
		float: left;
	}
	#Cd2 .Cd2_cs{
		margin-top: 10px;
		margin-left: 400px;
	}
	#Cd2 .Cd2_c1{
		font-size: 20px;
		font-weight: bold;
	}
	#Cd2 .Cd2_c2{
		font-size: 20px;
		float: right;
	}
	#Cd2 .Cd2_p1{
		font-size: 13px;
		margin-top: 50px;
		margin-left: 10px;
	}
	#Cd2 .Cd2_c3{
		margin-top: 40px;
		margin-right: 20px;
		float: right;
	}
	#Cd2 .Cd2_c3 img{
		width: 110px;
		height: 27px;
	}
	#Cd3{
		text-align: center;
		margin-left: 320px;
		margin-top: 20px;
		
	}
	#Cd3 a{
		float: left;
		text-align: center;
		margin-right: 10px;
		cursor: pointer;
	}
	.active{
		color: #d1b9ad;
	}
	#Cd4{
		float: left;
		font-size: 10px;
		margin-top: 30px;
	}
</style>
