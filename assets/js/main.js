;(function ($) {
	"use strict";
	$(document).ready(function () {
		$('body').scrollspy({
			target: ".header-area",
			offset: 50
		});

		new WOW().init({
			mobile: false,
		});
	});
})(jQuery);