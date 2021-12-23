<template>
	<div id="Mds">
		<span id="Md2"><img src="../assets/bg1.jpg" alt=""></span>
		<ul>
			<li><h2>购物指南</h2></li>
			<li><router-link v-bind:class="{active:show}" to="/message/yinsibh">隐私保护政策</router-link></li>
			<li><router-link v-bind:class="{active:show1}" to="/message/guanyvxd">关于下单</router-link></li>
			<li><router-link v-bind:class="{active:show2}" to="/message/dangjsm">蛋糕券使用说明</router-link></li>
			<li><router-link v-bind:class="{active:show3}" to="/message/xiugaidd">修改订单</router-link></li>
			<li><router-link v-bind:class="{active:show4}" to="/message/shouhuots">温馨收货提示</router-link></li>
			<li><h2>配送说明</h2></li>
			<li><router-link v-bind:class="{active:show5}" to="/message/myfpsfw">免运费配送范围说明</router-link></li>
			<li><router-link v-bind:class="{active:show6}" to="/message/peisongsj">配送时间</router-link></li>
			<li><router-link v-bind:class="{active:show7}" to="/message/peisongfs">配送方式</router-link></li>
			<li><h2>售后服务</h2></li>
			<li><router-link v-bind:class="{active:show8}" to="/message/guanyvfp">关于发票</router-link></li>
			<li><router-link v-bind:class="{active:show9}" to="/message/tuihhxz">退换货须知</router-link></li>
			<li><router-link v-bind:class="{active:show10}" to="/message/tuikuanxz">退款须知</router-link></li>
			<li><router-link v-bind:class="{active:show11}" to="/message/tusutd">投诉通道</router-link></li>
		</ul>
		<span id="Md1">
			<div id="Md1_1">
				<router-view></router-view>
			</div>
		</span>
	</div>
</template>

<script>
	export default{
		name:'Message',
		data(){
			return{
				
			}
		}
	}
</script>

<style>
	#Mds{
		height: 1150px;
	}
	#Mds ul{
		margin-top: 40px;
		margin-left: 13%;
		float: left;
	}
	#Mds ul li{
		padding: 5px;
		list-style-type: none;
	}
	#Md2 img{
		display: table;
		text-align: center;
		margin-left: 150px;
	}
	#Md1{
		width: 900px;
		height: 500px;
		position: absolute;
		margin-top: 45px;
		margin-left: 7%;
		background-color: #ebebeb;
	}
	#Md1_1{
		width: 800px;
		height: 400px;
		margin-top: 50px;
		overflow-y: scroll;
		margin-left: 50px;
	}
	.active{
		color: #d1b9ad;
	}
</style>
