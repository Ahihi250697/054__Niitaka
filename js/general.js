
$(function () {
    $('.header__button').on('click', function () {
        if (!$(this).is('.active')) {
            $(this).addClass('active');
            $('.header__nav').addClass('active');
            $('.header__menu').slideDown("300");
           // Scroll.disable();
            var _wh = $(window).width();
            if(_wh <= 768){
                $(this).after(__langMobile());
                $('.header__menu-item').first().before(_inputMobile);
            }
        } else {
            $(this).removeClass('active');
            $('.header__menu').slideUp("300", function(){
                    $('.header__nav').removeClass('active');
                    $('.menu-hidden').removeClass('active');
                    $('#lang-mobile').remove();
                    $('.header__search--mobile').remove();
              });

           // Scroll.enable();
        }

    });
    // const Scroll = (function () {
    //     // left: 37, up: 38, right: 39, down: 40,
    //     // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
    //     var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };
    //     function preventDefault(e) {
    //         e.preventDefault();
    //     }
    //     function preventDefaultForScrollKeys(e) {
    //         if (keys[e.keyCode]) {
    //             preventDefault(e);
    //             return false;
    //         }
    //     }
    //     var supportsPassive = false;
    //     try {
    //         document.body.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    //             get: function () { supportsPassive = true; }
    //         }));
    //     } catch (e) {
    //         console.log('not catch error');
    //     }
    //     var wheelOpt = supportsPassive ? { passive: false } : false;
    //     var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
    //     // call this to Disable
    //     function disableScroll() {
    //         document.body.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    //         document.body.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    //         document.body.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    //         document.body.addEventListener('keydown', preventDefaultForScrollKeys, false);
    //     }

    //     // call this to Enable
    //     function enableScroll() {
    //         document.body.removeEventListener('DOMMouseScroll', preventDefault, false);
    //         document.body.removeEventListener(wheelEvent, preventDefault, wheelOpt);
    //         document.body.removeEventListener('touchmove', preventDefault, wheelOpt);
    //         document.body.removeEventListener('keydown', preventDefaultForScrollKeys, false);
    //     }
    //     return {
    //         disable: disableScroll,
    //         enable: enableScroll
    //     }
    // })();
});

var _langMobile = ['English', '中 文'];
var _inputMobile ='<form class="header__search--mobile"><input type="text" class="header__input--mobile" placeholder="サイト内検索"><i class="fa fa-search" aria-hidden="true"></i></form>';

var _openSelect = "<select id='lang-mobile'>";
var _closeSelect = "</select>";
var _langIsOpen = 0;
function __langMobile(){
    var _returnS = '';
    if (_langIsOpen == 0){
        _returnS += _openSelect;
         $.each(_langMobile, function(index, val) {
         /* iterate through array or object */
             _returnS += '<option value="'+val+'">'+val+'</option>';
        });
        _langIsOpen == -1;
        return _returnS += _closeSelect;
    }
    else
    {
        _langIsOpen = 0;
    }
}

var _toTopIsOpen = -1;
window.onscroll = function () {
    var _curPos = window.pageYOffset;
    if(_curPos > 200){
        if(_toTopIsOpen == -1){
            $('#backTop').css({
                display: 'flex'
            });
            _toTopIsOpen = 0;
        }
    }    
    else {
        if(_toTopIsOpen == 0){
            $('#backTop').css({
                display: 'none'
            });
             _toTopIsOpen = -1;
        }
        
    }
}
$('#backTop').click(function (event) {
    /* Act on the event */
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
        //scrollTop: $($(this).attr('href')).offset().top
    }, 1000, 'swing');
});

