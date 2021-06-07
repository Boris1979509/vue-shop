<template>
    <div class="catalog-item">
        <popup-component
                v-if="isPopupVisible"
                @close-popup="closePopup"
                right-button-title="Add to cart"
                :popup-title="productData.name"
                @right-btn-action="addToCart"
        >
            <img
                    :src="require(`@/assets/images/${productData.image}`)"
                    :alt="productData.name"
                    class="catalog-item__image"

            >
            <p class="catalog-item__name"><strong>{{ productData.name }}</strong></p>
            <p class="catalog-item__price"><strong>Price {{ productData.price }} $</strong></p>
            <p class="catalog-item__category"><strong>Category {{ productData.category }}</strong></p>
        </popup-component>
        <!---->
        <img
                :src="require(`@/assets/images/${productData.image}`)"
                :alt="productData.name"
                class="catalog-item__image"

        >
        <p class="catalog-item__name"><strong>{{ productData.name }}</strong></p>
        <p class="catalog-item__price"><strong>Price {{ productData.price }} $</strong></p>
        <button @click="showPopupInfo">Preview</button>
        <button
                type="button"
                class="catalog-item__add_to_cart_btn btn"
                @click="addToCart"
        >Add to cart
        </button>
    </div>
</template>

<script>
    import PopupComponent from "@/components/popup/PopupComponent";

    export default {
        name: "CatalogItemComponent",
        emits: ['add-to-cart'],
        data() {
            return {
                isPopupVisible: false
            }
        },
        props: {
            productData: {
                type: Object
            }
        },
        methods: {
            showPopupInfo() {
                this.isPopupVisible = true;
            },
            closePopup() {
                this.isPopupVisible = false;
            },
            addToCart(){
                this.$emit('add-to-cart', this.productData)
            }
        },
        components: {
            PopupComponent
        },
        mounted() {
            this.$set(this.productData, 'quantity', 1);
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