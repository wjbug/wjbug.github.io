
 /* ==============================================
Page Loader
=============================================== */

$(window).load(function() {

	'use strict';

	$(".loader-item").delay(700).fadeOut();
	$("#pageloader").delay(1200).fadeOut("slow");
});



/* ==============================================
Tabs
=============================================== */

$('#myTab a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

/* ==============================================
Alerts
=============================================== */

$(".alert .close").click(function(){
		$(this).parent().animate({'opacity' : '0'}, 300).slideUp(300);
		return false;
	});

/* ==============================================
Mobile Menu Button
=============================================== */  

$('.mini-nav-button').click(function() {
  event.preventDefault();
    $(".nav-menu").slideToggle("9000");
 });

$('.nav a').click(function () {
    $(".nav-menu").slideToggle("2000")
});

 /* ==============================================
Fit Videos
=============================================== */
$(window).load(function(){
        $(".fit-vids").fitVids();
    });


/* ==============================================
Drop Down Menu Fade Effect
=============================================== */  

$('.nav-toggle').hover(function() {
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown(250);
    }, function() {
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp(250)
    });

/* ==============================================
Slap Text for Typography
=============================================== */	

  // Function to slabtext the H1 headings
    function slabTextHeadlines() {
        $(".slabtext").slabText({
            // Don't slabtext the headers if the viewport is under 380px
            "viewportBreakpoint":380
        });
    };
    
    // Called one second after the onload event for the demo (as I'm hacking the
    // fontface load event a bit here)

    // Please do not do this in a production environment - you should really use
    // google WebFont loader events (or something similar) for better control
    $(window).load(function() {
        // So, to recap... don't actually do this, it's nasty!
        setTimeout(slabTextHeadlines, 50);
    });


     /* ==============================================
Scroll Navigation
=============================================== */	

$(function() {
		$('.scroll').bind('click', function(event) {
			var $anchor = $(this);
			var headerH = $('#navigation').outerHeight();
			$('html, body').stop().animate({
				scrollTop : $($anchor.attr('href')).offset().top - headerH + "px"
			}, 1200, 'easeInOutExpo');

			event.preventDefault();
		});
	});



 /* ==============================================
Active Navigation Calling
=============================================== */


$('body').scrollspy({ 
	target: '.nav-menu',
	offset: 95
})


 /* ==============================================
Tooltips Calling
=============================================== */	

$('[data-toggle="tooltip"]').tooltip();

 /* ==============================================
Count Factors
 =============================================== */ 
  

        jQuery(function() {
                $(".fact-number").appear(function(){
                $('.fact-number').each(function(){
                dataperc = $(this).attr('data-perc'),
                $(this).find('.factor').delay(6000).countTo({
                from: 50,
                to: dataperc,
                speed: 3000,
                refreshInterval: 50,
                
            });  
        });
                    });
});
 
(function($) {
    $.fn.countTo = function(options) {
        // merge the default plugin settings with the custom options
        options = $.extend({}, $.fn.countTo.defaults, options || {});

        // how many times to update the value, and how much to increment the value on each update
        var loops = Math.ceil(options.speed / options.refreshInterval),
            increment = (options.to - options.from) / loops;

        return $(this).each(function() {
            var _this = this,
                loopCount = 0,
                value = options.from,
                interval = setInterval(updateTimer, options.refreshInterval);

            function updateTimer() {
                value += increment;
                loopCount++;
                $(_this).html(value.toFixed(options.decimals));

                if (typeof(options.onUpdate) == 'function') {
                    options.onUpdate.call(_this, value);
                }

                if (loopCount >= loops) {
                    clearInterval(interval);
                    value = options.to;

                    if (typeof(options.onComplete) == 'function') {
                        options.onComplete.call(_this, value);
                    }
                }
            }
        });
    };

    $.fn.countTo.defaults = {
        from: 0,  // the number the element should start at
        to: 100,  // the number the element should end at
        speed: 1000,  // how long it should take to count between the target numbers
        refreshInterval: 100,  // how often the element should be updated
        decimals: 0,  // the number of decimal places to show
        onUpdate: null,  // callback method for every time the element is updated,
        onComplete: null,  // callback method for when the element finishes updating
    };
})(jQuery);