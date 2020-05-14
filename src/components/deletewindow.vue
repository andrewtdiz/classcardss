<template>
    <div class="mx-auto my-auto flex flex-col bg-white rounded-md">
        <div class="w-full rounded-t-md flex px-4 py-3 bg-gray-100 border-b border-gray-300">
            <p class="text-2xl font-bold">Delete</p>
        </div>
        <div class="px-4 flex items-center h-20 mx-4">
            <font-awesome-icon :icon="['fas', 'times-circle']" class="mr-4 text-red-500" size="3x"/>

            <div class="flex flex-col items-start mx-2">
            <p class="text-left">You are about to delete a card, are you sure you <br> want to do this?</p>
            </div>
        </div>
        <div class="w-full rounded-b-md flex justify-end px-4 py-3 bg-gray-100 border-t border-gray-300">
            <button @click="removeCard" class="mr-4 px-4 py-2 bg-red-600 focus:outline-none text-white border rounded-md hover:bg-red-700 border-red-300 hover:border-red-500">
            <font-awesome-icon :icon="['fas', 'trash']" class="mr-3 text-white" size="sm"/>
            Delete
            </button>
            <button @click="$store.commit('setModalValue', '')" class="px-4 py-2 bg-white border rounded-md border-gray-300 focus:outline-none hover:border-gray-400">Cancel</button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'DeleteWindow',
  methods: {
    removeCard () {
      this.$store.commit('removeCard', this.cardDeleting)
      this.$store.commit('setModalValue', '')
    }
  },
  computed: {
    cardDeleting () {
      return this.$store.getters.getCardDeleting
    }
  }
}
</script>
