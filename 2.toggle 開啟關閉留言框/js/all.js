jQuery(document).ready(function($) {
	$('.post').click(function(event) {
		$('.text').slideToggle(3000);  //slideDown和slideUp的結合
	});	
});

jQuery(document).ready(function($) {
	$('.post2').click(function(event) {
		$('.text2').fadeToggle(3000);  //fadeIn和fadeOut的結合
	});	
});

jQuery(document).ready(function($) {
	$(".post3").click(function(event) {
		$(".text3").toggleClass('active');
	});
});

/*原本 .text3的opacity: 0; （半透明效果0）
觸發按鈕之後變成".text3.active"  ＝ opacity: 1; （半透明效果1）
導致留言框出現
*/