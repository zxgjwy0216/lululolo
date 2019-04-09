---
title: Popover-弹出层
---
按钮弹出层
====

----
简单展示
----

<br/>
<ClientOnly>
<popover-demo></popover-demo>
</ClientOnly>

<strong>g-popover分为两层结构，在一个g-popover标签中您需要写两个'template'</strong><br/>
一个template设置'slot="content"',这负责告诉LuluUI您将在这个template中设置弹出框的内容，没有设置'slot="content"'将被默认为触发弹出层的触发器，您可以在这里引入g-button,g-input等组件

----
设置弹出位置
----

当您使用popover组件时，必须在g-popover中使用position来设置弹出层出现的位置<br/>
position的值有：<strong>"left","right","top","bottom"</strong>
<br/>
<ClientOnly>
<popover-complex></popover-complex>
</ClientOnly>

----
使用hover触发方式
----

当您想要使用hover方式来触发弹出层时，非常简单，只需要在Popover标签中设置<strong>trigger='hover'</strong><br/>
当您的弹出层由click触发时，如果您想要在弹出层中引入一个关闭按钮，只需要弹出层内存template中加入slot-scope='{close}'
并在template中引入g-button,@click="close"
<br/>
<ClientOnly>
<popover-demo-hover></popover-demo-hover>
</ClientOnly>

