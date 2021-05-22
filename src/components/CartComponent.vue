<template>
    <div class="cart">
        <h1>Cart</h1>
        <cart-item-component
                v-for="(item, index) in cartData"
                :cart-item-data="item"
                :key="item.article"
                @delete-from-cart="deleteFromCart(index)"
        />
    </div>
</template>

<script>
    import CartItemComponent from "@/components/CartItemComponent";
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
        methods: {
            ...mapActions([
                "DELETE_FROM_CART"
            ]),
            deleteFromCart(index) {
                this.DELETE_FROM_CART(index)
            }
        },
        components: {
            CartItemComponent
        }
    }
</script>

<style scoped>

</style>