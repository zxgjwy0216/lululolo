<template>
    <div>
        <g-button @click="onClickButton">顶部弹出</g-button>
    </div>
</template>
<style>
    .lulu-toast {
        z-index: 30 !important;
    }
</style>
<script>
    import Vue from 'vue'
    import Toast from '../../../src/toast'
    import Button from '../../../src/button'
    import plugin from '../../../src/plugin'
    Vue.use(plugin)
    export default {
        components: {
            'g-toast': Toast,
            'g-button': Button
        },
        methods: {
            onClickButton() {
                this.$toast('你知道我在等你吗？', {
                    closeButton: {
                        text: '知道了',
                        callback: () => {
                            console.log('他说知道了')
                        }
                    }
                })
            }
        }
    }
</script>