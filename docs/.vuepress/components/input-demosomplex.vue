<template>
    <div>
        <br/>
        <strong>预览:</strong>
        <br/><br/>
        <g-input v-model="value"></g-input>
        <div>
            value:{{value}}
        </div>
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
                value:'1',
                content:`
                data:{
                    value: '1'
                }
                <g-input v-model="value"></g-input>
                <div>
                    value : {{value}}
                </div>
               `
            }
        }
    }
</script>