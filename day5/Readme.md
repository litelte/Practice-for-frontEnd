---
主要学习多媒体与嵌入，更深层地接触HTML基本表现形式
---

# 多媒体与嵌入

## 1.HTML中的图片

### 1.1\<img>标签使用

学习使用<img>标签

它是一个空元素（它不需要包含文本内容或闭合标签），最少只需要一个 src （一般读作其全称 source）来使其生效。src 属性包含了指向我们想要引入的图片的路径，可以是相对路径或绝对URL，就像 <a> 元素的 href 属性一样。

<img>标签有几大属性：

- src：图片源，注意，不能使用本地计算机的图片资源，可以使用同一工程文件夹下的图片
- alt：图片说明，当图片无法正常显示时，会显示图片的说明
- width：自定义宽度，和下面的自定义高度对应，标注一个，另一个会自动调节
- height：自定义高度
- title：鼠标悬停在图片上时会显示

### 1.2\<figure>和\<figcaption>

通过为图片搭配说明文字的方式解说图片

传统的文字介绍图片方式：

```html
<div>
      <img
        src="./assert/white.jpg"
        alt="白色小娃娃"
        width="700"
        title="白色小娃娃"
      />
      <p>拯救姬白色娃娃</p>
    </div>
```

<div>
    <img
        src="./assert/white.jpg"
        alt="白色小娃娃"
        width="700"
        title="白色小娃娃"
      />
      <p>拯救姬白色娃娃</p>
</div>

然而，这种形式并不优雅，我们有更好的表现形式：

```html
 <figure>
        <img
        src="./assert/white.jpg"
        alt="白色小娃娃"
        width="700"
      />
      <figcaption>从所长那里下载来的白色拯救姬小娃娃</figcaption>
    </figure>
```

<figure>
     <img
        src="./assert/white.jpg"
        alt="白色小娃娃"
        width="700"
      />
      <figcaption>从所长那里下载来的白色拯救姬小娃娃</figcaption>
</figure>

### 1.3使用CSS背景图片

你也可以使用 CSS 把图片嵌入网站中（JavaScript也行，不过那是另外一个故事了），这个 CSS 属性 background-image 和另其他 background-* 属性是用来放置背景图片的。比如，为页面中的所有段落设置一个背景图片，你可以这样做：

```css
p {
  background-image: url("images/dinosaur.jpg");
}
```

按理说，这种做法相对于 HTML 中插入图片的做法，可以更好地控制图片和设置图片的位置，那么为什么我们还要使用 HTML 图片呢？如上所述，CSS 背景图片只是为了装饰 — 如果你只是想要在你的页面上添加一些漂亮的东西，来提升视觉效果，那 CSS 的做法是可以的。但是这样插入的图片完全没有语义上的意义，它们不能有任何备选文本，也不能被屏幕阅读器识别。这就是 HTML 图片有用的地方了。

==总而言之，如果图像对您的内容里有意义，则应使用HTML图像。 如果图像纯粹是装饰，则应使用CSS背景图片。==

## 2.音频和视频

音频和视频的内容主要是三个标签：

- \<video></video>
- \<audio></audio>
- <track>

### 2.1\<video>标签

\<video> 允许你轻松地嵌入一段视频。一个简单的例子如下：

```html
<video src="assert/sarlong.mp4" controls>
  <p>你的浏览器不支持 HTML5 视频。可点击<a href="assert/sarlong.webm">此链接</a>观看</p>
</video>
```

<video src="assert/sarlong.mp4" controls>
  <p>你的浏览器不支持 HTML5 视频。可点击<a href="assert/sarlong.webm">此链接</a>观看</p>
</video>

当中的一些属性如下:

==**src**==
同 <img> 标签使用方式相同，src 属性指向你想要嵌入网页当中的视频资源，他们的使用方式完全相同。
==**controls**==
用户必须能够控制视频和音频的回放功能。你可以使用 controls 来包含浏览器提供的控件界面，同时你也可以使用合适的 JavaScript API 创建自己的界面。界面中至少要包含开始、停止以及调整音量的功能。

**==\<video> 标签内的内容==**
这个叫做后备内容 — 当浏览器不支持 <video> 标签的时候，就会显示这段内容，这使得我们能够对旧的浏览器提供回退内容。你可以添加任何后备内容，在这个例子中我们提供了一个指向这个视频文件的链接，从而使用户至少可以访问到这个文件，而不会局限于浏览器的支持。

***还可以使用多个播放源来提高兼容性***

