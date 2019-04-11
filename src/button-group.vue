<template>
    <div class="g-button-group">
        <slot></slot>
    </div>
</template>
<script></script>
<style lang="scss">
    .g-button-group{
        display:inline-flex;
        vertical-align: middle;
        $border-color-hover: #666;
        $border-color: #999;
        $border-color-light: lighten($border-color, 30%);
        $border-radius: 4px;
        $box-shadog-color: rgba(0, 0, 0, 0.5);
        $button-active-bg: #eee;
        $button-bg: white;
        $button-height: 32px;
        $color: #333;
        $light-color: #666;
        $font-size: 14px;
        >.g-button{
            border-radius:0;
            margin-left:-1px;
            &:first-child{
                margin-left:0px;
                border-top-left-radius: $border-radius;
                border-bottom-left-radius: $border-radius;
            }
            &:last-child{
                border-top-right-radius: $border-radius;
                border-bottom-right-radius: $border-radius;
            }
            &:hover{
                position: relative;
                z-index:1;
            }
        }
    }
</style>