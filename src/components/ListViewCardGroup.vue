<template>
  <div class="rounded-md w-full mb-8 bg-white flex flex-col overflow-hidden"
  :class="dropdown ? 'max-h-10' : 'max-h-full'" >
    <div class="flex cursor-pointer items-stretch py-2 relative bg-gray-300" @click="dropdown = !dropdown"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false">
      <div  :style="{left: dropdown ? '1rem' : '0.75rem'}" class="rotato absolute h-full -mt-2 flex justify-center items-center rounded px-1 text-gray-900 hover:text-gray-700 cursor-pointer z-1"
      >
        <svg :class="dropdown ? 'rotate-90' : ''" class="rotato my-auto fill-current text-gray-800 w-3 h-3 " xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 292.362 292.362" style="enable-background:new 0 0 292.362 292.362;" xml:space="preserve">
        <g>
          <path d="M286.935,69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952,0-9.233,1.807-12.85,5.424   C1.807,72.998,0,77.279,0,82.228c0,4.948,1.807,9.229,5.424,12.847l127.907,127.907c3.621,3.617,7.902,5.428,12.85,5.428   s9.233-1.811,12.847-5.428L286.935,95.074c3.613-3.617,5.427-7.898,5.427-12.847C292.362,77.279,290.548,72.998,286.935,69.377z"/>
        </g>
        </svg>
      </div>
      <!-- <div class="ml-12 mr-2 flex justify-center items-center rounded h-7 w-7 px-1"
      :class="colors[cardGroup.color]">
        <font-awesome-icon :icon="['fas', 'book-open']" class="text-white" style="padding: 2px" size="lg"/>
      </div> -->
      <div class="ml-12 flex h-full text-lg px-2 text-gray-900 cursor-text"
      @keydown.enter="editText = false">
        <p class="select-none my-auto border-b border-t border-transparent"
        >{{cardGroup.name}}</p>
        <svg xmlns="http://www.w3.org/2000/svg" :class="hovering ? 'block' : 'hidden'" xmlns:xlink="http://www.w3.org/1999/xlink" class="cursor-pointer hover:text-gray-800 ml-3 h-3 w-3 fill-current text-gray-600 my-auto" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 383.947 383.947" style="enable-background:new 0 0 383.947 383.947;" xml:space="preserve">
        <g>
          <g>
            <g>
              <polygon points="0,303.947 0,383.947 80,383.947 316.053,147.893 236.053,67.893    "/>
              <path d="M377.707,56.053L327.893,6.24c-8.32-8.32-21.867-8.32-30.187,0l-39.04,39.04l80,80l39.04-39.04     C386.027,77.92,386.027,64.373,377.707,56.053z"/>
            </g>
          </g>
        </g>
        </svg>
      </div>
    </div>
    <div class="flex w-full items-basline ml-10 pl-3 select-none my-2">
      <div class="flex-1 flex items-baseline h-full relative" style="font-family: Whitney, Helvetica, Arial, sans-serif;">
          
          <div class="flex-1 w-96 text-xxs text-gray-500 uppercase font-semibold flex items-baseline my-auto overflow-hidden" 
          >
              <p class="specialtext text-left">FRONT</p>
          </div>
          <div class="w-48 pl-5 text-xxs text-gray-500 uppercase font-semibold flex items-baseline my-auto overflow-hidden" 
          >
              <p class="specialtext text-left">BACK</p>
          </div>
      </div>
      <div class="flex pl-8 justify-center items-center h-full w-32">
          <p class="text-white text-xxs specialtext uppercase font-semibold">STATUS</p>
      </div>
      <div class="flex pl-10 justify-center items-center h-full w-32">
          <p class=" text-xxs specialtext uppercase font-semibold">LAST VIEWED</p>
      </div>
      <div class="flex justify-center pl-8 items-center h-full w-32">
          <p class=" text-xxs specialtext uppercase font-semibold">COMMENTS</p>
      </div>
    </div>
    <div class="flex w-full items-center flex-col">
      <ListViewCard v-for="(card, ind) in cardGroup.cards" :key="ind" :cardGroupColor="cardGroup.color" :card="card"/>
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

.specialtext {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

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
  transition: all 0.1s;
}

.cardcontainer {
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

</style>
