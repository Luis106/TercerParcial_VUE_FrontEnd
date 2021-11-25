<template>
 <div class="wrapper fadeInDown">
  <div id="formContent">
    <!-- Tabs Titles -->

    <!-- Login Form -->

      <input type="text"  id="login" class="fadeIn second" name="login" placeholder="login">
      <input type="password"  id="password" class="fadeIn third" name="login" placeholder="password">
      <input type="submit" v-on:click="MLogin" class="fadeIn fourth">
   

    <!-- Remind Passowrd -->
    <div id="formFooter">
     <!-- <a class="underlineHover" href="#">Forgot Password?</a> ---->
    </div>

  </div>
</div>
</template>

<script>
  // Libraries
  import axios from 'axios';
  
 
  export default {
  name: "Login",
  data() {
    return {
      User: "",
      Password:""
    }
  },
    methods: {
      ChangesRoute(){
        
        console.log("Cambio")

      },
      async MLogin(){

        
        const user = document.getElementById("login").value 
        const con =  document.getElementById("password").value

        console.log("Login emite")
        try {
				const response = await axios.post(
					`http://localhost:3000/Usuario/`,
          {Nombre: user, Contraseña: con}
				);
				console.log(response);

        if (response.data){
          console.log("Correcta")
          await this.$store.dispatch("User/addUser", response.data);
          await this.$store.dispatch("User/getToken");


          const Admin = this.$store.getters["User/getAdmin"];
          console.log("El usuario es " + Admin)
          
          if(Admin){
             this.$router.push({path: "/Servicios"});

          }else{
              this.$router.push({path: "/VerServicios"});
          }
        
        }else{
         window.alert("Contraseña o usuario incorrecto");
        }
      
         

			}catch (err) {
				console.log(err);
			}

      },
      async getAuthToken(){

        await this.$store.dispatch("User/getToken")


      }
       
    },
    created() {
    
    }
  }
</script>

<style scoped>


</style>
