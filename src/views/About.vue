<template>
  <div class="flex flex-col items-center">
    <input class="border rounded-sm border-black" @keydown.enter="sendData" type="text" v-model="userInput" placeholder="Type in your message!">
    <div v-if="errorText || errorText2">
        <p v-bind:class="errorText ? 'opacity-100' : 'opacity-0'" class="text-red-500 text-sm">Card cannot be empty!</p>
        <p v-bind:class="errorText2 ? 'opacity-100' : 'opacity-0'" class="text-red-500 text-sm">Card cannot already exist!</p>
    </div>
   <div v-for="(cardGroup, ind) in cardGroups" :key="ind" class="flex flex-col my-4">
     <p>{{cardGroup.name}}</p>
     <p v-for="(card, index) in cardGroup.cards" :key="index + ind + 1" class="text-sm text-left border-b border-gray-400 hover:bg-gray-200 cursor-pointer">{{card.front}}</p>
   </div>
    

    <!-- <div v-for="(card, index) in cardArray" :key="index">
      <div class="flex items-baseline my-2">
        <p class="mx-8">{{card}}</p>
        <button class="bg-red-500 rounded px-4 py-2 text-white hover:bg-red-600" @click="deleteCard(index)" >delete item</button>
      </div>  
    </div> -->

    <button class="border border-gray-800 hover:border-gray-black rounded px-4 py-2" @click="clearItems()">clear</button>
  </div>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      userInput: '',
      cardArray: [],
      errorText: false,
      errorText2: false,
    }
  },
  computed: {
    cardGroups() {
      return this.$store.getters.getCardGroups
    }
  },
  methods: {
    sendData() {
      if (this.userInput == "")  {
        this.errorText = true
        return
      } 
      if (this.inputContains(this.userInput)) {
        this.errorText2 = true
        return
      }
      this.cardArray.push(this.userInput);
      this.userInput = ""
      this.errorText = false
    },
    deleteCard(index) {
      this.cardArray.splice(index, 1)
      this.errorText = false
    },
    clearItems() {
      this.cardArray = []
      this.errorText = false
    },
    inputContains(inp) {
      // for(let i=0; i< this.cardArray.length; i++) {
      //   if(this.cardArray[i]==inp) return true
      // }
      return (this.cardArray.filter(word => word == inp).length)
      // if (arr.length) return true
    },
  }
}
</script>

<style>

</style>
