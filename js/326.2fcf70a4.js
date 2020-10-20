(window.webpackJsonp=window.webpackJsonp||[]).push([[326],{1016:function(n,e){n.exports='### 如何实现无限制增加行数逻辑?\n\n伪代码: 换行的时候重新给 `textArea` 赋值 `scrollHeight`。\n\n### 注意点\n\n* 用户输入的汉字和英文是否要区分对待? 汉字作为 2 个字符还是 1 个字符?\n\n命中汉字作为两个字符的逻辑:\n\n```js\nif (/[^\\x00-\\xff]/gi.test(a)) {\n  ...\n}\n```\n\n### 用户角度: Textarea 组件的 maxLength 问题\n\n关于 Textarea 组件的超出 maxLength 是否被截断的问题, 思考以下几组情形。\n\n1. 粘贴过来直接截断, 提交后可能出问题，想象: "我是你爸爸的朋友", 粘贴后自动截断为"我是你爸爸"还没报错, 也没阻塞提交;\n2. 我们不少商家可能在多个销售平台售卖, 存在一个平台输入完, 其他平台直接粘贴的需求(所以粘贴的case可能比我们以为的多);\n3. 针对直接输入的情况, 如果总共允许 10 个字, 在当前为 5 个字的情况下, 我在中文输入法的情况下, 连输词组"下午来我家喝下午茶", 按空格建后, 内容截断为"下午来我家", 而且没飘红报错提示, 对商家来说, 可能不知道你做了截断的行为。'}}]);