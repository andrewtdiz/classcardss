<template>
  <div class="absolute top-0 h-screen w-screen flex items-center justify-center" style="z-index: 10000 !important">
    <!-- <div class="absolute left-0 mx-2 h-12 w-12 z-10 cursor-pointer" style="top:50%; transform:translateY(-100%) rotate(180deg)">
      <svg class="w-full h-full fill-current text-gray-400 hover:text-gray-200" x="0px" y="0px"  @click="dropTag = !dropTag"
          viewBox="0 0 492.004 492.004" style="enable-background:new 0 0 492.004 492.004;" xml:space="preserve">
          <g>
          <g>
              <path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12
              c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028
              c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265
              c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"/>
          </g>
          </g>
      </svg>
    </div>
    <div class="absolute right-0 mx-2 h-12 w-12 z-10 cursor-pointer" style="top:50%; transform:translateY(-100%)">
      <svg class="w-full h-full fill-current text-gray-400 hover:text-gray-200" x="0px" y="0px"  @click="dropTag = !dropTag"
          viewBox="0 0 492.004 492.004" style="enable-background:new 0 0 492.004 492.004;" xml:space="preserve">
          <g>
          <g>
              <path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12
              c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028
              c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265
              c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"/>
          </g>
          </g>
      </svg>
    </div> -->
    <div class="mb-auto cursor-pointer flex flex-col items-end z-10 ml-auto mr-6 mt-6" @click="setModalValue('')">
      
      <svg height="329pt" class="fill-current text-gray-400 hover:text-gray-200 h-8 w-8" viewBox="0 0 329.26933 329" width="329pt" xmlns="http://www.w3.org/2000/svg">
      <path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"/>
      </svg>
    </div>
    <div class="absolute top-0 h-screen w-screen justify-center z-0" :style="{background: delay ? 'hsla(0,0%,2%,.46)' : 'rgba(0,0,0,0)', transition: 'all 0.3s ease'}" @click="clickedOut">
    </div>
    <div class="absolute mx-auto  flex cursor-auto flex-col items-center z-1 " :class="modalValue=='searching' ? ['mt-16', 'top-0', 'justify-start'] : 'justify-center'"  v-if="delay">
      <slot @click.stop="" ></slot>
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
    setModalValue (val) {
      this.$store.commit('setModalValue', val)
    },
    setEditing(val) {
        this.$store.commit('setEditing', val)
    },
    clickedOut() {
      this.setModalValue('')
      this.setEditing(false)
    },
  },
  mounted () {
    this.delay = false
    setTimeout(() => {
      this.delay = true
    }, 100)
  },
  computed: {
    modalValue () {
      return this.$store.getters.getModalValue
    }
  }
}
</script>

<style>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: scale3d(0.3, 0.3, 0.3);
  opacity: 0.4;
}
</style>
