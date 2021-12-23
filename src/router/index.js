import Vue from 'vue'
import Router from 'vue-router'
import Shouye from '@/components/Shouye.vue'
import Cakes from '@/components/Cakes.vue'
import Snack from '@/components/Snack.vue'
import About_us from '@/components/About_us.vue'
import Message from '@/components/Message.vue'
import News from '@/components/News.vue'
import Yinsibh from '../components/zhinan/Yinsibh.vue'
import Guanyvxd from '../components/zhinan/Guanyvxd.vue'
import Dangjsm from '../components/zhinan/Dangjsm.vue'
import Xiugaidd from '../components/zhinan/Xiugaidd.vue'
import Shouhuots from '../components/zhinan/Shouhuots.vue'
import Myfpsfw from '../components/zhinan/Myfpsfw.vue'
import Peisongsj from '../components/zhinan/Peisongsj.vue'
import Peisongfs from '../components/zhinan/Peisongfs.vue'
import Guanyvfp from '../components/zhinan/Guanyvfp.vue'
import Tuihhxz from '../components/zhinan/Tuihhxz.vue'
import Tuikuanxz from '../components/zhinan/Tuikuanxz.vue'
import Tusutd from '../components/zhinan/Tusutd.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Shouye',
      component: Shouye
    },{
		path:'/cakes',
		name:'Cakes',
		component: Cakes
	},{
		path:'/snack',
		name:'Snack',
		component: Snack
	},{
		path:'/about_us',
		name:'About_us',
		component: About_us
	},{
		path:'/message',
		name:'Message',
		component: Message,
		children:[
			{path:'yinsibh',component:Yinsibh},
			{path:'guanyvxd',component:Guanyvxd},
			{path:'dangjsm',component:Dangjsm},
			{path:'xiugaidd',component:Xiugaidd},
			{path:'shouhuots',component:Shouhuots},
			{path:'myfpsfw',component:Myfpsfw},
			{path:'peisongsj',component:Peisongsj},
			{path:'peisongfs',component:Peisongfs},
			{path:'guanyvfp',component:Guanyvfp},
			{path:'tuihhxz',component:Tuihhxz},
			{path:'tuikuanxz',component:Tuikuanxz},
			{path:'tusutd',component:Tusutd}
		]
	},{
		path:'/news',
		name:'News',
		component: News
	}
  ]
})
