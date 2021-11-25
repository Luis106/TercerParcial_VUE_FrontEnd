<template>
<!-- Section-->
  <section class="py-5">
      <div class="container px-4 px-lg-5 mt-5">
         <input type="submit" v-on:click="Agendar" class="fadeIn fourth" value="Agendar Cita">
          <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
              

              <ul>
                <li
                  v-for="(Servicio, index) in getListaServicios"
                  :key="Servicio._id"
                  >
                  <servComponentCli
                  :name ="Servicio.name"
                  :index="index"
                  :id="Servicio._id.toString()"
                  ></servComponentCli>
                </li>
              </ul>
              
          </div>
           
      </div>
  </section>

</template>




<script>


//import axios from "axios";
import {mapGetters} from "vuex";

// Components
//import createTaskInput from '../components/createTaskInput';
import servComponentCli from '../components/servCliComponent.vue';



export default {
name: "Servicios",
  data() {
    return {
      actualId: "",
      actualIndex: ""
      
    }
  },
  computed:{
      ...mapGetters('Servicios',[
          "getListaServicios"
         
      ])
    },
  methods: {
     async getAllServ(){
       console.log("Servicios Cliente")
        const ServList = this.$store.getters["Servicios/getListaServicios"];


        if (ServList && ServList.length === 0 ) {
          console.log("getAllServ")
          await this.$store.dispatch("Servicios/getAllServ");
        }
        console.log(ServList)
       

      },
      getUser(){
      const user = this.$store.getters["User/getUser"];
        console.log("El usuario es " + user)
        if(!user){
            console.log("User")
            this.$router.push({path: "/"});
        }else{
          console.log("Evadidó")
        }
      },
      Agendar(){
        this.$router.push({path: "/Agendar"});
      }

     
     
  },
  created() {
    this.getUser()
    this.getAllServ()
  },
  components: {
    servComponentCli
  }
}




</script>

<style scoped>

ul {
  list-style-type: none;
}
 html, body {
  background: #e9ecef;
}

.cursor-grab {
  cursor: -webkit-grab;
  cursor: grab;
}

.tasks {
  min-height: 450px;
}

</style>
