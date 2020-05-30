<template>
    <div class="flex flex-col bg-white mb-16 rounded-md " style="width: 80vw; height: 75vh;">
        <div class="w-full rounded-t-md flex  bg-gray-100 border-b border-gray-300">
            <div v-if="delay" class="w-3/5 px-8 py-5 border-r border-gray-200 flex items-basline">
                <div class="flex flex-col mr-6 pr-6 justify-center items-start h-full" >
                    <div class="bg-red-500 hover:bg-red-400 cursor-default flex items-center text-white h-full">
                        <p class="px-8 text-sm">Learning</p>
                    </div>
                    
                </div>
                <div class="h-8 w-8 mr-3">
                    <img class="w-full rounded-full h-full" src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" alt="">
                </div>
                <div class="flex flex-col mr-6 pr-6 justify-center items-start h-full">
                    <p class=" text-xxs uppercase specialtext">Created</p>
                    <p class=" text-xs hover:underline cursor-default">{{dateCreated }}</p>

                </div>
                
                <div class="flex flex-col  mr-6 pr-6 justify-center items-start h-full" >
                    <p class=" text-xxs uppercase specialtext">Next Review</p>
                    <p class=" text-xs  text-green-500  hover:underline cursor-pointer" >{{dueDate }}</p>
                    
                </div>
                <div class="flex flex-col  ml-auto justify-center items-start h-full" >
                    <div class="flex items-center text-gray-600 border border-gray-400 hover:text-gray-800 hover:border-gray-500 cursor-pointer rounded px-2 py-1">
                        
                        <svg  viewBox="-21 0 512 512" class="fill-current mr-2 w-3 h-3" xmlns="http://www.w3.org/2000/svg">
                            <path d="m453.332031 85.332031c0 38.292969-31.039062 69.335938-69.332031 69.335938s-69.332031-31.042969-69.332031-69.335938c0-38.289062 31.039062-69.332031 69.332031-69.332031s69.332031 31.042969 69.332031 69.332031zm0 0"/>
                            <path d="m384 170.667969c-47.0625 0-85.332031-38.273438-85.332031-85.335938 0-47.058593 38.269531-85.332031 85.332031-85.332031s85.332031 38.273438 85.332031 85.332031c0 47.0625-38.269531 85.335938-85.332031 85.335938zm0-138.667969c-29.417969 0-53.332031 23.9375-53.332031 53.332031 0 29.398438 23.914062 53.335938 53.332031 53.335938s53.332031-23.9375 53.332031-53.335938c0-29.394531-23.914062-53.332031-53.332031-53.332031zm0 0"/>
                            <path d="m453.332031 426.667969c0 38.289062-31.039062 69.332031-69.332031 69.332031s-69.332031-31.042969-69.332031-69.332031c0-38.292969 31.039062-69.335938 69.332031-69.335938s69.332031 31.042969 69.332031 69.335938zm0 0"/>
                            <path d="m384 512c-47.0625 0-85.332031-38.273438-85.332031-85.332031 0-47.0625 38.269531-85.335938 85.332031-85.335938s85.332031 38.273438 85.332031 85.335938c0 47.058593-38.269531 85.332031-85.332031 85.332031zm0-138.667969c-29.417969 0-53.332031 23.9375-53.332031 53.335938 0 29.394531 23.914062 53.332031 53.332031 53.332031s53.332031-23.9375 53.332031-53.332031c0-29.398438-23.914062-53.335938-53.332031-53.335938zm0 0"/>
                            <path d="m154.667969 256c0 38.292969-31.042969 69.332031-69.335938 69.332031-38.289062 0-69.332031-31.039062-69.332031-69.332031s31.042969-69.332031 69.332031-69.332031c38.292969 0 69.335938 31.039062 69.335938 69.332031zm0 0"/>
                            <path d="m85.332031 341.332031c-47.058593 0-85.332031-38.269531-85.332031-85.332031s38.273438-85.332031 85.332031-85.332031c47.0625 0 85.335938 38.269531 85.335938 85.332031s-38.273438 85.332031-85.335938 85.332031zm0-138.664062c-29.417969 0-53.332031 23.933593-53.332031 53.332031s23.914062 53.332031 53.332031 53.332031c29.421875 0 53.335938-23.933593 53.335938-53.332031s-23.914063-53.332031-53.335938-53.332031zm0 0"/>
                            <path d="m135.703125 245.761719c-7.425781 0-14.636719-3.863281-18.5625-10.773438-5.824219-10.21875-2.238281-23.253906 7.980469-29.101562l197.949218-112.851563c10.21875-5.867187 23.253907-2.28125 29.101563 7.976563 5.824219 10.21875 2.238281 23.253906-7.980469 29.101562l-197.953125 112.851563c-3.328125 1.898437-6.953125 2.796875-10.535156 2.796875zm0 0"/>
                            <path d="m333.632812 421.761719c-3.585937 0-7.210937-.898438-10.539062-2.796875l-197.953125-112.851563c-10.21875-5.824219-13.800781-18.859375-7.976563-29.101562 5.800782-10.238281 18.855469-13.84375 29.097657-7.976563l197.953125 112.851563c10.21875 5.824219 13.800781 18.859375 7.976562 29.101562-3.945312 6.910157-11.15625 10.773438-18.558594 10.773438zm0 0"/>
                        </svg>
                        <p class=" text-xs">Share</p>

                    </div>
                    
                </div>
                
            </div>
            <div v-if="delay" class="flex-1 px-6 py-5 flex items-center">
                
                <div class="flex flex-col px-4 justify-center items-start h-full" >
                    <p class=" text-xxs uppercase specialtext">Total Versions</p>
                    <p class=" text-xs hover:underline cursor-pointer" >5</p>
                    
                </div>

            </div>
            
        </div>
        <div v-if="!delay" class="w-full">
            <div class="spinner">
                <div class="bg-blue-500 rect1"></div>
                <div class="bg-blue-500 rect2"></div>
                <div class="bg-blue-500 rect3"></div>
                <div class="bg-blue-500 rect4"></div>
                <div class="bg-blue-500 rect5"></div>
            </div>
        </div>
        <div v-if="delay" class="w-full flex flex-1">
            <div class="w-3/5 px-4 py-3 flex flex-col items-start ">
                <div class="flex flex-col w-full border-b border-gray-200 relative">
                    <div class="w-full flex flex-col items-start">
                        <p class=" text-xxs uppercase pl-3 specialtext">Front</p>
                        <EditCardText :type="'front'" :card="card" />
                    </div>
                    <div class="w-full flex flex-col items-start pt-6">

                        <p class=" text-xxs uppercase pl-3 specialtext">Back</p>
                        <EditCardText :type="'back'" :card="card" />

                    </div>
                    <div class="w-full flex flex-col items-start pt-6 " :class="editing ? 'pb-24' : 'pb-6'">

                        <p class=" text-xxs uppercase pl-3 specialtext">Extra</p>
                        <EditCardText :type="'extra'" :card="card" />

                    </div>
                    <div class="absolute bottom-0 right-0 flex items-center pb-6">
                        <button v-if="editing" class="px-4 mr-2 py-2 bg-white bg-blue-500 text-white border rounded-md text-sm border-blue-500 hover:bg-blue-600 focus:outline-none hover:border-gray-400">Create Version</button>
                        <button @click="setEditing(false)" v-if="editing" class="px-4 py-2 text-gray-800 text-white border rounded-md text-sm border-gray-300 focus:outline-none hover:border-gray-400">Cancel</button>

                    </div>

                </div>
                <div class="flex flex-col w-full flex-1 relative">
                    <p class="text-xl font-medium text-gray-700 mt-4 ml-2 text-left">Comments</p>

                </div>

            </div>
            <div class="flex flex-col flex-1">
                <p class="text-xl font-medium text-gray-700 mt-4 ml-6 text-left">Versions</p>

            </div>
        </div>
        
    </div>
