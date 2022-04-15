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

## 1.4CSS的导入

我们最想做的就是让 HTML 文档能够遵守我们给它的 CSS 规则。 其实有三种方式可以实现，而目前我们更倾向于利用最普遍且有用的方式——在文档的开头链接 CSS。

在与之前所说的 HTML 文档的相同目录创建一个文件，保存并命名为 `styles.css` 。（看后缀知道此文件就是 CSS 文件）

为了把 `styles.css` 和 `index.html` 连接起来，可以在 HTML 文档中，[``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/head) 语句模块里面加上下面的代码：

```html
<link rel="stylesheet" href="styles.css">
```

 [<link>](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/link) 语句块里面，我们用属性 `rel`，让浏览器知道有 CSS 文档存在（所以需要遵守 CSS 样式的规定），并利用属性 `href` 指定，寻找 CSS 文件的位置。 你可以做测试来验证CSS是否有效：在 `styles.css` 里面加上CSS样式并观察显示的结果。下面，用你的编辑器打出下面的代码。

```css
h1 {
  color: red;
}
```

### 1.4.1样式化HTML元素

我们通过触发元素选择器实现这一点——元素选择器，即直接匹配 HTML 元素的选择器。例如，若要样式化一个文档中所有的段落，只需使用选择器 `p`。若要将所有段落变成绿色，你可以利用如下方式：

```css
p {
  color: green;
}
```

Copy to Clipboard

用逗号将不同选择器隔开，即可一次使用多个选择器。譬如，若要将所有段落与列表变成绿色，只需：

```css
p, li {
    color: green;
}
```

### 1.4.2[改变元素的默认行为](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/First_steps/Getting_started#改变元素的默认行为)

标题默认使用大号粗体；列表旁总有项目符号。这是因为浏览器自带一个包含默认样式的样式表，默认对任何页面有效。没有了它们，所有文本会夹杂在一起变得一团糟，我们只得从头开始规定，好糟糕。话说回来，所有现代浏览器的默认样式都没什么差距。

不过你可能对浏览器的默认样式不太满意。没关系，只需选定那个元素，加一条 CSS 规则即可。就拿我们的无序列表 `<ul>`举个例子吧，它自带项目符号，不过要是你跟它有仇，你就可以这样移除它们：

```css
li {
  list-style-type: none;
}
```

![image-20220326014934615](F:/MarkdownResSource/README.assets/image-20220326014934615.png)

### 1.4.3使用类名

，我们通过 HTML 元素名规定样式。如果你愿意所有元素都一个样，也不是不可以，但大多数情况下，我估计你都不愿意。我知道你想干啥，你想用这种方式样式化这一片元素，又想用那种方式样式化那一片元素，真贪心。不过没关系，你可以给 HTML 元素加个类名（class），再选中那个类名，这样就可以了，大家基本上都这么用。

举个例子吧，咱们把 [class 属性](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class)加到表里面第二个对象。你的列表看起来应该是这样的：

```html
<ul>
  <li>项目一</li>
  <li class="special">项目二</li>
  <li>项目 <em>三</em></li>
</ul>
```

在 CSS 中，要选中这个 `special` 类，只需在选择器的开头加个西文句点（.）。在你的 CSS 文档里加上如下代码：

```css
.special {
  color: orange;
  font-weight: bold;
}
```

这个 `special` 类型可不局限于列表，它可以应用到各种元素上。举个例子，你可能也想让段落里边的 `<span>` 一起又橙又粗起来。试试把`special` 类属性加上去，保存，刷新，哇，生活就是这么美好。

有时你会发现选择器中，HTML 元素选择器跟类一起出现：

```css
li.special {
  color: orange;
  font-weight: bold;
}
```

这个意思是说，“选中每个 `special` 类的 `li` 元素”。 你真要这样，好了，它对 `<span>` 还有其它元素不起作用了。你可以把这个元素再添上去就是了：

```css
li.special,
span.special {
  color: orange;
  font-weight: bold;
}
```

### 1.4.4[根据元素在文档中的位置确定样式](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/First_steps/Getting_started#根据元素在文档中的位置确定样式)

