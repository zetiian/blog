(window.webpackJsonp=window.webpackJsonp||[]).push([[315],{1005:function(n,e){n.exports="### Input 组件\n\n### input type 为 bankCard 或 phone 时, 光标错位问题\n\n![](http://with.muyunyun.cn/5d99b6bb211806c1e3a19361125e06e8.jpg)\n\n* 遇到问题: 在光标位置输入 5, 光标位置出现错误\n\n在光标位置输入 5, 光标此时的 selectionStart/selectionEnd 变为 5, 可推测规律当判断 4 的位置为 ' ' 时, 应该让 selectionStart = selectionEnd = 光标位置 + 1\n\n![](http://with.muyunyun.cn/55efc4cc4dd46ffdd1fc34c7e16152e0.jpg)\n\n* 遇到问题: 在此位置按删除, 光标此时的 selectionStart/selectionEnd 变为 5, 可推测规律当判断 4 的位置为 ' ' 时, 应该让 selectionStart = selectionEnd = 光标位置 - 1\n\n"}}]);