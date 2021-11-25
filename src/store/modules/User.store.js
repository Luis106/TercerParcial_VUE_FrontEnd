import axios from "axios";

	const state = {
		User: String,
        Token : String,
        Admin: Boolean
	};
	const getters = {

		getUser: (state) => state.User,
        gettoken: (state) => state.Token,
        getAdmin: (state) => state.Admin
		
	};
	const actions = {
        addUser({commit}, user){

            console.log(user)
            if(user){
                console.log("UserSET")
                commit('SET_USER', user);
            }
        },
		
		async getToken({commit}) {
			
			try {
				
				const response = await axios.get(
					`http://localhost:3000/auth/sing`,
				
				);
                console.log("Token")
				console.log(response.data);

				if (response.data){
				
					commit('SET_TOKEN', response.data);
				}

			}catch (err) {
				console.log(err);
			}
		}


		

	};

	const mutations = {
        SET_TOKEN(state, token) {
			state.token = token.jwt;
			console.log("state.token")
			console.log(state.token)
			
		},
        SET_USER(state, User) {
			state.User = User.Usuario;
            state.Admin = User.Administrador;
			console.log("state.token")
			console.log( state.Admin)
            console.log(state.User)
			
		},

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
