<template>
    <div class="wrapper" :class="{error}">
        <input v-bind:value="value" type="text" :disabled="disabled" :readonly="readonly"
          @change="$emit('change',$event.target.value)"
          @input="$emit('input',$event.target.value)"
          @focus="$emit('focus',$event.target.value)"
          @blur="$emit('blur',$event.target.value)"
        >
        <template v-if="error">
            <icon name="error" class="icon-error"></icon>
            <span class="message-error">{{error}}</span>
        </template>
    </div>
</template>
<script>
    import Icon from "./icon"
    export  default  {
        components:{Icon},
        name:'lulu-input',
        props:{
            value:{
                type:String
            },
            disabled:{
                type:Boolean,
                default:false
            },
            readonly:{
                type:Boolean,
                default:false
            },
            error:{
                type:String
            }
        }
    }
</script>
<style lang="scss" scoped>
    /*:root {*/
        /*--button-height: 32px;*/
        /*--font-size: 14px;*/
        /*--button-bg: white;*/
        /*--button-active-bg: #eee;*/
        /*--border-radius: 4px;*/
        /*--color: #333;*/
        /*--border-color: #999;*/
        /*--border-color-hover: #666;*/
    /*}*/
    $height:32px;
    $border-color:#999;  $border-color-hover:#666;
    $border-radius:4px;
    $font-size:12px;
    $box-shadog-color:rgba(0,0,0,0.5);
    .wrapper{display: inline-flex;font-size: $font-size;
        align-items: center;
        >:not(:last-child){margin-right:0.5em;}
        >input{height: $height;border:1px solid $border-color;border-radius:$border-radius;padding:0 8px;font-size: inherit;
            &:hover{border-color:$border-color-hover;}
            &:focus{box-shadow: 0 1px 3px $box-shadog-color inset;outline:none;}
            &[disabled],&[readonly]{border-color:#aaa;color:#aaa;cursor:not-allowed;}
        }
        &.error{ >input{border-color:orangered;
            &:hover{border-color:orange;}
            &:focus{box-shadow: 0 1px 3px orangered inset;outline: none;} }
        }
        .icon-error{fill:orangered;}
        .message-error{color:orangered;} }
</style>