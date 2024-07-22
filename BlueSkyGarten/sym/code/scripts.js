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


// 公告中心“更多”按钮
document.querySelector('.notice p').addEventListener('click', function() {
  const moreNotices = [
      "新年活动通知",
      "教师节庆祝",
      "暑期活动安排",
      "幼儿园新生招生",
      "健康检查通知"
  ];

  const noticeUl = document.querySelector('.notice-ul');
  var more = document.querySelector(".more");
//   遍历 moreNotices 数组中的每个公告。
// 创建一个新的 <li> 元素。
// 创建一个新的 <a> 元素，并设置其 href 属性、target 属性和 innerText。
// 将 <a> 元素添加到 <li> 元素中。
// 将 <li> 元素添加到公告列表 <ul> 中。
  moreNotices.forEach(function(notice) {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = '#';
      a.target = '_blank';
      a.innerText = notice;
      li.appendChild(a);
      noticeUl.appendChild(li);
  });

  more.remove();
  this.remove();
});

// 下班按钮功能
// 使用 this.closest('tr') 找到当前按钮所在的最近的 <tr> 元素，这个元素代表了当前员工的行。
// 使用 row.querySelector('.zhuangtai') 在该行中查找包含状态的单元格。
// 更新状态单元格的文本内容 statusCell.innerText 为“下班”。
// 更改状态单元格的文本颜色 statusCell.style.color 为蓝色。
document.querySelectorAll('button').forEach(function(button) {
  if (button.innerText === '下班') {
      button.addEventListener('click', function() {
          const row = this.closest('tr');
          const statusCell = row.querySelector('.zhuangtai');
          statusCell.innerText = '下班';
          statusCell.style.color = 'blue';
      });
  }
});

// 轮播图
let index = 0

function reflesh(){
  if(index < 0){//下标小于零时 设置成最右边的图片
    index = 3;
  }else if(index > 3){//下标超过最大时 设置成最左边的图片
    index = 0
  }
  let outer = document.querySelector(".outer")
  let width = getComputedStyle(outer).width
  width = Number(width.slice(0,-2))//去掉width后面的px，转换成数字
  console.log(width)
  outer.querySelector(".inner").style.left = index * width * -1 + "px"
  // 将“inner”的元素相对于其包含的元素“outer”的left样index和 `width目标进行调整

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