</template>

<script>
import EditCardText from './editcardtext.vue'
var moment = require('moment');

export default {
  name: 'CardWindow',
  components: {
      EditCardText
  },
  data() {
      return {
          delay: false,
          dateCreated: moment().clone().format("MMM Do, YYYY"),
          dueDate: moment.duration(3, 'week').humanize(true, {d: 7, w: 4}),
          
      }
  },
  methods: {
    removeCard () {
      this.$store.commit('removeCard', this.cardDeleting)
      this.$store.commit('setModalValue', '')
    },
    setEditing(val) {
        this.$store.commit('setEditing', val)
    },
  },
  computed: {
    card() {
        return this.$store.getters.getCardSelected
    },
    editing() {
        return this.$store.getters.getEditing
    },
  },
  created() {
      setTimeout(() => this.delay = true, 500)
  },
}
</script>

<style scoped>
.specialtext {
  color: rgba(119,119,119,0.8);
}

.spinner {
  margin: 100px auto;
  width: 50px;
  height: 40px;
  text-align: center;
  font-size: 10px;
}

.spinner > div {
  height: 100%;
  width: 6px;
  display: inline-block;
  margin-left: 2px;
  
  -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;
  animation: sk-stretchdelay 1.2s infinite ease-in-out;
}

.spinner .rect2 {
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
}

.spinner .rect3 {
  -webkit-animation-delay: -1.0s;
  animation-delay: -1.0s;
}

.spinner .rect4 {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}

.spinner .rect5 {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}

@-webkit-keyframes sk-stretchdelay {
  0%, 40%, 100% { -webkit-transform: scaleY(0.4) }  
  20% { -webkit-transform: scaleY(1.0) }
}

@keyframes sk-stretchdelay {
  0%, 40%, 100% { 
    transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4);
  }  20% { 
    transform: scaleY(1.0);
    -webkit-transform: scaleY(1.0);
  }
}

</style>
