import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const UPDATE_CURRENTLY_SELECTED_ID = "UPDATE_CURRENTLY_SELECTED_ID";

export default new Vuex.Store({
    state: {
        currentlySelectedId: 1,
        items: [
            { id: 1, },
            { id: 2, },
            { id: 3, },
            { id: 4, },
            { id: 5, },
            { id: 6, },
            { id: 7, },
            { id: 8, },
            { id: 9, },
            { id: 10, },
        ],
    },
    getters: {
        currentlySelectedId (state) {
            return state.currentlySelectedId;
        },
        items (state) {
            return state.items;
        },
    },
    mutations: {
        [UPDATE_CURRENTLY_SELECTED_ID](state, id) {
            state.currentlySelectedId = id;
        },
    },
});
