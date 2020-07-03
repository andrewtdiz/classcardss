<template>
    <div class="fixed top-0 w-screen shadow-md left-0 flex h-16 justify-center z-50 bg-white ">
    <div class="container flex items-center h-full relative" use:links>
        <img src="../assets/logo.png" class="h-8 w-auto mr-2 object-cover " alt="">

        <div class="flex items-baseline mt-1 w-full">
        <h1 class="text-2xl font-bold mr-6 text-gray-800"> ClassCards </h1>
            <Navbardropdown v-for="(route, ind) in routes" :key="ind" :route="route"/>
          
        </div>
        <router-link to="/login" class="mr-32 w-32">
        <button  replace class="text-center navbar-text rounded py-2 px-4">
                Log in
        </button>
        </router-link>
        
        <button class="absolute right-0 btn  hover:bg-blue-600 btn-blue" style="transform: translate(0%, -50%); top: 50%">
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
