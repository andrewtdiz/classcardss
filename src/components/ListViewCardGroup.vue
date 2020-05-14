<template>
  <div class="rounded-md w-full pb-5 mb-8 bg-white flex flex-col overflow-hidden shadow"
  :class="dropdown ? 'max-h-16' : 'max-h-screen'">
    <div class="h-16 flex items-center py-4"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false">
      <div class="flex justify-center items-center rounded h-8 px-1 text-gray-900 hover:text-gray-700 cursor-pointer z-10"
      @click="dropdown = !dropdown">
        <font-awesome-icon :icon="['fas', 'sort-down']" :class="dropdown ? ['mb-0', 'mr-2', 'rotate-90'] : 'mb-2'" class="rotato ml-2 mr-4"/>

      </div>
      <div class="-ml-1 mr-2 flex justify-center items-center rounded h-8 px-1"
      :class="colors[cardGroup.color]">
        <font-awesome-icon :icon="['fas', 'book-open']" class="text-white" style="padding: 2px" size="lg"/>
      </div>
      <div class="flex text-lg px-2 text-gray-900 font-bold cursor-text"
      @keydown.enter="editText = false">
        <p class="select-none border-b border-t border-white"
        >{{cardGroup.name}}</p>
        <font-awesome-icon :icon="['fas', 'pencil-alt']" :class="hovering ? ['text-gray-600', 'hover:text-gray-700', 'cursor-pointer'] : 'opacity-0'" class="my-auto ml-3" size="sm" />
      </div>
    </div>
    <div class="flex w-full items-center flex-col">
      <ListViewCard v-for="(card, ind) in cardGroup.cards" :key="ind" :card="card"/>
    </div>
  </div>
</template>

<script>
import ListViewCard from './listviewcard.vue'

export default {
  props: ['cardGroup'],
  components: {
    ListViewCard
  },
  data () {
    return {
      inputText: '',
      groupName: 'Ortho Lecture 1',
      editText: false,
      hovering: false,
      dropdown: true,
      colors: ['bg-blue-500', 'bg-red-500', 'bg-green-500', 'bg-orange-500', 'bg-teal-500']
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.rotate-90 {
  transform: rotate(-90deg) translateX(1px) translateY(-4px);
}

.rotato {
  transition: all 0.3s;
}

.cardcontainer {
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

</style>
