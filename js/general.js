
$(function () {
    $('.header__button').on('click', function () {
        if (!$(this).is('.active')) {
            $(this).addClass('active');
            $('.header__nav').addClass('active');
            Scroll.disable();
        } else {
            $(this).removeClass('active');
            $('.header__nav').removeClass('active');
            Scroll.enable();
        }
    });
    const Scroll = (function () {
        // left: 37, up: 38, right: 39, down: 40,
        // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
        var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };
        function preventDefault(e) {
            e.preventDefault();
        }
        function preventDefaultForScrollKeys(e) {
            if (keys[e.keyCode]) {
                preventDefault(e);
                return false;
            }
        }
        var supportsPassive = false;
        try {
            document.body.addEventListener("test", null, Object.defineProperty({}, 'passive', {
                get: function () { supportsPassive = true; }
            }));
        } catch (e) {
            console.log('not catch error');
        }
        var wheelOpt = supportsPassive ? { passive: false } : false;
        var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
        // call this to Disable
        function disableScroll() {
            document.body.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
            document.body.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
            document.body.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
            document.body.addEventListener('keydown', preventDefaultForScrollKeys, false);
        }

        // call this to Enable
        function enableScroll() {
            document.body.removeEventListener('DOMMouseScroll', preventDefault, false);
            document.body.removeEventListener(wheelEvent, preventDefault, wheelOpt);
            document.body.removeEventListener('touchmove', preventDefault, wheelOpt);
            document.body.removeEventListener('keydown', preventDefaultForScrollKeys, false);
        }
        return {
            disable: disableScroll,
            enable: enableScroll
        }
    })();
});

$(function () {
    $('.button__accor').on('click', function () {
        if (!$('.step__content').is('.active')) {
            $('.step__content').removeClass('active');
            $('.step__content').css('height', '0px');
            $(this).children('.faq__questions--A').css('height', $('.faq__questions--hiden').height() + 'px');
            $(this).addClass('active');
        }
        else {
            $(this).removeClass('active');
            $(this).children('.faq__questions--A').css('height', '0px');
        }
    });

});
$('.step__info').on('click', function () {
    if ($(this).parent().is('.expand')) {
        $(this).parent().removeClass('expand');
        $(this).next().css('height', '0px');
    } else {
        $(this).parent().addClass('expand');
        $(this).next().css('height', $(this).next().children().outerHeight() + 'px');
        console.log($(this).next().css('height', $(this).next().children().outerHeight() + 'px'))
        console.log($(this).next().children());
    }
});

window.onscroll = function () {
    var _curPos = window.pageYOffset;
    var _curH = $(window).height()/2;
    if(_curPos > _curH){

        $('#backTop').css({
            display: 'block'
        });
    }
    else {
        $('#backTop').css({
            display: 'none'
        });
    }
}
$('#backTop').click(function (event) {
    /* Act on the event */
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000, 'swing');
});

