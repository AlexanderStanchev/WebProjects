$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
    margin: 60,
    loop: true,
    items: 1,
    stagePadding: 60,
    lazyLoad: true,
    responsive:{
          0: {
              items: 1,
              stagePadding: 60
          },
          600: {
              items: 1,
              stagePadding: 100
          },
          1000: {
              items: 1,
              stagePadding: 200
          },
          1200: {
              items: 1,
              stagePadding: 300
          },
          1400: {
              items: 1,
              stagePadding: 400
          },
          1600: {
              items: 1,
              stagePadding: 450
          },
          1800: {
              items: 1,
              stagePadding: 535
          },
          2560: {
              item: 1,
              stagePadding: 720
          }
      },
      autoplay: true,
      autoplayTimeout: 10000,
      autoplayHoverPause: true
    });

    // check scroll position
    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        if (scroll === 0) {
            $('body').removeClass('scroll-not-top');
        } else {
            $('body').addClass('scroll-not-top');
        }
    });

    // click toggle button for mobile nav
    $('.second-button').on('click', function () {
        $('.open-nav').toggleClass('open');
        $('#main-nav').toggleClass('visible');
    });

    // Search
    $('.search').on('click', function (e) {
        e.preventDefault();
        $('.search-box').addClass('open');

        setTimeout(function () {
            $('.search-box > form > input[type="search"]').focus();
        }, 500);
    });

    $('.search-box, .close').on('click keyup', function (e) {
        if (e.target == this || e.target.className == 'close' || e.keyCode == 27) {
            $(this).removeClass('open');
        }
    });

    $(document).ready(paddingMain);
    $(window).resize(paddingMain);

    function paddingMain() {
        var headerHeight = $('header').outerHeight();
        var mainEl = $('main');
        mainEl.css('padding-top', headerHeight)
    }

    // function resizeHero() {
    //     vpw = $(window).width();
    //     vph = $(window).height();
    //     $('.hero').css({ 'height': vph + 'px'});
    // }

    if ($(".hero__container h1").length) {
        backgroundMouseMove(".hero__container h1", 25);
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



    // var $window = $(window),
    //     win_height_padded = $window.height() * 1.1;

    // $window.on('scroll', animate);

    // function animate() {
    //     if ($window.width() > 1199) {
    //         var scrolled = $window.scrollTop();

    //         $('.animate:not(.animated)').each(function () {
    //             var $this = $(this),
    //                 offsetTop = $this.offset().top;

    //             if (scrolled + win_height_padded > offsetTop) {
    //                 $this.removeClass('animate').addClass('animated ' + $this.data('animation'));
    //             }
    //         });
    //     }
    // }
});