export default {
    namespaced: true,
    state: {
        cart: []
    },
    mutations: {
        set(state, product) {
            let flag = false;
            state.cart.find(item => {
                if (item.article === product.article) {
                    item.quantity++;
                    flag = true
                }
            });
            if (!flag)
                state.cart.push(product);
        },
        delete(state, idx) {
            state.cart.splice(idx, 1);
        },
        increment(state, idx) {
            state.cart[idx].quantity++
        },
        decrement(state, idx) {
            if (state.cart[idx].quantity > 1)
                state.cart[idx].quantity--
        }
    },
    actions: {
        add(ctx, product) {
            ctx.commit('set', product);
        },
        delete(ctx, index) {
            ctx.commit('delete', index);
        },
        increment(ctx, idx) {
            ctx.commit('increment', idx);
        },
        decrement(ctx, idx) {
            ctx.commit('decrement', idx);
        }
    },
    getters: {
        get(state) {
            return state.cart;
        }
    },
}