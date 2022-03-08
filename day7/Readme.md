# HTML 表格

> 在HTML中一个很普通的任务是构建表格数据，有大量的元素和属性是来满足这种需求的。只需要一点儿的CSS来设定风格，HTML让在web上显示表格数据变的很容易，例如你的学校的教学计划，你当地的游泳馆的时刻表， 或者是关于你最爱的恐龙或足球队的统计数据。这个模块会教给你所有你需要知道的关于用HTML构建表格数据的知识。

表格是由行和列组成的结构化数据集(表格数据)，它能够使你简捷迅速地查找某个表示不同类型数据之间的某种关系的值 。比如说，某个人和他的年龄，一天或是一周，当地游泳池的时间表 。

![A sample table showing names and ages of some people - Chris 38, Dennis 45, Sarah 29, Karen 47.](https://mdn.mozillademos.org/files/14583/numbers-table.png)

## 1.表格如何工作

表格的一个特点就是严格. 通过在行和列的标题之间进行视觉关联的方法，就可以让信息能够很简单地被解读出来。观察下面的示例表格，然后找一个单数人称代词，这个单数人称代词是用于第三人称的, 用于女性的, 用作句子中的对象. 你可以把相应的行和列的标题关联起来，找到答案。

| Subject  | Object   |      |      |
| :------- | :------- | ---- | ---- |
| 单数     | 第一人称 | I    | me   |
| 第二人称 | you      | you  |      |
| 第三人称 | ♂        | he   | him  |
| ♀        | she      | her  |      |
| o        | it       | it   |      |
| 复数     | 第一人称 | we   | us   |
| 第二人称 | you      | you  |      |
| 第三人称 | they     | them |      |

正确完成后, 即使是盲人也可以解析 HTML 表格中的数据，一个成功的 HTML 表格应该做到无论用户是视力正常还是视力受损，都能提高用户的体验。

## 2.表格风格

默认的表格是没有任何样式的，我们看起来非常的粗糙，是这样的：

![image-20220221205821627](F:/MarkdownResSource/Readme.assets/image-20220221205821627.png)

添加了样式之后的表格是这样的：

![image-20220221205843854](F:/MarkdownResSource/Readme.assets/image-20220221205843854.png)

由此可见，表格风格能对表格数据有更好的展示

简单来说, 使用表格布局而不使用 CSS layout techniques 是很糟糕的. 主要的理由有以下几个:

表格布局减少了视觉受损的用户的可访问性: 屏幕阅读器, 被盲人所使用, 解析存在于 HTML 页面上的标签，然后为用户读出其中的内容。因为对于布局来说，表格不是一个正确的工具， 使用的标记比使用 CSS 布局技术更复杂, 所以屏幕阅读器的输出会让他们的用户感到困惑。
表格会产生很多标签: 正如刚才提到的, 表格布局通常会比正确的布局技术涉及更复杂的标签结构，这会导致代码变得更难于编写、维护、调试.
表格不能自动响应: 当你使用正确的布局容器 (比如\<header>, \<section>, \<article>, 或是 \<div>), 它们的默认宽度是父元素的 100%. 而表格的的默认大小是根据其内容而定的。因此，需要采取额外的措施来获取表格布局样式，以便有效地在各种设备上工作。

也就是说，==使用表格，必须使用CSS==

什么时候不应该使用HTML表格？

HTML 表格 应该用于表格数据 ，这正是 HTML 表格设计出来的用途. 不幸的是, 许多人习惯用 HTML 表格来实现网页布局， e.g. 一行包含 header, 一行包含几列内容, 一行包含 footer, etc. 你可以在我们的 [Accessibility Learning Module](https://developer.mozilla.org/en-US/docs/Learn/Accessibility) 中的 [Page Layouts](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML#page_layouts) 获得更多细节内容和一个示例。这种做法以前是很常见的，因为以前 CSS 在不同浏览器上的兼容性比较糟糕 ; 表格布局现在不太普遍，但您可能仍然会在网络的某些角落看到它们。

简单来说, 使用表格布局而不使用 [CSS layout techniques](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout) 是很糟糕的. 主要的理由有以下几个:

1. **表格布局减少了视觉受损的用户的可访问性**: [屏幕阅读器](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#screenreaders), 被盲人所使用, 解析存在于 HTML 页面上的标签，然后为用户读出其中的内容。因为对于布局来说，表格不是一个正确的工具， 使用的标记比使用 CSS 布局技术更复杂, 所以屏幕阅读器的输出会让他们的用户感到困惑。
2. **表格会产生很多标签**: 正如刚才提到的, 表格布局通常会比正确的布局技术涉及更复杂的标签结构，这会导致代码变得更难于编写、维护、调试.
3. **表格不能自动响应**: 当你使用正确的布局容器 （比如\<header>\<section>\<article>）它们的默认宽度是父元素的 100%. 而表格的的默认大小是根据其内容而定的。因此，需要采取额外的措施来获取表格布局样式，以便有效地在各种设备上工作。

## 3.HTML表格基本标签

```html
<!--表格标签-->
<table>
    <!--行标签，HTML表格是按行为单位的-->
    <tr></tr>
    <!--行元素标签代表表格中的一个子项，作为非标题的使用-->
    <td></td>
    <!--行元素标签代表表格中行的标题元素-->
    <th></th>
    <!--表格标题首行、表格中间行、表格尾行，一般可快速定位-->
    <thead></thead>
    <tbody></tbody>
    <tfoot></tfoot>
    <!--行组元素和列组元素，统一为一行的所有元素修改样式-->
    <colgroup></colgroup>
    <rowgroup></rowgroup>
</table>
```

## 4.[为表格中的列提供共同的样式](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Tables/Basics#为表格中的列提供共同的样式)

在我们继续介绍之前，我们将介绍本文中的最后一个功能。HTML有一种方法可以定义整列数据的样式信息：就是 **`<col>`** 和 **`<colgroup>`** 元素。 它们存在是因为如果你想让一列中的每个数据的样式都一样，那么你就要为每个数据都添加一个样式，这样的做法是令人厌烦和低效的。你通常需要在列中的每个 `<td>` 或 `<th>` 上定义样式，或者使用一个复杂的选择器，比如 [:nth-child()(en-US)](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child)。

```html
<table>
  <tr>
    <th>Data 1</th>
    <th style="background-color: yellow">Data 2</th>
  </tr>
  <tr>
    <td>Calcutta</td>
    <td style="background-color: yellow">Orange</td>
  </tr>
  <tr>
    <td>Robots</td>
    <td style="background-color: yellow">Jazz</td>
  </tr>
</table>
```

运行结果

<table>
  <tr>
    <th>Data 1</th>
    <th style="background-color: yellow">Data 2</th>
  </tr>
  <tr>
    <td>Calcutta</td>
    <td style="background-color: yellow">Orange</td>
  </tr>
  <tr>
    <td>Robots</td>
    <td style="background-color: yellow">Jazz</td>
  </tr>
</table>

这样不太理想，因为我们不得不在列中的每个单元格中重复那些样式信息 (在真实的项目中，我们或许会设置一个 `class` 包含那三个单元格 ，然后在一个单独的样式表中定义样式). 为了舍弃这种做法，我们可以只定义一次，在 `<col>` 元素中。`<col>` 元素被规定包含在 `<colgroup>` 容器中，而 `<colgroup>`就在 `<table>` 标签的下方。我们可以通过如下的做法来创建与上面相同的效果:

<table>
  <colgroup>
    <col>
    <col style="background-color: yellow">
  </colgroup>
  <tr>
    <th>Data 1</th>
    <th>Data 2</th>
  </tr>
  <tr>
    <td>Calcutta</td>
    <td>Orange</td>
  </tr>
  <tr>
    <td>Robots</td>
    <td>Jazz</td>
  </tr>
</table>

我们使用了两个 `<col>`来定义“列的样式”，每一个`<col>`都会制定每列的样式，对于第一列，我们没有采取任何样式，但是我们仍然需要添加一个空的 `<col>` 元素，如果不这样做，那么我们的样式就会应用到第一列上，这和我们预想的不一样。

如果你想把这种样式信息应用到每一列，我们可以只使用一个 `<col>` 元素，不过需要包含 span 属性，像这样：

```html
<colgroup>
  <col style="background-color: yellow" span="2">
</colgroup>
```

<colgroup>
  <col style="background-color: yellow" span="2">
</colgroup>

完成了一个[学校课程表表格](6.colgrpandcol.html)中，需要注意到的细节：

1. 在 table 的顶部添加一个 `<colgroup>` 元素，就放在 `<table>` 标签下面，`<colgroup>`可以添加 `<col>` 元素 (继续看下面剩余的步骤)。
2. 第一列和第二列不需要应用样式。
3. 为第三列添加一个背景颜色。`style` 属性是 `background-color:#97DB9A;`
4. 为第四列设置一个独立的宽度，`style` 属性是 `width: 42px;`
5. 为第五列添加一个背景颜色。`style` 属性是 `background-color: #97DB9A;`
6. 为第六列添加不同的背景颜色和边框，表示这是一个特殊的日子，表示她正在教一个新的课。 `style` 属性是 `background-color:#DCC48E; border:4px solid #C1437A;`
7. 最后两天是休息日，所以只需将它们设置为无背景颜色，但需要设置宽度；`style` 属性是 `width: 42px;`

## [5.为你的表格增加一个标题和表结构](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Tables/Advanced)

### 5.1 表标题

```html
<table>
  <caption>Dinosaurs in the Jurassic period</caption>

  ...
</table>
```

从上面简单的例子可以推断，标题意味着包含对于表格内容的描述，这对那些希望可以快速浏览网页中的表格对他们是否有帮助的读者们来说，是非常好的功能。特别是盲人用户，不需要让屏幕阅读设备读出很多单元格的内容，来让用户了解这张表格讲的是什么，而是可以依靠标题的内容，来决定是否需要了解更详细的内容。

标题就放在 `<table>` 标签的下面。

> **注意**: 这个 [`summary`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/table#attr-summary) 属性也可以在`<table>` 元素中使用，用来提供一段描述，同样可以被屏幕阅读设备阅读。我们推荐使用 `<caption>` 元素来代替使用，因为 `summary` 被 HTML5 规范， deprecated (废除了)，也不能被视力正常的用户阅读。 (它不会出现在页面上)

### 5.2 表结构

由于你的表格在结构上有点复杂，如果把它们定义得更加结构化，那会帮助我们更能了解结构。一个明确的方法是使用 , ,和 , 这些元素允许你把表格中的部分标记为表头、页脚、正文部分。

这些元素不会使表格更易于屏幕阅读器用户访问，也不会造成任何视觉上的改变。然而，它们在应用样式和布局上会起到作用，可以更好地让 CSS 应用到表格上。给你一些有趣的例子，在长表格的情况下，你可以在每个打印页面上使表格页眉和页脚重复，你也可以让表格的正文部分显示在一个单独的页面上，并通过上下滚动来获得内容。

试着使用它们:

-  `<thead>` 需要嵌套在 table 元素中，放置在头部的位置，因为它通常代表第一行，第一行中往往都是每列的标题，但是不是每种情况都是这样的。如果你使用了 / 元素，那么 `<thead>`元素就需要放在它们的下面。
-  `<tfoot>` 需要嵌套在 table 元素中，放置在底部 (页脚)的位置，一般是最后一行，往往是对前面所有行的总结，比如，你可以按照预想的方式将`<tfoot>`放在表格的底部，或者就放在 `<thead>` 的下面。(浏览器仍将它呈现在表格的底部)
-  `<tbody>` 需要嵌套在 table 元素中，放置在 `<thead>`的下面或者是 `<tfoot>` 的下面，这取决于你如何设计你的结构。(`<tfoot>`放在`<thead>`下面也可以生效.)

> **注意**: `<tbody>` 总是包含在每个表中，如果你没有在代码中指定它，那就是隐式的。可以来验证一下，打开一个你之前没有包含 `<tbody>` 的例子，然后在你的 [browser developer tools](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_are_browser_developer_tools) 中观察你的代码，你会看到浏览器为你添加了这个标签。你也许会想问，为什么你应该在所有表中都需要这个元素，因为它可以让你更好地控制表格结构和样式。

## 6.嵌套表格

在一个表格中嵌套另外一个表格是可能的，只要你包含完整的结构，包括 `<table>` 元素。这样通常是不建议的，因为这种做法会使标记看上去很难理解，对使用屏幕阅读的用户来说，可访问性也降低了。以及在很多情况下，也许你只需要插入额外的 单元格/行/列 到已有的表格中。然而有时候是必要的，比如你想要从其他资源中更简单地导入内容。

下面的代码演示了一个简单的嵌套表格:

```html
<table id="table1">
  <tr>
    <th>title1</th>
    <th>title2</th>
    <th>title3</th>
  </tr>
  <tr>
    <td id="nested">
      <table id="table2">
        <tr>
          <td>cell1</td>
          <td>cell2</td>
          <td>cell3</td>
        </tr>
      </table>
    </td>
    <td>cell2</td>
    <td>cell3</td>
  </tr>
  <tr>
    <td>cell4</td>
    <td>cell5</td>
    <td>cell6</td>
  </tr>
</table>
```

<table id="table1">
  <tr>
    <th>title1</th>
    <th>title2</th>
    <th>title3</th>
  </tr>
  <tr>
    <td id="nested">
      <table id="table2">
        <tr>
          <td>cell1</td>
          <td>cell2</td>
          <td>cell3</td>
        </tr>
      </table>
    </td>
    <td>cell2</td>
    <td>cell3</td>
  </tr>
  <tr>
    <td>cell4</td>
    <td>cell5</td>
    <td>cell6</td>
  </tr>
</table>

## [7.对于视力受损的用户的表格](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Tables/Advanced#对于视力受损的用户的表格)

但假设你无法通过视觉关联这些数据呢? 那么你应该如何阅读上述的表格? 视力受损的用户经常使用一个屏幕阅读设备来为他们读出网页上的信息。对于盲人来说，阅读简单的文字没有什么问题，但是要理解一张表格的内容，这就有一些难度了。虽然，使用正确的标记，我们可以用程序化来代替视觉关联。

屏幕阅读设备会识别所有的标题，然后在它们和它们所关联的单元格之间产生编程关联。列和行标题的组合将标识和解释每个单元格中的数据，以便屏幕阅读器用户可以类似于视力正常的用户的操作来理解表格。

我们之前的文章就提到过这一点，可见 [elements](https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Basics#Adding_headers_with__elements).

### 7.1 scope属性

本篇文章的一个新话题是 [`scope`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/th#attr-scope) 属性，可以添加在`<th>` 元素中，用来帮助屏幕阅读设备更好地理解那些标题单元格，这个标题单元格到底是列标题呢，还是行标题。比如： 回顾我们之前的支出记录示例，你可以明确地将列标题这样定义：

```html
<thead>
  <tr>
    <th scope="col">Purchase</th>
    <th scope="col">Location</th>
    <th scope="col">Date</th>
    <th scope="col">Evaluation</th>
    <th scope="col">Cost (€)</th>
  </tr>
</thead>
```

以及每一行都可以这样定义一个行标题 (如果我们已经使用了 th 和 td 元素):

```html
<tr>
  <th scope="row">Haircut</th>
  <td>Hairdresser</td>
  <td>12/09</td>
  <td>Great idea</td>
  <td>30</td>
</tr>
```

屏幕阅读设备会识别这种结构化的标记，并一次读出整列或整行，比如：

`scope` 还有两个可选的值 ： `colgroup` 和 `rowgroup`。这些用于位于多个列或行的顶部的标题。 如果你回顾这部分文章开始部分的 "Items Sold August 2016" 表格。你会看到 "Clothes" 单元格在"Trousers", "Skirts", 和 "Dresses" 单元格的上面。这几个单元格都应该被标记为 (`<th>`)，但是 "Clothes" 是一个位于顶部且定义了其他三个子标题的标题。 因此 "Clothes" 应该有一个 `scope="colgroup"`属性，而另外三个子标题应该有 `scope="col"`属性。

### 7.2 id 和标题属性

如果要替代 `scope` 属性，可以使用 [`id`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes#attr-id) 和 [`headers`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/td#attr-headers) 属性来创造标题与单元格之间的联系。使用方法如下:

1. 为每个`<th>` 元素添加一个唯一的 `id` 。
2. 为每个 `<td>` 元素添加一个 `headers` 属性。每个单元格的`headers` 属性需要包含它从属于的所有标题的id，之间用空格分隔开。

这会给你的HTML表格中每个单元格的位置一个明确的定义。像一个电子表格一样，通过 headers 属性来定义属于哪些行或列。为了让它工作良好，表格同时需要列和行标题。

回到我们的花费成本示例，前两个片段可以重写为：

```html
<thead>
  <tr>
    <th id="purchase">Purchase</th>
    <th id="location">Location</th>
    <th id="date">Date</th>
    <th id="evaluation">Evaluation</th>
    <th id="cost">Cost (€)</th>
  </tr>
</thead>
<tbody>
<tr>
  <th id="haircut">Haircut</th>
  <td headers="location haircut">Hairdresser</td>
  <td headers="date haircut">12/09</td>
  <td headers="evaluation haircut">Great idea</td>
  <td headers="cost haircut">30</td>
</tr>

  ...

</tbody>
```

> **注意**: 这个放进为标题单元格和数据单元格之间创造了非常精确的联系。但是这个方法使用了大量的标记，所以容错率比较低。使用 `scope` 的方法对于大多数表格来说，也够用了。

## 8.最终测试：构建行星数据

你在学校工作; 目前，你的学生正在学习太阳系的行星，然后你想为他们提供一份简单的易于追踪的数据集合，来查找有关行星的数字和情况。一张 HTML 数据表将是理想的，你需要先获得可用的数据，然后把它变成一张表格，[跟着下面的步骤](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Tables/Structuring_planet_data)，最终的完成效果如下图：

![image-20220302214827571](F:/MarkdownResSource/Readme.assets/image-20220302214827571.png)

详情代码看此文件：[index.html](../day7p/indexFixEdition.html)

