<template>
<!-- Section-->
  <section class="py-5">
      <div class="container px-4 px-lg-5 mt-5">
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

     
  },
  created() {
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
