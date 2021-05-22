<template>
    <div class="cart-item">
        <img
                :src="require(`@/assets/images/${cartItemData.image}`)"
                :alt="cartItemData.name"
                class="cart-item__image"
        >
        <div class="cart-item__info">
            <p class="cart-item__name">{{ cartItemData.name }}</p>
            <p class="cart-item__price">{{ cartItemData.price }}</p>
            <p class="cart-item__article">{{ cartItemData.article }}</p>
        </div>
        <div class="cart-item__quantity">
            <p>Qty:</p>
            <button @click="$emit('decrement')">-</button>
            {{ cartItemData.quantity }}
            <button @click="$emit('increment')">+</button>
        </div>
        <button @click="$emit('delete-from-cart')">Delete item</button>
    </div>
</template>

<script>
    export default {
        name: "CartItemComponent",
        emits: ['delete-from-cart', 'decrement', 'increment'],
        props: {
            cartItemData: {
                type: Object,
                default() {
                    return {};
                }
            }
        }
    }
</script>


<style scoped lang="scss">
    .cart-item {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 0 8px 0 #e0e0e0;
        padding: 20px;
        margin-bottom: 20px;

        &__image {
            max-width: 50px;
        }

        .quantity__btn {
            cursor: pointer;
        }

        .quantity__tools {
            user-select: none;
        }
    }
</style>