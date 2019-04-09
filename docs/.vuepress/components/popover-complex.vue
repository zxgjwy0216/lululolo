<template>
    <div>
        <p><strong>预览：</strong></p>
        <g-popover position="bottom">
            <template slot="content">
                <div>欢迎使用Lulu UI</div>
            </template>
            <template>
                <g-button>我会从下面出现</g-button>
            </template>
        </g-popover>
        <g-popover position="top">
            <template slot="content">
                <div>欢迎使用Lulu UI</div>
            </template>
            <template>
                <g-button>我会从上面出现</g-button>
            </template>
        </g-popover>
        <g-popover position="left">
            <template slot="content">
                <div>欢迎使用Lulu UI</div>
            </template>
            <template>
                <g-button>我会从左边出现</g-button>
            </template>
        </g-popover>
        <g-popover position="right">
            <template slot="content">
                <div>欢迎使用Lulu UI</div>
            </template>
            <template>
                <g-button>我会从右边出现</g-button>
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
            <template slot="content">
                <div>欢迎使用Lulu UI</div>
            </template>
            <template>
                <g-button>我会从下面出现</g-button>
            </template>
        </g-popover>
        <g-popover position="top">
            <template slot="content">
                <div>欢迎使用Lulu UI</div>
            </template>
            <template>
                <g-button>我会从上面出现</g-button>
            </template>
        </g-popover>
        <g-popover position="left">
            <template slot="content">
                <div>欢迎使用Lulu UI</div>
            </template>
            <template>
                <g-button>我会从左边出现</g-button>
            </template>
        </g-popover>
        <g-popover position="right">
            <template slot="content">
                <div>欢迎使用Lulu UI</div>
            </template>
            <template>
                <g-button>我会从右边出现</g-button>
            </template>
        </g-popover>
                    `
            }
        }
    }
</script>