$(function(){
	var _wh = $(window).width();
	// var width = $(window).width();
	$('.mv-slick').slick({
	  	slidesToShow: 1,
	  	slidesToScroll: 1,
	  	autoplay: true,
	  	autoplaySpeed: 2000,
	});
	$('.mv-banner').slick({
	  	slidesToShow: 4,
	  	slidesToScroll: 2,
	  	autoplay: true,
	  	autoplaySpeed: 2500,
	  	responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2,
		        infinite: true
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		]
	});
	$('.pick-up--slick').slick({
		dots: true,
	  	slidesToShow: 4,
	  	slidesToScroll: 2,
	  	autoplay: true,
	  	autoplaySpeed: 2500,
	  	responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2,
		        infinite: true
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		]
	});
	$(window).on('resize load',function(){
		$('.mv-banner').find('.slick-next').html('<i class="fa fa-angle-right" aria-hidden="true"></i>');
		$('.mv-banner').find('.slick-prev').html('<i class="fa fa-angle-left" aria-hidden="true"></i>');

		$('.pick-up--slick').find('.slick-next').html('<i class="fa fa-angle-right" aria-hidden="true"></i>');
		$('.pick-up--slick').find('.slick-prev').html('<i class="fa fa-angle-left" aria-hidden="true"></i>');
	}
	);
	
	$('.product-detail--button').click(function() {console.log(_wh);
		if(!$(this).hasClass('active')){
			var _openTabName = $(this).attr('data-opentab');
			$('.product-detail--button').removeClass('active');
			$(this).addClass('active');
			
			$('.product-detail--container').removeClass('active');
			$(_openTabName).addClass('active');
		}
		else
		{
			if(_wh <= 768){
				$(this).removeClass('active');
				$('.product-detail--container').removeClass('active');
				$(_openTabName).hasClass('active') ? $(_openTabName).removeClass('active') : $(_openTabName).addClass('active');
			}
		}
	});
	$('.product-detail--item').click(function() {
		$(this).hasClass('active') ? $(this).removeClass('active') : $(this).addClass('active');
		return false;
	});
	
});
$(window).on('resize', __delayCall(__openDetail768, 500));
function __openDetail768(){
	var _wh = $(window).width();
		if(_wh >= 768){
			$('.product-detail--container').each(function(index, el) {
				if($(this).hasClass('active')){
					console.log(index);
				}
				else{console.log(index);
					index == $('.product-detail--container').length - 1 ? $('.product-detail--container').first().addClass('active') : false;
				}
			});
		}
		
	}
function __delayCall(func, timed){
	let timeout;
	return function(){
		clearTimeout(timeout);
		timeout = setTimeout(func, timed);
	};
}

$('.menu-link-item').click(function(event) {
	var _wh = $(window).width();
		if(_wh <= 1024){
			if($(this).hasClass('active')){
			$(this).parent().find('.menu-hidden').removeClass('active');
			$(this).removeClass('active'); 	
			}
			else{
				$('.menu-link-item').removeClass('active');
				$('.menu-hidden').removeClass('active');
				$(this).addClass('active');
				$(this).parent().find('.menu-hidden').addClass('active');
			}
		}
	});