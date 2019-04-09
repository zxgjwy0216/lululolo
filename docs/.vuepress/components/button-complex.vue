<template>
    <div>
        <p><strong>预览：</strong></p>
        <g-button icon="set" :loading=true>默认按钮</g-button>
        <g-button icon="set" icon-position="right">默认按钮</g-button>
        <g-button icon="set" icon-position="left">默认按钮</g-button>
        <g-button-group>
            <g-button icon="left"></g-button>
            <g-button icon="thumbs-up"></g-button>
            <g-button icon="right"></g-button>
        </g-button-group>
        <p><strong>代码:</strong></p>
        <pre><code>{{content}}</code></pre>
    </div>
</template>
<script>
    import Button from '../../../src/button';
    import Buttongroup from  '../../../src/button-group';
    export default {
        components:{
            "g-button" :Button,
            'g-button-group':Buttongroup
        },
        data(){
            return {
                content:`
                        <g-button icon="set" :loading=true>默认按钮</g-button>
                        <g-button icon="set" icon-position="right">默认按钮</g-button>
                        <g-button icon="set" icon-position="left">默认按钮</g-button>
                        <g-button-group>
                            <g-button icon="left"></g-button>
                            <g-button icon="thumbs-up"></g-button>
                            <g-button icon="right"></g-button>
                        </g-button-group>
                    `
            }
        }
    }
</script>