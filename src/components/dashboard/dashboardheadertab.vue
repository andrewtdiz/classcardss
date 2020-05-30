<template>
  <div @click="changeDashMode"
        class="header-tab select-none"
        :class="dashMode==tabName ? 'header-tab-selected' : ''"
      >
        <slot> </slot>
        <p class="header-tab-text" :class="dashMode=='slides' ? 'text-gray-900' : 'text-gray-700'">{{tabName}}</p>
      </div>
</template>

<script>
export default {
    props: ['tabName'],
    data() {
        return {
            
        }
    },
    computed: {
        dashMode () {
            return this.$store.getters.getDashMode;
        }
    },
    methods: {
        changeDashMode() {
            this.$store.commit('setDashMode', this.tabName)
        },
    }
}
</script>

<style>

</style>