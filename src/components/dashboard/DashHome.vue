<template>
  <div class="flex-1 bg-white flex flex-col rounded-tl px-12 py-5">
    <div class="h-16 flex items-baseline">
      <h1 class="text-2xl font-bold text-gray-800">Home</h1>
      <div class="flex ml-auto items-center">
        <inboxdisplay />
        <notificationdisplay />
        <userdisplay />
        

      </div>
    </div>
    <div class="flex-1 w-full">
      <div class="w-3/5 mx-auto flex flex-col ">
        <div class="flex px-4 border-b-2 border-gray-300 flex items-baseline">
          <h1 class="text-xl font-bold mb-2 text-gray-800">Decks</h1>
          <button class="ml-auto">Tiles</button>
          <button class="ml-6 text-gray-400 hover:text-gray-800">List</button>
        </div>
        <div class="w-full flex-wrap flex">
          <router-link :to="'dashboard/'+deck.name" v-for="(deck,ind) in decks" :key="ind" class="p-4 mt-2 flex flex-col mx-4 cursor-pointer hover:bg-gray-100 text-gray-700 hover:text-gray-800 enlarge common-trans">
            <div class="h-48 w-48 rounded-lg bg-brand-500 border-2 border-gray-500 hover:border-gray-600"></div>
            <h1 class="font-bold mt-2 text-lg">{{deck.name}}</h1>
          </router-link>
          <div class="p-4 mt-2 flex flex-col mx-4 cursor-pointer hover:bg-gray-100 text-gray-700 hover:text-gray-800 enlarge common-trans">
            <div class="h-48 w-48 rounded-lg border-dashed border-2 border-gray-500 hover:border-gray-600"></div>
            <h1 class="font-bold mt-2 text-lg">Create Deck</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import userdisplay from './userdisplay.vue'
import inboxdisplay from './inboxdisplay.vue'
import notificationdisplay from './notificationdisplay.vue'

export default {
    components: {
      userdisplay,
      inboxdisplay,
      notificationdisplay
    },
    computed: {
        decks() {
        return this.$store.getters.getDecks
        },
        sidebar() {
        return this.$store.getters.getSidebar
        }
    }

}
</script>

<style>
.enlarge{
  transform: scale(1);
}

.enlarge:hover{
  transform: translateY(-5px);
}
</style>