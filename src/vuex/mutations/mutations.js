export default {
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
        if (!flag)
            state.cart.push(product);
    },
    DELETE_ITEM_IN_CART: (state, idx) => {
        state.cart.splice(idx, 1);
    },
    INCREMENT: (state, idx) => {
        state.cart[idx].quantity++
    },
    DECREMENT: (state, idx) => {
        if (state.cart[idx].quantity > 1)
            state.cart[idx].quantity--
    }
}