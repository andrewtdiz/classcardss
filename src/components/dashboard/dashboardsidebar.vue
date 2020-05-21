<template>
  <div class="fixed top-0 left-0 bg-white shadow z-10 flex flex-col items-center overflow-x-hidden ml-16 rotato h-full" :class="sidebar ? 'w-72' : 'w-6'">
        <transition
            enter-active-class="__animated "
        >
        <div class="absolute top-0 left-0 w-72 px-4 flex flex-col items-start" v-if="sidebarDelay">
        </transition>
        <div class="w-full flex flex-col bg-blue-100 border rounded border-blue-200 items-start px-4 py-2 my-2">
            <p class="text-xs py-2 text-left">Add tags to your cards to organize them by concept, lecture, etc.</p>
            <p class="text-xs text-left cursor-pointer hover:underline text-blue-700">Learn more here</p>

        </div>
        <div class="flex flex-col items-stretch w-full">
            <p class="text-sm uppercase font-bold text-gray-700 text-left py-2">Tags</p>
            
            <div v-for="(tag,ind) in tags" :key="ind+20" class="select-none flex flex-col items-stretch" :class="ind!=0 ? 'mt-6' : ''">
            <TagDropDown :tag="tag" :depth="1"/>
            </div>

        </div>
        </div>
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