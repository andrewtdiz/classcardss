<template>
    <div >
        <div v-if="dropdown" class="cursor-pointer text-gray-700 flex items-center hover:text-gray-900 px-4 py-4" @mouseenter="hovering = true" @mouseleave="hovering = false">
            <p class="font-medium text-md"
            :class="isbutton ? ['px-6', 'text-blue-100', 'hover:bg-blue-600', 'bg-blue-500', 'rounded-md', 'py-6'] : ''">{{title}}</p>

            <img src="../assets/direction.svg" class="ml-1 fill-current navicon" style="width: 10px" :class="hovering ? ['rotatenavicon', 'text-gray-500'] : ['text-gray-100']" alt="">
            <div class="absolute min-w-48 overflow-y-hidden bg-white border py-2 rounded shadow-2xl border-gray-300 navdrop"
            style="top:80%"
            :class="hovering ? '' : ['opacity-0', 'navdropanim', 'pointer-events-none']">
                <router-link v-for="(elem, ind) in dropdown" :key="ind" :to="elem.link">
                    <div class="w-full py-2 rounded hover:text-blue-600 colorchangenav text-gray-800">
                        <p class="text-left text-md w-full px-6">{{elem.name}}</p>
                    </div>
                </router-link>
            </div>

        </div>
        <router-link v-if="dropdown==undefined" :to="link">
            <div class="cursor-pointer text-gray-700 flex items-center hover:text-gray-900 lg:pl-4">
                <p class="font-medium text-md"
                :class="isbutton ? ['md:px-6', 'text-blue-100', 'hover:bg-blue-600', 'bg-blue-500', 'rounded', 'py-2'] : ''">{{title}}</p>

                <font-awesome-icon v-if="Array.isArray(dropdown)"
                :icon="['fas', 'chevron-down']" class="ml-4 navicon"
                :class="hovering ? ['rotatenavicon', 'text-gray-500'] : ['text-gray-400']" size="sm"
                />

            </div>
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'NavLink',
  props: ['title', 'dropdown', 'isbutton', 'link'],
  data () {
    return {
      hovering: false
    }
  }
}
</script>

<style>
.rotatenavicon {
    transform: rotate(-180deg);
}

.navdrop {
    transition: all 0.2s;
}

.navdropanim {
    transform:translateY(-10px);
    opacity: 0.6;
}

.navicon {
    transition: all 0.3s;
}

.colorchangenav{
    transition: all 0.15s;
}
</style>
