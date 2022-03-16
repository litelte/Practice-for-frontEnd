# 1.学习CSS

> CSS（层叠样式表）用于设置和布置网页 - 例如，更改内容的字体，颜色，大小和间距，将其拆分为多个列，或添加动画和其他装饰功能。这个模块为你掌握CSS的过程提供了一个温和的开端，包括它如何工作的基础知识，语法是什么样的，以及如何开始使用它来为HTML添加样式。

其实简单来说，CSS控制的就是网页的布局及样式

> CSS 可以用于给文档添加样式 —— 比如改变标题和链接的[颜色](https://developer.mozilla.org/zh-CN/docs/Web/CSS/color_value)及[大小](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-size)。它也可用于创建布局 —— 比如将一个单列文本变成包含主要内容区域和存放相关信息的侧边栏区域的[布局](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Layout_cookbook/Column_layouts)。它甚至还可以用来做一些特效，比如[动画](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Animations)。查看本段内容中所给出的特定案例。

## 1.1 CSS语法

CSS是一门基于规则的语言 —— 你能定义用于你的网页中特定元素样式的一组规则. 比如“我希望页面中的主标题是红色的大字”

下面这段代码使用非常简单的 CSS 规则实现了之前提到的效果:

```css
h1 {
    color: red;
    font-size: 5em;
}
```

语法由一个 [选择器(selector)](https://developer.mozilla.org/zh-CN/docs/Glossary/CSS_Selector)起头。 它 *选择(selects)* 了我们将要用来添加样式的 HTML 元素。 在这个例子中我们为一级标题（主标题[`` (en-US)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements)）添加样式。

接着输入一对大括号`{ }`。 在大括号内部定义一个或多个形式为 **属性(property):值(value);** 的 **声明(declarations)**。每个声明都指定了我们所选择元素的一个属性，之后跟一个我们想赋给这个属性的值。

冒号之前是属性，冒号之后是值。不同的 CSS [属性(properties) (en-US)](https://developer.mozilla.org/en-US/docs/Glossary/property/CSS) 对应不同的合法值。在这个例子中，我们指定了 `color` 属性，它可以接受许多[颜色值](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#color)；还有 `font-size` 属性，它可以接收许多 [size units](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#numbers_lengths_and_percentages) 值。

一个 CSS 样式表可以包含很多个规则。

```css
h1 {
    color: red;
    font-size: 5em;
}

p {
    color: black;
}
```

## 1.2 CSS模块

你可以通过 CSS 为许多东西添加样式，CSS 由许多*模块(modules)* 构成。你可以在 MDN 上浏览这些模块的参考内容(MDN reference)，许多模块都被组织在自己单独的文档页面。例如，我想查找一下 MDN reference 的 [Backgrounds and Borders](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Backgrounds_and_Borders) 模块的相关内容，来了解它是用来做什么的、它还包括什么属性、它还有什么其它特性等。你也可以在 *CSS Specification* 查找（见下文），它定义了CSS规范 。

在这个阶段你不必过于担心 CSS 是如何组织的(how CSS is structured)，但是它能帮助你更好的掌握 CSS。例如，你注意到某个属性和另外一些属性的相似点，并且它们可能确实是相同的格式。

举个具体点的例子：如上文中的 Backgrounds and Borders 模块 — 你会发现 `background-color` 和 `border-color` 这两个属性在逻辑上相通。并且它也确实如此。

## 1.3 [CSS 规范](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/First_steps/What_is_CSS#css_规范)

所有的标准Web技术(HTML, CSS, JavaScript等) 都被定义在一个巨大的文档中，称作 规范specifications (或者简称为 "specs")，它是由 (像是 [W3C (en-US)](https://developer.mozilla.org/en-US/docs/Glossary/W3C), [WHATWG](https://developer.mozilla.org/zh-CN/docs/Glossary/WHATWG), [ECMA](https://developer.mozilla.org/zh-CN/docs/Glossary/ECMA) 或 [Khronos (en-US)](https://developer.mozilla.org/en-US/docs/Glossary/Khronos)) 这些规范化组织所发布的，其中还定义了各种技术是如何工作的。

CSS 也不例外 — 它是由W3C(万维网联盟)中的一个名叫 [CSS Working Group](https://www.w3.org/Style/CSS/) 团体发展起来的。这个团体是由浏览器厂商和其他公司中对 CSS 感兴趣的人作为代表组成的。也有其他的人员，比如*受邀专家(invited experts)*，他们作为不从属于任何组织的独立声音加入团体。

新的 CSS 特性被开发出来，或是因为某个浏览器热衷于开发新功能，或是因为Web设计人员与开发者要求增加一个新特性，又或是 CSS Working Group 内部的讨论决定。CSS 始终在发展，并伴随着新的特性。然而，有一件事情从始至终都未改变，那就是不让新的改变破坏旧的网站，即使是2000年建立的网站，如今也能正常访问！

作为一个 CSS 新手，你会发现阅读 CSS 规范 中的内容非常吃力 — 它旨在为工程师在用户代理(user agents)中实现对 CSS 各种特性的支持，而不是作为一本为Web开发者理解 CSS 内容的教程。即使是有经验的开发者，也更倾向于使用 MDN 文档或者其它教程。但是，知晓它的存在，理解 CSS、规范 和 浏览器支持（见下文） 之间的关系是很有价值的。

