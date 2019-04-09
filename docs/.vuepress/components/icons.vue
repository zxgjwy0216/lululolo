<template>
    <div>
        <p><strong>预览：</strong></p>
        <g-icon name="set" style="margin-left: 5px"></g-icon>
        <g-icon name="right" style="margin-left: 5px" ></g-icon>
        <g-icon name="left" style="margin-left: 5px"></g-icon>
        <g-icon name="error" style="margin-left: 5px"></g-icon>
        <g-icon name="loading" style="margin-left: 5px"></g-icon>
        <g-icon name="download" style="margin-left: 5px"></g-icon>
        <g-icon name="down" style="margin-left: 5px"></g-icon>
        <g-icon name="thumbs-up" ></g-icon>
        <p><strong>代码:</strong></p>
        <pre><code>{{content}}</code></pre>
        <p><strong>用法:</strong></p>
        <span>当你需要使用icon时，您可以引入g-icon标签，并在{name}中设置您想要的图标，顺序如上代码所示</span>
    </div>
</template>
<script>
    import Icon from '../../../src/icon';
    export default {
        components:{
            "g-icon" :Icon,
        },
        data(){
            return {
                content:`
                        <g-icon name="set"></g-icon>
                        <g-icon name="right"></g-icon>
                        <g-icon name="left"></g-icon>
                        <g-icon name="error"></g-icon>
                        <g-icon name="loading"></g-icon>
                        <g-icon name="download"></g-icon>
                        <g-icon name="down"></g-icon>
                        <g-icon name="thumbs-up"></g-icon>
                    `
            }
        }
    }
</script>