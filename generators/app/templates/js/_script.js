// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

/**
 * @description JS file for SeaMonster Studios Theme
 * @author SeaMonster Studios
 *
 */

windowState = 'large';

var iPhoneFlag = false;
if ( navigator.userAgent.match(/iPhone|iPod/) ){
    iPhoneFlag = true;
}

$(document).ready(function(){

    // Responsive container added to iframes
    $('.entry iframe').wrap('<div class="embed-container" />');

    // This sets smooth scrolling for anchor links on the page.
    $('a[href*="#"]:not([href="#"])' && 'a[href*="#"]:not([href*="#tab"])').click(function() {
        var pageHeight = {
            height : $(document.body).height()
        };

        var height = pageHeight.height;
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                if(height < 4000) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                } else {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 4000);
                }
            return false;
            }
        }
    });
    /**
     * @description Turning off pointer events for maps and scrollable iframes.
     */

    //  add the following CSS structure to enable this
    //  .embed-container {
    //      .scrolloff {
    //          pointer-events: none;
    //      }
    //  }

    //  Enable the pointer events only on click;
    $('#id-goes-here').addClass('scrolloff'); // set the pointer events to none on doc ready
    $('.embed-container').on('click', function () {
        $('#id-goes-here').removeClass('scrolloff'); // set the pointer events true on click
    });

    // you want to disable pointer events when the mouse leave the canvas area;
    $("#id-goes-here").mouseleave(function () {
        $('#id-goes-here').addClass('scrolloff'); // set the pointer events to none when mouse leaves the map area
    });

    /**
     * @description Call different functions based on screen width
     */
    //variable to hold the current window state - small, medium, or large
    // check initial width of the screen
    var sw = document.body.clientWidth;
    if (sw < 501) {
        windowState = 'small';
        smPage();
    } else if (sw >= 501 && sw <= 900) {
        windowState = 'medium';
        medPage();
    } else {
        windowState = 'large';
        lgPage();
    }

});// end document.ready

//take care of window resizing
$(window).resize(function(){
    var sw = document.body.clientWidth;
    if(sw < 501 && windowState != 'small') {
        smPage();
    }
    if(sw >= 501 && sw <= 900 && windowState != 'medium') {
        medPage();
    }
    if(sw >= 901 && windowState != 'large') {
        lgPage();
    }
});

/**
 *@description Calls smPage() on screen width less than 31.3135em
 *
 */
function smPage() {
    //console.log('small page');
    windowState = 'small';
}

/**
 * @description Calls medPage() on screen width greater than 31.25em and less than 50em
 *
 */
function medPage() {
    //console.log('medium page');
    windowState = 'medium';
}
 /**
  * @description Calls lgPage() on screen width greater than 50.0625em.
  *
  */
function lgPage() {
    //console.log('large page');
    windowState = 'large';
}

