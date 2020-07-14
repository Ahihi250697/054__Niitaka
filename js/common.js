$(function(){
	var _wh = $(window).width();

	$('.mv-slick').slick({
	  	slidesToShow: 1,
	  	slidesToScroll: 1,
	  	autoplay: true,
	  	autoplaySpeed: 2000,
	});
	
	$('.product-detail--button').click(function() {
		if(!$(this).hasClass('active')){
			var _openTabName = $(this).attr('data-opentab');
			$('.product-detail--button').removeClass('active');
			$(this).addClass('active');
			
			$('.product-detail--container').removeClass('active');
			$(_openTabName).addClass('active');
			fitItemOnRow();
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
$('.mv-banner').slick({
	  	slidesToShow: 4,
	  	slidesToScroll: 2,
	  	autoplay: true,
	  	autoplaySpeed: 2500,
	  	responsive: [
		    {
		      breakpoint: 1025,
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
	      breakpoint: 1025,
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
			$(this).parent().find('.menu-hidden').slideUp("300", function(){
				$(this).parent().find('.menu-link-item').removeClass('active'); 
			});
		}
		else{
			$('.menu-link-item').removeClass('active');
			$('.menu-hidden').slideUp("300");
			$(this).addClass('active');
			$(this).parent().find('.menu-hidden').slideDown("300");

		}
	}
});

function __addClass(o, c){
	o.addClass(c);
};

$(window).on('load resize', function(){
	__delayCall(__openDetail768, 500);
	$('.mv-banner').find('.slick-next').html('<i class="fa fa-angle-right" aria-hidden="true"></i>');
	$('.mv-banner').find('.slick-prev').html('<i class="fa fa-angle-left" aria-hidden="true"></i>');

	$('.pick-up--slick').find('.slick-next').html('<i class="fa fa-angle-right" aria-hidden="true"></i>');
	$('.pick-up--slick').find('.slick-prev').html('<i class="fa fa-angle-left" aria-hidden="true"></i>');
	var _wh = $(window).width();
	if(_wh <= 1024){
		$('.menu-hidden').removeClass('animated');
	}
	else{
		__delayCall(__addClass($('.menu-hidden'), 'animated'), 500);
	}
	fitItemOnRow();
});

function fitItemOnRow(){
	var parWidth = $('.product-detail--container.active').width()+2;
	var _item = $('.product-detail--container.active').find('.product-detail--follow');
	var itemWidth = _item.outerWidth(true);
	var itemAmount = Math.floor((parWidth / itemWidth));
	if(itemAmount > _item.length) {
	    itemAmount = _item.length;
	}

	if(itemAmount >=2 ){
		_item.each(function(index, val) {
			 /* iterate through array or object */
			var _n = index +1;
			var _wh = $(window).width();
			if(_n == _item.length && _n % itemAmount != 0 && _n-1 != itemAmount){		 	
			 	var _h = parWidth - ((_item.width()* itemAmount));
			 	var _c = itemAmount -1;
			 	var _m = _h / _c;
			 	if(_wh <= 768){
			 		_m = _m/2;
			 	}
			 	

			 	$(this).css({
			 	  	'margin-right': _item.width()+_m+'px'
			  	});
			}
			else{
				_item.each(function(){
					$(this).css({
						'margin-right': '0'
					});
				});
			}
		});
	}
	else{
		_item.each(function(){
			$(this).css({
				'margin-right': '0'
			});
		});
	}
}

