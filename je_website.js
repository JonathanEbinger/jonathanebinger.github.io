function init() {
	// Menu functionality
	$(".hamburger_menu").click(function(e) {
		$(this).toggleClass("change");
		$(".overlay").animate({
			height: $(".overlay").height() == 0 ? "100%" : 0
		}, 200);
	});
	$(".overlay-content a").click(function(e) {
		$(this).toggleClass("change");
		$(".overlay").animate({
			height: $(".overlay").height() == 0 ? "100%" : 0
		}, 200);
	});
};