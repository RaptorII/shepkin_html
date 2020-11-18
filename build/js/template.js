//$(document).foundation();

/**
 * menu > 990px
 */
function nav() {

    var $body = $(document.body);

    $('.toggle-nav').on('click', function () {
        $body.toggleClass('open');
        setNavigationHeight();
    });

    function setNavigationHeight() {

        if ($body.hasClass('open')) {
            $('.navigation__wrapper').css('height', ($(window).height() - 125));
        } else {
            $('.navigation__wrapper').css('height', 'auto');
        }
    }

    window.onresize = function () {
        clearTimeout($resizeDone);
        var $resizeDone = setTimeout(function () {
            setNavigationHeight();

            if ($body.width() >= 990 && $body.hasClass('open')) {
                $body.toggleClass('open');
            }
        }, 300);
    };
};
nav();

if ($(document.body).width() >= 989) {
    $(window).scroll(function () {
        /**
         * parallax
         */
        $('.parallax').each(function () {
            if ($(this).offset().top < ($(window).scrollTop() + 500)) { //pixels start
                // Get ammount of pixels the image is above the top of the window
                var difference = $(window).scrollTop() - $(this).offset().top + 500;
                // Top value of image is set to half the amount scrolled
                // (this gives the illusion of the image scrolling slower than the rest of the page)
                var half = 0 - (difference / 2.5) + 'px';

                $(this).find('img').css('top', half);
            } else {
                $(this).find('img').css('top', '0');// if image is below the top of the window set top to 0
            }
        });

        /**
         * fix navigation on top
         */
        //console.log('scroll =' + $('nav').scrollTop());
        //console.log('header =' + $('header').height());

        if ($(this).scrollTop() > ($('header').height() + 0)) {
            $('nav').addClass('nav__fixed');
            $('body').css('margin-top', $('nav').height() + 'px');
        }
        else {
            $('nav').removeClass('nav__fixed');
            $('body').css('margin-top', 0).removeAttr('margin-top');
            ;
        }
    });
}

/**
 * Close popup caments window
 */

// var close = $('.close-button');
//
// close.click( function () {
// 	$('.reveal-overlay').each(function () {
// 		$('.reveal-overlay').css('display', 'none');
// 	})
// });

/**
 * Scroll to top after 300px scroll
 * fade button class .arrow-up
 *
 * @type {*|jQuery|HTMLElement}
 */
/**
 * show/hide
 */
var $toTop = $('.arrow-up-ico, .arrow-up, .call-back__fixed');

$(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $toTop.fadeIn();
    } else {
        $toTop.fadeOut();
    }
});

/**
 * Scroll to top
 * @type {*|jQuery|HTMLElement}
 */
var $page = $('html, body');
$('a[href*="#"]').click(function () {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});



//ScrollMagic
$(document).ready(function () {

	// Init ScrollMagic
	var controller = new ScrollMagic.Controller();

	if ($(document.body).width() > 768) {
		// Animations
		$('.animate').each(function () {

			//console.log(this);

			//animate up
			//animate right
			//animate down
			//animate left

			var fadeScene = new ScrollMagic.Scene({
				triggerElement: this,
				triggerHook: 0.8
			})
				.setClassToggle(this, 'fade-in')
				.reverse(false)
				//.addIndicators()
				.addTo(controller);
		});
	}


});