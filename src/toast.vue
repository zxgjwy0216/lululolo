<template>
    <div class="toast" ref="wrapper">
        <slot v-if='!enableHTML'></slot>
        <div v-else v-html="$slots.default[0]"></div>
        <div class="line" ref="line"></div>
        <div v-if="closeButton" class="close" @click="onClickClose()">
            {{closeButton.text}}
        </div>
    </div>
</template>
<script>
    export default {
        name:'LuluToast',
        props: {
            autoClose: {
                type: Boolean,
                default: true
            },
            autoCloseDelay: {
                type: Number,
                default: 5
            },
            closeButton: {
                type: Object,
                default: function () {
                    return {
                        text: '关闭',
                        callback: undefined
                    }
                }
            },
            enableHTML:{
                type:Boolean,
                default:false
            }
        },
        mounted(){
            if(this.autoClose){
                setTimeout(() =>{
                    this.close()
                },this.autoCloseDelay * 50000)
            }
            this.$nextTick(() => {
                console.log(this.$refs.wrapper.getBoundingClientRect().height);
                this.$refs.line.style.height =
                    `${this.$refs.wrapper.getBoundingClientRect().height}px`
            })
        },
        methods:{
            close(){
                this.$el.remove()
                this.$destroy()
            },
            onClickClose(){
                this.close()
                if(this.closeButton&&this.closeButton.callback === 'function'){
                    this.closeButton.callback()
                }
            }
        }
    }
</script>
<style scoped lang="scss">
    $font-size:14px;
    $toast-min-height:35px;
    $toast-bg:rgba(0,0,0,0.75);
    .toast{
        position: fixed;top:0;left:50%;transform:translateX(-50%);font-size:$font-size;color:white;
        line-heihght:1.8;min-height:$toast-min-height;display:flex;align-items: center;background:$toast-bg;
        box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.50);padding:0 16px;
    }
    .close{
        padding-left:16px;
        flex-shrink: 0;
    }
    .line{
        height:100%;
        border-left:1px solid #666;
        margin-left:16px;
    }
</style>