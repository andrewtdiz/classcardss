<template>
  <div @mouseenter="setDropDown(route.name)" :style="{transition: 'all 0.3s ease', 'max-height': animDelay ? (Math.ceil(route.vals.length/4)*8)+'rem' : '0rem'}"  class="fixed mt-16 top-0 z-50 overflow-y-hidden left-0 shadow-md w-screen flex justify-center ">
        <div class="absolute w-full z-0 h-full bg-brand-100">

        </div>
        <div class="w-full z-40 flex flex-wrap items-stretch container">
            <div v-for="(val, ind) in route.vals" :key="ind" style="transition: all 0.2s ease;" class="flex  flex-col bg-opacity-50 justify-center h-32 w-1/4">
                <div :style="{transition: 'all ' +(0.3 + 0.1*(ind%4))+'s ease'}" :class="animDelay2 ? ['opacity-100', 'mb-0'] : ['opacity-0', 'mb-8']" class="flex h-full hover:bg-blue-200  items-center justify-center" >
                    <div class="w-10 h-10  border-2 shadow-md border-white mr-2 bg-brand-800 rounded-full">
                    
                    </div>
                    <div class="flex flex-col items-start">
                        <h1 class="cursor-pointer text-gray-800">{{val.name}}</h1>
                        <h1 class="cursor-pointer text-gray-800 text-sm font-normal text-gray-600">{{val.desc}}</h1>
                    </div>
                </div>
                
            </div>
        </div>
</div>
</template>

<script>
export default {
    props: ['route'],
    methods: {
        setDropDown(val) {
            this.$store.commit('setDropDown', val)
        }
    },
    computed: {
        dropDown() {
            return this.$store.getters.getDropDown
    }
    },
    data() {
        return {
            animDelay: false,
            animDelay2: false,
        }
    },
    mounted() {
        this.animDelay = false
        setTimeout(() => {
            this.animDelay = true
            
        }, 10);
        this.animDelay2 = false
        setTimeout(() => {
            this.animDelay2 = true
            
        }, 250);
    }
}
</script>

<style>

</style>