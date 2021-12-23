import Vue from 'vue'
import vuex from 'vuex'

import Shouye_store from '../stores/Yemian/Shouye_store.js'
import yemian2_store from '../stores/Yemian/yemian2_store.js'
import yemian3_store from '../stores/Yemian/yemian3_store.js'
import yemian4_store from '../stores/Yemian/yemian4_store.js'

Vue.use(vuex)

export default new vuex.Store({
	state:{
		
	},
	modules:{
		Shouye:Shouye_store
	}
})