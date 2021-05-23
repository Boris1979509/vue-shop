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
                @increment="incrementItem(index)"
                @decrement="decrementItem(index)"
        />
        <div class="cart__total">
            <p>Total: {{ cartAmount }} $</p>
        </div>
        <p v-if="!cartData.length">You cart is empty.</p>
    </div>
</template>

<script>
    import CartItemComponent from "@/components/cart/CartItemComponent";
    import { createNamespacedHelpers } from 'vuex';
    const { mapActions } = createNamespacedHelpers('cart');

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
                "delete",
                "decrement",
                "increment"
            ]),
            deleteFromCart(index) {
                this.delete(index)
            },
            decrementItem(idx) {
                this.decrement(idx);
            },
            incrementItem(idx) {
                this.increment(idx);
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