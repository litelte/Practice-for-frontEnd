/* let myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";
 */
// 事件的介绍
document.querySelector("p").onclick = function () {
  alert("别点我，我怕疼");
};
// 还可以这样子写
/* let myHTML = document.querySelector('html');
myHTML.onclick = function(){}; */
// 添加一个图像切换器
let myImage = document.querySelector("img");
myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox2.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};
// 添加一个按钮
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  let myName = prompt("请输入你的名字：");
  // 防止用户输入null或者空名字，加入一个判断机制
  if (!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = "Mozilla 酷毙了，" + myName;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Mozilla 酷毙了，" + storedName;
}

// 最后，为这个按钮添加事件
// 即用户点击这个切换用户的按钮后，会自动出发设置名字的事件
myButton.onclick = function () {
  setUserName();
};
