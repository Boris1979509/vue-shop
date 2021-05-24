<template>
    <div class="select">
        <p class="title" @click="isVisible = !isVisible">{{ selected }}</p>
        <div class="options" v-if="isVisible || isExpended">
            <p
                    v-for="(option, index) in options"
                    :key="index"
                    @click="selectOption(option)"
            >
                {{ option.name }}
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SelectComponent",
        data() {
            return {
                isVisible: false
            }
        },
        props: {
            options: {
                type: Array,
                default() {
                    return [];
                }
            },
            selected: {
                type: String,
                default: ''
            },
            isExpended: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            selectOption(option) {
                this.$emit('select', option);
            },
            hideSelect() {
                this.isVisible = false
            }
        },
        mounted() {
            document.addEventListener('click', this.hideSelect, true)
        },
        beforeDestroy() {
            document.removeEventListener('click', this.hideSelect, true)
        }
    }
</script>

<style scoped lang="scss">
    .select {
        position: relative;
        width: 200px;
        cursor: default;
        background: #fff;
        top: -10px;

        p {
            margin: 0;

            &.title {
                border: 1px solid #cccccc;
            }
        }
    }

    .options {
        border: 1px solid #cccccc;
        position: absolute;
        top: 25px;
        right: 0;
        width: 99%;
        left: 0;
        background: #fff;

        p {
            &:hover {
                background: #f7f7f7;
            }
        }
    }
</style>