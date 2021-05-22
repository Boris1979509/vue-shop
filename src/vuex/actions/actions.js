import axios from "axios";

export default {
    GET_PRODUCTS_FROM_API({commit}) {
        return axios.get('http://localhost:3000/products')
            .then(response => {
                commit('SET_PRODUCTS_TO_STATE', response.data);
                return response.data;
            }).catch(error => {
                console.log(error);
                return error;
            });
    },
    ADD_TO_CART({commit}, product) {
        commit('SET_CART', product);
    },
    DELETE_FROM_CART({commit}, index) {
        commit('DELETE_ITEM_IN_CART', index);
    },
    INCREMENT({commit}, idx) {
        commit('INCREMENT', idx);
    },
    DECREMENT({commit}, idx) {
        commit('DECREMENT', idx);
    }
}