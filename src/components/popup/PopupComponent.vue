<template>
    <div class="popup_wrapper" ref="popup">
        <div class="popup">
            <div class="popup__header">
                <p class="popup__title">{{ popupTitle }}</p>
                <span class="close" @click="closePopup">x</span>
            </div>
            <div class="popup__body">
                <slot></slot>
            </div>
            <div class="popup__footer">
                <button class="close_modal" @click="closePopup">Close</button>
                <button
                        class="submit_btn"
                        @click="rightBtnAction"
                >
                    {{ rightButtonTitle }}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PopupComponent",
        props: {
            rightButtonTitle: {
                type: String,
                default: 'OK'
            },
            popupTitle: {
                type: String,
                default: 'Popup title'
            }
        },
        methods: {
            closePopup() {
                this.$emit('close-popup')
            },
            rightBtnAction() {
                this.$emit('right-btn-action')
            }
        },
        mounted() {
            document.addEventListener('click', (e) => {
                if (e.target === this.$refs['popup']) {
                    this.closePopup();
                }
            });
        }
    }
</script>

<style scoped lang="scss">
    .popup_wrapper {
        background: rgba(64, 64, 64, .4);
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: 0;
        left: 0;
        top: 0;
        bottom: 0;
    }

    .popup {
        padding: 16px;
        position: fixed;
        top: 50px;
        width: 400px;
        background: #ffffff;
        box-shadow: 0 0 17px 0 #e7e7e7;
        z-index: 10;

        &__header, &__footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        &__body {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .submit_btn {
            padding: 8px;
            color: #ffffff;
            background: #26ae68;
        }

        .close_modal {
            padding: 8px;
            color: #ffffff;
            background: red;
        }

        .close {
            cursor: pointer;
        }
    }
</style>