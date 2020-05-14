<template>
  <div class="w-full flex flex-col mt-16 pt-2 items-stretch ">
    <div class="flex justify-center items-stretch">
      <div class="flex items-center rounded">
        <input @keydown.enter="sendCard" ref="inp" style="margin: 2px;" :class="inputText!='' ? '' : 'shadow-inner'" v-model="inputText" class="inputborder text-md h-full px-2 py-2 border focus:border-blue-500 rounded hover:border-gray-400 border-gray-300 bg-white appearance-none focus:outline-none" @focus="isFocused" type="text">
      </div>
      <button @click="sendCard" class="inputborder cursor-pointer px-4 focus:outline-none py-2 text-sm ml-4 bg-white border focus:border-blue-500 appearance-none rounded-md border-gray-300 hover:border-gray-400">Submit</button>
    </div>
    <!-- <div class="mt-6 flex justify-center w-full">
      <div class="w-96 shadow-lg flex flex-col">
        <div class="w-full px-2 py-2 flex shadow items-center justify-between">
          <p class="text-gray-800 px-2 py-2 font-semibold">Card</p>
          <div class="h-full px-5 py-2 cursor-pointer">
            <font-awesome-icon :icon="['fas', 'chevron-down']" class=" text-blue-500" size="sm"/>

          </div>

        </div>
        <div class="w-full px-6 py-6 flex flex-col items-center justify-center">
          <p class="text-left">Hello Daniel H. Lohr, I've been expecting you. Did you really think you could come into my lair unnanounced?</p>
          <p class="text-right w-full text-sm text-gray-700">11:09 PM - 1 Jan 2016</p>

        </div>
        <div class="w-full flex justify-between border-t border-gray-300">
          <button class="flex-1 py-3 text-blue-500 hover:text-blue-300 focus:outline-none">Edit</button>
          <button class="flex-1 py-3 text-blue-500 hover:text-blue-300 focus:outline-none">Delete</button>
        </div>
      </div>
    </div> -->
    <div v-for="(message, ind) in cards" :key="ind" class="my-3 flex flex-col items-stretch mx-auto w-1/2 bg-white rounded" style="box-shadow: 0 0 0 1px #cbd5e0">
        <div class="rounded-t-md flex px-4 py-3 bg-gray-100 border-b border-gray-300">
            <p class="text-2xl font-bold">Card</p>
        </div>
        <div class="px-4 flex items-center h-20 mx-4">
            <div class="flex flex-col items-start">
            <p class="text-left">{{message.front}}</p>
            </div>
        </div>
        <div class="rounded-b-md flex justify-end px-4 py-3">
            <button @click="deleteCard(ind)" class="mr-4 focus:outline-none px-4 py-2 bg-red-500 text-white border rounded-md hover:bg-red-600 border-red-300 hover:border-red-500">
            <font-awesome-icon :icon="['fas', 'trash']" class="mr-3 text-white" size="sm"/>
            Delete
            </button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      inputText: '',
      isFocus: false
    }
  },
  methods: {
    setModalValue (val) {
      this.$store.commit('setModalValue', val)
    },
    setDeletingValue (val) {
      this.$store.commit('setCardDeleting', val)
    },
    deleteCard (val) {
      this.setModalValue('delete')
      this.setDeletingValue(val)
    },
    isFocused () {
      this.isFocus = true
    },
    sendCard () {
      this.$store.commit('pushCard', { front: this.inputText, time: new Date().toLocaleString() })
      this.inputText = ''
    }
  },
  computed: {
    cards () {
      return this.$store.getters.getCards
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}

.inputborder:focus-within {
  box-shadow:
    0 0 0 2px #bee3f8,
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
