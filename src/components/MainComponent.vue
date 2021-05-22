<template>
    <div class="main-wrapper">
        <keep-alive>
            <router-view/>
        </keep-alive>
    </div>
</template>

<script>
    export default {
        name: "MainComponent",
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