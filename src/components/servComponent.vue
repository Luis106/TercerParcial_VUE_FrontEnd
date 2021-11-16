<template>
   <div class="col mb-5">
      <div class="card h-100">
         
          <div class="card-body p-4">
              <div class="text-center">
                  <!-- Product name-->
                  <h5 class="fw-bolder">{{name}}</h5>
  
              </div>
          </div>
          <!-- Product actions-->
          <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <button type="button" class="text-center btn btn-outline-dark mt-auto" v-on:click="emitChangeStatus(name,id,index)" >Modificar</button>
              <button type="button"  class="text-center btn btn-outline-dark mt-auto" v-on:click="emitDelete(id,index)" >Eliminar</button>
          </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "servComponent",
  props: {
    name: {
      type: String
    },
    index: {
      type: Number
    },
    id: {
      type: String
    },

  },
  methods: {
    emitDelete(id,index){
      this.$emit("Delete", id, index);
    },
    emitChangeStatus(name,id,index){
      this.$emit("Change", name, id, index);
    }
  }
}
</script>

<style scoped>

</style>
