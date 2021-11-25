<template>

<!-- Section-->
        <section class="py-5">
            <div class="container px-4 px-lg-5 mt-5">
                <input type="submit" v-on:click="Serv" class="fadeIn fourth" value= "Servicios">
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                  


                    <ul>
                     
                      <li
                        v-for="(Cita, index) in getListaCitas"
                        :key="Cita._id"
                        >
                        <servComponent
                        :Usuario ="Cita.Usuario"
                        :Servicio ="Cita.Servicio"
                        :Hora ="Cita.Hora"
                        :Ubicacion ="Cita.Ubicacion"
                        :index="index"
                        :id="Cita._id.toString()"
                        
                        @Delete="deleteTask"
                        @Change="changeStatus"
                        ></servComponent>
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
import servComponent from '../components/citaComponent.vue';



export default {
name: "Citas",
  data() {
    return {
      actualId: "",
      actualIndex: ""
      
    }
  },
  computed:{
      ...mapGetters('Citas',[
          "getListaCitas"
         
      ])
    },
  methods: {
     async getAllCita(){
       
        const CitasList = this.$store.getters["Citas/getListaCitas"];


        if (CitasList && CitasList.length === 0 ) {
          console.log("getAllServ")
          await this.$store.dispatch("Citas/getAllCita");
        }
        console.log(CitasList)
       

      },
      async deleteTask(id, index){
        console.log(index)
        this.actualId = id
        this.actualIndex = index
        await this.$store.dispatch("Servicios/deleteCita", {Id: this.actualId,  Index: this.actualIndex} );
       
      },
       changeStatus(name, id,index){
        document.getElementById("CajaServ").value = name ;
        //console.log(id)
        this.actualId = id
        this.actualIndex = index
        //console.log(index)
        


        
      },
      async actualizar(){
        if(this.actualId !== ""){

          const name = document.getElementById("CajaServ").value;
          await this.$store.dispatch("Citaicios/ChangeCita", {Id: this.actualId,  Index: this.actualIndex, Name: name})
          this.actualId = ""
          this.actualIndex = ""

        }else{
          window.alert("No se ha indicado servicio a modificar");


        }
      

    
      },
      async crear(){
        const name = document.getElementById("CajaServNam").value;
        if(name !== ""){
          
          await this.$store.dispatch("Servicios/addServ",  name )

        }else{
           window.alert("No se posible crear servicios en blanco");
        }
       
    
      },
      Serv(){
          this.$router.push({path: "/Servicios"});
      }

     
  },
  created() {
    this.getAllCita()
  },
  components: {
    servComponent
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
