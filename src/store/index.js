import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    modalValue: '',
    cards: [],
    cardDeleting: -1
  },
  getters: {
    getModalValue (state) {
      return state.modalValue
    },
    getCards (state) {
      return state.cards
    },
    getCardDeleting (state) {
      return state.cardDeleting
    }
  },
  mutations: {
    setModalValue (state, val) {
      state.modalValue = val
    },
    pushCard (state, val) {
      state.cards.push(val)
    },
    removeCard (state, val) {
      window.console.log(state.cards, state.cardDeleting, val)
      state.cards.splice(val, 1)
      window.console.log(state.cards, state.cardDeleting)
    },
    setCardDeleting (state, val) {
      state.cardDeleting = val
    }
  },
  actions: {
  },
  modules: {
  }
})
