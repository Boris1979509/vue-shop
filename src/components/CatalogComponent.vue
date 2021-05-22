<template>
    <div class="catalog">
        <div class="catalog__list">
            <catalog-item-component
                    v-for="product in PRODUCTS"
                    :key="product.article"
                    :product-data="product"
                    @add-to-cart="add"
            />
        </div>
    </div>
</template>

<script>
    import CatalogItemComponent from "@/components/CatalogItemComponent";
    import {mapActions, mapGetters} from 'vuex';

    export default {
        name: "CatalogComponent",
        data() {
            return {}
        },
        computed: {
            ...mapGetters([
                "PRODUCTS"
            ])
        },
        components: {
            CatalogItemComponent
        },
        methods: {
            ...mapActions([
                "GET_PRODUCTS_FROM_API"
            ]),
            add(value) {
                console.log(value)
            }
        },
        mounted() {
            this.GET_PRODUCTS_FROM_API()
                .then(response => {
                    if (response) {
                        console.log('catalog start');
                    }
                })
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
    }
</style>