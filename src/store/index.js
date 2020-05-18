import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    modalValue: '',
    tags: [{
      name: 'Biochemistry',
      tags: [{
        name: 'Metabolism',
        tags: [{
          name: 'Glycolysis',
        }, {
          name: 'Gluconeogenesis',
        }, {
          name: 'TCA Cycle'
        }, {
          name: 'Fat Metabolism'
        }]
      }, {
        name: 'Vitamins'
      }, {
        name: 'DNA Replication'
      }]
    }, {
      name: 'Pharmacology'
    }],
    cards:
    [
      {
        name: 'Deck 1',
        color: 0,
        cards: [
          { front: 'The muscularis externa of the gut wall consists of an inner circular and an outer longitudinal muscle layer' },
          { front: 'Secretin is secreted from S cells in the duodenum' },
          { front: 'Cholecystokinin (CCK) is secreted from I cells in the duodenum and the jejunum' },
          { front: 'One function of gastrin is to increase growth of gastric mucosa and parietal cells' },
          { front: 'In the liver, unconjugated bilirubin is converted to conjugated bilirubin via the enzyme UDP-glucuronyl transferase' },
          { front: 'The enteric nervous system can direct all functions of the GI tract, even in the absence of extrinsic innervation (e.g. PNS/SNS)' },
          { front: 'The oral::oral or IV? form of glucose administration leads to greater insulin release due to stimulation of GIP and GLP-1 secretion' },
          { front: 'Zollinger-Ellison syndrome is diagnosed with a positive secretin stimulation test' }
        ]
      },
      {
        name: 'Deck 2',
        color: 1,
        cards: [
          { front: 'The muscularis externa of the gut wall consists of an inner circular and an outer longitudinal muscle layer' },
          { front: 'Secretin is secreted from S cells in the duodenum' },
          { front: 'Cholecystokinin (CCK) is secreted from I cells in the duodenum and the jejunum' },
          { front: 'One function of gastrin is to increase growth of gastric mucosa and parietal cells' },
          { front: 'In the liver, unconjugated bilirubin is converted to conjugated bilirubin via the enzyme UDP-glucuronyl transferase' },
          { front: 'The enteric nervous system can direct all functions of the GI tract, even in the absence of extrinsic innervation (e.g. PNS/SNS)' },
          { front: 'The oral::oral or IV? form of glucose administration leads to greater insulin release due to stimulation of GIP and GLP-1 secretion' },
          { front: 'Zollinger-Ellison syndrome is diagnosed with a positive secretin stimulation test' },
          { front: 'The muscularis externa of the gut wall consists of an inner circular and an outer longitudinal muscle layer' },
          { front: 'Secretin is secreted from S cells in the duodenum' },
          { front: 'Cholecystokinin (CCK) is secreted from I cells in the duodenum and the jejunum' },
          { front: 'One function of gastrin is to increase growth of gastric mucosa and parietal cells' },
          { front: 'In the liver, unconjugated bilirubin is converted to conjugated bilirubin via the enzyme UDP-glucuronyl transferase' },
          { front: 'The enteric nervous system can direct all functions of the GI tract, even in the absence of extrinsic innervation (e.g. PNS/SNS)' },
          { front: 'The oral::oral or IV? form of glucose administration leads to greater insulin release due to stimulation of GIP and GLP-1 secretion' },
          { front: 'Zollinger-Ellison syndrome is diagnosed with a positive secretin stimulation test' }
        ]
      }
    ],
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
    },
    getTags (state) {
      return state.tags
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
