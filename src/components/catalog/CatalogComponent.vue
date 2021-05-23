<template>
    <div class="catalog">
        <h1>{{ $store.state.title }}</h1>
        <router-link :to="{name: 'cart', params:{cartData: this['cart/get']}}">
            <div class="catalog__link_to_cart">
                Cart: {{ this['cart/get'].length }}
            </div>
        </router-link>
        <div class="catalog__list">
            <catalog-item-component
                v-for="product in this['products/get']"
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
        computed: {
            ...mapGetters([
                "products/get",
                "cart/get"
            ])
        },
        components: {
            CatalogItemComponent
        },
        methods: {
            ...mapActions([
                "products/api",
                "cart/add"
            ]),
            addToCart(value) {
                this["cart/add"](value);
            }
        },
        mounted() {
            this["products/api"]()
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