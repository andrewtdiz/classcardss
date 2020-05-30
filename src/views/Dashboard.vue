<template>
  <div class="flex flex-col max-h-screen overflow-x-hidden overflow-y-hidden" style="max-width: 100vw">
    <!-- <div class="flex justify-center items-stretch my-2" style="padding-bottom: 2px;">
      <div class="flex items-center rounded" >
        <input @keydown.enter="sendCard" ref="inp" style="margin: 2px;" :class="inputText!='' ? '' : 'shadow-inner'" v-model="inputText" 
        class="inputborder text-md h-full px-2 py-2 border focus:border-blue-500 rounded hover:border-gray-400 border-gray-300 bg-white appearance-none focus:outline-none" @focus="isFocused" type="text">
      </div>
      <button @click="sendCard" class="inputborder cursor-pointer px-4 focus:outline-none py-2 text-sm ml-4 bg-white border focus:border-blue-500 appearance-none rounded-md border-gray-300 hover:border-gray-400">Submit</button>
    </div> -->
    <div class="max-h-screen max-w-screen overflow-y-scroll  overflow-x-hidden h-screen w-screen flex justify-center px-6" style="max-width: 100vw">
        
        <DashboardSideBar class="z-10" :sidebar="sidebar" />
        
        <div v-if="dashMode=='Home'" class="absolute top-0 left-0 flex flex-col z-0 rotato overflow-x-hidden pt-24" :class="sidebar ? ['pl-104'] : ['ml-2', 'pl-24']" >
          <ListViewCardGroup v-for="(cardGroup, ind) in cards" :key="1000+ind" :cardGroup="cardGroup" />

        </div>

        <div v-if="dashMode=='Browse'" class="absolute top-0 left-0 flex flex-col z-0 rotato overflow-x-hidden pt-24" :class="sidebar ? ['pl-104'] : ['ml-2', 'pl-24']" >
          <div class="flex items-basline ml-10 pl-3 select-none my-2">
            <div class="flex-1 flex items-baseline h-full relative" style="font-family: Whitney, Helvetica, Arial, sans-serif;">
                
                <div class="flex-1 w-96 text-xxs text-gray-500 uppercase font-semibold flex items-baseline my-auto overflow-hidden"  style="color: #8e9297"
                >
                    <p class="specialtext">FRONT</p>
                </div>
                <div class="w-48 pl-5 text-xxs text-gray-500 uppercase font-semibold flex items-baseline my-auto overflow-hidden"  style="color: #8e9297"
                >
                    <p class="specialtext">BACK</p>
                </div>
            </div>
            <div class="flex pl-8 justify-center items-center h-full w-32">
                <p class="text-white text-xxs text-gray-500 uppercase font-semibold" style="color: #8e9297">STATUS</p>
            </div>
            <div class="flex pl-10 text-gray-900 hover:text-gray-500 hover:bg-gray-100 justify-center items-center h-full w-32">
                <p class=" text-xxs text-gray-500 uppercase font-semibold" style="color: #8e9297">LAST VIEWED</p>
            </div>
            <div class="flex justify-center pl-8 text-gray-900 hover:text-gray-500 hover:bg-gray-100 items-center h-full w-32">
                <p class=" text-xxs text-gray-500 uppercase font-semibold" style="color: #8e9297">COMMENTS</p>
            </div>
          </div>
          <div v-for="(cardGroup, ind) in cards" :key="1000+ind" >
            
            <div class="flex w-full items-center flex-col">
              <ListViewCardTwo v-for="(card, ind) in cardGroup.cards" :key="ind" :cardGroupColor="cardGroup.color" :card="card"/>
            </div>
          </div>

        </div>
        <DashboardHeader :sidebar="sidebar"/>
        <div class="fixed top-0 left-0 bg-blue-900 select-none overflow-x-hidden flex flex-col items-start rotato h-full z-10 w-16" > 
            <div class="flex justify-center py-4 w-full hover:bg-blue-800 cursor-pointer">
              <div class="h-8 w-8 flex justify-center items-center rounded" :class="activeDeck.icon">
                <p class="text-white"> {{activeDeck.name.slice(0,2)}} </p>
              </div>
            </div>
            <div class="flex justify-center w-full hover:bg-blue-800 cursor-pointer">
              
            <svg class="fill-current text-blue-100 py-4 w-7"  viewBox="-43 0 512 512" >
              <path d="m213.332031 512c-44.117187 0-80-35.882812-80-80 0-8.832031 7.167969-16 16-16s16 7.167969 16 16c0 26.476562 21.527344 48 48 48 26.476563 0 48-21.523438 48-48 0-8.832031 7.167969-16 16-16s16 7.167969 16 16c0 44.117188-35.882812 80-80 80zm0 0"/><path d="m389.332031 448h-352c-20.585937 0-37.332031-16.746094-37.332031-37.332031 0-10.925781 4.757812-21.269531 13.054688-28.375 32.449218-27.414063 50.945312-67.261719 50.945312-109.480469v-59.480469c0-82.34375 66.988281-149.332031 149.332031-149.332031 82.347657 0 149.335938 66.988281 149.335938 149.332031v59.480469c0 42.21875 18.496093 82.066406 50.730469 109.332031 8.511718 7.253907 13.269531 17.597657 13.269531 28.523438 0 20.585937-16.746094 37.332031-37.335938 37.332031zm-176-352c-64.703125 0-117.332031 52.628906-117.332031 117.332031v59.480469c0 51.644531-22.632812 100.414062-62.078125 133.757812-.75.640626-1.921875 1.964844-1.921875 4.097657 0 2.898437 2.433594 5.332031 5.332031 5.332031h352c2.902344 0 5.335938-2.433594 5.335938-5.332031 0-2.132813-1.175781-3.457031-1.878907-4.054688-39.488281-33.386719-62.121093-82.15625-62.121093-133.800781v-59.480469c0-64.703125-52.628907-117.332031-117.335938-117.332031zm0 0"/><path d="m213.332031 96c-8.832031 0-16-7.167969-16-16v-64c0-8.832031 7.167969-16 16-16s16 7.167969 16 16v64c0 8.832031-7.167969 16-16 16zm0 0"/>
            </svg>

            </div>
            
            <div class="flex justify-center w-full hover:bg-blue-800 cursor-pointer">
              <svg version="1.1" class="fill-current text-blue-100 py-4 w-6" x="0px" y="0px"
                viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;">
              <g>
                <g>
                  <path d="M467,61H45C20.218,61,0,81.196,0,106v300c0,24.72,20.128,45,45,45h422c24.72,0,45-20.128,45-45V106
                    C512,81.28,491.872,61,467,61z M460.786,91L256.954,294.833L51.359,91H460.786z M30,399.788V112.069l144.479,143.24L30,399.788z
                    M51.213,421l144.57-144.57l50.657,50.222c5.864,5.814,15.327,5.795,21.167-0.046L317,277.213L460.787,421H51.213z M482,399.787
                    L338.213,256L482,112.212V399.787z"/>
                </g>
              </g>
              </svg>

            </div>

            
          <div class="w-full cursor-pointer flex flex-col justify-between items-center" @click="sidebar = !sidebar">

            <div class="flex justify-center py-5 w-full hover:bg-blue-800">
              <svg version="1.1" class="fill-current text-gray-300 h-4" :class="!sidebar ? '' : 'rotate-180'" 
            viewBox="0 0 284.936 284.936" style="enable-background:new 0 0 284.936 284.936;">
              <g>
                <g>
                  <path d="M277.515,135.9L144.464,2.857C142.565,0.955,140.375,0,137.9,0c-2.472,0-4.659,0.955-6.562,2.857l-14.277,14.275
                    c-1.903,1.903-2.853,4.089-2.853,6.567c0,2.478,0.95,4.664,2.853,6.567l112.207,112.204L117.062,254.677
                    c-1.903,1.903-2.853,4.093-2.853,6.564c0,2.477,0.95,4.667,2.853,6.57l14.277,14.271c1.902,1.905,4.089,2.854,6.562,2.854
                    c2.478,0,4.665-0.951,6.563-2.854l133.051-133.044c1.902-1.902,2.851-4.093,2.851-6.567S279.417,137.807,277.515,135.9z"/>
                  <path d="M170.732,142.471c0-2.474-0.947-4.665-2.857-6.571L34.833,2.857C32.931,0.955,30.741,0,28.267,0s-4.665,0.955-6.567,2.857
                    L7.426,17.133C5.52,19.036,4.57,21.222,4.57,23.7c0,2.478,0.95,4.664,2.856,6.567L119.63,142.471L7.426,254.677
                    c-1.906,1.903-2.856,4.093-2.856,6.564c0,2.477,0.95,4.667,2.856,6.57l14.273,14.271c1.903,1.905,4.093,2.854,6.567,2.854
                    s4.664-0.951,6.567-2.854l133.042-133.044C169.785,147.136,170.732,144.945,170.732,142.471z"/>
                </g>
              </g>
            </svg>
            </div>
            
          </div>
          
            <div class="mt-auto flex justify-center w-full hover:bg-blue-800 cursor-pointer">
            
              <svg class="fill-current text-blue-100 py-4 w-7" enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path d="m0 256c0 140.946 115.033 255.99 255.983 256h.013.008c140.956-.002 255.996-115.049 255.996-256 0-140.959-115.049-256-256-256-140.779 0-256 114.919-256 256zm30 0c0-44.864 13.142-86.715 35.776-121.91l28.486 6.937c5.003 1.251 9.058 4.681 11.123 9.41 2.063 4.722 1.813 10.039-.685 14.587-10.852 19.758-4.328 45.251 14.851 58.037l64.813 43.208 14.9 29.8c5.075 10.149 3.093 22.358-4.93 30.382l-8.941 8.941c-5.858 5.858-5.858 15.355 0 21.213l17.898 17.898c4.971 4.971 7.708 11.579 7.708 18.609 0 30.48 6.944 60.693 20.065 87.504-112.925-12.45-201.064-108.427-201.064-224.616zm196.098 26.654-5.827-11.654h2.188c14.971 0 28.43 8.318 35.125 21.708 11.81 23.619 35.55 38.292 61.958 38.292h11.458v15c0 12.128-4.753 23.5-13.385 32.023-27.687 27.337-48.392 54.657-62.667 82.79-9.03-20.904-13.948-44.62-13.948-67.699 0-15.043-5.858-29.185-16.495-39.822l-7.326-7.326c15.797-17.161 19.425-42.301 8.919-63.312zm52.461 198.223c12.789-27.487 32.611-54.331 60.133-81.506 14.386-14.203 22.308-33.157 22.308-53.371v-30c0-8.284-6.716-15-15-15h-26.459c-14.971 0-28.43-8.318-35.125-21.708-11.809-23.619-35.55-38.292-61.957-38.292h-17.188l-4.561-9.123c-8.083-16.165-.753-35.834 16.687-44.779 14.337-7.353 23.603-23.441 23.603-40.985v-10.113c0-8.271 6.729-15 15-15h18.099c30.851 0 52.495-30.428 42.63-59.411l-8.499-25.485c33.638 7.989 64.386 23.516 90.359 44.694l-4.579 13.739c-.733 2.199-1.986 4.226-3.624 5.864l-16.206 16.206c-8.499 8.499-13.18 19.8-13.18 31.82v17.573c0 24.813 20.187 45 45 45 8.271 0 15 6.729 15 15v22.918c0 2.316-.548 4.636-1.583 6.708l-5.125 10.25c-7.025 14.052-6.289 30.419 1.97 43.782 8.26 13.364 22.569 21.332 38.279 21.332h14.65c-28.6 81.059-102.187 141.081-190.632 149.887zm203.441-224.877c0 15.405-1.555 30.453-4.506 45h-22.953c-7.548 0-11.438-4.975-12.76-7.114s-4.032-7.843-.657-14.594l5.126-10.25c3.107-6.216 4.75-13.175 4.75-20.124v-22.918c0-24.813-20.187-45-45-45-8.271 0-15-6.729-15-15v-17.574c0-4.007 1.56-7.774 4.393-10.606l16.206-16.205c4.914-4.913 8.673-10.995 10.872-17.59l.174-.521c36.841 40.225 59.355 93.779 59.355 152.496zm-226-226c6.343 0 12.622.276 18.835.791l13.464 40.375c3.317 9.744-3.911 19.834-14.2 19.834h-18.099c-24.813 0-45 20.187-45 44.999v10.113c0 6.312-2.931 12.055-7.294 14.293-23.406 12.004-36.727 34.933-36.341 58.477l-31.172-20.781c-6.333-4.223-8.616-12.408-5.196-18.635 7.011-12.766 7.696-27.723 1.881-41.037-5.818-13.321-17.241-22.982-31.428-26.528l-16.095-3.92c41.468-47.743 102.591-77.981 170.645-77.981z"/>
              </svg>
            </div>
            <div class="flex justify-center w-full hover:bg-blue-800 cursor-pointer">
              <img src="../assets/logo.svg" class="py-3 w-10 h-auto" alt="">

            </div>
        </div>
        
        
    </div>
  </div>
