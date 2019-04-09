<template>
    <div class="Lulu-content">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'LuluContent'
    }
</script>

<style lang="scss" scoped>
    .Lulu-content {
        flex-grow: 1;
    }
</style>