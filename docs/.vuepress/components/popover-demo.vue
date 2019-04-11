<template>
    <div>
        <p><strong>预览：</strong></p>
        <g-popover position="bottom">
            <template slot="content" slot-scope="{close}">
                <div>欢迎使用Lulu UI</div>
                <g-button @click="close">close</g-button>
            </template>
            <template>
                <g-button>我觉得我需要被点一下</g-button>
            </template>
        </g-popover>
        <p><strong>代码:</strong></p>
        <pre><code>{{content}}</code></pre>
    </div>
</template>
<script>
    import Popover from '../../../src/popover';
    import Button from "../../../src/button";

    export default {
        components:{
            "g-button":Button,
            "g-popover":Popover
        },
        data(){
            return {
                content:`
<g-popover position="bottom">
<template slot="content" slot-scope="{close}">
    <div>欢迎使用Lulu UI</div>
    <g-button @click="close">close</g-button>
</template>
<template>
    <g-button>我觉得我需要被点一下</g-button>
</template>
</g-popover>
                    `
            }
        }
    }
</script>