有时候，您希望某些内容根据它在文档中的位置而有所不同。这里有很多选择器可以为您提供帮助，但现在我们只介绍几个选择器。在我们的文档中有两个 `<em>`元素 ——一个在段落内，另一个在列表项内。仅选择嵌套在`<li>` 元素内的`<em>`我们可以使用一个称为**包含选择符**的选择器，它只是单纯地在两个选择器之间加上一个空格。

将以下规则添加到样式表。

```css
li em {
  color: rebeccapurple;
}
```

该选择器将选择`<li>`内部的任何`<em>`元素（`<li>`的后代）。因此在示例文档中，您应该发现第三个列表项内的`<em>`现在是紫色，但是在段落内的那个没发生变化。

另一些可能想尝试的事情是在 HTML 文档中设置直接出现在标题后面并且与标题具有相同层级的段落样式，为此需在两个选择器之间添加一个 `+` 号 (成为 **相邻选择符**) 

也将这个规则添加到样式表中：

```css
h1 + p {
  font-size: 200%;
}
```

下面的示例包含了上面的两个规则。 尝试添加规则使位于段落中的 span 变为红色。如果没问题，您将看到在第一段中的 span 会变为红色，但是第一个列表项中的 span 不会改变颜色。

[源代码：](..\day8\3.definestylebylocation.html)

```css
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>根据元素在文档中的位置确定样式</title>
    <style>
        /* 对于所属层级，中间用空格，即可让被属层级中相同级别的标签有一样的属性
        */
        li em{
            color: greenyellow;
        }
        /* 而对于相同层级，在HTML文档中设置直接出现在标题后面并且与标题具有相同层级的段落样式，
        为此需在两个选择器之间添加一个 + 号 (成为 相邻选择符)  */
        h1 + p{
            font-size: 200%;
            color: blueviolet;
        }
    </style>
</head>

<body>
    <h1>根据元素在文档中的位置确定样式</h1>
    <!-- 现在有两个<em>标签，一个在段落内，一个在列表项内，如果仅修改列表项内的<em>标签样式，
        则可以用下面的方法 -->
        <!-- em代表的是斜体 -->
        <!-- 上面定义好li em后，这里就不用直接添加class的属性了 -->
    <p>这是一个段落文本，只是<em>示例用</em></p>
    <h1>另一个测试结果</h1>
    <p>前提必须是相邻的，也就是说h1和p必须是相邻，不信看下面的这个</p>
    <p><b>这个就不行</b></p>
    <p>下面是一个表格</p>
    <ul>
        <li>子项1</li>
        <li>子项2</li>
        <li><em>子项</em>3</li>
    </ul>
    <p>下面是另外一个列表</p>
    <ul>
        <li><em>子项2.1</em></li>
        <li><em>子项2.2</em></li>
        <li><em>子项3.1</em></li>
    </ul>
</body>

</html>
```

![image-20220326015352644](F:/MarkdownResSource/README.assets/image-20220326015352644.png)

### 1.4.5[根据状态确定样式](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/First_steps/Getting_started#根据状态确定样式)

在这篇教程中我们最后要看的一种修改样式的方法就是根据标签的状态确定样式。一个直观的例子就是当我们修改链接的样式时。 当我们修改一个链接的样式时我们需要定位（针对） `<a>` （锚）标签。取决于是否是未访问的、访问过的、被鼠标悬停的、被键盘定位的，亦或是正在被点击当中的状态，这个标签有着不同的状态。你可以使用CSS去定位或者说针对这些不同的状态进行修饰——下面的CSS代码使得没有被访问的链接颜色变为粉色、访问过的链接变为绿色。

```css
a:link {
  color: pink;
}

a:visited {
  color: green;
}
```

你可以改变链接被鼠标悬停的时候的样式，例如移除下划线，下面的代码就实现了这个功能。

```css
a:hover {
  text-decoration: none;
}
```

[示例代码：](..\day8\4.defintstylebycondition.html)

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>根据状态确定样式</title>
    <style>
        a:link{
            color: pink;
        }
        a:visited{
            color: green;
        }
        a:hover{
            text-decoration: none;
        }
    </style>
</head>
<!--
    当我们修改链接的样式时。 当我们修改一个链接的样式时我们需要定位（针对） <a> （锚）标签。
    取决于是否是未访问的、访问过的、被鼠标悬停的、被键盘定位的，亦或是正在被点击当中的状态，
    这个标签有着不同的状态。你可以使用CSS去定位或者说针对这些不同的状态进行修饰——下面的CSS代码
    使得没有被访问的链接颜色变为粉色、访问过的链接变为绿色。
    详情见style标签中的a:link和a:visited
    可以改变链接被鼠标悬停的时候的样式，例如移除下划线。详情见下面：
    a:hover
 -->

