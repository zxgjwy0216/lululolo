---
title: Input-输入框
---
输入框
====

----
简单使用
----
<ClientOnly>
  <input-demos></input-demos>
</ClientOnly>
使用value规定Input框的默认值<br/>
使用disabled使Input不可用<br/>
使用readonly让Input保持只可读取状态<br/>
可规定error来实现输入框的警告，再自定义error的消除方式

----
实现双向绑定
----
<ClientOnly>
  <input-demosomplex></input-demosomplex>
</ClientOnly>
实现原理:使用Vue的v-model实现双向绑定
