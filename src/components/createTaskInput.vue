<template>
  <div class="card mb-3 cursor-grab">
          <div class="card-body">
            <span class="badge bg-primary text-white mb-2">{{tag}}</span>
            <p class="mb-0">{{description}}</p>
            <div>
          <button type="button" v-on:click="emitChangeStatus(index)" class="btn btn-primary  btn-sm" >Modificar</button>
          <button type="button" v-on:click="emitDelete(index, status )" class="btn btn-secondary  btn-sm">Eliminar</button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "createTaskInput",
  methods: {
    emitCreateTaskEvent(){
      this.$emit("AddTask")
    }
  }
}
</script>

<style scoped>

</style>
