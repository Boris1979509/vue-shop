<template>
    <div id="app">
        <main-component></main-component>
    </div>
</template>

<script>
    import MainComponent from "@/components/MainComponent";
    import {mapActions} from "vuex";

    export default {
        name: 'App',
        components: {
            MainComponent
        },
        methods: {
            ...mapActions('select', [
                "setMobile",
                "setDesktop"
            ]),
        },
        mounted() {
            window.addEventListener('resize', () => {
                if (window.innerWidth > 767) {
                    this.setDesktop();
                } else {
                    this.setMobile();
                }
            })
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
