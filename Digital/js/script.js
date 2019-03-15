$(window).on('load', function () {
    $('body').addClass('load-ready');
});

$(document).ready(function () {
    // Hide Header on on scroll down
    var $prevScrollpos = $(window).scrollTop();
    var $headerHeight = $('header').outerHeight();
    
    $(window).scroll(function () {  
        var $currentScrollPos = $(window).scrollTop();
        
        if ($prevScrollpos > $currentScrollPos) {
            $('header').addClass('sticky').css('top', 0);
        } else {
            $('header').css('top', -$headerHeight);
        }
        $prevScrollpos = $currentScrollPos;

        if ($currentScrollPos === 0) {
            $('header').removeClass('sticky');
        }
    });

    // Click toggle button for mobile nav
    $('.open-nav').on('click', function () {
        $(this).toggleClass('open');
        $('.main-nav').toggleClass('visible');
    });

    // Progress Bar
    $('.progress .progress-bar').css("width",
        function () {
            return $(this).attr("aria-valuenow") + "%";
        }
    );
    
    // Move letter 'A' on mouse MouseMove
    if ($(".about-us h1").length) {
        backgroundMouseMove(".about-us h1", 30);
    }

    function backgroundMouseMove(item, moveDistance, marginPosition) {
        window.addEventListener("mousemove", function (e) {
            var bg = document.querySelector(item);
            var windowWidth = window.innerWidth / moveDistance;
            var windowHeight = window.innerHeight / moveDistance;
            var mouseX = (e.clientX / windowWidth) - (moveDistance / 2);
            var mouseY = (e.clientY / windowHeight) - (moveDistance / 2);
            var screenWidth = window.innerWidth;

            if (screenWidth > 991) {
                bg.style.transition = 'none';
                if (marginPosition == "bottom") {
                    bg.style.margin = '0 0 ' + -mouseY + 'px ' + mouseX + 'px';
                } else {
                    bg.style.margin = mouseY + 'px 0 0 ' + mouseX + 'px';
                }
            }
        }, false);

        window.addEventListener("mouseout", function () {
            var bg = document.querySelector(item);
            bg.style.transition = 'margin .3s';
            bg.style.margin = '0px';
        }, false);
    }

    // Back To Top
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 500) {
                $('.back-top').fadeIn();
            } else {
                $('.back-top').fadeOut();

            }
        });
        // scroll body to 0px on click
        $('.back-top').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });
});
document.addEventListener("touchstart", function(){}, true);