</template>

<script>
import ListViewCardGroup from '../components/ListViewCardGroup.vue'
import DashboardHeader from '../components/dashboard/dashboardheader.vue'
import DashboardSideBar from '../components/dashboard/dashboardsidebar.vue'
import ListViewCardTwo from '../components/listviewcardtwo.vue'


export default {
  components: {
    ListViewCardGroup,
    DashboardHeader,
    DashboardSideBar,
    ListViewCardTwo
  },
  data () {
    return {
      isFocus: false,
      sidebar: false,
      inputText: '',
      mode: 'list',
    }
  },
  methods: {
    sendCard () {
      this.$store.commit('pushCard', { front: this.inputText, time: new Date().toLocaleString() })
      this.inputText = ''
    },
    isFocused () {
      this.isFocus = true
    },
  },
  computed: {
    cards () {
      return this.$store.getters.getCards
    },
    
    dashMode () {
      return this.$store.getters.getDashMode 
    },
    activeDeck () {
      return {name: this.$store.getters.getDeckActiveName, icon: this.$store.getters.getDeckActiveIcon}
    },
  }
}
</script>

<style scoped>
.inputborder:focus-within {
  box-shadow:
    0 0 0 2px #bee3f8;
}

.rotato {
  transition: all 0.2s;
}

.rotate-180{
  transform: rotate(180deg)
}

.rotate-90{
  transform: rotate(90deg)
}
</style>
