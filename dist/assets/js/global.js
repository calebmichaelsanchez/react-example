'use strict';

function fitHeight(el) {
    var isDesktop = window.isDesktop;
    var _el = (el.constructor === String) ? el : '.full-height';
    var heightFunc = function(){
        if(window.innerHeight >= 1200) {
            return 1200;
        }
        else {
            return window.innerHeight;
        }
    };
    return jQuery(_el).height(heightFunc);
    
}

function parallax(el, rate, direction, prop) {
        var offset = window.scrollY,
            threshold = jQuery(el)[0].offsetTop,
            speed = rate,
            dir = function() {
                if (direction === 'up' || direction === null) {
                    return '-';
                } else {
                    return '+';
                }
            },
            math = (offset * speed),
            pixels = dir() + math + 'px';

        if (prop==='translate') {
            jQuery(el).css({
                '-webkit-transform': 'translate(0, ' + pixels + ')',
                '-moz-transform': 'translate(0, ' + pixels + ')',
                'transform': 'translate(0, ' + pixels + ')'
            });
        }
        else {
            jQuery(el).css('margin-top', pixels);
        }
        
}
function bgParallax(el, rate, direction) {
        var $el = jQuery(el),
            offset = window.scrollY,
            $threshold = $el[0].offsetTop,
            $height = $el.outerHeight(),
            speed = rate * 0.125,
            resetAmt = (($threshold-$height)*speed),

            math = function(){
                if (direction === 'up' || direction === null) {
                    return 50 - (offset * speed);
                } else {
                    return 50 + (offset * speed);
                }
            };
            if($el[0]) {
                $el.css('background-position-y', math() + '%');
            }

    
}

function resizeEvents() {
    fitHeight('.full-height');
    pollMediaQuery();
}


function headerTransition() {
    var $el = jQuery('header'),
        $offset = window.scrollY;

    if ($offset >= 40) {
        $el.addClass('semi');
    } else {
        $el.removeClass('semi');
    }

    var $topbar = jQuery('.top-bar'),
        $topbarEls = jQuery('.top-bar, .top-bar-section li > a, #contactLink'),
        $height = jQuery('.top-bar').outerHeight();

    var scrollAdj = function() {
        if($offset < 50) {
            return $offset;
        }
        else {
            return 50;
        }
    };
    if(window.isDesktop === true) {
        $topbarEls.css({
            'height': 100 - scrollAdj() + 'px',
            'line-height': 100 - scrollAdj() + 'px'
        });
        $('#brand').css({
            'font-size': 100 - (scrollAdj() * 0.6) + 'px',
            'line-height': 100 - scrollAdj() + 'px'
        });
    }
        

    if($offset > 1) {
        $topbar.parent().addClass('scrolled');
    }
    else if($offset < 1) {
        $topbar.parent().removeClass('scrolled');
    }
    if($offset >= 50) {
        $topbar.parent().addClass('semi');
        if(window.isDesktop === true) {
            $topbarEls.css({
                'height': '50px',
                'line-height': '50px'
            });
            $('#brand').css({
                'font-size': '70px',
                'line-height': '55px'
            });
        }
        
    }
    else if ($offset < 50) {
        $topbar.parent().removeClass('semi');
    }
}

function topTabs(el) {
    if(el) {
        var $el = $(el);
        var $link = $el.find('.tab-title a');
        var $tab = $el.find('.content');
    
        $link.on('click', function(e){

            var $target = $(e.currentTarget);
            var $href = $target.data('href');
            var $active = $($href);

            $target.parent('li').addClass('active').siblings().removeClass('active');

            $tab.fadeOut(300).removeClass('active');

            setTimeout(function(){
                $active.fadeIn().addClass('active');
            }, 300);
            
        });
    }
    else {
        console.log('topTabs element missing');
    }
}

function touchHeader() {
    var $el = jQuery('header'),
        $offset = window.scrollY,
        $topbar = jQuery('.top-bar');

    
    $el.addClass('semi');

    if ($offset <= 10) {
        $el.removeClass('semi');
    }
    
    $topbar.parent().addClass('scrolled');

    if($offset <= 10) {
        $topbar.parent().removeClass('scrolled');
    }
}

function scrollDarken(el) {
    var $el = jQuery(el),
        offset = window.scrollY,
        speed = jQuery(el).outerHeight(),
        math = 0 + (offset * 1.5) / speed;
    jQuery(el).css('opacity', math);
}

function scrollFader(element, threshold) {
    var offset = window.scrollY,
        $el = $(element),
        $elOffset = $(element).offset(),
        fromTop = $elOffset.top,
        thresh = (fromTop*threshold);

    if(offset > thresh) {
        $el.removeClass('fadeIn').addClass('fadeOut');
    }
    else if (offset < thresh) {
        $el.removeClass('fadeOut').addClass('fadeIn');
    }
}

function scrolledTo(el, callback) {
    var $el = jQuery(el),
        $offset = $el[0].offsetTop,
        $height = $el.outerHeight();

    if (window.scrollY >= ($offset - ($height + 100))) {
        console.log('you are here');
        //callback(el, 0.3, 'down');
    }
}

function pollMediaQuery() {
    window.isDesktop;

    if(jQuery('#pollMQ').css('display') === 'none') {
        window.isDesktop = true;
    }
    else {
        window.isDesktop = false;
    }
}


//DOC READY
jQuery(document).ready(function() {

    pollMediaQuery();
    fitHeight('.full-height');
    headerTransition();
    if(!window.isDesktop) {
        touchHeader();
    }
    jQuery('.scrollto').on('click', function(e) {
        e.preventDefault();
        var target = jQuery(e.currentTarget),
            href = target.attr('href')

            $.scrollTo(href, 1200);
    });

    // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
    // http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
     
    // requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
     
    // MIT license
    (function() {
        var lastTime = 0;
        var vendors = ['ms', 'moz', 'webkit', 'o'];
        for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
            window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
            window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] 
                                       || window[vendors[x]+'CancelRequestAnimationFrame'];
        }
     
        if (!window.requestAnimationFrame)
            window.requestAnimationFrame = function(callback, element) {
                var currTime = new Date().getTime();
                var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
                  timeToCall);
                lastTime = currTime + timeToCall;
                return id;
            };
     
        if (!window.cancelAnimationFrame)
            window.cancelAnimationFrame = function(id) {
                clearTimeout(id);
            };
    }());

    $(window).on('resize', function() {
       window.requestAnimationFrame(resizeEvents);
    });


    $(window).on('scroll', function() {
       window.requestAnimationFrame(headerTransition);
    });

    jQuery('body').on('touchmove', function(){
        touchHeader();
    })


    jQuery('.navbar').find('.collapse').hide().addClass('in');
    jQuery('.navbar').find('.navbar-toggle').on('click', function(e) {
        e.preventDefault();
        var thisId = jQuery(this).data('target');

        if (jQuery(thisId).hasClass('in')) {
            jQuery(thisId).removeClass('in').slideDown();
        } else {
            jQuery(thisId).addClass('in').slideUp();
        }
    });
    
});



