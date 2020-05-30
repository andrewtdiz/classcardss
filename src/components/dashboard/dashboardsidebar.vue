<template>
  <div class="fixed top-0 left-0 border-r border-gray-400 shadow flex flex-col items-center overflow-x-hidden ml-16 rotato h-full" style="z-index: 100" :class="sidebar ? 'w-72' : 'w-6'">
        <transition
            enter-active-class="__animated "
        >
        <div class="absolute top-0 left-0 w-72 px-4 flex flex-col items-start" v-if="sidebarDelay">
            
            <div class="w-full flex flex-col bg-blue-100 border rounded border-blue-200 items-start px-4 py-2 my-2">
                <p class="text-xs py-2 text-left">Add tags to your cards to organize them by concept, lecture, etc.</p>
                <p class="text-xs text-left cursor-pointer hover:underline text-blue-700">Learn more here</p>

            </div>
            <div class="flex flex-col items-stretch w-full">
                <div class="my-3 rounded flex items-center text-gray-500 justify-start border border-gray-400 w-full h-8 hover:border-gray-500 cursor-text">
                    <svg class="fill-current text-gray-600 w-4 h-4 mx-2" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 511.999 511.999" xml:space="preserve">
                    <g>
                        <g>
                            <path d="M508.874,478.708L360.142,329.976c28.21-34.827,45.191-79.103,45.191-127.309c0-111.75-90.917-202.667-202.667-202.667
                                S0,90.917,0,202.667s90.917,202.667,202.667,202.667c48.206,0,92.482-16.982,127.309-45.191l148.732,148.732
                                c4.167,4.165,10.919,4.165,15.086,0l15.081-15.082C513.04,489.627,513.04,482.873,508.874,478.708z M202.667,362.667
                                c-88.229,0-160-71.771-160-160s71.771-160,160-160s160,71.771,160,160S290.896,362.667,202.667,362.667z"/>
                        </g>
                    </g>
                    </svg>
                    <p class="text-sm">Search tags</p>
                </div>
                <p class="text-sm uppercase font-bold text-gray-700 text-left py-2">Tags</p>
                
                <div v-for="(tag,ind) in tags" :key="ind+20" class="select-none flex flex-col items-stretch" :class="ind!=0 ? 'mt-6' : ''">
                <TagDropDown :tag="tag" :depth="1"/>
                </div>

            </div>
        </div>
        </transition>
    </div>
</template>

<script>
import TagDropDown from './tagdropdown.vue'

export default {
    props: ['sidebar'],
    data() {
        return {
            sidebarDelay: this.sidebar,
        }
    },
    components: {
        TagDropDown
    },
    computed: {
        tags () {
            return this.$store.getters.getTags
        },
    },
    watch: {
        sidebar () {
            if(this.sidebar) {
                this.sidebarDelay = this.sidebar
            } else {
                setTimeout(() => {
                    this.sidebarDelay = this.sidebar
                }, 200) 
            }
        },
    }
}
</script>

<style>
.rotato {
  transition: all 0.2s;
}
</style>