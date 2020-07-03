<template>
  <div class="flex flex-col bg-white p-6 shadow-xl  rounded-md duration-300 ease-in-out" style="width: 60vw;"  :class="delay ? 'mt-0' : ['mt-16','opacity-0']">
        <div class="flex w-full">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mr-6 my-auto cursor-pointer fill-current text-gray-700  hover:text-white" viewBox="0 0 20 20"><path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/></svg>
            <input type="text" class="text-3xl border border-transparent outline-none appearance-none" placeholder="Search anything">
        </div>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            delay: false
        }
    },  
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
  },
  mounted() {
      this.delay = false
      setTimeout(() => {
          this.delay = true
      }, 210)
  },
}
</script>

<style>

</style>