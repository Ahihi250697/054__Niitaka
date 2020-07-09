$(function(){
	var _wh = $(window).width();
	// var width = $(window).width();
	if (_wh <= 768) {
		
	}
	$('.mv-slick').slick({
	  	slidesToShow: 1,
	  	slidesToScroll: 1,
	  	autoplay: true,
	  	autoplaySpeed: 2000,
	});
	$('.mv-banner').slick({
	  	slidesToShow: 4,
	  	slidesToScroll: 1,
	  	autoplay: true,
	  	autoplaySpeed: 2500,
	});
	$('.pick-up--slick').slick({
		dots: true,
	  	slidesToShow: 4,
	  	slidesToScroll: 1,
	  	autoplay: true,
	  	autoplaySpeed: 2500,
	});
	$('.mv-banner').find('.slick-next').html('<i class="fa fa-angle-right" aria-hidden="true"></i>');
	$('.mv-banner').find('.slick-prev').html('<i class="fa fa-angle-left" aria-hidden="true"></i>');

	$('.pick-up--slick').find('.slick-next').html('<i class="fa fa-angle-right" aria-hidden="true"></i>');
	$('.pick-up--slick').find('.slick-prev').html('<i class="fa fa-angle-left" aria-hidden="true"></i>');
	
	$('.product-detail--button').click(function() {
		if(!$(this).hasClass('active')){
			var _openTabName = $(this).attr('data-opentab');
			$('.product-detail--button').removeClass('active');
			$(this).addClass('active');
			$('.product-detail--container').removeClass('active');
			$(_openTabName).addClass('active');
		}
		else
		{
			return false;
		}
	});
	$('.product-detail--item').click(function() {
		$(this).hasClass('active') ? $(this).removeClass('active') : $(this).addClass('active');
		return false;
	});
});