<body>
    <!-- 这个属于是更改标签的常规样式 -->
    <h1>根据状态确定样式</h1>
    <h1>I am a level one heading</h1>

    <p>This is a paragraph of text. In the text is a <span>span element</span>
        and also a <a href="http://toget.top">link</a>.</p>

    <p>This is the second paragraph. It contains an <em>emphasized</em> element.</p>

    <ul>
        <li>Item one</li>
        <li>Item two</li>
        <li>Item <em>three</em></li>
    </ul>
</body>

</html>
```

![image-20220326015826005](F:/MarkdownResSource/README.assets/image-20220326015826005.png)

我们对鼠标悬停于链接上的情况删除了下划线。你当然可以让超链接在任何情况下都没有下划线。但需要注意的是，对一个实际的站点，需要让浏览者知道“链接是链接”。为了让浏览者注意到一段文字中的某些部分是可点击的，最好保留 link 状态下的下划线。— 这是下划线的本来作用。

### 1.4.6[同时使用选择器和选择符](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/First_steps/Getting_started#同时使用选择器和选择符)

你可以同时使用选择器和选择符。来看一些例子：

```css
/* selects any <span> that is inside a <p>, which is inside an <article>  */
article p span { ... }

/* selects any <p> that comes directly after a <ul>, which comes directly after an <h1>  */
h1 + ul + p { ... }
```

你可以将多种类型组合在一起。试试将下面的代码添加到你的代码里：

```css
body h1 + p .special {
  color: yellow;
  background-color: black;
  padding: 5px;
}
```

上面的代码为以下元素建立样式：在<body>之内，紧接在<h1>后面的<p>元素的内部，类名为 special。

在我们提供的原始 HTML 文档中，与之符合的元素只有`<span class="special">`.

[示例代码：](..\day8\5.useSelectorAndselectorSimultaneously.html)

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>可以同时使用选择器和选择符</title>
    <!-- 这个点是将前面学到的东西进行组合复用
         一个是所属关系
         另一个是相同层级 -->
    <style>
        /* 第一个例子 */
        article p span {
            color: aquamarine;
        }

        /* 第二个例子 */
        h2+p {
            font-weight: 200%;
            color: red;
        }

        /* 第三个例子，可以将多个类型组合在一起 */
        body h2+p .special {
            color: yellow;
            background-color: black;
            padding: 5px;
        }
    </style>
</head>

<body>
    <h1>可以同时使用选择器和选择符</h1>
    <p>具体的例子看上面的style标签中的内容</p>
    <!-- 第一个例子，在<article>标签中的段落标签中<p>的span标签 -->
    <!-- 第一个就是所属层级的例子 -->
    <h2>第一个例子</h2>
    <article>
        <p>这是文章的第一段，就是<span>第一个重要的内容</span></p>
        <p>测试2，<span>hello这个就是有效果</span></p>
        <span>测试3，这个就没有上色效果</span>
        <span>必须得是在p标签中的span标签，否则没有效果</span>
    </article>
    <h2>第二个例子</h2>
    <!-- 第二个例子中，选择标题后面，并且与标题具有相同层级的段落样式
         注意，一定是段落样式。标题样式无论是一级标题还是二级标题都无所谓，但是一定得是
         段落样式 -->
    <p>下面就是这个例子</p>
    <p>只要不相邻，就没法用</p>
    <ul>
        <li>项目1</li>
        <li>项目2</li>
        <li>项目3</li>
    </ul>
    <h2>第三个例子</h2>
    <!-- 这里要使用的样式的意思是：
         在<body>之内，紧接在<h2>后面的<p>元素的内部，类名为 special。 -->
    <p>这里就是要使用的<span class="special">例子啊</span></p>
    <p>标签中不设置类名，也是没法用的</p>
    <h2>
        第四个例子
    </h2>
    <p>这是测试例子2：<span>测试例子2呀，没加.special类名的</span></p>
    <!-- 下面是加上.special后的效果 -->
    <!-- <p>这是测试例子2：<span class="special">测试例子2呀，没加.special类名的</span></p> -->
    <p>前面再隔一个标签，都没法安排上样式，不信看这个</p>
    <p>这是测试例子3：<span class="special">再测试一次呀，前面都隔了一个p标签了，我还是要加special类名</span></p>
</body>

</html>
```

