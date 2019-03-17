<template>
    <button class="g-button"  :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
        <g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
        <g-icon class="loading icon" v-if="loading" name="loading"></g-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>
<script>
    export default {
        props: {
            icon: {},
            loading:{
                type:Boolean,
                default:false
            },
            iconPosition: {
                type: String,
                default: 'left',
                validator: function (value) {
                    if(value !== 'left' && value !== 'right'){
                        return false;
                    }else{
                        return true;
                    }
                }
            }
        }
    }
</script>
<style lang="scss">
    @keyframes spin{
        0%{transform:rotate(0deg);}
        100%{ transform:rotate(360deg);}
    }
    .g-button {
        height: var(--button-height);
        font-size: var(--font-size);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;

        &:hover {
            border-color: var(--border-color-hover);
        }

        &:active {
            background-color: var(--button-active-bg);
        }

        &:focus {
            outline: none;
        }

        > .icon {
            order: 1;
        }

        > .content {
            order: 2;
        }

        &.icon-right {
            > .icon {
                order: 2;
            }
            > .content {
                order: 1;
            }
        }
        .loading{
            animation:spin 2s infinite linear;
        }
    }
</style>



