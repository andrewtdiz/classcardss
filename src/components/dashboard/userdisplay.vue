<template>
  <div v-click-outside="handleOffClick" @click="handleClick" @mouseenter="hovering = true" @mouseleave="hovering = false" class="flex items-center ml-3 h-10 cursor-pointer">
        <div class="justify-center flex items-center  h-10 w-10" >
            <div class="fast-trans bg-red-500 text-gray-500 border-2 border-white shadow-md hover:shadow-lg hover:text-gray-700 rounded-full" :class="display==name ? ['w-9','h-9'] : hovering ? ['w-9','h-9'] : ['w-10','h-10']">

            </div>
        </div>
        <svg class="h-5 w-5 text-gray-800 fill-current" :style="{transform: 'rotate('+(0)+'deg)'}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        <div @click.stop="" :class="display==name ? ['opacity-100'] : ['opacity-0', 'pointer-events-none']" class="absolute border border-gray-400 mr-6 mt-16 transition-margin top-0 right-0 py-1 bg-white rounded-md  flex flex-col shadow-xl">
            <div class="h-full flex px-2 py-1">
                <div class="w-48 flex flex-col items-stretch">
                    <button class="text-gray-900 hover:text-white text-left text-sm rounded flex items-center px-2 py-1 hover:bg-brand-500">
                        Study settings..</button>
                    <button class="text-gray-900 hover:text-white text-left text-sm rounded flex items-center px-2 py-1 hover:bg-brand-500">
                        Change Theme</button>
                    <button class="text-gray-900 hover:text-white text-left text-sm rounded flex items-center px-2 py-1 hover:bg-brand-500">
                        Guides</button>
                    <button class="text-gray-800 hover:text-white text-left text-sm rounded flex items-center px-2 py-1 hover:bg-brand-500">
                        Invite Classmates</button>
                    
                    <div class="w-full my-1 bg-gray-200" style="height: 2px"></div>
                    <button class="text-gray-900 hover:text-white text-left text-sm rounded flex items-center px-2 py-1 hover:bg-brand-500">
                        Profile Settings..</button>
                        
                        
                    <button class="text-gray-900 hover:text-white text-left text-sm rounded flex items-center px-2 py-1 hover:bg-brand-500">
                        Sign Out</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'

export default {
    data() {
        return {
            name: 'Profile',
            hovering: false
        }
    },
    computed: {
        display() {
            return this.$store.getters.getDisplay
        },
    },
    methods: {
        handleClick() {
            if(this.display==this.name) {
                this.$store.commit('setDisplay', '')
            } else {
                this.$store.commit('setDisplay', this.name)
            }
        },
        handleOffClick() {
            if(this.display==this.name) {
                this.$store.commit('setDisplay', '')
            }
        },
    },
    directives: {
        ClickOutside
    }
}
</script>

<style scoped>
.fast-trans{
    transition: all 0.2s ease;
}
</style>