![image-20220326020031313](F:/MarkdownResSource/README.assets/image-20220326020031313.png)

## 1.5构建CSS

### 1.5.1样式表的导入

**使用外部样式表**

将外部样式表链接到页面。这是将css附加到文档中的最常见和最有用的方法，因为您可以将css链接到多个页面，从而允许您使用相同的样式表设置所有页面的样式。在大多数情况下，一个站点的不同页面看起来几乎都是一样的，因此您可以使用相同的规则集来获得基本的外观。

外部样式表是指将CSS编写在扩展名为`.css` 的单独文件中，并从HTML`<link>` 元素引用它的情况：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My CSS experiment</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1>Hello World!</h1>
    <p>This is my first CSS example</p>
  </body>
</html>
```

Copy to Clipboard

CSS文件可能如下所示：

```css
h1 {
  color: blue;
  background-color: yellow;
  border: 1px solid black;
}

p {
  color: red;
}
```

[``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/link) 元素的 `href` 属性需要引用你的文件系统中的一个文件。

在上面的例子中，CSS文件和HTML文档在同一个文件夹中，但是你可以把CSS文件放在其他地方，并调整指定的路径以匹配，例如：

```html
<!-- Inside a subdirectory called styles inside the current directory -->
<link rel="stylesheet" href="styles/style.css">

<!-- Inside a subdirectory called general, which is in a subdirectory called styles, inside the current directory -->
<link rel="stylesheet" href="styles/general/style.css">

<!-- Go up one directory level, then inside a subdirectory called styles -->
<link rel="stylesheet" href="../styles/style.css">
```

**内部样式表**

内部样式表是指不使用外部CSS文件，而是将CSS放在HTML文件<head>标签里的<style>标签之中。

于是HTML看起来就像下面这个样子：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My CSS experiment</title>
    <style>
      h1 {
        color: blue;
        background-color: yellow;
        border: 1px solid black;
      }

      p {
        color: red;
      }
    </style>
  </head>
  <body>
    <h1>Hello World!</h1>
    <p>This is my first CSS example</p>
  </body>
</html>
```

有的时候，这种方法会比较有用（比如你使用的内容管理系统不能直接编辑CSS文件)，但该方法和外部样式表比起来更加低效 。在一个站点里，你不得不在每个页面里重复添加相同的CSS，并且在需要更改CSS时修改每个页面文件。

**内联样式**

内联样式表存在于HTML元素的style属性之中。其特点是每个CSS表只影响一个元素：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My CSS experiment</title>
  </head>
  <body>
    <h1 style="color: blue;background-color: yellow;border: 1px solid black;">Hello World!</h1>
    <p style="color:red;">This is my first CSS example</p>
  </body>
</html>
```

**除非你有充足的理由，否则不要这样做！**它难以维护（在需要更新时，你必须在修改同一个文档的多处地方），并且这种写法将文档结构和文档表现混合起来了，这使得代码变得难以阅读和理解。将不同类型的代码分开存放在不同的文档中，会让我们的工作更加清晰。

在某些地方，内联样式更常见，甚至更可取。 如果您的工作环境确实很严格（也许网站管理系统(CMS)仅允许您编辑HTML正文），则可能不得不使用它们。 您也会发现它们很长时间被应用在HTML电子邮件中，以便与尽可能多的电子邮件客户端兼容。

**在文本中使用CSS**

有的时候我们会在文本中使用大量的CSS。为了做到这些,我们推荐你在你的计算机上创建一个新的文件夹,然后在文件夹中创建下面两个文件的副本。

index.html:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>My CSS experiments</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>

    <p>Create your test HTML here</p>

  </body>
</html>
```

styles.css:

```html
/* Create your test CSS here */

p {
  color: red;
}
```

然后，当您遇到一些您想要试验的CSS时，替换HTML`<body>`内容与一些HTML样式，并开始添加CSS样式在您的CSS文件。

### 1.5.2选择器

每个CSS规则都以一个选择器或一组选择器为开始，去告诉浏览器这些规则应该应用到哪些元素上。以下都是有效的选择器或组合选择器的示例。

