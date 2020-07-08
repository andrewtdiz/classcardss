<template>
  <div class="flex flex-col h-full">
        <div class="h-18 py-6 flex justify-center items-center">
          <router-link :class="sidebar ? '' : 'hidden'" to="/" class="flex-1 flex justify-center cursor-pointer">
            <div class="flex-1 flex justify-start items-center">
              <img :class="sidebar ? 'mr-1 ' : ''" src="../../assets/logo.png" class="h-6 ml-3 w-auto object-cover " alt="">

              <h1 :class="sidebar ? 'mr-6' : ''" class="text-xl font-bold text-white cursor-pointer"> ClassCards </h1>
            </div>
          </router-link>
          
          
          <svg  @click="$store.commit('setSidebar', !sidebar)" class="h-5 w-5 mr-4 ml-3 cursor-pointer fill-current text-blue-200 hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </div>

        <div class="flex-1 pt-4 w-full flex flex-col">
          <div class="w-full flex flex-col mb-3">
            <div class="flex items-center cursor-pointer bg-white w-full relative py-2 px-3" style="--bg-opacity: 0.10">
            
              <svg class="absolute h-4 w-5 cursor-pointer fill-current text-blue-100 hover:text-white" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
              <g>
                <g>
                  <path d="M503.401,228.884l-43.253-39.411V58.79c0-8.315-6.741-15.057-15.057-15.057H340.976c-8.315,0-15.057,6.741-15.057,15.057
                    v8.374l-52.236-47.597c-10.083-9.189-25.288-9.188-35.367-0.001L8.598,228.885c-8.076,7.36-10.745,18.7-6.799,28.889
                    c3.947,10.189,13.557,16.772,24.484,16.772h36.689v209.721c0,8.315,6.741,15.057,15.057,15.057h125.913
                    c8.315,0,15.057-6.741,15.057-15.057V356.931H293v127.337c0,8.315,6.741,15.057,15.057,15.057h125.908
                    c8.315,0,15.057-6.741,15.056-15.057V274.547h36.697c10.926,0,20.537-6.584,24.484-16.772
                    C514.147,247.585,511.479,236.245,503.401,228.884z M433.965,244.433c-8.315,0-15.057,6.741-15.057,15.057v209.721h-95.793
                    V341.874c0-8.315-6.742-15.057-15.057-15.057H203.942c-8.315,0-15.057,6.741-15.057,15.057v127.337h-95.8V259.49
                    c0-8.315-6.741-15.057-15.057-15.057H36.245l219.756-200.24l74.836,68.191c4.408,4.016,10.771,5.051,16.224,2.644
                    c5.454-2.41,8.973-7.812,8.973-13.774V73.847h74.002v122.276c0,4.237,1.784,8.276,4.916,11.13l40.803,37.18H433.965z"/>
                </g>
              </g>
              </svg>

              <h1 :class="sidebar ? '' : 'opacity-0'" class="ml-7 text-blue-100 cursor-pointer text-md font-medium">Home</h1>
            </div>
            <!-- <div class="flex items-center cursor-pointer w-full hover:bg-white relative py-2 px-3" style="--bg-opacity: 0.05">
              <svg xmlns="http://www.w3.org/2000/svg" class="absolute h-4 w-5 cursor-pointer fill-current text-blue-200 opacity-50 hover:text-white" viewBox="0 0 20 20"><path d="M6 6V2c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4v4a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h4zm2 0h4a2 2 0 0 1 2 2v4h4V2H8v4zM2 8v10h10V8H2z"/></svg>
              <h1 :class="sidebar ? '' : 'opacity-0'" class="ml-7 text-blue-100 cursor-pointer text-md font-medium">Decks</h1>
            </div> -->
            <!-- <div class="flex items-center cursor-pointer w-full hover:bg-white relative py-2 px-3" style="--bg-opacity: 0.05">
              <svg xmlns="http://www.w3.org/2000/svg" class="absolute h-4 w-5 cursor-pointer fill-current text-blue-200 opacity-50 hover:text-white" viewBox="0 0 20 20"><path d="M16 16v2H4v-2H0V4h4V2h12v2h4v12h-4zM14 5.5V4H6v12h8V5.5zm2 .5v8h2V6h-2zM4 6H2v8h2V6z"/></svg>
              <h1 :class="sidebar ? '' : 'opacity-0'" class="ml-7 text-blue-100 cursor-pointer text-md font-medium">Study</h1>
            </div> -->
            <div class="flex items-center cursor-pointer w-full hover:bg-white relative py-2 px-3" style="--bg-opacity: 0.05">
              <svg xmlns="http://www.w3.org/2000/svg" class="absolute h-4 w-5 cursor-pointer fill-current text-blue-200 opacity-50 hover:text-white" viewBox="0 0 20 20"><path d="M1 4h2v2H1V4zm4 0h14v2H5V4zM1 9h2v2H1V9zm4 0h14v2H5V9zm-4 5h2v2H1v-2zm4 0h14v2H5v-2z"/></svg>
              <h1 :class="sidebar ? '' : 'opacity-0'" style="white-space: nowrap" class="ml-7 text-blue-100 cursor-pointer text-md font-medium">Deck Library</h1>
            </div>
            <div @click="$store.commit('setModalValue', 'searching')" class="flex items-center cursor-pointer w-full hover:bg-white relative py-2 px-3" style="--bg-opacity: 0.05">
              <svg xmlns="http://www.w3.org/2000/svg" class="absolute h-4 w-5 cursor-pointer fill-current text-blue-200 opacity-50 hover:text-white" viewBox="0 0 20 20"><path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/></svg>
              <h1 :class="sidebar ? '' : 'opacity-0'" class="ml-7 text-blue-100 cursor-pointer text-md font-medium">Search</h1>
            </div>

          </div>

          <div class="w-full border-t border-blue-200 flex flex-col py-3" style="--border-opacity: 0.1;">
            <div class="flex items-center justify-between text-blue-200 hover:text-white cursor-pointer  w-full relative py-2 px-4" >
            
              <h1 :class="sidebar ? 'opacity-75 ' : 'opacity-0'" class=" text-sm text-md font-medium">Decks</h1>
              <svg class="h-4 w-4 fill-current" :class="hovering ? 'text-blue-200' : 'text-transparent'" :style="{transform: 'rotate('+(0)+'deg)'}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
            <div :class="sidebar ? 'opacity-75 ' : 'opacity-0'" v-for="(deck, ind) in decks" :key="ind" class="flex items-center cursor-pointer w-full hover:bg-white relative py-1 px-3" style="--bg-opacity: 0.05">
              <h1 :class="sidebar ? '' : 'opacity-0'" class="ml-7 text-blue-100 cursor-pointer text-sm font-medium">{{deck.name}}</h1>
            </div>
            <div :class="sidebar ? 'opacity-75 ' : 'opacity-0'" class="flex items-center cursor-pointer w-full relative py-1 px-3" style="--bg-opacity: 0.05">
              <h1 :class="sidebar ? '' : 'opacity-0'" class="text-blue-100 cursor-pointer text-xs opacity-50 hover:underline">Show more</h1>
            </div>
          </div>

          <div class="w-full border-t border-blue-200  flex flex-col py-3" style="--border-opacity: 0.1;">
            <div class="flex items-center justify-between text-blue-200 hover:text-white cursor-pointer  w-full relative py-2 px-4" >
            
              <h1 :class="sidebar ? 'opacity-75 ' : 'opacity-0'" class=" text-sm text-md font-medium">Archived</h1>
              <svg class="h-4 w-4 fill-current" :class="hovering ? 'text-blue-200' : 'text-transparent'" :style="{transform: 'rotate('+(0)+'deg)'}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>

          <!-- <div class="w-full border-t border-blue-200  flex flex-col py-3" style="--border-opacity: 0.1;">
            <div class="flex items-center justify-between text-blue-200 hover:text-white cursor-pointer  w-full relative py-2 px-4" >
            
              <h1 :class="sidebar ? 'opacity-75 ' : 'opacity-0'" class=" text-sm text-md font-medium">Messages</h1>
              <svg class="h-4 w-4 fill-current" :class="hovering ? 'text-blue-200' : 'text-transparent'" :style="{transform: 'rotate('+(180)+'deg)'}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
            <div class="flex items-center justify-start text-blue-200 hover:text-white cursor-pointer hover:bg-white   w-full relative py-2 px-4" style="--bg-opacity: 0.10">
              <div class="h-4 w-4  bg-red-500 border rounded-full border-white"></div>
              <h1 :class="sidebar ? 'opacity-75 ' : 'opacity-0'" class=" text-sm ml-2 font-medium" >Messages</h1>
            </div>
          </div> -->

          <div class="flex-1 w-full border-t border-blue-200 justify-end mb-2 w-full flex flex-col items-stretch" style="--border-opacity: 0.1;">
            
            <div class="flex items-center">
              
              <div class="flex flex-col w-full items-center">
                <h1 :class="sidebar ? '' : 'opacity-0'" style="white-space: nowrap;" class="text-xxs font-normal text-white">Invite friends and classmates</h1>
                <h1 :class="sidebar ? '' : 'opacity-0'" style="white-space: nowrap;" class="text-xxs mb-4 font-normal text-white">to study together</h1>
              </div>
            </div>
            
            <button :class="sidebar ? ['mx-8', 'px-8 '] : 'opacity-0'" class="common-trans2 mb-2 text-sm rounded py-1 border border-white text-white hover:text-brand-800 hover:bg-white">Invite</button>
          </div>
        </div>
      </div>
</template>

<script>
export default {
    props: ['hovering'],
    computed: {
        sidebar() {
            return this.$store.getters.getSidebar
        },
        decks() {
            return this.$store.getters.getDecks
        }
    }
}
</script>

<style scoped>
.common-trans2 {
  transition: all 0.3s ease;
}
</style>