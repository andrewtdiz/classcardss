<template>
  <div class="w-screen h-screen bg-brand-800 flex items-stretch">
    <div @mouseenter="hovering = true" @mouseleave="hovering = false" :class="sidebar ? 'w-56' : 'w-12'" class="relative common-trans2 overflow-x-hidden">
      <sidebar :hovering="hovering"/>
      
    </div>
    <div class="flex-1 flex flex-col ">
      <router-view />
    </div>

  </div>
</template>

<script>
import userdisplay from '../components/dashboard/userdisplay.vue'
import inboxdisplay from '../components/dashboard/inboxdisplay.vue'
import notificationdisplay from '../components/dashboard/notificationdisplay.vue'
import sidebar from '../components/dashboard/sidebar.vue'

export default {
  components: {
    userdisplay,
    sidebar,
    inboxdisplay,
    notificationdisplay
  },
  data () {
    return {
      hovering: false,
    }
  },
  methods: {
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

<style scoped>

.common-trans2 {
  transition: all 0.3s ease;
}

.enlarge{
  transform: scale(1);
}

.enlarge:hover{
  transform: translateY(-5px);
}

</style>
