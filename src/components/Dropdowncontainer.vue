<template>
  <div @mouseenter="setDropDown(route.name)" :style="{transition: 'all 0.3s ease', 'max-height': animDelay ? (Math.ceil(route.vals.length/4)*8)+'rem' : '0rem'}"  class="fixed mt-16 top-0 z-50 overflow-y-hidden left-0 shadow-md w-screen flex justify-center ">
        <div class="absolute w-full z-0 h-full bg-gray-100">

        </div>
        <div class="w-full z-40 flex flex-wrap items-stretch container">
            <div v-for="(val, ind) in route.vals" :key="ind" style="transition: all 0.2s ease;" class="flex  flex-col bg-opacity-50 justify-center py-2 h-32 w-1/4">
                <div :style="{transition: 'all ' +(0.3 + 0.1*(ind%4))+'s ease'}" :class="animDelay2 ? ['opacity-100', 'mb-0'] : ['opacity-0', 'mb-8']" class="flex h-full hover:bg-blue-200 hover:bg-opacity-25 rounded items-center justify-center" >
                    <div class="flex w-full items-start justify-center">
                        
                        <svg v-if="val.name=='Cards'" class="fill-current w-8 h-8 mr-4 text-blue-500 p-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="square"><rect width="24" height="24" opacity="0"/><path d="M18 21H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3zM6 5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"/></g></g></svg>
                    
                        <svg xmlns="http://www.w3.org/2000/svg" v-if="val.name=='Decks'" class="fill-current w-8 h-8 mr-4 text-blue-500 p-1" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="grid"><rect width="24" height="24" opacity="0"></rect><path d="M9 3H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM5 9V5h4v4z"></path><path d="M19 3h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-4 6V5h4v4z"></path><path d="M9 13H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zm-4 6v-4h4v4z"></path><path d="M19 13h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zm-4 6v-4h4v4z"></path></g></g></svg>
                        
                        <svg xmlns="http://www.w3.org/2000/svg" v-if="val.name=='Study Sessions'" class="fill-current w-8 h-8 mr-4 text-blue-500 p-1" viewBox="0 0 24 24" fill="inherit"><g data-name="Layer 2"><g data-name="layers"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"></rect><path d="M21 11.35a1 1 0 0 0-.61-.86l-2.15-.92 2.26-1.3a1 1 0 0 0 .5-.92 1 1 0 0 0-.61-.86l-8-3.41a1 1 0 0 0-.78 0l-8 3.41a1 1 0 0 0-.61.86 1 1 0 0 0 .5.92l2.26 1.3-2.15.92a1 1 0 0 0-.61.86 1 1 0 0 0 .5.92l2.26 1.3-2.15.92a1 1 0 0 0-.61.86 1 1 0 0 0 .5.92l8 4.6a1 1 0 0 0 1 0l8-4.6a1 1 0 0 0 .5-.92 1 1 0 0 0-.61-.86l-2.15-.92 2.26-1.3a1 1 0 0 0 .5-.92zm-9-6.26l5.76 2.45L12 10.85 6.24 7.54zm-.5 7.78a1 1 0 0 0 1 0l3.57-2 1.69.72L12 14.85l-5.76-3.31 1.69-.72zm6.26 2.67L12 18.85l-5.76-3.31 1.69-.72 3.57 2.05a1 1 0 0 0 1 0l3.57-2.05z"></path></g></g></svg>

                        <svg xmlns="http://www.w3.org/2000/svg" v-if="val.name=='Group Studying'" class="fill-current w-8 h-8 mr-4 text-blue-500 p-1" viewBox="0 0 24 24" fill="inherit"><g data-name="Layer 2"><g data-name="people"><rect width="24" height="24" opacity="0"></rect><path d="M9 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2z"></path><path d="M17 13a3 3 0 1 0-3-3 3 3 0 0 0 3 3zm0-4a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"></path><path d="M17 14a5 5 0 0 0-3.06 1.05A7 7 0 0 0 2 20a1 1 0 0 0 2 0 5 5 0 0 1 10 0 1 1 0 0 0 2 0 6.9 6.9 0 0 0-.86-3.35A3 3 0 0 1 20 19a1 1 0 0 0 2 0 5 5 0 0 0-5-5z"></path></g></g></svg>

                        <div class="flex flex-col w-3/5 items-start">
                            <h1 class="cursor-pointer text-gray-800 font-medium">{{val.name}}</h1>
                            <h1 class="cursor-pointer text-gray-500 font-normal text-left text-sm">{{val.desc}}</h1>
                        </div>

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