详细的信息可以点击这个链接：[媒体文件的内容](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content#%E4%BD%BF%E7%94%A8%E5%A4%9A%E4%B8%AA%E6%92%AD%E6%94%BE%E6%BA%90%E4%BB%A5%E6%8F%90%E9%AB%98%E5%85%BC%E5%AE%B9%E6%80%A7)

上面切换源的简单代码：

```html
<video controls>
  <source src="rabbit320.mp4" type="video/mp4">
  <source src="rabbit320.webm" type="video/webm">
  <p>你的浏览器不支持 HTML5 视频。可点击<a href="rabbit320.mp4">此链接</a>观看</p>
</video>
```

现在我们将 src 属性从 <video> 标签中移除，转而将它放在几个单独的标签 <source> 当中。在这个例子当中，浏览器将会检查 <source> 标签，并且播放第一个与其自身 codec 相匹配的媒体。你的视频应当包括 WebM 和 MP4 两种格式，这两种在目前已经足够支持大多数平台和浏览器。

每个 <source> 标签页含有一个 type 属性，这个属性是可选的，但是建议你添加上这个属性 — 它包含了视频文件的 MIME types ，同时浏览器也会通过检查这个属性来迅速的跳过那些不支持的格式。如果你没有添加 type 属性，浏览器会尝试加载每一个文件，直到找到一个能正确播放的格式，这样会消耗掉大量的时间和资源。

### 2.2\<video>其他特性

看下面的一个代码例子：

```html
<video
      controls
      width="400"
      height="400"
      loop
      muted
      preload="auto"
      poster="assert/hello.png"
    >
      <source src="./assert/sarlong.mp4" type="video/mp4" />
      <source src="./assert/sarlong.webm" type="video/webm" />
      <p>
        Your browser doesn't support HTML5 video. Here is a
        <a href="./assert/sarlong.mp4">link to the video</a> instead.
      </p>
</video>
```

<video controls width="400" height="400" loop muted preload="auto" poster="assert/hello.png">
      <source src="assert/sarlong.mp4" type="video/mp4" />
      <source src="assert/sarlong.webm" type="video/webm" />
      <p>
        Your browser doesn't support HTML5 video. Here is a
        <a href="assert/sarlong.mp4">link to the video</a> instead.
      </p>
</video>

新的特性：

- width 和 height

  - 你可以用属性控制视频的尺寸，也可以用 CSS 来控制视频尺寸。 无论使用哪种方式，视频都会保持它原始的长宽比 — 也叫做纵横比。如果你设置的尺寸没有保持视频原始长宽比，那么视频边框将会拉伸，而未被视频内容填充的部分，将会显示默认的背景颜色。

- autoplay

  - 这个属性会使音频和视频内容立即播放，即使页面的其他部分还没有加载完全。建议不要应用这个属性在你的网站上，因为用户们会比较反感自动播放的媒体文件。

- loop

  - 这个属性可以让音频或者视频文件循环播放。同样不建议使用，除非有必要。

- muted

  - 这个属性会导致媒体播放时，默认关闭声音。

- poster

  - 这个属性指向了一个图像的URL，这个图像会在视频播放前显示。通常用于粗略的预览或者广告。

- preload

  - 这个属性被用来缓冲较大的文件，有3个值可选：
  - "none" ：不缓冲
    "auto" ：页面加载后缓存媒体文件
    "metadata" ：仅缓冲文件的元数据

  注意我们并没有使用 ==autoplay== 属性在这个版本的例子中 — 如果当页面一加载就开始播放视频的话，就不会看到 ==poster== 属性的效果了。

### 2.3\<audio>标签

\<audio> 标签与 \<video> 标签的使用方式几乎完全相同，有一些细微的差别比如下面的边框不同，一个典型的例子如下：

```html
    <audio controls>
      <source src="assert/somethingjustlikethis.mp3" type="audio/mp3" />
      <source src="assert/somethingjustlikethis.ogg" type="audio/ogg" />
      <p>
        你的浏览器不支持HTML5音频，可点击<a
          href="assert/somethingjustlikethis.mp3"
          >此链接</a
        >收听。
      </p>
    </audio>
```

下面是实际效果

<audio controls>
    <source src="assert/somethingjustlikethis.mp3" type="audio/mp3" />
      <source src="assert/somethingjustlikethis.ogg" type="audio/ogg" />
      <p>
        你的浏览器不支持HTML5音频，可点击<a
          href="assert/somethingjustlikethis.mp3"
          >此链接</a
        >收听。
      </p>
</audio>

音频播放器所占用的空间比视频播放器要小，由于它没有视觉部件 — 你只需要显示出能控制音频播放的控件。一些与 HTML5 <video> 的差异如下：

- \<audio> 标签不支持 width/height 属性 — 由于其并没有视觉部件，也就没有可以设置 width/height 的内容。
- 同时也不支持 poster 属性 — 同样，没有视觉部件。

除此之外，\<audio> 标签支持所有 \<video> 标签拥有的特性 — 你可以回顾上面的章节来了解更多的有关信息。

### 2.4使用JavaScript配置媒体播放

#### 重新播放媒体

任何时候，你都可以在 Javascript 中调用 [`load()`](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLMediaElement/load) 方法来重置媒体。如果有多个由 [``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/source) 标签指定的媒体来源，浏览器会从选择媒体来源开始重新加载媒体。

```
const mediaElem = document.getElementById("my-media-element");
mediaElem.load();
```

Copy to Clipboard

#### [音轨增删事件](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content#音轨增删事件)

你可以监控媒体元素中的音频轨道，当音轨被添加或删除时，你可以通过监听相关事件来侦测到。具体来说，通过监听 [`AudioTrackList` (en-US)](https://developer.mozilla.org/en-US/docs/Web/API/AudioTrackList) 对象的 `addtrack` 事件（即 [`HTMLMediaElement.audioTracks`](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLMediaElement/audioTracks) 对象），你可以及时对音轨的增加做出响应。

```
const mediaElem = document.querySelector("video");
mediaElem.audioTracks.onaddtrack = function(event) {
  audioTrackAdded(event.track);
}
```

<u>**可以在 [`TrackEvent` (en-US)](https://developer.mozilla.org/en-US/docs/Web/API/TrackEvent) 文档中找到更多有用的信息。**</u>

### 2.5显示音轨文本

许多人不想（或者不能）听到 Web 上的音频/视频内容，至少在某些情况下是这样的，比如：

- 许多人患有听觉障碍（通常来说是很难听清声音的人，或者聋人），所以他们不能听见音频中的声音。
- 另外的情况可能是由于人们并不能听音频，可能是因为他们在一个非常嘈杂的环境当中（比如在一个拥挤的酒吧内恰好赶上了球赛 ），也可能是由于他们并不想打扰到其他人（比如在一个十分安静的地方，例如图书馆）。
- 有一些人他们不说音频当中的语言，所以他们听不懂，因此他们想要一个副本或者是翻译来帮助他们理解媒体内容。

给那些听不懂音频语言的人们提供一个音频内容的副本岂不是一件很棒的事情吗？所以，感谢 HTML5 `<video>` 使之成为可能，有了 [WebVTT](https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API) 格式，你可以使用 [``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/track) 标签。

WebVTT 是一个格式，用来编写文本文件，这个文本文件包含了众多的字符串，这些字符串会带有一些元数据，它们可以用来描述这个字符串将会在视频中显示的时间，甚至可以用来描述这些字符串的样式以及定位信息。这些字符串叫做 **cues** ，你可以根据不同的需求来显示不同的样式，最常见的如下：

- **==subtitles==**

  通过添加翻译字幕，来帮助那些听不懂外国语言的人们理解音频当中的内容。

- **==captions==**

  同步翻译对白，或是描述一些有重要信息的声音，来帮助那些不能听音频的人们理解音频中的内容。

- ==**timed descriptions**==

  将文字转换为音频，用于服务那些有视觉障碍的人。

一个典型的 WebVTT 文件如下：

```txt
WEBVTT

1
00:00:22.230 --> 00:00:24.606
第一段字幕

2
00:00:30.739 --> 00:00:34.074
第二段

  ...
```

使用和编辑vtt后缀的文件，让其与 HTML 媒体一起显示，你需要做如下工作：

> 以 .vtt 后缀名保存文件。
> 用 <track> 标签链接 .vtt 文件， <track> 标签需放在 <audio> 或 <video> 标签当中，同时需要放在所有 <source> 标签之后。使用 kind 属性来指明是哪一种类型，如 subtitles 、 captions 、 descriptions。然后，使用 srclang 来告诉浏览器你是用什么语言来编写的 subtitles。

示例代码：

```html
<video controls>
    <source src="example.mp4" type="video/mp4">
    <source src="example.webm" type="video/webm">
    <track kind="subtitles" src="subtitles_en.vtt" srclang="en">
</video>
```

我自己实际写的代码：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>增加字幕的使用</title>
</head>
<body>
    <!-- 使用index2.html中的案例 -->
    <p>这是一段视频</p>
    <video controls width="600" loop preload="auto" autoplay muted>
        <source src="assert/sarlong.mp4" type="video/mp4">
        <source src="assert/sarlong.webm" type="video/webm">
        <track kind="subtitles" src="assert/subtitles_en.vtt" srclang="en" default>
    </video>
</body>
</html>
```

这个是subtitles_en.vtt文件中的内容：

```txt
WEBVTT

0
00:00:22.230 --> 00:00:24.606
This is the first video,is huaqiangLiu buy watermalon

1
00:00:30.739 --> 00:00:34.074
This is the second video,is sarilang
```

实际的运行效果：

![image-20211208235957010](Readme.assets/image-20211208235957010.png)

![image-20211209000038002](Readme.assets/image-20211209000038002.png)

刚好符合上面字幕的内容
