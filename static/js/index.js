window.HELP_IMPROVE_VIDEOJS = false;


$(document).ready(function () {
	// Check for click events on the navbar burger icon

	var options = {
		slidesToScroll: 1,
		slidesToShow: 1,
		loop: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 5000,
	}

	// Initialize all div with carousel class
	var carousels = bulmaCarousel.attach('.carousel', options);

	bulmaSlider.attach();


	var nero_cmp_buttons = $('#nero_cmp_buttons > button');
	nero_cmp_buttons.click(function () {
		var newWord = $(this).data('word');
		$('.nero_cmp_imgs').each(function () {
			var template = $(this).data('template');
			var newSrc = template.replace(/{{placeholder}}/g, newWord);
			$(this).attr('src', newSrc);
		});
	});
	nero_cmp_buttons.first().click();
})
