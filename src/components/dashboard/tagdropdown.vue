<template>
    <div class="flex flex-col items-stretch w-full" >
        <div class="relative w-full flex py-1  border-b border-gray-200 pr-2 items-center hover:bg-gray-100 text-gray-700 hover:text-gray-900 rounded cursor-pointer" 
        :class="'pl-' + (6*(depth-1)+2)">
            
            <div class="absolute left-0 top-0 h-full bg-transparent w-3 z-10 -ml-4 pointer-events-none" :class="'pl-' + (6*(depth)-2)">
                <div class="w-6 h-full pointer-events-auto" @click="dropTag = !dropTag" >

                </div>
            </div>
            <svg v-if="isTagDefined" class="rotato w-3 h-3 fill-current" x="0px" y="0px" :class="dropTag ? 'rotate-90' : ''"
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
            <div v-else class="h-3 w-3">

            </div>

            <p class="text-sm ml-4 py-1">{{tag.name}}</p>
            
        </div>
        <div v-if="isTagDefined && dropTag" class="w-full flex flex-col">
            <div  v-for="(tag,ind) in tag.tags" :key="ind+40" class="flex flex-col">
                <TagDropDown v-if="typeof tag == 'object'" :tag="tag" :depth="depth+1" />
            </div>
        </div>
        
    </div>
</template>

<script>
import TagDropDown from './tagdropdown.vue'

export default {
    name: 'TagDropDown',
    props: ['tag', 'depth'],
    data() { 
        return {
            dropTag: false,
        }
    },
    computed: {
        isTagDefined () {
            return this.tag.tags
        },
    },
}
</script>

<style>
.rotate-90 {
    transform: rotate(90deg)
}

.rotato {
    transition: all 0.05s;
}
</style>