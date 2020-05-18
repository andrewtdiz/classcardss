<template>
  <div class="flex flex-col items-center">
    <input
      class="border rounded-sm border-black"
      @keydown.enter="sendData"
      type="text"
      v-model="userInput"
      placeholder="Type in your message!"
    />
    <div v-if="errorText || errorText2">
      <p
        v-bind:class="errorText ? 'opacity-100' : 'opacity-0'"
        class="text-red-500 text-sm"
      >Card cannot be empty!</p>
      <p
        v-bind:class="errorText2 ? 'opacity-100' : 'opacity-0'"
        class="text-red-500 text-sm"
      >Card cannot already exist!</p>
    </div>
    <div v-for="(cardGroup, ind) in cardGroups" :key="ind" class="flex flex-col my-4">
      <p>{{cardGroup.name}}</p>
      <div
        class="flex justify-between items-center p-2 my-2 border rounded border-gray-400 hover:bg-gray-200"
        v-for="(card, index) in cardGroup.cards"
        :key="index + ind + 1"
      >
        <p
          @mousedown="editCurds(card)"
          v-if="card.id!=editID"
          class="text-sm text-left cursor-pointer"
        >{{card.front}}</p>
        <input
          v-else
          @keydown.enter="submitEdit({cardGroupInd: ind, cardInd: index})"
          class="text-sm bg-transparent border-gray-400 border w-full"
          type="text"
          v-model="content"
        />

        <div class="flex items-center">
          <button
            @click="editCurds(card)"
            class="bg-white select-none hover:border-gray-400 border border-gray-300 text-black px-4 py-2 mx-2 rounded ml-4"
          >Edit</button>
          <button
            @click="deleteCard(ind, index)"
            class="bg-red-500 select-none hover:border-gray-400 border border-gray-300 px-4 py-2 mx-2 text-white rounded ml-4"
          >Delete</button>
        </div>
      </div>
    </div>

    <!-- <div v-for="(card, index) in cardArray" :key="index">
      <div class="flex items-baseline my-2">
        <p class="mx-8">{{card}}</p>
        <button class="bg-red-500 rounded px-4 py-2 text-white hover:bg-red-600" @click="deleteCard(index)" >delete item</button>
      </div>  
    </div>-->

    <button
      class="border border-gray-800 hover:border-gray-black rounded px-4 py-2"
      @click="clearItems()"
    >clear</button>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      userInput: "",
      cardArray: [],
      errorText: false,
      errorText2: false,
      editID: -1,
      content: ""
    };
  },
  computed: {
    cardGroups() {
      return this.$store.getters.getCardGroups;
    }
  },
  methods: {
    sendData() {
      if (this.userInput == "") {
        this.errorText = true;
        return;
      }
      if (this.inputContains(this.userInput)) {
        this.errorText2 = true;
        return;
      }
      this.cardArray.push(this.userInput);
      this.userInput = "";
      this.errorText = false;
    },
    deleteCard(cardGroupInd, cardInd) {
      this.$store.commit("deleteCard", { cardGroupInd, cardInd });
    },
    editCurds(card) {
      this.editID = card.id;
      this.content = card.front;
    },
    clearItems() {
      this.cardArray = [];
      this.errorText = false;
    },
    inputContains(inp) {
      return this.cardArray.filter(word => word == inp).length;
    },
    submitEdit({ cardGroupInd, cardInd }) {
      this.$store.commit("editCard", {
        cardGroupInd,
        cardInd,
        content: this.content
      });
      this.editID = -1;
    }
  }
};
</script>

<style>
</style>
