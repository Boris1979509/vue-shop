import Vue from 'vue'
import Vuex from 'vuex'
import cart from '@/store/modules/cart';
import products from '@/store/modules/products';
import select from '@/store/modules/select';

Vue.use(Vuex);

export default new Vuex.Store({
    state() {
        return {
            title: 'Catalog'
        }
    },
    modules: {
        cart,
        products,
        select
    }
});