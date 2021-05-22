import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        products: [],
        cart: [],
    },
    mutations: {
        SET_PRODUCTS_TO_STATE: (state, products) => {
            state.products = products;
        },
        SET_CART: (state, product) => {
            let flag = false;

            state.cart.find(item => {
                if (item.article === product.article) {
                    item.quantity++;
                    flag = true
                }
            });
            if (!flag) {
                state.cart.push(product);
            }
        },
        DELETE_ITEM_IN_CART: (state, idx) => {
            state.cart.splice(idx, 1);
        }
    },
    actions: {
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
        }
    },
    getters: {
        PRODUCTS(state) {
            return state.products;
        },
        CART(state) {
            return state.cart;
        }
    }
});