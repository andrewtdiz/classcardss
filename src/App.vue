<template>
  <div id="app" style="font-family: Whitney, Helvetica, Arial, sans-serif;" >
    <Modal v-if="modalValue!=''">
      
        <DeleteWindow v-if="modalValue=='delete'" />
        <CardWindow v-else-if="modalValue=='card'" />
    </Modal>
    <router-view/>
  </div>
</template>

<script>
import Modal from './components/modal.vue'
import DeleteWindow from './components/deletewindow.vue'
import CardWindow from './components/cardwindow.vue'

export default {
  components: {
    Modal,
    DeleteWindow,
    CardWindow
  },
  computed: {
    modalValue () {
      return this.$store.getters.getModalValue
    }
  }
}
</script>

<style lang="scss" >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