```css
h1
a:link
.manythings
#onething
*
.box p
.box p:first-child
h1, h2, .intro
```

**选择器的专一性**

通常情况下，两个选择器可以选择相同的HTML元素。考虑下面的样式表，其中我有一个规则，其中有一个将段落设置为蓝色的p选择器，还有一个将选定元素设置为红色的类。

```css
.special {
  color: red;
}

p {
  color: blue;
}
```

比方说，在我们的HTML文档中，我们有一个带有特殊类的段落。这两条规则都适用，那么谁赢了？你认为我们的段落会变成什么颜色？

```html
<p class="special">What color am I?</p>
```

> what color am I?句子的颜色为红色，而不是蓝色，我猜测是属性先后生效

CSS语言有规则来控制在发生碰撞时哪条规则将获胜--这些规则称为级联规则和专用规则。在下面的代码块中，我们为p选择器定义了两个规则，但是段落最后是蓝色的。这是因为将其设置为蓝色的声明将出现在样式表的后面，而稍后的样式将覆盖以前的样式。这就是起作用的级联。

```css
p {
  color: red;
}

p {
  color: blue;
}
```

但是，在我们同时使用了类选择器和元素选择器的前一个例子中，类将获胜，使得段落变红--即使它出现在样式表的前面。一个类被描述为比元素选择器更具体，或者具有更多的特异性，所以它获胜了。

> 最后的运行结果是蓝色，如果再加上一个.special，同时元素中再引用这个，最后应该是.special的类属性

==提前说一句，因为具体性和层叠的规则，所以才这样显示==

### 15.3[属性和值](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/First_steps/How_CSS_is_structured#%E5%B1%9E%E6%80%A7%E5%92%8C%E5%80%BC)

在最基本的层面上，CSS由两个组成部分组成：

- **属性：**人类可读的标识符，指示您想要更改的样式特征(例如`font-size`, `width`, `background-color`) 你想改变。
- **值：**每个指定的属性都有一个值，该值指示您希望如何更改这些样式特性(例如，要将字体、宽度或背景色更改为。)

![A highlighted declaration block](https://mdn.mozillademos.org/files/16499/declaration-block.png)

在这个图片中，有色块的部分为CSS声明。CSS声明就是与值配对的属性。

CSS声明放在CSS声明块中。如图，标紫色的区域含有多个属性和值

CSS声明外的那个h1是选择器，CSS声明块与选择器配对，以生成CSS规则集(或CSS规则)。

![The rule for h1 highlighted](https://mdn.mozillademos.org/files/16500/rules.png)

将CSS属性设置为特定值是CSS语言的核心功能。CSS引擎计算哪些声明应用于页面的每个元素，以便适当地布局和样式它。重要的是要记住，在css中，==属性和值都是区分大小写的。==每对中的属性和值由冒号(：)分隔。

> 需要注意的是：如果属性未知或某个值对给定属性无效，则声明被视为无效，并被浏览器的CSS引擎完全忽略。

**函数**

虽然大多数值是相对简单的关键字或数值，但也有一些可能的值以函数的形式出现。一个例子是calc()函数。这个函数允许您在CSS中进行简单的计算，例如：

```html
<div class="outer"><div class="box">The inner box is 90% - 30px.</div></div>
```

```css
.outer {
  border: 5px solid black;
}

.box {
  padding: 10px;
  width: calc(90% - 30px);
  background-color: rebeccapurple;
  color: white;
}
```

![image-20220415192203626](F:/MarkdownResSource/README.assets/image-20220415192203626.png)

一个函数由函数名和一些括号组成，其中放置了该函数的允许值。在上面的calc()示例中，我要求此框的宽度为包含块宽度的90%，减去30像素。这不是我可以提前计算的东西，只是在CSS中输入值，因为我不知道90%会是什么。与所有值一样，MDN上的相关页面将有使用示例，这样您就可以看到函数是如何工作的。

**另外的一个例子**

```html
<div class="box"></div>
```

```css
.box {
  margin: 30px;
  width: 100px;
  height: 100px;
  background-color: rebeccapurple;
  transform: rotate(0.8turn)
}
```

![image-20220415192342777](F:/MarkdownResSource/README.assets/image-20220415192342777.png)

