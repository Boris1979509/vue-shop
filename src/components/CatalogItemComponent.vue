<template>
    <div class="catalog-item">
        <img :src="require(`../assets/images/${productData.image}`)" :alt="productData.name"
             class="catalog-item__image">
        <p class="catalog-item__name"><strong>{{ productData.name }}</strong></p>
        <p class="catalog-item__price"><strong>Price {{ productData.price }} $</strong></p>
        <button
                type="button"
                class="catalog-item__add_to_cart_btn btn"
                @click="$emit('add-to-cart', productData)"
        >Add to cart
        </button>
    </div>
</template>

<script>
    export default {
        name: "CatalogItemComponent",
        emits: ['add-to-cart'],
        props: {
            productData: {
                type: Object
            }
        }
    }
</script>

<style scoped lang="scss">
    .catalog-item {
        flex-basis: 25%;
        box-shadow: 0 0 8px 0 #111;
        padding: 20px;
        margin-bottom: 20px;

        &__image {
            width: 100px;
        }
    }
</style>