<template>
  <div class="flex flex-col " style="background: #e3e6ed">
    <div class="flex justify-center items-stretch my-2" style="padding-bottom: 2px;">
      <div class="flex items-center rounded" >
        <input @keydown.enter="sendCard" ref="inp" style="margin: 2px;" :class="inputText!='' ? '' : 'shadow-inner'" v-model="inputText" class="inputborder text-md h-full px-2 py-2 border focus:border-blue-500 rounded hover:border-gray-400 border-gray-300 bg-white appearance-none focus:outline-none" @focus="isFocused" type="text">
      </div>
      <button @click="sendCard" class="inputborder cursor-pointer px-4 focus:outline-none py-2 text-sm ml-4 bg-white border focus:border-blue-500 appearance-none rounded-md border-gray-300 hover:border-gray-400">Submit</button>
    </div>
    <div class="w-full h-full flex justify-center px-6">
        <div class="w-1/4"></div>
        <div class="flex flex-col w-full">
          <ListViewCardGroup v-for="(cardGroup, ind) in cards" :key="1000+ind" :cardGroup="cardGroup" />

        </div>
    </div>
    <div class="h-screen">
      <h1></h1>
    </div>
  </div>
</template>

<script>
import ListViewCardGroup from '../components/ListViewCardGroup.vue'

export default {
  components: {
    ListViewCardGroup
  },
  data () {
    return {
      isFocus: false,
      inputText: ''
    }
  },
  methods: {
    sendCard () {
      this.$store.commit('pushCard', { front: this.inputText, time: new Date().toLocaleString() })
      this.inputText = ''
    },
    isFocused () {
      this.isFocus = true
    }
  },
  computed: {
    cards () {
      return this.$store.getters.getCards
    }
  }
}
</script>

<style>
.inputborder:focus-within {
  box-shadow:
    0 0 0 2px #bee3f8;
}
</style>
