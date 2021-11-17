<template>
 <div class="wrapper fadeInDown">

   

  <div id="formContent">
    
    <!-- Tabs Titles -->

    <!-- Login Form -->

           

      <label >Select list:</label>
        <select class="form-control" id="TaskStatus" aria-label=".form-select-lg example" >
       
          <option v-for="(Servicio) in ServList" :key="Servicio._id">{{ Servicio.name }}</option>
      
        </select>
      <input type="text"  id="Lugar" class="fadeIn second" name="login" placeholder="Hora">
      <input type="text"  id="Hora" class="fadeIn third" name="login" placeholder="Lugar">
      <input type="submit" v-on:click="Crear" class="fadeIn fourth">
   

    <!-- Remind Passowrd -->
    <div id="formFooter">
     <!-- <a class="underlineHover" href="#">Forgot Password?</a> ---->
    </div>

  </div>
</div>
</template>

<script>
  // Libraries
  
  
 
  export default {
  name: "Agendar",
  data() {
    return {
      ServList: {}
    }
  },
  computed:{
      
    },
    methods: {
      async getAllServ(){

        
       
        this.ServList = this.$store.getters["Servicios/getListaServicios"];

        if (this.ServList && this.ServList.length === 0 ) {
          console.log("getAllServ")
          await this.$store.dispatch("Servicios/getAllServ");
          this.ServList = this.$store.getters["Servicios/getListaServicios"];
        }

       
        console.log(this.ServList)
      },
      async Crear(){
        const lugar = document.getElementById("Lugar").value
        const Hora = document.getElementById("Hora").value
        const Serv = document.getElementById("TaskStatus").value
        console.log(lugar + Hora + Serv)
        await this.$store.dispatch("Citas/addCita", {usuario: "usuario",  servicio: Serv, hora: Hora, ubicacion: lugar} );


      }
    },
    
    created() {
      this.getAllServ()
      
    }
  }
</script>

<style scoped>


</style>
