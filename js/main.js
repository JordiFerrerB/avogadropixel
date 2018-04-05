window.jQuery(function ($) {
	$("header").css("margin-bottom", $(window).height());
	$("body").css("height", $(window).height()*2);

	//Header first click action
	$(".continue-button:first").on('click', function(){
		$("#square").removeClass("hidden");
		$("section:first").removeClass("hidden");
		$("section:first").addClass("first");
		$('html, body').animate({scrollTop : $('#square').offset().top},900);
	});

	//Second click actions
	$('.second-button').on('click', function(){
		$('.first').fadeOut();
		$('#square').css('width', 1000);
		$('#square').css('height', 1000);
		$('.second-section').removeClass("hidden");
		$("body").css("height", ($(window).height()*2) + 1300);
		$('html, body').animate({scrollTop : $('.last-button').offset().top+350},1000);
	});

	//Last button actions
	$('.last-button').on('click', function(){
		$('.second-section').fadeOut();
		$('.last-section').removeClass("hidden");
		$('#square').css('margin-left', 15);
		$('#square').css('width', 776015463763);
		$('#square').css('height', 776015463763);
	});
});
