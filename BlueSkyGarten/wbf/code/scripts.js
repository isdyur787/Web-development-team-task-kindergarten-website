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

var i=1;

$(".ww").ready(function(){
    i++;
    $(".wow").text(i);
})   
var webjump2 = document.getElementById('webjump2'); 
webjump2.addEventListener('click', function() {   
  window.location.href="massageCenter.html"   
});    

var mybutton = document.getElementById("topButton"); 
function scrollToTop() {  
  // 使用 "behavior: smooth" 可以在某些浏览器中实现平滑滚动（可选）  
  window.scrollTo({  
      top: 0,  
      behavior: 'smooth'  
  });  
}  