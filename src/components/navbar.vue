<template>
    <div class="fixed top-0 w-screen left-0 flex h-18 justify-center z-50 bg-white ">
      <div class="w-full px-24 flex items-center h-full relative" use:links>
          <img src="../assets/logo.png" class="h-8 w-auto mr-2 object-cover " alt="">

          <div class="flex items-baseline mt-1 w-full">

            <h1 class="text-2xl font-bold mr-6 text-gray-800"> ClassCards </h1>
            
            <Navbardropdown v-for="(route, ind) in routes" :key="ind" :route="route"/>
              
          </div>
          <router-link to="/login" class="ml-auto w-32">
          <button  replace class="text-center hover:underline navbar-text rounded py-2 px-4">
                  Log in
          </button>
          </router-link>
          
          <button class="btn w-40 btn-started font-normal hover:bg-green-600 text-white">
              Get Started
          </button>
      </div>
  </div>
</template>

<script>
import Navbardropdown from './Navbardropdown.vue'

export default {
  name: 'NavBar',
  components: {
    Navbardropdown
  },
  computed: {
    routes() {
      return this.$store.getters.getRoutes
    }
  },
  data () {
    return {
    }
  }
}
</script>
