import axios from "axios";

export default {
    namespaced: true,
    state: {
        products: []
    },
    mutations: {
        set(state, products) {
            state.products = products;
        },
    },
    actions: {
        api({commit}) {
            return axios.get('http://localhost:3000/products')
                .then(response => {
                    commit('set', response.data);
                    return response.data;
                }).catch(error => {
                    console.log(error);
                    return error;
                });
        },
    },
    getters: {
        get(state) {
            return state.products;
        }
    }
}