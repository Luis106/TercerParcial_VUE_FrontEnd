	import axios from "axios";

	const state = {
		ListaServicios: [],
		Token: String
	};
	const getters = {

		getListaServicios: (state) => state.ListaServicios,
		

	};
	const actions = {
		async getAllServ({commit}) {
			try {
				
				const response = await axios.get(
					`http://localhost:3000/Servicio`
				);
			

				console.log(response.data)
				

				if (response.data){
					
					commit('SET_SERV', response.data);
					
				}

			}catch (err) {
				console.log(err);
			}
		},
		
		async addServ({commit}, Serv){
			console.log(Serv)
			if (Serv !== ""){
				// add task to server
				try {
				const response = await axios.post(
					"http://localhost:3000/Servicio/create",
					{name:Serv}
				);
				if (response.status !== 500) {
					commit("CREATE_SERV", response.data)
				
				} else {
					//alert("No se pudo crear la tarea")
					console.log("No se pudo crear la tarea")
				}
				
				} catch (err){
				console.log(err);
				}
			}
		},
		async deleteServ({commit},SERV){
			console.log(SERV.Id)
			console.log(SERV.Index)

			if (SERV.Id !== ""){
				// add task to server

				try {
				const response = await axios.delete(
					"http://localhost:3000/Servicio/delete",
					{data:{_id: SERV.Id}}
				);
				if (response.status !== 500) {
					commit("DELETE_SERV", SERV.Index)
				
				} else {
					//alert("No se pudo crear la tarea")
					console.log("No se pudo crear la tarea")
				}
				
				} catch (err){
				console.log(err);
				}
			}
		},
		async ChangeServ({commit},SERV){
			console.log(SERV.Id)
			console.log(SERV.Index)
			console.log(SERV.Name)

			if (SERV.Id !== ""){
				// add task to server

				try {
				const response = await axios.put(
					"http://localhost:3000/Servicio/update",
					{_id: SERV.Id, name:SERV.Name}
				);
				console.log(response.data.result)

				///////El updaate no funciona actualizar el post
				if (response.status !== 500) {
					commit("CHANGE_SERV", {Index: SERV.Index, NewServ: response.data.result})
				
				} else {
					//alert("No se pudo crear la tarea")
					console.log("No se pudo crear la tarea")
				}
				
				} catch (err){
				console.log(err);
				}
			}
		}

	};

	const mutations = {
		SET_SERV(state, newServList) {
			
			state.ListaServicios = newServList;
			console.log(state.ListaServicios)			
		},
		CHANGE_SERV(state, serv){
				console.log(serv.Index)
				console.log(serv.NewServ)
				state.ListaServicios.splice(serv.Index, 1, serv.NewServ);
			
		},
		DELETE_SERV(state, index){
			console.log(index)
			state.ListaServicios.splice(index, 1);
			
		},
		CREATE_SERV(state, serv){
			console.log(serv.savedTask)
			state.ListaServicios.push(serv.savedTask);
			
		}
	};

	export default {
		namespaced: true,
		state : {
			...state
		},
		getters: {
			...getters
		},
		actions: {
			...actions
		},
		mutations: {
			...mutations
		}
	}
