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
    cardGroups:
    [
      {
        name: 'Deck 1',
        color: 0,
        cards: [
          { front: 'The muscularis externa of the gut wall consists of an inner circular and an outer longitudinal muscle layer', id: 0},
          { front: 'Secretin is secreted from S cells in the duodenum', id: 1},
          { front: 'Cholecystokinin (CCK) is secreted from I cells in the duodenum and the jejunum', id: 2},
          { front: 'One function of gastrin is to increase growth of gastric mucosa and parietal cells', id: 3},
          { front: 'In the liver, unconjugated bilirubin is converted to conjugated bilirubin via the enzyme UDP-glucuronyl transferase', id: 4},
          { front: 'The enteric nervous system can direct all functions of the GI tract, even in the absence of extrinsic innervation (e.g. PNS/SNS)', id: 5},
          { front: 'The oral::oral or IV? form of glucose administration leads to greater insulin release due to stimulation of GIP and GLP-1 secretion', id: 6},
          { front: 'Zollinger-Ellison syndrome is diagnosed with a positive secretin stimulation test', id: 7 }
        ]
      },
      {
        name: 'Deck 2',
        color: 1,
        cards: [
          { front: 'The muscularis externa of the gut wall consists of an inner circular and an outer longitudinal muscle layer', id: 8},
          { front: 'Secretin is secreted from S cells in the duodenum', id: 9},
          { front: 'Cholecystokinin (CCK) is secreted from I cells in the duodenum and the jejunum', id: 10},
          { front: 'One function of gastrin is to increase growth of gastric mucosa and parietal cells', id: 11},
          { front: 'In the liver, unconjugated bilirubin is converted to conjugated bilirubin via the enzyme UDP-glucuronyl transferase', id: 12},
          { front: 'The enteric nervous system can direct all functions of the GI tract, even in the absence of extrinsic innervation (e.g. PNS/SNS)', id: 13},
          { front: 'The oral::oral or IV? form of glucose administration leads to greater insulin release due to stimulation of GIP and GLP-1 secretion', id: 14},
          { front: 'Zollinger-Ellison syndrome is diagnosed with a positive secretin stimulation test', id: 15 }
        ]
      }
    ],
    cardDeleting: -1
  },
  getters: {
    getCardGroups (state) {
      return state.cardGroups
    },
    getModalValue (state) {
      return state.modalValue
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
    setCardDeleting (state, val) {
      state.cardDeleting = val
    },
    deleteCard  (state, {cardGroupInd, cardInd}) {
      state.cardGroups[cardGroupInd].cards.splice(cardInd,1)
    },
    editCard  (state, {cardGroupInd, cardInd, content}) {
      state.cardGroups[cardGroupInd].cards[cardInd].front = content
    },

  },
  actions: {
  },
  modules: {
  }
})
