function displayTime() {
  // 创建一个 Date 对象来获取当前时间
  var currentTime = new Date();

  // 获取小时、分钟和秒
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();

  // 格式化时间，确保单个数字前面有0
  hours = (hours < 10 ? "0" : "") + hours;
  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;

  // 设置时间显示的格式
  var timeString = hours + ":" + minutes + ":" + seconds;

  // 将时间显示在页面上的一个元素中
  document.getElementById("clock").innerHTML = timeString;
}

// 页面加载时立即显示时间
displayTime();

// 每秒钟调用一次 displayTime 函数，以更新时间
setInterval(displayTime, 1000);


let index = 0

function reflesh(){
  if(index < 0){//下标小于零时 设置成最右边的图片
    index = 3;
  }else if(index > 3){//下标超过最大时 设置成最左边的图片
    index = 0
  }
  let outer = document.querySelector(".outer")
  let width = getComputedStyle(outer).width
  width = Number(width.slice(0,-2))
  console.log(width)
  outer.querySelector(".inner").style.left = index * width * -1 + "px"

}

function leftShift(){
  index--
  reflesh();
}
function rightShift(){
  index++
  reflesh();
}
function setIndex(idx){
  index = idx
  reflesh()
}
reflesh();