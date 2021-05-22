<template>
    <div class="main-wrapper">
        <catalog-component></catalog-component>
        <cart-component
                v-if="CART.length"
                :cart-data="CART"
        ></cart-component>
    </div>
</template>

<script>
    import CatalogComponent from "@/components/CatalogComponent";
    import CartComponent from "@/components/CartComponent";
    import {mapGetters} from 'vuex';

    export default {
        name: "MainComponent",
        data() {
            return {
                title: 'Main page catalog'
            }
        },
        computed: {
            ...mapGetters([
                "CART"
            ])
        },
        mounted() {
            console.log('Mounted...')
        },
        components: {
            CatalogComponent,
            CartComponent
        }
    }
</script>

<style scoped lang="scss">
    .main-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 900px;
        margin: 0 auto;
    }
</style>