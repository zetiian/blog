(window.webpackJsonp=window.webpackJsonp||[]).push([[317],{1007:function(n,t){n.exports="### Menu 组件\n\n#### 难点\n\n1. 垂直模式下如何做到当悬浮到子节点(或者选中子节点), 父节点和祖父节点也是高亮的呢?\n2. 当光标从父节点移向子节点, 中间有段空隙, 慢速滑动时如何避免弹框的的关闭?\n3. 子 menu 展开收缩的动画如何实现? (需借助 JavaScript 动画)\n\n### JavaScript 动画与 CSS 动画\n\n```js\n/**\n * @todo JavaScript/CSS animation\n * @body to write this in the future.\n */\n```\n\n### 细节\n\n1. 背景: 在 Menu.Item 中通常会写 Link 标签或者 a 标签进行路由跳转, 但由于 a 标签是行内样式, 点击区域过小导致跳转失效。参考了 ant-design 的[解决方案](https://github.com/ant-design/ant-design/issues/21649), 给 `<a />` 标签添加相关样式;"}}]);