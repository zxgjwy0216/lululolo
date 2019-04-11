<template>
    <div>
        <g-button @click="$toast('点击弹出提示')">顶部弹出</g-button>
        <g-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</g-button>
        <g-button @click="$toast('点击弹出提示', {position:'bottom'})">底部弹出</g-button>
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
        }
    }
</script>