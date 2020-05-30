<template>
    <div  @click.stop="setInput" class="w-full flex" style="font-family: Whitney, Helvetica, Arial, sans-serif !important">
        <p v-show="!editing" v-if="type=='front'"  style="padding: 12px 0px 8px 15px;" class=" text-left w-full text-ml font-light border border-transparent hover:border-gray-400 hover:border-dashed" v-html="card.front"></p>
        <p v-show="!editing" v-else-if="type=='back'" style="padding: 12px 0px 8px 15px;"  class=" text-left w-full text-ml font-light border border-transparent hover:border-gray-400 hover:border-dashed" v-html="card.back"></p>
        <p v-show="!editing" v-else-if="type=='extra'" style="padding: 12px 0px 8px 15px;"  class="text-left w-full text-ml font-light border border-transparent hover:border-gray-400 hover:border-dashed" v-html="card.extra"></p>

        <div v-show="editing" class="w-full overflow-y-hidden" style="height: 46px;">
            <vue-editor  style="height: 45px; width: 100%; transform: translateY(-47px)" :editorToolbar="customToolbar" v-model="inputText" />

        </div>

    </div>
</template>

<script>
export default {
    name: 'EditCardText',
    props: ['card', 'type'],
    data() {
        return {
            inputText: '',
            displayText: this.card.front2,
            customToolbar: [["", "", ""], [{ list: "" }, { list: "" }]]
        }
    },
    methods: {
        setInput() {
            if(this.type=='front') this.inputText = this.card.front
            else if(this.type=='back') this.inputText = this.card.back
            else if(this.type=='extra') this.inputText = this.card.extra
            if(!this.editing) this.setEditing(true)
        },
        setEditing(val) {
            this.$store.commit('setEditing', val)
        },
    },
    computed: {
        editing() {
            return this.$store.getters.getEditing
        },
    },
    watch: {
        editing() {
            if(this.editing) this.setInput()
        },
    }

}
</script>
