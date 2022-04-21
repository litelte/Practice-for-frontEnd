# 层叠与继承

## 1.1冲突规则

CSS代表**层叠样式表(Cascading Style Sheets)**，理解第一个词*cascading*很重要— cascade 的表现方式是理解CSS的关键。

在某些时候，在做一个项目过程中你会发现一些应该产生效果的样式没有生效。通常的原因是你创建了两个应用于同一个元素的规则。**cascade**, 和它密切相关的概念是 **specificity**，决定在发生冲突的时候应该使用哪条规则。设计元素样式的规则可能不是期望的规则，因此需要了解这些机制是如何工作的。

这里也有**继承**的概念，也就是在默认情况下，一些css属性继承当前元素的父元素上设置的值，有些则不继承。这也可能导致一些和期望不同的结果。

我们来快速的看下正在处理的关键问题，然后依次了解它们是如何相互影响的，以及如何和css交互的。虽然这些概念难以理解，但是随着不断的练习，你会慢慢熟悉它的工作原理。

## 1.2层叠

Stylesheets **cascade（样式表层叠）** — 简单的说，css规则的顺序很重要；当应用两条同级别的规则到一个元素的时候，写在后面的就是实际使用的规则。

下面的例子中，我们有两个关于 `h1` 的规则。`h1` 最后显示蓝色 — 这些规则有相同的优先级，所以顺序在最后的生效。

```css
h1 { 
    color: red; 
}
h1 { 
    color: blue; 
}
```

​    后面的会生效，而前面的则会被覆盖

![image-20220417220037948](F:/MarkdownResSource/README.assets/image-20220417220037948.png)

## 1.3优先级

浏览器是根据优先级来决定当多个规则有不同选择器对应相同的元素的时候需要使用哪个规则。它基本上是一个衡量选择器具体选择哪些区域的尺度：

- 一个元素选择器不是很具体 — 会选择页面上该类型的所有元素 — 所以它的优先级就会低一些。
- 一个类选择器稍微具体点 — 它会选择该页面中有特定 `class` 属性值的元素 — 所以它的优先级就要高一点。

下面我们再来介绍两个适用于 `h1` 的规则。下面的 `h1` 最后会显示红色 — 类选择器有更高的优先级，因此就会被应用——即使元素选择器顺序在它后面。

```css
.main-heading { 
    color: red; 
}
        
h1 { 
    color: blue; 
}
```

```html
<h1 class="main-heading">This is my heading.</h1>
```

实际的运行结果：This is my heading显示的颜色为红色，因为类选择器的优先级要大于元素选择器

![image-20220417220026089](F:/MarkdownResSource/README.assets/image-20220417220026089.png)

## 1.4继承

继承也需要在上下文中去理解 —— 一些设置在父元素上的css属性是可以被子元素继承的，有些则不能。

举一个例子，如果你设置一个元素的 `color` 和 `font-family` ，每个在里面的元素也都会有相同的属性，除非你直接在元素上设置属性。

代码举例：

```css
body {
    color: blue;
}

span {
    color: black;
}
```

```html
<p>As the body has been set to have a color of blue this is inherited through the descendants.</p>
<p>We can change the color by targetting the element with a selector, such as this <span>span</span>.</p>
```

所以最后的实际显示效果：

段落中的span为黑色的，其他部分都是蓝色的

![image-20220417220048131](F:/MarkdownResSource/README.assets/image-20220417220048131.png)

==当然还有一些情况是不能继承的：==

**举个例子如果你在一个元素上设置 [`width`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/width) 50% ，所有的后代不会是父元素的宽度的50% 。如果这个也可以继承的话，CSS就会很难使用了!**

## 1.5理解这三大概念如何协同合作

### 1.5.1理解继承

先上一个代码：

```css
    <style>
        .main{
            color: rebeccapurple;
            border: 2px solid #ccc;
            padding: 1em;
        }
        .special{
            color: black;
            font-weight: bold;
        }
    </style>
```

```html
<ul class="main">
        <li>Item One</li>
        <li>Item Two
            <ul>
                <li>2.1</li>
                <li>2.2</li>
            </ul>
        </li>
        <li>Item Three
            <ul class="special">
                <li>3.1
                    <ul>
                        <li>3.1.1</li>
                        <li>3.1.2</li>
                    </ul>
                </li>
                <li>3.2</li>
            </ul>
        </li>
    </ul>
```

没有CSS渲染前的页面：

![image-20220417232001397](F:/MarkdownResSource/README.assets/image-20220417232001397.png)

加入CSS渲染后的页面：

![image-20220417232027378](F:/MarkdownResSource/README.assets/image-20220417232027378.png)

**color** 应用在直接子元素，也影响其他后代 — 直接子元素`<li>`，和第一个嵌套列表中的子项。然后添加了一个 `special` 类到第二个嵌套列表，其中使用了不同的颜色。然后通过它的子元素继承。

像 widths (上面提到的), margins, padding, 和 borders 不会被继承。如果borders可以被继承，每个列表和列表项都会获得一个边框 — 可能就不是我们想要的结果!

