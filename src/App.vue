<template>
    <div>
        <p>currentlySelectedId: {{ currentlySelectedId }}</p>

        <button v-on:click="moveOneUp">Move up</button>
        <button v-on:click="moveOneDown">Move down</button>

        <Item
            v-for="item in items"
            :key="item.id"
            :item="item"
        />
    </div>
</template>

<script>
import Item from "./store/Item";

export default {
    name: "App",
    components: {Item},
    computed: {
        currentlySelectedId() {
            return this.$store.getters["currentlySelectedId"];
        },
        items() {
            return this.$store.getters['items'];
        },
    },
    methods: {
        moveOneUp() {
            this.$store.commit('UPDATE_CURRENTLY_SELECTED_ID', this.currentlySelectedId - 1);
        },
        moveOneDown() {
            this.$store.commit('UPDATE_CURRENTLY_SELECTED_ID', this.currentlySelectedId + 1);
        },
    },
}
</script>
