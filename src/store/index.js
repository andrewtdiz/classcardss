import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sidebar: true,
    dropDown: '',
    display: '',
    modalValue: '',
    cardDeleting: -1,
    cardSelected: -1,
    editing: false,
    dashMode: 'Home',
    decks: [
      {name: 'Biochemistry'},
      {name: 'Anatomy'}
    ],
    deckActive: {
      name: 'Biochemistry',
      icon: 'bg-green-500',
    },
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
      name: 'Lectures',
      tags: [{
        name: 'Lecture 1'
      },
      {
        name: 'Lecture 2'
      },
      {
        name: 'Lecture 3'
      },
      {
        name: 'Lecture 4'
      },
      {
        name: 'Lecture 5'
      },
      {
        name: 'Lecture 6'
      },
      {
        name: 'Lecture 7'
      },
      {
        name: 'Lecture 8'
      }]
    }],
    cards: [
      { id: 0, front: '<p>The {..} is the <strong>powerhouse</strong> of the cell<p>', front2: 'The {..} is the <strong>powerhouse</strong> of the cell', back: 'G1 to S' , extra: 'Recall that p53 inhibits p22', status: 0, last: '', comments: 0 },
      { id: 1, front: 'Which <strong>bases</strong> are <strong>pyrimidines</strong>?', back: 'Cytosine, Uracil, and Thymine', extra: 'Recall that p53 inhibits p22', status: 0, last: '', comments: 0 },
      { id: 2, front: 'Which <strong>bases</strong> are <strong>purines</strong>?', back: 'Adenine, Guanine' , extra: 'Recall that p53 inhibits p22', status: 0, last: '', comments: 0 },
      { id: 3, front: '<u>Bases</u> of a <strong>DNA strand</strong> are complementary and held together by {..} bonds', back: 'Hydrogen' , extra: 'Recall that p53 inhibits p22', status: 0, last: '', comments: 0 },
      { id: 4, front: 'How many <u>ring(s)</u> do <strong>pyrimidines</strong> have?', back: 'Two' , extra: 'Recall that p53 inhibits p22', status: 0, last: '', comments: 0 },
      { id: 5, front: 'How many <u>ring(s)</u> do <strong>purines</strong> have?', back: 'One' , extra: 'Recall that p53 inhibits p22', status: 0, last: '', comments: 0 },
      { id: 6, front: 'A {..} mutation occurs when a nucleotide substitution codes for a stop codon', back: 'Nonsense' , extra: 'Recall that p53 inhibits p22', status: 0, last: '', comments: 0 },
    ],
    // cards:
    // [
    //   {
    //     name: 'Lecture 1: Intro to Biochemistry I',
    //     color: 0,
    //     cards: [
    //       { id: 0, front: '<p>The {..} is the <strong>powerhouse</strong> of the cell<p>', front2: 'The {..} is the <strong>powerhouse</strong> of the cell', back: 'G1 to S' , extra: 'Recall that p53 inhibits p22', status: 0, last: '', comments: 0 },
    //       { id: 1, front: 'Which <strong>bases</strong> are <strong>pyrimidines</strong>?', back: 'Cytosine, Uracil, and Thymine', extra: 'Recall that p53 inhibits p22', status: 0, last: '', comments: 0 },
    //       { id: 2, front: 'Which <strong>bases</strong> are <strong>purines</strong>?', back: 'Adenine, Guanine' , extra: 'Recall that p53 inhibits p22', status: 0, last: '', comments: 0 },
    //       { id: 3, front: '<u>Bases</u> of a <strong>DNA strand</strong> are complementary and held together by {..} bonds', back: 'Hydrogen' , extra: 'Recall that p53 inhibits p22', status: 0, last: '', comments: 0 },
    //       { id: 4, front: 'How many <u>ring(s)</u> do <strong>pyrimidines</strong> have?', back: 'Two' , extra: 'Recall that p53 inhibits p22', status: 0, last: '', comments: 0 },
    //       { id: 5, front: 'How many <u>ring(s)</u> do <strong>purines</strong> have?', back: 'One' , extra: 'Recall that p53 inhibits p22', status: 0, last: '', comments: 0 },
    //       { id: 6, front: 'A {..} mutation occurs when a nucleotide substitution codes for a stop codon', back: 'Nonsense' , extra: 'Recall that p53 inhibits p22', status: 0, last: '', comments: 0 },
    //     ],
    //   },
    //   {
    //     name: 'Lecture 2: Intro to Biochemistry II',
    //     color: 1,
    //     cards: [
    //       { id: 7, front: '<p>Which <u>cell cycle checkpoint</u> is blocked by <strong>p53</strong>?<p>', back: 'G1 to S' , extra: 'Recall that p53 inhibits p22', status: 0, last: '', comments: 0 },
    //       { id: 8, front: 'Which <strong>bases</strong> are <strong>pyrimidines</strong>?', back: 'Cytosine, Uracil, and Thymine', extra: 'Recall that p53 inhibits p22', status: 0, last: '', comments: 0 },
    //       { id: 9, front: 'Which <strong>bases</strong> are <strong>purines</strong>?', back: 'Adenine, Guanine' , extra: 'Recall that p53 inhibits p22', status: 0, last: '', comments: 0 },
    //       { id: 10, front: '<u>Bases</u> of a <strong>DNA strand</strong> are complementary and held together by {..} bonds', back: 'Hydrogen' , extra: 'Recall that p53 inhibits p22', status: 0, last: '', comments: 0 },
    //       { id: 11, front: 'How many <u>ring(s)</u> do <strong>pyrimidines</strong> have?', back: 'Two' , extra: 'Recall that p53 inhibits p22', status: 0, last: '', comments: 0 },
    //       { id: 12, front: 'How many <u>ring(s)</u> do <strong>purines</strong> have?', back: 'One' , extra: 'Recall that p53 inhibits p22', status: 0, last: '', comments: 0 },
    //       { id: 13, front: 'A {..} mutation occurs when a nucleotide substitution codes for a stop codon', back: 'Nonsense' , extra: 'Recall that p53 inhibits p22', status: 0, last: '', comments: 0 },
    //     ]
    //   }
    // ],
    routes: [
      {
          name: 'Features',
          vals: [
              {
                  name: 'Cards',
                  link: '/cards',
                  desc: 'Distilled, testable containers of knowledge',
              },
              {
                  name: 'Decks',
                  link: '/decks',
                  desc: 'Collections of cards, shared with friends and classmates',
              },
              {
                  name: 'Study Sessions',
                  link: '/studysessions',
                  desc: 'Create interactive sessions to learn and recall cards',
              },
              {
                  name: 'Group Studying',
                  link: '/groups',
                  desc: 'Invite friends to study together live',
              }
          ],
      },
      {
          name: 'Students',
          vals: [
              {
                  name: 'Making Cards',
                  link: '/makingcards',
                  desc: 'Lorem ipsum simet dolor',
              },
              {
                  name: 'Studying',
                  link: '/studying',
                  desc: 'Lorem ipsum simet dolor',
              },
              {
                  name: 'Interface',
                  link: '/interface',
                  desc: 'Lorem ipsum simet dolor',
              },
              {
                  name: 'Customization',
                  link: '/settings',
                  desc: 'Lorem ipsum simet dolor',
              },
              {
                  name: 'Pre-K to Elementary',
                  link: '/teams',
                  desc: 'Lorem ipsum simet dolor',
              },
              {
                  name: 'Grades 6-8',
                  link: '/teams',
                  desc: 'Lorem ipsum simet dolor',
              },
              {
                  name: 'Grades 8-12',
                  link: '/teams',
                  desc: 'Lorem ipsum simet dolor',
              },
              {
                  name: 'College and Graduate',
                  link: '/teams',
                  desc: 'Lorem ipsum simet dolor',
              }
          ],
      },
      {
          name: 'Educators',
          vals: [
              {
                  name: 'Making Cards',
                  link: '/makingcards',
                  desc: 'Lorem ipsum simet dolor',
              },
              {
                  name: 'Studying',
                  link: '/studying',
                  desc: 'Lorem ipsum simet dolor',
              },
              {
                  name: 'Interface',
                  link: '/interface',
                  desc: 'Lorem ipsum simet dolor',
              },
              {
                  name: 'Customization',
                  link: '/settings',
                  desc: 'Lorem ipsum simet dolor',
              },
              {
                  name: 'School Systems',
                  link: '/teams',
                  desc: 'Lorem ipsum simet dolor',
              },
          ],
      },
      {
          name: 'Company',
          vals: [
              {
                  name: 'About Us',
                  link: '/aboutus',
                  desc: 'Lorem ipsum simet dolor',
              },
              {
                  name: 'Careers',
                  link: '/careers',
                  desc: 'Lorem ipsum simet dolor',
              },
              {
                  name: 'Our Team',
                  link: '/team',
                  desc: 'Lorem ipsum simet dolor',
              },
              {
                  name: 'Press',
                  link: '/press',
                  desc: 'Lorem ipsum simet dolor',
              },
              {
                  name: 'Legal',
                  link: '/legal',
                  desc: 'Lorem ipsum simet dolor',
              }
          ],
      },
  ]
  },
  getters: {
    getSidebar(state){
      return state.sidebar
    },
    getDecks(state) {
      return state.decks
    },
    getDisplay(state) {
      return state.display
    },
    getDropDown(state) {
      return state.dropDown
    },
    getRoutes(state) {
      return state.routes
    },
    getModalValue (state) {
      return state.modalValue
    },
    getCardSelected (state) {
      let arr = state.cards.map(val => val.cards)
      let result = 0
      arr.forEach(val => {
        val.forEach(card => {
          
          if(card.id == state.cardSelected) {
            result = card
          }
        })
      })
      return result
    },
    getCards (state) {
      return state.cards
    },
    getEditing(state) {
      return state.editing
    },
    getCardDeleting (state) {
      return state.cardDeleting
    },
    getTags (state) {
      return state.tags
    },
    getDashMode (state) {
      return state.dashMode
    },
    getDeckActiveIcon (state) {
      return state.deckActive.icon
    },
    getDeckActiveName (state) {
      return state.deckActive.name
    },
  },
  mutations: {
    setSidebar(state, val) {
      state.sidebar = val
    },
    setDisplay(state, val) {
      state.display = val
    },
    setDropDown(state,val) {
      state.dropDown = val
    },
    setModalValue (state, val) {
      state.modalValue = val
    },
    setCardSelected(state, val) {
      state.cardSelected = val
    },
    pushCard (state, val) {
      state.cards.push(val)
    },
    setEditing (state, val) {
      state.editing = val
    },
    removeCard (state, val) {
      window.console.log(state.cards, state.cardDeleting, val)
      state.cards.splice(val, 1)
      window.console.log(state.cards, state.cardDeleting)
    },
    setCardDeleting (state, val) {
      state.cardDeleting = val
    },
    setDashMode (state, val) {
      state.dashMode = val
    },
  },
  actions: {
  },
  modules: {
  }
})
