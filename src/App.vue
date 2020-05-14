<template>
  <div id="app" >
    <Modal v-if="modalValue!=''">
      <DeleteWindow v-if="modalValue=='delete'" />
    </Modal>
    <router-view/>
  </div>
</template>

<script>
import Modal from './components/modal.vue'
import DeleteWindow from './components/deletewindow.vue'

export default {
  components: {
    Modal,
    DeleteWindow
  },
  computed: {
    modalValue () {
      return this.$store.getters.getModalValue
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
