<template>
    <div v-click-outside="handleOffClick" @click="handleClick" class="justify-center flex relative items-center mx-3 cursor-pointer hover:bg-gray-200 text-gray-500 hover:text-gray-700 rounded-full w-8 h-8" :class="display==name ? ['bg-gray-200', 'text-gray-700'] : ''">
        <svg class=" fill-current w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 2C0 .9.9 0 2 0h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm14 12h4V2H2v12h4c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2z"/></svg>
        <div @click.stop="" :class="display==name ? ['opacity-100', ' mt-8 '] : ['opacity-0', 'pointer-events-none', 'mt-4']" class="absolute border border-gray-400 transition-margin top-0 right-0  px-3 py-2 w-64 bg-white rounded-md h-64 flex flex-col shadow-xl">
            <h1 class="text-xl font-bold text-left text-gray-800 " style="user-select: none !important">{{name}}</h1>
        </div>
       
    </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'

export default {
    data() {
        return {
            name: 'Inbox',
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