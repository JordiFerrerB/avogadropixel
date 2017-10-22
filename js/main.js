$(document).ready(function(){
	$('.headB').on('click', function(){
		$('html, body').animate({
          scrollTop: $('#squareContainer').offset().top 
        }, 1800)
	});

	$('.grow1m').on('click', function(event){
		event.preventDefault();
		$('.square').css({'width': '1000px', 'height': '1000px'});
		$('#squareContainer').css({'height': '1000px'});
		$('.firstText').fadeOut(500, 'swing');
		$('#secondStage').css({'display' : 'flex'});
		$('html, body').animate({
          scrollTop: $('#secondStage').offset().top
        }, 3000)
	});
});