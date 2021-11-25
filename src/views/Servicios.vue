<template>

<!-- Section-->
        <section class="py-5">
            <div class="container px-4 px-lg-5 mt-5">
              <input type="submit" v-on:click="citas" class="fadeIn fourth" value= "Ver Citas">
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    

                  <div class="col mb-5">
                        <div class="card h-100">
                
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <!-- Product name-->
                                    <h5 class="fw-bolder">Crear</h5>
                                    <!-- Product reviews-->
                                    <div class="d-flex justify-content-center small text-warning mb-2">
                                    <input type="text"  id="CajaServNam" class="" name="CajaServNam" placeholder="Servicio">
                                       
                                    </div>

                                </div>
                            </div>
                            <!-- Product actions-->
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <button type="button"  class="text-center btn btn-outline-dark mt-auto" v-on:click="crear()" >Crear</button>
                            </div>
                        </div>
                    </div>



                    <div class="col mb-5">
                        <div class="card h-100">
                
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <!-- Product name-->
                                    <h5 class="fw-bolder">Editar</h5>
                                    <!-- Product reviews-->
                                    <div class="d-flex justify-content-center small text-warning mb-2">
                                    <input type="text"  id="CajaServ" class="" name="CajaServ" placeholder="Servicio">
                                       
                                    </div>
                                    
                                </div>
                            </div>
                            <!-- Product actions-->
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <button type="button"  class="text-center btn btn-outline-dark mt-auto" v-on:click="actualizar()" >Modificar</button>
                            </div>
                        </div>
                    </div>

                    <ul>
                     
                      <li
                        v-for="(Servicio, index) in getListaServicios"
                        :key="Servicio._id"
                        >
                        <servComponent
                        :name ="Servicio.name"
                        :index="index"
                        :id="Servicio._id.toString()"

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
import servComponent from '../components/servComponent.vue';



export default {
name: "Servicios",
  data() {
    return {
      actualId: "",
      actualIndex: ""
      
    }
  }, 
  computed:{
      ...mapGetters('Servicios',
        [
            "getListaServicios",
        ]
      )
    },
  methods: {
     async getAllServ(){
       
        const ServList = this.$store.getters["Servicios/getListaServicios"];


        if (ServList && ServList.length === 0 ) {
          console.log("getAllServ")
          await this.$store.dispatch("Servicios/getAllServ");
        }
        console.log(ServList)
       

      },
      async deleteTask(id, index){
        console.log(index)
        this.actualId = id
        this.actualIndex = index
        await this.$store.dispatch("Servicios/deleteServ", {Id: this.actualId,  Index: this.actualIndex} );
       
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
          await this.$store.dispatch("Servicios/ChangeServ", {Id: this.actualId,  Index: this.actualIndex, Name: name})
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
      citas(){
          this.$router.push({path: "/CITA"});
      }
  },
  created() {
    this.getAllServ()
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
