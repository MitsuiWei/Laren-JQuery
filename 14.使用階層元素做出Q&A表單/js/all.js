$(document).ready(function() {

  $('.question').click(function(event) {

    //兩行寫法
    $(this).toggleClass('active').find('p').slideToggle(1000);
    $(this).siblings().removeClass('active').find('p').slideUp(1000);
    // 讓點擊到的 h3 亮起來，其他h3移除active樣式
    //$(this).toggleClass('active');

    // 讓點擊到的 h3找到父元素 .question ，再找裡面的 P 判斷收闔
    //$(this).parent().find('p').slideToggle();
    //$(this).siblings('p').slideToggle();

    // 自己以外的 p 隱藏起來
    //$(this).parent().siblings().find('p').slideUp();
    // 自己以外的 h3 移除u樣式
   // $(this).parent().siblings().find('h3').removeClass('active');

  });
});