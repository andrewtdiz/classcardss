<template>
    <div class="flex w-full ml-10 h-10 hover:text-blue-500 cursor-pointer select-none" @mouseenter="hoveringCard = true" @mouseleave="hoveringCard = false" style="padding-bottom: 2px;">
        <div class="w-full items-stretch h-full flex">
        <font-awesome-icon :icon="['fas', 'sort-down']" :class="hoveringCard ? 'text-gray-700' : 'opacity-0'" class="my-auto mr-3" style="transform: translateY(-3px)" />
        <div class="w-full flex items-stretch h-full bg-gray-300 cardshadow">
            <div class="flex-1 flex items-stretch h-full w-96 relative" >
                <div class="absolute bg-red-500 w-4 h-full flex top-0 z-10">
                  
                </div>
                <div class="flex-1 ml-4 flex items-baseline my-auto overflow-hidden " >
                    <div class="absolute w-3 h-full top-0 left-0 ml-4"
                    @mouseenter="hoveringSelector = true" @mouseleave="hoveringSelector = checked ? true : false"
                    @click="checked = !checked">
                    </div>
                    <p class="specialtext">{{card.front}}</p>
                </div>
            </div>
            <div class="bg-red-500 hover:bg-red-400 flex justify-center items-center h-full w-32">
                <p class="text-white text-sm">Learning</p>
            </div>
            <div class="flex justify-center items-center h-full w-32">
                <p class="text-gray-900 text-sm">May 10</p>
            </div>
            <div class="flex justify-center items-center h-full w-32">
                <p class="text-gray-900 text-sm ml-2">54</p>
            </div>
        </div>
        </div>
    </div>

</template>

<script>
export default {
  name: 'ListViewCard',
  props: ['card', 'heading'],
  data () {
    return {
      hoveringSelector: false,
      checked: false,
      hoveringCard: false,
      colors: ['bg-blue-500', 'bg-red-500', 'bg-green-500', 'bg-orange-500', 'bg-teal-500']
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
    selectorStyle (val) {
      let arr = []
      arr.push((this.hoveringSelector || this.checked) ? ['w-8', 'mr-2']: '')
      arr.push(this.colors[val])
      return arr
    },
  },
  computed: {
    barComputed () {
      return this.hoveringSelector ? 'w-8' : 'w-4'
    },
  }
}
</script>

<style>
.cardshadow {
    box-shadow: 0 1px 0 0 rgb(228, 227, 227);
}

.cardselector{
    transition: all 0.3s;
}

.specialtext {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

</style>