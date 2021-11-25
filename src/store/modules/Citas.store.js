	import axios from "axios";

	const state = {
		ListaCitas: []
	};
	const getters = {

		getListaCitas: (state) => state.ListaCitas,
		
	};
	const actions = {
		async getAllCita({commit}) {
			try {
				
				const response = await axios.get(
					`http://localhost:3000/Cita`
				);
			

				console.log(response.data)
				

				if (response.data){
					
					commit('SET_CITA', response.data);
					
				}

			}catch (err) {
				console.log(err);
			}
		},
		
		async addCita({commit}, Cita){
			console.log("Store: "+Cita.token)

			
			if (Cita !== ""){
				// add task to Citaer
				try {
				const response = await axios.post(
					"http://localhost:3000/Cita/create",
					{usuario:Cita.usuario,servicio: Cita.servicio, hora: Cita.hora, ubicacion: Cita.ubicacion},
					{headers: { Authorization: `Bearer ${Cita.token}` }}
				);
				if (response.status !== 500) {
					commit("CREATE_Cita", response.data)
				
				} else {
					//alert("No se pudo crear la tarea")
					console.log("No se pudo crear la tarea")
				}
				
				} catch (err){
				console.log(err);
				}
			}
		},
		async deleteCita({commit},Cita){
			console.log(Cita.Id)
			console.log(Cita.Index)

			if (Cita.Id !== ""){
				// add task to Citaer

				try {
				const response = await axios.delete(
					"http://localhost:3000/Citaicio/delete",
					{data:{_id: Cita.Id}}
				);
				if (response.status !== 500) {
					commit("DELETE_Cita", Cita.Index)
				
				} else {
					//alert("No se pudo crear la tarea")
					console.log("No se pudo crear la tarea")
				}
				
				} catch (err){
				console.log(err);
				}
			}
		},
		async ChangeCita({commit},Cita){
			console.log(Cita.Id)
			console.log(Cita.Index)
			console.log(Cita.Name)

			if (Cita.Id !== ""){
				// add task to Citaer

				try {
				const response = await axios.put(
					"http://localhost:3000/Citaicio/update",
					{_id: Cita.Id, name:Cita.Name}
				);
				console.log(response.data.result)

				///////El updaate no funciona actualizar el post
				if (response.status !== 500) {
					commit("CHANGE_Cita", {Index: Cita.Index, NewCita: response.data.result})
				
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
		SET_CITA(state, newCitaList) {
			
			state.ListaCitas =newCitaList;
			console.log(state.ListaCitas)
					
				
		},
		CHANGE_Cita(state, Cita){
				console.log(Cita.Index)
				console.log(Cita.NewCita)
				state.ListaCitas.splice(Cita.Index, 1, Cita.NewCita);
			
		},
		DELETE_Cita(state, index){
			console.log(index)
			state.ListaCitas.splice(index, 1);
			
		},
		CREATE_Cita(state, Cita){
			console.log(Cita.savedTask)
			state.ListaCitas.push(Cita.savedTask);
			
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
