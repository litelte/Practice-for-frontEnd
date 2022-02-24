---
这一部分主要学习其他的嵌入技术、为Web新增向量图、自适应图片
---

# 其他嵌入技术

## 1.\<iframe>的使用

首先可以使用的小例子就是Youtube和Bilibili的嵌入功能：

随便找到一个视频，点击分享，选择其中的嵌入，如下图

![image-20220219210120369](F:/MarkdownResSource/Readme.assets/image-20220219210120369.png)

### 1.1关于iframe标签的使用

除了iframe的一些属性之外，我们还需要知道的是iframe的有一些安全隐患。下来通过一段示例代码来介绍：

```html
<iframe src="https://developer.mozilla.org/en-US/docs/Glossary"
        width="100%" height="500" frameborder="0"
        allowfullscreen sandbox>
  <p> <a href="https://developer.mozilla.org/en-US/docs/Glossary">
    Fallback link for browsers that don't support iframes
  </a> </p>
</iframe>
```

- `allowfullscreen`

  如果设置，`<iframe>`则可以通过[全屏API](https://developer.mozilla.org/zh-CN/docs/Web/API/Fullscreen_API)设置为全屏模式（稍微超出本文的范围）。

- `frameborder`

  如果设置为1，则会告诉浏览器在此框架和其他框架之间绘制边框，这是默认行为。0删除边框。不推荐这样设置，因为在[CSS中](https://developer.mozilla.org/en-US/docs/Glossary/CSS)可以更好地实现相同的效果。[`border`](https://developer.mozilla.org/en-US/docs/Web/CSS/border)`: none;`

- `src`

  该属性与[<video>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video)/`<img>`一样包含指向要嵌入文档的URL路径。

- `width` 和 `height`

  这些属性指定您想要的iframe的宽度和高度。

- 备选内容

  与[<video>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video)等其他类似元素相同，您可以在`<iframe></iframe>`标签之间包含备选内容，如果浏览器不支持`<iframe>`，将会显示备选内容，这种情况下，我们已经添加了一个到该页面的链接。现在您几乎不可能遇到任何不支持`<iframe>`的浏览器。

- `sandbox`

  该属性需要在已经支持其他`<iframe>`功能（例如IE 10及更高版本）但稍微更现代的浏览器上才能工作，该属性可以提高安全性设置; 我们将在下一节中更加详细地谈到。

> **注意**：为了提高速度，在主内容完成加载后，使用JavaScript设置iframe的`src`属性是个好主意。这使您的页面可以更快地被使用，并减少您的官方页面加载时间（重要的[SEO](https://developer.mozilla.org/en-US/docs/Glossary/SEO)指标）。

### 1.2关于安全隐患

详情可以看这里：[安全隐患](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies#%E5%AE%89%E5%85%A8%E9%9A%90%E6%82%A3)

但是大致有这四个方法：

1. 使用HTTPS协议
2. 只在必要时嵌入
3. 始终使用sandbox
4. 配置CSP指令

## 2.\<embed>和\<object>元素

[<embed>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/embed)和`<object>`元素的功能不同于`<iframe>`—— 这些元素是用来嵌入多种类型的外部内容的通用嵌入工具，其中包括像Java小程序和Flash，PDF（可在浏览器中显示为一个PDF插件）这样的插件技术，甚至像视频，SVG和图像的内容！

更多的属性到时候得细看了，详细的看这个：[\<embed>和\<object>元素](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies#和元素)

下面只是出示例：

第一个是插是插入flash动画，使用embed标签

```html
<embed
      src="whoosh.swf"
      quality="medium"
      bgcolor="#ffffff"
      width="550"
      height="400"
      name="whoosh"
      align="middle"
      allowScriptAccess="sameDomain"
      allowFullScreen="false"
      type="application/x-shockwave-flash"
      pluginspage="http://www.macromedia.com/go/getflashplayer"
    />
```

第二个是使用object标签插入pdf文件

```html
  <body>
    <object
      data="mypdf.pdf"
      type="application/pdf"
      width="800"
      height="1200"
      typemustmatch
    >
      <p>
        You don't have a PDF plugin, but you can
        <a href="myfile.pdf">download the PDF file.</a>
      </p>
    </object>
```

> PDF是纸与数据之间重要的阶梯，但它们[在可访问性上有些问题](https://webaim.org/techniques/acrobat/acrobat)[，](https://webaim.org/techniques/acrobat/acrobat)并且可能难以在小屏幕上阅读。它们在一些圈子中仍然受欢迎，我们最好是用链接指向它们，而不是将其嵌入到网页中，以便它们可以在单独的页面上被下载或被阅读。

对于现在而言，flash就是具有危害性的插件，以前flash的作用就是交互。现在，HTML和[JavaScript](https://developer.mozilla.org/en-US/docs/Glossary/JavaScript)可以轻松地为您完成工作，而不需要Java小程序或过时的ActiveX / BHO技术。您可以使用[HTML5视频](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)来满足媒体需求，矢量图形[SVG](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web)，以及复杂图像和动画[画布](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial)。[彼得·埃尔斯特（Peter Elst）几年前已经提到](https://plus.google.com/+PeterElst/posts/P5t4pFhptvp)，对于工作Adobe Flash极少是正确的工具，除了专门的游戏和商业应用。对于ActiveX，即使微软的[Edge](https://developer.mozilla.org/en-US/docs/Glossary/Microsoft_Edge)浏览器也不再支持。

## 3.在网页中添加矢量图形

在网上，你会和两种类型的图片打交道 — 位图和矢量图:

- 位图使用像素网格来定义 — 一个位图文件精确得包含了每个像素的位置和它的色彩信息。流行的位图格式包括 Bitmap (`.bmp`), PNG (`.png`), JPEG (`.jpg`), and GIF (`.gif`.)
- 矢量图使用算法来定义 — 一个矢量图文件包含了图形和路径的定义，电脑可以根据这些定义计算出当它们在屏幕上渲染时应该呈现的样子。 [SVG](https://developer.mozilla.org/zh-CN/docs/Glossary/SVG) 格式可以让我们创造用于 Web 的精彩的矢量图形。

为了让你清楚的认识到两者的区别，我们来一个例子。你可以在我们的 Github 仓库中在线查看这个例子：[vector-versus-raster.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/adding-vector-graphics-to-the-web/vector-versus-raster.html) — 它并排展示了两个看起来一致的图像，一个红色的五角星以及黑色的阴影。不同的是，左边的是 PNG，而右边的是 SVG 图像。

当你放大网页的时候，区别就会变得明显起来 — 随着你的放大，PNG 图片变得像素化了，因为它存储是每个像素的颜色和位置信息 — 当它被放大时，每个像素就被放大以填满屏幕上更多的像素，所以图像就会开始变得马赛克感觉。==**矢量图像看起来仍然效果很好且清晰，因为无论它的尺寸如何，都使用算法来计算出图像的形状，仅仅是根据放大的倍数来调整算法中的值。**==

### 3.1SVG是什么

[SVG](https://developer.mozilla.org/zh-CN/docs/Web/SVG) 是用于描述矢量图像的[XML](https://developer.mozilla.org/zh-CN/docs/Glossary/XML)语言。 它基本上是像HTML一样的标记，只是你有许多不同的元素来定义要显示在图像中的形状，以及要应用于这些形状的效果。 SVG用于标记图形，而不是内容。 非常简单，你有一些元素来创建简单图形，如[<circle>](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/circle) 和[<rect>](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/rect)。更高级的SVG功能包括 [<feColorMatrix>](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/feColorMatrix)（使用变换矩阵转换颜色）[<animate>](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/animate) （矢量图形的动画部分）和 [<mask>](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/mask)（在图像顶部应用模板）

```html
<svg
      version="1.1"
      baseProfile="full"
      width="300"
      height="200"
      xmlns="http://www.w3.org/2000/svg"
    >
    <!-- rect用来提供黑色填充背景 -->
      <rect width="100%" height="100%" fill="black" />
      <!-- circle用来提供圆形填充 -->
      <circle cx="150" cy="100" r="90" fill="blue" />
    </svg>
```

<svg
      version="1.1"
      baseProfile="full"
      width="300"
      height="200"
      xmlns="http://www.w3.org/2000/svg"
    >
    <!-- rect用来提供黑色填充背景 -->
      <rect width="100%" height="100%" fill="black" />
      <!-- circle用来提供圆形填充 -->
      <circle cx="150" cy="100" r="90" fill="blue" />
    </svg>

从上面的例子可以看出，SVG很容易手工编码。 是的，您可以在文本编辑器中手动编写简单的SVG，但是对于复杂的图像，这很快就开始变得非常困难。 为了创建SVG图像，大多数人使用矢量图形编辑器，如 [Inkscape](https://inkscape.org/en/) 或 [Illustrator](https://en.wikipedia.org/wiki/Adobe_Illustrator)。 这些软件包允许您使用各种图形工具创建各种插图，并创建照片的近似值（例如Inkscape的跟踪位图功能）。

SVG除了迄今为止所描述的以外还有其他优点：

- 矢量图像中的文本仍然可访问（这也有利于 [SEO](https://developer.mozilla.org/zh-CN/docs/Glossary/SEO))）。
- SVG 可以很好地适应样式/脚本，因为图像的每个组件都是可以通过CSS或通过JavaScript编写的样式的元素。

那么为什么会有人想使用光栅图形而不是SVG？ 其实 SVG 确实有一些缺点：

- SVG非常容易变得复杂，这意味着文件大小会增加; 复杂的SVG也会在浏览器中占用很长的处理时间。
- SVG可能比栅格图像更难创建，具体取决于您尝试创建哪种图像。
- 旧版浏览器不支持SVG，因此如果您需要在网站上支持旧版本的 IE，则可能不适合（SVG从IE9开始得到支持）。

由于上述原因，光栅图形更适合照片那样复杂精密的图像。

> **注意：**在Inkscape中，将文件保存为纯SVG以节省空间。 另请参阅[如何为Web准备SVG](http://tavmjong.free.fr/INKSCAPE/MANUAL/html/Web-Inkscape.html)。

### 3.2将SVG添加到页面

#### 3.2.1使用快捷方式\<img>

要通过 [\<img>](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/img)元素嵌入SVG，你只需要按照预期的方式在 src 属性中引用它。你将需要一个`height`或`width`属性（或者如果您的SVG没有固有的宽高比）。如果您还没使用过<img>元素，请阅读[HTML中的图片](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML)教程 。

示例代码：

```html
<img
    src="../ancient.svg"
    alt="triangle with all three sides equal"
    height="87px"
    width="100px" />
```

<img
    src="ancient.svg"
    alt="triangle with all three sides equal"
    height="87px"
    width="100px" />

##### 优点

- 快速，熟悉的图像语法与`alt`属性中提供的内置文本等效。
- 可以通过在[<a>](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a)元素嵌套`<img>`，使图像轻松地成为超链接。

##### 缺点

- 无法使用JavaScript操作图像。
- 如果要使用CSS控制SVG内容，则必须在SVG代码中包含内联CSS样式。 （从SVG文件调用的外部样式表不起作用）
- 不能用CSS伪类来重设图像样式（如`:focus`）。

#### 3.2.2[疑难解答和跨浏览器支持](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web#疑难解答和跨浏览器支持)

对于不支持SVG（IE 8及更低版本，Android 2.3及更低版本）的浏览器，可以点击上面的这个链接查看

此外，您还可以使用SVG作为CSS背景图像，如下所示。 在下面的代码中，旧版浏览器会坚持他们理解的PNG，而较新的浏览器将加载SVG：

```css
background: url("fallback.png") no-repeat center;
background-image: url("image.svg");
background-size: contain;
```

像上面描述的`<img>`方法一样，使用 CSS 背景图像插入SVG 意味着它不能被 JavaScript 操作，并且也受到相同的 CSS 限制。

如果 SVG 根本没有显示，可能是因为你的服务器设置不正确。 如果是这个问题，[这篇文章](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Getting_Started#a_word_on_webservers)将告诉你正确方向。

#### 3.2.3在HTML中引用SVG代码

你还可以在文本编辑器中打开SVG文件，复制SVG代码，并将其粘贴到HTML文档中 - 这有时称为将**SVG内联**或**内联SVG**。确保您的SVG代码在`<svg></svg>`标签中（不要在外面添加任何内容）。这是一个非常简单的示例，您可以粘贴到文档中：

```html
<svg width="300" height="200">
    <rect width="100%" height="100%" fill="green" />
</svg>
```

##### 优点

- 将 SVG 内联减少 HTTP 请求，可以减少加载时间。
- 您可以为 SVG 元素分配`class`和`id`，并使用 CSS 修改样式，无论是在SVG中，还是 HTML 文档中的 CSS 样式规则。 实际上，您可以使用任何 [SVG外观属性](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute#presentation_attributes) 作为CSS属性。
- 内联SVG是唯一可以让您在SVG图像上使用CSS交互（如`:focus`）和CSS动画的方法（即使在常规样式表中）。
- 您可以通过将 SVG 标记包在[``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a)元素中，使其成为超链接。

##### 缺点

- 这种方法只适用于在一个地方使用的SVG。多次使用会导致资源密集型维护（resource-intensive maintenance）。
- 额外的 SVG 代码会增加HTML文件的大小。
- 浏览器不能像缓存普通图片一样缓存内联SVG。
- 您可能会在[``](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/foreignObject) 元素中包含回退，但支持 SVG 的浏览器仍然会下载任何后备图像。你需要考虑仅仅为支持过时的浏览器，而增加额外开销是否真的值得。

#### 3.2.4使用\<iframe>嵌入SVG

您可以在浏览器中打开 SVG 图像，就像网页一样。 因此，使用`<iframe>`嵌入 SVG 文档就像我们在 [从对象到iframe - 其他嵌入技术](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies) 中进行研究一样。

这是一个快速回顾：

```html
<iframe src="triangle.svg" width="500" height="500" sandbox>
    <img src="triangle.png" alt="Triangle with three unequal sides" />
</iframe>
```

##### 缺点

- 如你所知， `iframe`有一个回退机制，如果浏览器不支持`iframe`，则只会显示回退。
- 此外，除非 SVG 和您当前的网页具有相同的 [origin](https://developer.mozilla.org/zh-CN/docs/Glossary/Origin)，否则你不能在主页面上使用 JavaScript 来操纵 SVG。

#### 一个SVG的练习

```html
  <svg width="100%" height="100%">
      <rect width="100%" height="100%" fill="red" />
      <!-- 圆形居右 -->
      <circle cx="100%" cy="100%" r="120" fill="blue" stroke="black" />
      <!-- 多边形居左 -->
      <polygon points="120,0 240,225 0,225" fill="green" />
      <text
        x="50"
        y="100"
        font-family="Verdana"
        font-size="55"
        fill="white"
        stroke="black"
        stroke-width="2"
      >
      Hello!
      </text>
    </svg>
```

<svg width= "100%" height="100%">
<rect width="100%" height="100%" fill="red" />
      <!-- 圆形居右 -->
      <circle cx="100%" cy="100%" r="120" fill="blue" stroke="black" />
      <!-- 多边形居左 -->
      <polygon points="120,0 240,225 0,225" fill="green" />
      <text
        x="50"
        y="100"
        font-family="Verdana"
        font-size="55"
        fill="white"
        stroke="black"
        stroke-width="2"
      >
      Hello!
      </text>
</svg>

## 4.响应式图片

某些网页在宽屏设备上表现良好，例如笔记本电脑或台式机（你可以[查看在线演示](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/not-responsive.html)并且在GitHub上查看[源代码](https://github.com/mdn/learning-area/blob/master/html/multimedia-and-embedding/responsive-images/not-responsive.html)）。我们不会在这一节课中讨论CSS，除了下面提到的那些：

- 正文内容被设置的最大宽度为1200像素——在高于该宽度的可视窗口中，正文保持在1200像素，并将其本身置于可用空间的中间。在该宽度以下的可视窗口中，正文将保持在可视窗口宽度的100%。
- 页眉图像被设置为使其中心始终位于页眉的中心，无论页眉的宽度是多少。所以如果网站被显示在窄屏上，图片中心的重要细节（里面的人）仍然可以看到，而两边超出的部分都消失了。它的高度是200px。
- 内容图片已经被设置为如果body元素比图像更小，图像就开始缩小，这样图像总是在正文里，而不是溢出正文。

然而，当你尝试在一个狭小的屏幕设备上查看本页面时，问题就会产生。网页的页眉看起来还可以，但是页眉这张图片占据了屏幕的一大部分的高度，在这个尺寸下，你很难看到在第一张图片内容里的人。

![Our example site as viewed on a wide screen - here the first image works ok, as it is big enough to see the detail in the center.](https://mdn.mozillademos.org/files/12940/picture-element-wide.png)

![Our example site as viewed on a narrow screen; the first image has shrunk to the point where it is hard to make out the detail on it.](https://mdn.mozillademos.org/files/12936/non-responsive-narrow.png)

一个改进的方法是，当网站在狭窄的屏幕上观看时，显示一幅图片的包含了重要细节的裁剪版本，第二个被裁剪的图片会在像平板电脑这样的中等宽度的屏幕设备上显示，这就是众所周知的**美术设计问题（art direction problem）**。

另外，如果是在小屏手机屏幕上显示网页，那么没有必要在网页上嵌入这样大的图片。这被称之为**分辨率切换问题（resolution switching problem）**。位图有固定数量的像素宽，固定数量的像素高，与 [矢量图](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web) 外观相同，但本质不同。如果显示尺寸大于原始尺寸，一张自身较小的位图看起来会有颗粒感（矢量图则不会）。

相反，没有必要在比图片实际尺寸小的屏幕上显示一张大图，这样做会浪费带宽——当可以在设备上使用小图像时，手机用户尤其不愿意因为下载用于桌面的大图像而浪费带宽。理想的情况是当访问网站时依靠不同的设备来提供不同的分辨率图片和不同尺寸的图片。

让事情变得复杂的是，有些设备有很高的分辨率，为了显示的更出色，可能需要超出你预料的更大的图像。这从本质上是一样的问题，但在环境上有一些不同。

你可能会认为矢量图形能解决这些问题，在某种程度上是这样的——它们无论是文件大小还是比例都合适，无论在哪里你都应该尽可能的使用它们。然而，它们并不适合所有的图片类型，虽然在简单图形、图案、界面元素等方面较好，但如果是有大量的细节的照片，创建矢量图像会变得非常复杂。像JPEG格式这样的位图会更适合上面例子中的图像。

当web第一次出现时，这样的问题并不存在，在上世纪90年代中期，仅仅可以通过笔记本电脑和台式机来浏览web页面，所以浏览器开发者和规范制定者甚至没有想到要实现这种解决方式（响应式开发）。最近应用的响应式图像技术，通过让浏览器提供多个图像文件来解决上述问题，比如使用相同显示效果的图片但包含多个不同的分辨率（分辨率切换），或者使用不同的图片以适应不同的空间分配（美术设计）。

> **注意**: 在这篇文章中讨论的新特性 — [`srcset`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/img#attr-srcset)/[`sizes`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/img#attr-sizes)/[<picture>](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/picture) — 都已经被新版本的现代浏览器和移动浏览器所支持（包括Edge，而不是IE）。

### 4.1创建自适应图片

在本节中我们将专注于HTML的 [<img>](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/img)，但网站页眉的图片仅是装饰性的，实际上应该要用CSS的背景图片来实现。[CSS是比HTML更好的响应式设计的工具](http://blog.cloudfour.com/responsive-images-101-part-8-css-images/)，我们会在未来的CSS模块中讨论。

#### 4.1.1分辨率切换：不同的尺寸

我们想要用分辨率切换解决什么问题呢？我们想要显示相同的图片内容，仅仅依据设备来显示更大或更小的图片——这是我们在示例中使用第二个内容图像的情况。标准的[\<img>](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/img)元素传统上仅仅让你给浏览器指定唯一的资源文件。

```html
<img src="src/elva-fairy-800w.jpg" alt="Elva dressed as a fairy">
```

<img src="src/elva-fairy-800w.jpg" alt="Elva dressed as a fairy">

我们可以使用两个新的属性——[`srcset`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/img#attr-srcset) 和 [`sizes`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/img#attr-sizes)——来提供更多额外的资源图像和提示，帮助浏览器选择正确的一个资源。你可以看到 [responsive.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/responsive.html) 的例子，也可以在GitHub上看到[source code](https://github.com/mdn/learning-area/blob/master/html/multimedia-and-embedding/responsive-images/responsive.html)：

```html
    <img
      srcset="
        src/elva-fairy-320w.jpg 320w,
        src/elva-fairy-480w.jpg 480w,
        src/elva-fairy-800w.jpg 800w
      "
      sizes="(max-width: 320px) 280px,
    (max-width: 480px) 440px, 800px"
      src="src/elva-fairy-800w.jpg"
      alt="Elva dressed as a fairy"
    />
```

`srcset`和`sizes`属性看起来很复杂，但是如果你按照上图所示进行格式化，那么他们并不是很难理解，每一行有不同的属性值。每个值都包含逗号分隔的列表。列表的每一部分由三个子部分组成。让我们来看看现在的每一个内容：

**srcset**定义了我们允许浏览器选择的图像集，以及每个图像的大小。在每个逗号之前，我们写：

1. 一个**文件名** (`elva-fairy-480w.jpg`.)
2. 一个空格
3. **图像的固有宽度**（以像素为单位）（480w）——注意到这里使用`w`单位，而不是你预计的`px`。这是图像的真实大小，可以通过检查你电脑上的图片文件找到（例如，在Mac上，你可以在Finder上选择这个图像，然后按 Cmd + I 来显示信息）。

**sizes**定义了一组媒体条件（例如屏幕宽度）并且指明当某些媒体条件为真时，什么样的图片尺寸是最佳选择—我们在之前已经讨论了一些提示。在这种情况下，在每个逗号之前，我们写：

1. 一个**媒体条件**（`(max-width:480px)`）——你会在 [CSS topic](https://developer.mozilla.org/en-US/docs/Learn/CSS)中学到更多的。但是现在我们仅仅讨论的是媒体条件描述了屏幕可能处于的状态。在这里，我们说“当可视窗口的宽度是480像素或更少”。
2. 一个空格
3. 当媒体条件为真时，图像将填充的**槽的宽度**（`440px`）

> **注意**: 对于槽的宽度，你也许会提供一个固定值 (`px`, `em`) 或者是一个相对于视口的长度(`vw`)，但不是百分比。你也许已经注意到最后一个槽的宽度是没有媒体条件的，它是默认的，当没有任何一个媒体条件为真时，它就会生效。 当浏览器成功匹配第一个媒体条件的时候，剩下所有的东西都会被忽略，所以要注意媒体条件的顺序。

就是这样！所以在这里，如果支持浏览器以视窗宽度为480px来加载页面，那么`(max-width: 480px)`的媒体条件为真，因此`440px`的槽会被选择，所以`elva-fairy-480w.jpg`将加载，因为它的的固定宽度（`480w`）最接近于`440px`。800px的照片大小为128KB而480px版本仅有63KB大小—节省了65KB。现在想象一下，如果这是一个有很多图片的页面。使用这种技术会节省移动端用户的大量带宽。

老旧的浏览器不支持这些特性，它会忽略这些特征。并继续正常加载 [`src`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/img#attr-src)属性引用的图像文件。

> **==注意==**: 在 HTML 文件中的 [``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/head) 标签里， 你将会找到这一行代码 `<meta name="viewport" content="width=device-width">`: 这行代码会强制地让手机浏览器采用它们真实可视窗口的宽度来加载网页（有些手机浏览器会提供不真实的可视窗口宽度, 然后加载比浏览器真实可视窗口的宽度大的宽度的网页，然后再缩小加载的页面，这样的做法对响应式图片或其他设计，没有任何帮助。我们会在未来的模块教给你更多关于这方面的知识）。

#### 4.2.2一些有用的开发工具

这里有一些在浏览器中的非常实用的[开发者工具](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_are_browser_developer_tools)用来帮助制定重要的槽宽度，以及其他你可能会用到的场景。当我在设置槽宽度的时候，我先加载了示例中的无响应的版本（`not-responsive.html`），然后进入 [响应设计视图](https://developer.mozilla.org/en-US/docs/Tools/Responsive_Design_Mode) （*Tools > Web Developer > Responsive Design View），*这个工具允许你在不同设备的屏幕宽度场景下查看网页的布局。

我设置我的视图宽度为 320px，然后再改为 480px；每一次宽度的改变我就进入 [DOM 检查 ](https://developer.mozilla.org/en-US/docs/Tools/Page_Inspector)，点击我们感兴趣的 [``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/img) 元素，然后在显示屏右侧的 Box Model 视图选项卡中查看它的大小。 你应该会看到，这种无响应式的做法会让你的图片在不同屏幕宽度下有着固定的宽度。

![A screenshot of the firefox devtools with an image element highlighted in the dom, showing its dimensions as 440 by 293 pixels.](https://mdn.mozillademos.org/files/12932/box-model-devtools.png)

接着, 你可以检查 `srcset` 是否正常工作，你需要将视图的宽度设置为你想要的，(比如，把宽度设置的比较小，让页面看起来比较狭窄），打开网络检查（*Tools > Web Developer > Network），*然后重新加载页面。网络检查工具会给你一个列表，里面的文件都是已经被下载来构造网页的。然后你可以在这里看到哪个图像文件被下载了。

> ==**注意**:== 在 Chrome 中测试时，==通过如下方式禁用缓==存：打开 DevTools ，并选中 Settings > Preferences > Network下Disable cache的选择框。否则，Chrome 会优先选择缓存图片而不是恰好适配的那个。

#### 4.2.3分辨率切换：相同的尺寸，不同的分辨率

如果你支持多种分辨率显示，但希望每个人在屏幕上看到的图片的实际尺寸是相同的，你可以让浏览器通过`srcset`和x语法结合——一种更简单的语法——而不用`sizes`，来选择适当分辨率的图片。你可以看一个例子 [srcset-resolutions.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/srcset-resolutions.html)（或 [the source code](https://github.com/mdn/learning-area/blob/master/html/multimedia-and-embedding/responsive-images/srcset-resolutions.html)）：

```html
<img srcset="elva-fairy-320w.jpg,
             elva-fairy-480w.jpg 1.5x,
             elva-fairy-640w.jpg 2x"
     src="elva-fairy-640w.jpg" alt="Elva dressed as a fairy">
```

在这个例子中，下面的CSS会应用在图片上，所以它的宽度在屏幕上是320像素（也称作CSS像素）：

```css
img {
  width: 320px;
}
```

也就是说，在任何屏幕上，它的宽度都是320像素，也叫做CSS像素

在这种情况下，`sizes`并不需要——浏览器只是计算出正在显示的显示器的分辨率，然后提供`srcset`引用的最适合的图像。因此，如果访问页面的设备具有标准/低分辨率显示，一个设备像素表示一个CSS像素，`elva-fairy-320w.jpg`会被加载（1x 是默认值，所以你不需要写出来）。如果设备有高分辨率，两个或更多的设备像素表示一个CSS像素，`elva-fairy-640w.jpg` 会被加载。640px的图像大小为93KB，320px的图像的大小仅仅有39KB。

### 4.2美术设计

回顾一下，**美术设计问题**涉及要更改显示的图像以适应不同的图像显示尺寸。例如，如果在桌面浏览器上的一个网站上显示一张大的、横向的照片，照片中央有个人，然后当在移动端浏览器上浏览这个网站时，照片会缩小，这时照片上的人会变得非常小，看起来会很糟糕。这种情况可能在移动端显示一个更小的肖像图会更好，这样人物的大小看起来更合适。[\<picture>](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/picture)元素允许我们这样实现。

#### 4.2.1使用\<picture>标签

让我们改用 <picture>！就像<video>和<audio>，<picture>素包含了一些<source>元素，它使浏览器在不同资源间做出选择，紧跟着的是最重要的<img>元素。responsive.html 的代码如下：

```html
<picture>
      <source
        media="(max-width: 799px)"
        srcset="src/elva-480w-close-portrait.jpg"
      />
      <source media="(min-width: 800px)" srcset="src/elva-800w.jpg" />
      <img
        src="src/elva-800w.jpg"
        alt="Chris standing up holding his daughter Elva"
      />
    </picture>
```

- `<source>`元素包含一个`media`属性，这一属性包含一个媒体条件——就像第一个`srcset`例子，这些条件来决定哪张图片会显示——第一个条件返回真，那么就会显示这张图片。在这种情况下，如果视窗的宽度为799px或更少，第一个`<source>`元素的图片就会显示。如果视窗的宽度是800px或更大，就显示第二张图片。
- `srcset`属性包含要显示图片的路径。请注意，正如我们在`<img>`上面看到的那样，`<source>`可以使用引用多个图像的`srcset`属性，还有`sizes`属性。所以你可以通过一个 `<picture>`元素提供多个图片，不过也可以给每个图片提供多分辨率的图片。实际上，你可能不想经常做这样的事情。
- 在任何情况下，你都必须在 `</picture>`之前正确提供一个`<img>`元素以及它的`src`和`alt`属性，否则不会有图片显示。当媒体条件都不返回真的时候（你可以在这个例子中删除第二个`<source>` 元素），它会提供图片；如果浏览器不支持 `<picture>`元素时，它可以作为后备方案。

这样的代码允许我们在宽屏和窄屏上都能显示合适的图片，像下面展示的一样：

![image-20220221002216737](F:/MarkdownResSource/Readme.assets/image-20220221002216737.png)

视窗宽度较窄的时候，显示为另外的一种效果：

![image-20220221002506094](F:/MarkdownResSource/Readme.assets/image-20220221002506094.png)

> ==**注意**:== 你应该仅仅当在美术设计场景下使用media属性；当你使用media时，不要在sizes属性中也提供媒体条件。

#### 4.2.2不能使用CSS或Javascript

当浏览器开始加载一个页面, 它会在主解析器开始加载和解析页面的 CSS 和 JavaScript 之前先下载 (预加载) 任意的图片。这是一个非常有用的技巧，平均下来减少了页面加载时间的20%。但是, 这对响应式图片一点帮助都没有, 所以需要类似 srcset的实现方法。因为你不能先加载好 <img> 元素后, 再用 JavaScript 检测可视窗口的宽度，如果觉得大小不合适，再动态地加载小的图片替换已经加载好的图片，这样的话, 原始的图像已经被加载了, 然后你又加载了小的图像, 这样的做法对于响应式图像的理念来说，是很糟糕的。

#### 4.2.3大胆使用现代图像格式

有很多令人激动的新图像格式（例如WebP和JPEG-2000）可以在有高质量的同时有较低的文件大小。然而，浏览器对其的支持参差不齐。

`<picture>`让我们能继续满足老式浏览器的需要。你可以在`type`属性中提供MIME类型，这样浏览器就能立即拒绝其不支持的文件类型：

```html
<picture>
  <source type="image/svg+xml" srcset="pyramid.svg">
  <source type="image/webp" srcset="pyramid.webp">
  <img src="pyramid.png" alt="regular pyramid built from four equilateral triangles">
</picture>
```

- 不要使用`media`属性，除非你也需要美术设计。
- 在`<source>` 元素中，你只可以引用在`type`中声明的文件类型。
- 像之前一样，如果必要，你可以在`srcset`和`sizes`中使用逗号分割的列表。
