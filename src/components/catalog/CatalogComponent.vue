<template>
    <div class="catalog">
        <h1>{{ $store.state.title }}</h1>
        <router-link :to="{name: 'cart', params:{cartData: this['cart/get']}}">
            <div class="catalog__link_to_cart">
                Cart: {{ this['cart/get'].length }}
            </div>
        </router-link>
        <select-component
                :options="categories"
                @select="sortByCategories"
                :selected="selected"
                :is-expended="this['select/getIsMobile']"
        />
        <div class="catalog__list">
            <catalog-item-component
                    v-for="product in filteredProducts"
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
    import SelectComponent from "@/components/SelectComponent";

    export default {
        name: "CatalogComponent",
        data() {
            return {
                categories: [
                    {name: 'Все', value: 'all'},
                    {name: 'Мужские', value: 'm'},
                    {name: 'Женские', value: 'w'},
                ],
                selected: 'Все',
                sortedProducts: []
            }
        },
        computed: {
            ...mapGetters([
                "products/get",
                "cart/get",
                "select/getIsDesktop",
                "select/getIsMobile"
            ]),
            filteredProducts() {
                if (this.sortedProducts.length) {
                    return this.sortedProducts
                }
                return this["products/get"];
            }
        },
        components: {
            CatalogItemComponent,
            SelectComponent
        },
        methods: {
            ...mapActions([
                "products/api",
                "cart/add"
            ]),
            addToCart(value) {
                this["cart/add"](value);
            },
            sortByCategories(option) {
                this.sortedProducts = this["products/get"]
                    .filter(item => item.category === option.name);
                this.selected = option.name;
            }
        },
        mounted() {
            this["products/api"]()
            //     .then(response => {
            //         if (response) {
            //             console.log('catalog start');
            //         }
            //     });
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