<template>
    <div v-click-outside="handleOffClick" @click="handleClick" class="justify-center z-20 flex relative items-center mx-3 cursor-pointer hover:bg-gray-200 text-gray-500 hover:text-gray-700 rounded-full w-8 h-8" :class="display==name ? ['bg-gray-200', 'text-gray-700'] : ''">
        <svg class=" fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M6 8v7h8V8a4 4 0 1 0-8 0zm2.03-5.67a2 2 0 1 1 3.95 0A6 6 0 0 1 16 8v6l3 2v1H1v-1l3-2V8a6 6 0 0 1 4.03-5.67zM12 18a2 2 0 1 1-4 0h4z"/></svg>
        <div  @click.stop="" :class="display==name ? ['opacity-100', ' mt-8 '] : ['opacity-0', 'pointer-events-none', 'mt-4']" class="absolute border border-gray-400 transition-margin top-0 right-0 py-2 bg-white rounded-md flex flex-col shadow-xl" style="width: 30rem;">
            <div class="flex w-full px-3 justify-between items-baseline">
                <h1 class="text-xl font-bold text-left text-gray-800 " style="user-select: none !important">{{name}}</h1>
                <h1 class="text-sm text-left text-brand-500 hover:underline " style="user-select: none !important">See all</h1>

            </div>
            <div class="w-full mt-2 bg-gray-200" style="height: 2px"></div>
            <div class="w-full flex flex-col">
                <div class=" flex py-2 hover:bg-blue-100 px-1">
                    <div class="fast-trans bg-red-500 text-gray-500 my-auto border-2 border-white shadow-md hover:shadow-lg h-10 w-10 hover:text-gray-700 rounded-full" >
                        
                    </div>
                    <div class="flex flex-col flex-1 justify-center min-h-10 items-start">
                        <h1 class="text-gray-900 text-left text-sm rounded -mt-1 flex items-center cursor-pointer px-2" style="display: inline-block !important" > <strong class=" hover:underline cursor-pointer">User</strong> liked your <strong>comment</strong>. </h1>
                        <h1 class="text-gray-700 text-left text-xs mt-auto rounded flex items-center px-2">
                        3 minutes ago</h1>
                    </div>
                </div>
                <div class=" flex py-2 hover:bg-blue-100 px-1">
                    <div class="fast-trans bg-red-500 text-gray-500 my-auto border-2 border-white shadow-md hover:shadow-lg h-10 w-10 hover:text-gray-700 rounded-full" >
                        
                    </div>
                    <div class="flex flex-col flex-1 justify-center items-start">
                        <h1 class="text-gray-900 text-left text-sm rounded -mt-1 flex items-center cursor-pointer px-2" style="display: inline-block !important" > <strong class=" hover:underline cursor-pointer">User</strong> liked your <strong>comment</strong> on "The {..} is the powerhouse of the cell". </h1>
                        <h1 class="text-gray-700 text-left text-xs mt-auto rounded flex items-center px-2">
                        3 minutes ago</h1>
                    </div>
                </div>
                <div class=" flex py-2 hover:bg-blue-100 px-1">
                    <div class="fast-trans bg-red-500 text-gray-500 my-auto border-2 border-white shadow-md hover:shadow-lg h-10 w-10 hover:text-gray-700 rounded-full" >
                        
                    </div>
                    <div class="flex flex-col flex-1 justify-center items-start">
                        <h1 class="text-gray-900 text-left text-sm rounded -mt-1 flex items-center cursor-pointer px-2" style="display: inline-block !important" > <strong class=" hover:underline cursor-pointer">User</strong> liked your <strong>comment</strong>: "That card is super high yield!" </h1>
                        <h1 class="text-gray-700 text-left text-xs mt-auto rounded flex items-center px-2">
                        3 minutes ago</h1>
                    </div>
                </div>
                <div class=" flex py-2 hover:bg-blue-100 px-1">
                    <div class="fast-trans bg-red-500 text-gray-500 my-auto border-2 border-white shadow-md hover:shadow-lg h-10 w-10 hover:text-gray-700 rounded-full" >
                        
                    </div>
                    <div class="flex flex-col flex-1 justify-center items-start">
                        <h1 class="text-gray-900 text-left text-sm rounded -mt-1 flex items-center cursor-pointer px-2" style="display: inline-block !important" > <strong class=" hover:underline cursor-pointer">User</strong> liked your <strong>comment</strong>. </h1>
                        <h1 class="text-gray-700 text-left text-xs mt-auto rounded flex items-center px-2">
                        3 minutes ago</h1>
                    </div>
                </div>
                <div class=" flex py-2 hover:bg-blue-100 px-1">
                    <div class="fast-trans bg-red-500 text-gray-500 my-auto border-2 border-white shadow-md hover:shadow-lg h-10 w-10 hover:text-gray-700 rounded-full" >
                        
                    </div>
                    <div class="flex flex-col flex-1 justify-center items-start">
                        <h1 class="text-gray-900 text-left text-sm rounded -mt-1 flex items-center cursor-pointer px-2" style="display: inline-block !important" > <strong class=" hover:underline cursor-pointer">User</strong> liked your <strong>comment</strong>. </h1>
                        <h1 class="text-gray-700 text-left text-xs mt-auto rounded flex items-center px-2">
                        3 minutes ago</h1>
                    </div>
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
            name: 'Notifications',
            open: false,
            animDelay: false,
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
    watch: {
        open() {
            this.animDelay = false
            setTimeout(() => {
                this.animDelay = true
            }, 100)
        }
    },
    directives: {
        ClickOutside
    }
}
</script>

<style>
.transition-margin {
    transition: margin 0.3s ease;
}
</style>