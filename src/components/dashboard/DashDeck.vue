<template>
  <div class="flex-1 bg-white flex flex-col items-stretch rounded-tl ">
    <div class="flex items-baseline px-5 pt-5 bg-white">
        <div class="flex flex-col items-start">
            <h1 class="text-2xl font-bold text-gray-800">Biochemistry</h1>
            <h1 class="text-gray-800 text-sm">The official deck for the Class of 2022 at UMMSOM</h1>
            
        </div>
      <div class="flex ml-auto items-center">
        <inboxdisplay />
        <notificationdisplay />
        <userdisplay />
        

      </div>
    </div>
    <div class="flex w-full px-5 pt-3 border-b border-gray-400 bg-white">
        <div @click="selected = ind" v-for="(option,ind) in options" :key="ind" class="mr-6 flex items-center relative justify-center py-2 text-gray-600 cursor-pointer hover:text-gray-800">
            <svg v-if="option=='Browse'" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 cursor-pointer mr-2 stroke-current " :class="selected==ind ? 'text-gray-800' : 'text-redz-500'" viewBox='0 0 512 512'><title>ionicons-v5-o</title><line x1='160' y1='144' x2='448' y2='144' style='fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px'/><line x1='160' y1='256' x2='448' y2='256' style='fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px'/><line x1='160' y1='368' x2='448' y2='368' style='fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px'/><circle cx='80' cy='144' r='16' style='fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px'/><circle cx='80' cy='256' r='16' style='fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px'/><circle cx='80' cy='368' r='16' style='fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px'/></svg>
            <svg v-if="option=='Study'" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 cursor-pointer mr-2 stroke-current " :class="selected==ind ? 'text-gray-800' : 'text-redz-500'"  width='512' height='512' viewBox='0 0 512 512'><title>ionicons-v5-a</title><rect x='64' y='176' width='384' height='256' rx='28.87' ry='28.87' style='fill:none;stroke-linejoin:round;stroke-width:32px'/><line x1='144' y1='80' x2='368' y2='80' style='stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px'/><line x1='112' y1='128' x2='400' y2='128' style='stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px'/></svg>
            <svg v-if="option=='Chat'" class="h-4 w-4 cursor-pointer mr-2 stroke-current fill-current" :class="selected==ind ? 'text-gray-800' : 'text-redz-500'"  xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'><title>ionicons-v5-q</title><path d='M408,64H104a56.16,56.16,0,0,0-56,56V312a56.16,56.16,0,0,0,56,56h40v80l93.72-78.14a8,8,0,0,1,5.13-1.86H408a56.16,56.16,0,0,0,56-56V120A56.16,56.16,0,0,0,408,64Z' style='fill:none;stroke-linejoin:round;stroke-width:32px'/><circle cx='160' cy='216' r='32'/><circle cx='256' cy='216' r='32'/><circle cx='352' cy='216' r='32'/></svg>
            <h1 :class="selected==ind ? 'text-gray-800' : ''" class="cursor-pointer text-sm">{{option}}</h1>
            <div class="absolute w-full group-hover:bg-gray-300 " :class="selected==ind ? 'bg-brand-500' : ''" style="bottom: -1px; height: 2px;"></div>
        </div>
    </div>
    <div class="flex w-full items-stretch flex-col">
      <div class="flex items-basline select-none my-2 px-12">
      <div class="flex-1 flex items-baseline h-full relative">
          
          <div class="flex-1 text-xxs text-gray-500 border-r border-l border-gray-300  uppercase font-semibold flex items-baseline my-auto overflow-hidden" 
          >
              <p class="specialtext text-left">FRONT</p>
          </div>
          <div class="w-48 text-xxs text-gray-500 pl-4 border-r border-l border-gray-300  uppercase font-semibold flex items-baseline my-auto overflow-hidden" 
          >
              <p class="specialtext">BACK</p>
          </div>
      </div>
      <div class="flex justify-center border-r border-l border-gray-300 items-center h-full w-32">
          <p class="text-xxs specialtext ">STATUS</p>
      </div>
      <div class="flex justify-center border-r border-l border-gray-300 items-center h-full w-32">
          <p class=" text-xxs specialtext">LAST VIEWED</p>
      </div>
      <div class="flex justify-center border-r border-l border-gray-300 items-center h-full w-32">
          <p class=" text-xxs specialtext">COMMENTS</p>
      </div>
    </div>
      <div class="flex flex-col items-stretch px-12 ">
        <ListViewCard v-for="(card, ind) in cards" :key="ind+25" :cardGroupColor="card.color" :card="card"/>

      </div>
    </div>
    
  </div>
</template>

<script>
import ListViewCard from '../listviewcard.vue'
import userdisplay from './userdisplay.vue'
import inboxdisplay from './inboxdisplay.vue'
import notificationdisplay from './notificationdisplay.vue'

export default {
    components: {
    userdisplay,
    ListViewCard,
    inboxdisplay,
    notificationdisplay
  },
  data() {
      return {
          selected: 0,
          options: ['Browse', 'Study', 'Chat']
      }
  },
  computed: {
    cards() {
      return this.$store.getters.getCards
    }
  }
}
</script>

<style>

</style>