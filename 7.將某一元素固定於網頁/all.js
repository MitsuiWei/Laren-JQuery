jQuery(document).ready(function($) {

	//文字放大
	$('.font-b').click(function(event) {
		/* Act on the event */
		$('.content p ').css('font-size' , '20px');
		$('.header p ').css('font-size' , '26px');
	});

	//文字中等
	$('.font-m').click(function(event) {
		/* Act on the event */
		$('.content p ').css('font-size' , '16px');
		$('.header p ').css('font-size' , '22px');
	});

	//文字縮小
	
	$('.font-s').click(function(event) {
		/* Act on the event */
		$('.content p ').css('font-size' , '14px');
		$('.header p ').css('font-size' , '20px');
	});


	$('.close-ad').click(function(event) {
		/* Act on the event */
		event.preventDefault();
		$('.ad').slideUp();
		
	});

});


