<template>
    <div class="catalog">
        <h1>{{ title }}</h1>
        <router-link :to="{name: 'cart', params:{cartData: CART}}">
            <div class="catalog__link_to_cart">
                Cart: {{ CART.length }}
            </div>
        </router-link>
        <div class="catalog__list">
            <catalog-item-component
                v-for="product in PRODUCTS"
                :key="product.article"
                :product-data="product"
                @add-to-cart="addToCart"
            />
        </div>
    </div>
</template>

<script>
    import CatalogItemComponent from "@/components/catalog/CatalogItemComponent";
    import {mapActions, mapGetters} from 'vuex';

    export default {
        name: "CatalogComponent",
        data() {
            return {
                title: 'Catalog'
            }
        },
        computed: {
            ...mapGetters([
                "PRODUCTS",
                "CART"
            ])
        },
        components: {
            CatalogItemComponent
        },
        methods: {
            ...mapActions([
                "GET_PRODUCTS_FROM_API",
                "ADD_TO_CART"
            ]),
            addToCart(value) {
                this.ADD_TO_CART(value);
            }
        },
        mounted() {
            this.GET_PRODUCTS_FROM_API()
                .then(response => {
                    if (response) {
                        console.log('catalog start');
                    }
                });
        }
    }
</script>

<style scoped lang="scss">
    .catalog {
        &__list {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
        }

        &__link_to_cart {
            position: fixed;
            top: 80px;
            right: 10px;
            padding: 20px;
            border: solid 1px #aeaeae;
            background: #ffffff;
        }
    }
</style>