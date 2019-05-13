jQuery(document).ready(function($) {
	$('.post').click(function(event) {
		$('.text').slideToggle(3000);
	});
	

	
});

jQuery(document).ready(function($) {
	$(".post2").click(function(event) {
		$(".text2").toggleClass('active');
	});
});