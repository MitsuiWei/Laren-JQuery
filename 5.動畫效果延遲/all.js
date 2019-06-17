jQuery(document).ready(function($) {
	$('.open').click(function(event) {
		
		$('.box1').delay(500).slideToggle();
		$('.box2').delay(1000).slideToggle();
		$('.box3').delay(1500).slideToggle();

	});
});


