jQuery(document).ready(function($) {
	$('#hide').click(function(event) {
		$('h1').toggle();
	});
	

	$('#show').click(function(event) {
		$('h1').show();
	});
});