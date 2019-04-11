<template>
    <div>
        <br/>
        <strong>预览:</strong>
        <br/><br/>
        <g-input></g-input>
        <g-input value="欢迎使用Lulu"></g-input>
        <g-input value="欢迎使用Lulu" disabled></g-input>
        <g-input value="欢迎使用Lulu" readonly></g-input>
        <g-input value="王" error="名字不能少于两个字"></g-input>
        <br/>
        <br/><strong>使用代码:</strong><br/>
        <pre><code>{{content}}</code></pre>
    </div>
</template>
<script>
    import Input from '../../../src/input';
    export default {
        components:{
            "g-input" :Input,
        },
        data(){
            return {
                content:`
<g-input></g-input>
<g-input value="欢迎使用Lulu"></g-input>
<g-input value="欢迎使用Lulu" disabled></g-input>
<g-input value="欢迎使用Lulu" readonly></g-input>
<g-input value="王" error="名字不能少于两个字"></g-input>
                    `
            }
        }
    }
</script>