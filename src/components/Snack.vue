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
					{cakes:'#/snack',cake:require('../assets/1554602520.jpg'),wenzi:'双拼浮云卷（芒果&草莓）860g 2卷',wenzi1:'￥198.00',wenzi2:'2吋',wenzi3:'2人食用'},
					{cakes:'#/snack',cake:require('../assets/1558233592.jpg'),wenzi:'苏丹王榴莲千层蛋糕',wenzi1:'￥188.00',wenzi2:'6吋',wenzi3:'5~8人食用'},
					{cakes:'#/snack',cake:require('../assets/1565752190.jpg'),wenzi:'海盐芝士奥利奥千层',wenzi1:'￥188.00',wenzi2:'6吋',wenzi3:'5~8人食用'},
					{cakes:'#/snack',cake:require('../assets/1594892598.jpg'),wenzi:'【芋泥肉松冰酪蛋糕】香浓芋泥紫色暴击，超超超多酥脆肉松',wenzi1:'￥188.00',wenzi2:'4.5吋',wenzi3:'2~4人食用'},
					{cakes:'#/snack',cake:require('../assets/1585317779.jpg'),wenzi:'巴斯克香草芝士蛋糕',wenzi1:'￥198.00',wenzi2:'4.5吋',wenzi3:'2~4人食用'},
				]
			}
		},
		methods:{
			
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
