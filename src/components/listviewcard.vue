<template>
    <div class="flex w-full h-10 hover:text-blue-500 cursor-pointer select-none" @click="selectCard(card.id)" @mouseenter="hoveringCard = true" @mouseleave="hoveringCard = false" style="padding-bottom: 2px;">
        <div class="w-full items-stretch h-full flex">
        <font-awesome-icon :icon="['fas', 'sort-down']" :class="hoveringCard ? 'text-gray-700' : 'opacity-0'" class="my-auto mr-3" style="transform: translateY(-3px)" />
        <div class="w-full border-b border-gray-300 flex items-stretch h-full bg-white hover:bg-gray-100 ">
            <div class="flex-1 flex items-stretch h-full w-96 relative" style="width: 800px">
                <div class="absolute bg-transparent w-8 h-full flex top-0 z-10 pointer-events-auto" @mouseenter="hoveringSelector = true" @mouseleave="hoveringSelector = false">
                  
                </div>
                <div :class="selectorStyle" class="h-full cardselector bg-brand-500 relative overflow-hidden"
                >
                  <div class="absolute w-4 bg-white h-4" style="left:1rem; top: 1rem; border-radius: 2px; transform: translate(-50%, -25%)"></div>
                </div>
                <div class="flex-1 text-sm border-r border-gray-300 flex items-baseline h-full flex-col justify-center items-start overflow-hidden" 
                :class="hoveringSelector ? 'ml-2' : 'ml-2'">
                    <p class="specialtext" v-html="card.front"></p>
                </div>
                <div class="text-sm w-48 items-baseline h-full flex flex-col justify-center items-start overflow-hidden" 
                :class="hoveringSelector ? 'ml-2' : 'ml-2'">
                    <p class="specialtext text-left" v-html="card.back"></p>
                </div>
            </div>
            <div class="bg-red-500 hover:bg-red-400 flex justify-center items-center h-full w-32">
                <p class="text-white text-sm font-medium">Learning</p>
            </div>
            <div class="flex text-gray-900 hover:text-gray-600 hover:bg-gray-100 justify-center items-center h-full w-32">
                <p class=" text-sm">May 10</p>
            </div>
            <div class="flex justify-center text-gray-900 hover:text-gray-600 hover:bg-gray-100 items-center h-full w-32">
                <p class=" text-sm">54</p>
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
      cardGroupColor: 'bg-blue-500',
      colors: ['bg-blue-500', 'bg-red-500', 'bg-green-500', 'bg-orange-500', 'bg-teal-500']
    }
  },
  methods: {
    setModalValue (val) {
      this.$store.commit('setModalValue', val)
    },
    setCardSelected (val){ 
      this.$store.commit('setCardSelected', val)
    },
    setDeletingValue (val) {
      this.$store.commit('setCardDeleting', val)
    },
    deleteCard (val) {
      this.setModalValue('delete')
      this.setDeletingValue(val)
    },
    selectCard(val) {
      this.setModalValue('card')
      this.setCardSelected(val)
    },
  },
  computed: {
    barComputed () {
      return this.hoveringSelector ? 'w-8' : 'w-4'
    },
    selectorStyle () {
      let arr = []
      arr.push(this.hoveringSelector ? 'w-8' : 'w-2')
      arr.push(this.colors[this.cardGroupColor])
      return arr
    },
  }
}
</script>

<style>
.cardshadow {
    box-shadow: 0 1px 0 0 rgb(228, 227, 227);
}

.cardselector{
    transition: all 0.2s;
}

.specialtext {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

</style>