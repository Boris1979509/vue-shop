<template>
    <div class="catalog">
        <h1>{{ $store.state.title }}</h1>
        <router-link :to="{name: 'crypto'}">Crypto</router-link>
        <router-link :to="{name: 'cart', params:{cartData: this['cart/get']}}">
            <div class="catalog__link_to_cart">
                Cart: {{ this['cart/get'].length }}
            </div>
        </router-link>
        <div class="filters">
            <select-component
                    :options="categories"
                    @select="sortByCategories"
                    :selected="selected"
                    :is-expended="this['select/getIsMobile']"
            />
            <div class="range-slider">
                <input
                        type="range"
                        min="0"
                        max="10000"
                        step="10"
                        v-model.number="minPrice"
                        @change="setRange"
                >
                <input
                        type="range"
                        min="0"
                        max="10000"
                        step="10"
                        v-model.number="maxPrice"
                        @change="setRange"
                >
            </div>
            <div class="range-values">
                <p>Min: {{ minPrice }}</p>
                <p>Max: {{ maxPrice }}</p>
            </div>
        </div>
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
                sortedProducts: [],
                maxPrice: 10000,
                minPrice: 0
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
                this.sortedProducts = [...this["products/get"]];
                this.sortedProducts = this.sortedProducts
                    .filter(item => item.price >= this.minPrice
                        && item.price <= this.maxPrice
                    );
                if (option) {
                    this.sortedProducts = this.sortedProducts
                        .filter(item => item.category === option.name);
                    this.selected = option.name;
                }
            },
            setRange() {
                if (this.minPrice > this.maxPrice) {
                    let tmp = this.maxPrice;
                    this.maxPrice = this.minPrice;
                    this.minPrice = tmp;
                }
                this.sortByCategories();
            }
        },
        mounted() {
            this["products/api"]()
                .then(response => {
                    if (response) {
                        this.sortByCategories();
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

    .filters {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .range-slider {
        width: 200px;
        margin: auto 16px;
        text-align: center;
        position: relative;
    }

    .range-slider svg, .range-slider input[type=range] {
        position: absolute;
        left: 0;
        bottom: 0;
    }

    input[type=range]::-webkit-slider-thumb {
        z-index: 2;
        position: relative;
        top: 2px;
        margin-top: -7px;
    }
</style>