import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/tailwind.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimes, faTimesCircle, faPencilAlt, faTrash, faChevronDown, faBars, faCheck, faComment, faBookOpen, faSortDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VTooltip from 'v-tooltip'
import VueEditor from "vue2-editor";


Vue.use(VueEditor);
Vue.use(VTooltip)


require('vue2-animate/dist/vue2-animate.min.css')

library.add(faTimes)
library.add(faPencilAlt)
library.add(faTimesCircle)
library.add(faChevronDown)
library.add(faBars)
library.add(faCheck)
library.add(faBookOpen)
library.add(faComment)
library.add(faSortDown)

library.add(faTrash)


Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
