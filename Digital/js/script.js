$(window).on('load', function () {
    $('body').addClass('load-ready');
});

$(document).ready(function () {
    // Hide Header on on scroll down
    var $didScroll;
        $lastScrollTop = 0;
        $delta = 5;
        $navbarHeight = $('header').outerHeight();
            
    $(window).scroll(function () {
        $didScroll = true;
    });

    setInterval(function () {
        if ($didScroll) {
            hasScrolled();
            $didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var $st = $(this).scrollTop();

        // Make sure they scroll more than delta
        if (Math.abs($lastScrollTop - $st) <= $delta)
            return;

        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if ($st > $lastScrollTop && $st > $navbarHeight) {
            // Scroll Down
            $('header').removeClass('nav-down').addClass('nav-up');
        } else {
            if ($st + $(window).height() < $(document).height()) {
                // Scroll Up
                $('header').removeClass('nav-up').addClass('nav-down');
            }
        }
        $lastScrollTop = $st;
        if ($st < $navbarHeight) {
             $('header').removeClass('nav-up, nav-down')
        }
    }

    // Progress Bar
    $('.progress .progress-bar').css("width",
        function () {
            return $(this).attr("aria-valuenow") + "%";
        }
    );
    
    // Move A letter on mouse MouseMove
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