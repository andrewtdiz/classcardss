<template>
  <div class="fixed top-0 h-screen w-screen flex items-center cursor-pointer justify-center" >
    <div class="absolute top-0 h-screen w-screen justify-center z-1" style="background: hsla(0,0%,4%,.86)" @click="setModalValue">
    </div>
    <transition
    >
    <div class="absolute my-auto mx-auto flex flex-col items-center justify-center z-1 animate__animated" v-if="delay">
      <slot @click.stop="" ></slot>
    </div>
    </transition>
    <div class="mb-auto w-full flex flex-col items-end z-0">
      <font-awesome-icon :icon="['fas', 'times']" class="mr-6 mt-4 text-gray-600 hover:text-gray-700" @click="setModalValue" size="3x"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  data () {
    return {
      delay: false
    }
  },
  methods: {
    setModalValue () {
      this.$store.commit('setModalValue', '')
    }
  },
  mounted () {
    this.delay = true
  }
}
</script>

<style>

</style>
