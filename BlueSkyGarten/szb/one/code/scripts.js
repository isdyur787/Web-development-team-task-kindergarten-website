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
document.addEventListener("DOMContentLoaded", function() {
  // 获取加入我们链接元素
  var joinUsLink = document.querySelector(".nav-li li:last-child a");

  // 添加点击事件监听器
  joinUsLink.addEventListener("click", function(event) {
      event.preventDefault(); // 防止链接的默认行为

      // 获取招聘/招生页面容器元素
      var recruitmentContainer = document.getElementById("recruitment-container");

      // 显示招聘/招生页面容器
      recruitmentContainer.style.display = "block";
  });
});
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("teacher-recruitment").addEventListener("click", function() {
      document.getElementById("teacher-container").style.display = "block";
      document.getElementById("student-container").style.display = "none";
      document.getElementById("home").style.display = "block";
  });

  document.getElementById("student-recruitment").addEventListener("click", function() {
      document.getElementById("student-container").style.display = "block";
      document.getElementById("teacher-container").style.display = "none";
      document.getElementById("home").style.display = "block";
  });

  document.getElementById("teacher-form").addEventListener("submit", function(event) {
      event.preventDefault();
      this.reset();
      document.getElementById("teacher-container").style.display = "none";
      document.getElementById("teacher-success").style.display = "block";
      setTimeout(function() {
          document.getElementById("teacher-success").style.display = "none";
          document.getElementById("submission-message").textContent = "老师信息已提交";
          document.getElementById("submission-message").style.display = "block";
          setTimeout(function() {
              document.getElementById("submission-message").style.display = "none";
          }, 3000);
          document.getElementById("home").style.display = "block";
      }, 0);
  });

  document.getElementById("student-form").addEventListener("submit", function(event) {
      event.preventDefault();
      this.reset();
      document.getElementById("student-container").style.display = "none";
      document.getElementById("student-success").style.display = "block";
      setTimeout(function() {
          document.getElementById("student-success").style.display = "none";
          document.getElementById("submission-message").textContent = "学生信息已提交";
          document.getElementById("submission-message").style.display = "block";
          setTimeout(function() {
              document.getElementById("submission-message").style.display = "none";
          }, 3000);
          document.getElementById("home").style.display = "block";
      }, 0);
  });
});