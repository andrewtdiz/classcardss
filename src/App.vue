<template>
  <div id="app">
    <Modal v-if="modalValue!=''">
      
        <DeleteWindow v-if="modalValue=='delete'" />
        <CardWindow v-else-if="modalValue=='card'" />
        <SearchWindow v-if="modalValue=='searching'" />
    </Modal>
    <router-view/>
  </div>
</template>

<script>
import Modal from './components/modal.vue'
import DeleteWindow from './components/deletewindow.vue'
import CardWindow from './components/cardwindow.vue'
import SearchWindow from './components/searchwindow.vue'

export default {
  components: {
    Modal,
    DeleteWindow,
    CardWindow,
    SearchWindow
  },
  computed: {
    modalValue () {
      return this.$store.getters.getModalValue
    }
  }
}
</script>

<style >
@import url('https://fonts.googleapis.com/css?family=Inter');

#app {
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
