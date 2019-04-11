<template>
    <div>
        <br/>
        <strong>预览:</strong>
        <br/><br/>
        <g-collapse  :selected.sync="selectedTabone" >
            <g-collapse-item title="标题一" name="1">123</g-collapse-item>
            <g-collapse-item title="标题二" name="2">123</g-collapse-item>
            <g-collapse-item title="标题三" name="3">213</g-collapse-item>
        </g-collapse>
        <br/>
        <br/><strong>使用代码:</strong><br/>
        <pre><code>{{content}}</code></pre>
    </div>
</template>
<script>
    import Collapse from '../../../src/collapse';
    import CollapseItem from  '../../../src/collapse-item'
    export default {
        components:{
            "g-collapse" : Collapse,
            "g-collapse-item":CollapseItem
        },
        data(){
            return {
                selectedTabone:['1','2'],
                content:`
                    data:{
                        selectedTabone:[1,2]
                    }
<g-collapse  :selected.sync="selectedTabone" >
<g-collapse-item title="标题一" name="1">123</g-collapse-item>
<g-collapse-item title="标题二" name="2">123</g-collapse-item>
<g-collapse-item title="标题三" name="3">213</g-collapse-item>
</g-collapse>
               `
            }
        }
    }
</script>