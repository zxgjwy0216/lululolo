<template>
    <div class="col" :class="colClass" :style="colStyle">
        <div style="border: 1px solid red ;height: 100px"><slot></slot></div>
    </div>
</template>
<script>
    export default {
        name:"LuluCol",
        data(){
            return{
                gutter:0
            }
        },
        props:{
            span:{
                type:[Number,String]
            },
            offset:{
                type:[Number,String]
            },
        },
        computed:{
            colClass(){
                return [
                    this.span&&`col-${this.span}`,
                    this.offset&&`offset-${this.offset}`
                ]
            },
            colStyle(){
                return {
                    paddingLeft:this.gutter/2 + 'px',
                    paddingRight : this.gutter/2 + 'px'
                }
            }
        }
    }
</script>
<style scoped lang="scss">
    .col{

        height: 100px;
        /*background:grey;*/
        width:50%;
        /*border:1px solid red;*/
        $class-prefix:col-;
        @for $n from 1 through 24{
            &.#{$class-prefix}#{$n}{
                width:($n / 24) * 100%;
            }
        }
        $class-prefix:offset-;
        @for $n from 1 through 24{
            &.#{$class-prefix}#{$n}{
               margin-left:($n / 24) * 100%;
            }
        }
    }
</style>