<template>
    <div>
        <p><strong>上中下布局：</strong></p>
        <g-layout style="color: white;">
            <g-header style="height: 50px; background:lightskyblue;">
                header
            </g-header>
            <g-content style="height: 100px; background:deepskyblue;">
                content
            </g-content>
            <g-footer style="height: 50px; background:lightskyblue;">
                footer
            </g-footer>
        </g-layout>
        <p><strong>代码:</strong></p>
        <pre><code>{{content}}</code></pre>
    </div>
</template>
<script>
    import Layout from '../../../src/layout/layout';
    import Content from '../../../src/layout/content';
    import Header from '../../../src/layout/header';
    import Sider from '../../../src/layout/sider';
    import Footer from '../../../src/layout/footer';
    export default {
        components:{
            "g-layout" :Layout,
            'g-content':Content,
            'g-header':Header,
            'g-sider':Sider,
            'g-footer':Footer
        },
        data(){
            return {
                content:`
<g-layout style="color: white;">
<g-header style="height: 50px; background:lightskyblue;">
    header
</g-header>
<g-content style="height: 100px; background:deepskyblue;">
    content
</g-content>
<g-footer style="height: 50px; background:lightskyblue;">
    footer
</g-footer>
</g-layout>
                    `
            }
        }
    }
</script>