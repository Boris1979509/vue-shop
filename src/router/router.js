import Vue from 'vue';
import VueRouter from 'vue-router';
import CatalogComponent from "@/components/catalog/CatalogComponent";
import CartComponent from "@/components/cart/CartComponent";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'catalog',
        component: CatalogComponent
    },
    {
        path: '/cart',
        name: 'cart',
        component: CartComponent,
        props: true
    }
];
export default new VueRouter({
    routes
});