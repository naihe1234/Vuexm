<template>
	<div id="d5">
		<ul id="d5_1">
			<li><img style="width: 23px;" src="../assets/kefuIcon.png" alt=""><br>在线客服</li>
			<li><img src="../assets/wechatIcon.png" alt=""><br>微信</li>
			<li><img src="../assets/sinaIcon.png" alt=""><br>微博</li>
		</ul>
		<p>客服时间 09:00-21:00；提前7小时预定 深圳大部分地区免费配送</p>
		<ul id="d5_2">
			<li><a href="#">关于我们</a></li>
			<li><a href="#">联系我们</a></li>
			<li><a href="#">订购指南</a></li>
			<li><a href="#">生产许可证</a></li>
			<li><a href="#">食品经营许可证</a></li>
			<li><a href="#"><img src="../assets/govIcon.gif" alt=""></a></li>
		</ul><br>
		<span>深圳市帕蒂希亚食品有限公司 网站: www.blackpool.com.cn 邮箱: allen@blackpool.com.cn 订购热线: 4008 557 667</span>
		<hr>
		<div>Copyright 2012,Patisserie Food Company Limited .All Right Reserved</div>
	</div>
</template>

<script>
	export default{
		name:'dibu'
	}
</script>

<style>
	#d5{
		height: 320px;
		background-color: #fff8f2;
		text-align: center;
	}
	#d5_1{
		display: inline-block;
	}
	#d5_1 li{
		float: left;
		display: table;
		list-style-type: none;
		padding: 50px;
		text-align: center;
	}
	#d5_1 li img{
		width: 30px;
	}
	#d5 p{
		font-weight: bold;
	}
	#d5_2{
		display: inline-block;
	}
	#d5_2 li{
		float: left;
		display: table;
		list-style-type: none;
		padding: 8px;
		margin-top: 10px;
		text-align: center;
		vertical-align: middle;
	}
	#d5_2 li img{
		width: 20px;
	}
	#d5 span{
		font-size: 14px;
		display: block;
		padding-bottom: 20px;
	}
	#d5 hr{
		height: 10px;
	}
	#d5 div{
		font-size: 10px;
		color: #d1d1d1;
	}
</style>
