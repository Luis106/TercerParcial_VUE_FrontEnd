<template>
  <div id="app">
    
      
       <!-- Navigation-->
    
        <!-- Header-->
        <header class="bg-dark py-5">
            <div class="container px-4 px-lg-5 my-5">
                <div class="text-center text-white">
                    <h1 class="display-4 fw-bolder">Cazafantasmas</h1>
                    <p class="lead fw-normal text-white-50 mb-0"></p>
                </div>
            </div>
        </header>

        <router-view> </router-view>

       
        <!-- Footer-->
        <footer class="py-5 bg-dark">
            <div class="container"><p class="m-0 text-center text-white">Copyright &copy; Your Website 2021</p></div>
        </footer>

   
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      currentView: "LOGIN"
    }
  },
  methods: {
    changeCurrentView(){
      if (this.currentView === "LOGIN") {
        this.currentView = "HOME";
        this.$router.push({path: "/HOME"});
      } else if(this.currentView === "HOME"){
        this.currentView = "LOGIN";
        this.$router.push({path: "/"})
      }
    }

  },
  created() {
  
  }
}

</script>

