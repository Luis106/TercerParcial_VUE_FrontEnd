import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Modules import
import tasks from '@/store/modules/tasks.store';
import Servicios from '@/store/modules/Servicios.store';
import Citas from '@/store/modules/Citas.store';
import User from '@/store/modules/User.store';

export default new Vuex.Store({
	state: {},
	mutations: {},
	modules: {
		tasks: tasks,
		Servicios: Servicios,
		Citas: Citas,
		User: User
	}
})
