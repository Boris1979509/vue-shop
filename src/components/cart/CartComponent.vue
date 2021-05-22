<template>
    <div class="cart">
        <router-link :to="{name: 'catalog'}">
            <div class="cart__link_back">
                back
            </div>
        </router-link>
        <h1>Cart</h1>
        <cart-item-component
                v-for="(item, index) in cartData"
                :cart-item-data="item"
                :key="item.article"
                @delete-from-cart="deleteFromCart(index)"
                @increment="increment(index)"
                @decrement="decrement(index)"
        />
        <div class="cart__total">
            <p>Total: {{ cartAmount }} $</p>
        </div>
        <p v-if="!cartData.length">You cart is empty.</p>
    </div>
</template>

<script>
    import CartItemComponent from "@/components/cart/CartItemComponent";
    import {mapActions} from 'vuex';

    export default {
        name: "CartComponent",
        props: {
            cartData: {
                type: Array,
                default() {
                    return [];
                }
            }
        },
        computed: {
            cartAmount() {
                let sum = 0;
                for (let item of this.cartData) {
                    sum += item.price * item.quantity;
                }
                return sum;
            }
        },
        methods: {
            ...mapActions([
                "DELETE_FROM_CART",
                "DECREMENT",
                "INCREMENT"
            ]),
            deleteFromCart(index) {
                this.DELETE_FROM_CART(index)
            },
            decrement(idx) {
                this.DECREMENT(idx);
            },
            increment(idx) {
                this.INCREMENT(idx);
            },
        },
        components: {
            CartItemComponent
        }
    }
</script>

<style scoped lang="scss">
    .cart {
        margin-bottom: 100px;

        &__total {
            position: fixed;
            bottom: 0;
            right: 0;
            left: 0;
            padding: 20px 30px;
            display: flex;
            justify-content: center;
            background: #03ff3d;
            color: #ffffff;
            font-size: 20px;
        }
    }
</style>