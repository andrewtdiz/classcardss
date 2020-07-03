<template>
  <div  @mouseleave="setDropDown('')" class="flex px-4 items-end cursor-pointer py-1 relative">
    <div @mouseenter="setDropDown(route.name)"  class="absolute z-10 left-0 mt-5 h-16 w-full ">
    
    </div>
    <h1 class="navbar-text" :class="dropDown==route.name ? 'text-blue-500' : ''">{{route.name}}</h1>
    <svg :style="{transform: 'rotate('+(dropDown==route.name ? 180 : 0)+'deg)', transition: 'all 0.3s ease'}" :class="dropDown==route.name ? 'text-blue-500' : ''" version="1.1" class=" ml-1 mb-1 w-3 h-3 fill-current " xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 407.437 407.437" xml:space="preserve">
        <polygon points="386.258,91.567 203.718,273.512 21.179,91.567 0,112.815 203.718,315.87 407.437,112.815 "/>

    </svg>
    <!-- <div class="{$dropDown==route.name ? 'block' : 'hidden'} absolute border border-gray-300 rounded mt-10 top-0 px-2 py-1 bg-white w-64 flex flex-col shadow-lg">
        {#each route.vals as val}
            <h1 class="text-gray-800 py-2 px-2 cursor-pointer hover:text-brand-500">{val.name}</h1>
        {/each}
    </div> -->
    <Dropdowncontainer v-if="dropDown==route.name" :route="route" />
</div>
</template>

<script>
import Dropdowncontainer from './Dropdowncontainer.vue'

export default {
    props: ['route'],
    components: {
        Dropdowncontainer
    },
    computed: {
        dropDown() {
            return this.$store.getters.getDropDown
        }
    },
    methods: {
        setDropDown(val) {
            this.$store.commit('setDropDown', val)
        }
    }
}
</script>

<style>

</style>