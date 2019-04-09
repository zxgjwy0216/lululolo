---
title: Collapse-折叠层
---
输入框
====

----
简单使用
----
<ClientOnly>
  <collapse-demo></collapse-demo>
</ClientOnly>
使用value规定Input框的默认值<br/>
使用disabled使Input不可用<br/>
使用readonly让Input保持只可读取状态<br/>

----
实现双向绑定
----
<ClientOnly>
  <input-demosomplex></input-demosomplex>
</ClientOnly>
实现原理:使用Vue的v-model实现双向绑定