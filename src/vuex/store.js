import Vue from 'vue'
import Vuex from 'vuex'
import actions from "@/vuex/actions/actions";
import mutations from "@/vuex/mutations/mutations";
import getters from "@/vuex/getters/getters";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        products: [],
        cart: [],
    },
    mutations,
    actions,
    getters,
});