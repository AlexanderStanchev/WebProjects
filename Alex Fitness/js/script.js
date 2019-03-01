$(window).on('load', function () {
    $('body').addClass('load-ready');
});

$(document).ready(function () {
    
    $(document).ready(initialise);
    $(window).resize(initialise);

    function initialise() {
        scrollAnimations();
        appendBtns();
        paddingMain();
        marginCardioBox();
    }
    
    // Animations on scroll
    function scrollAnimations() {
        if ($(window).outerWidth() > 991) {
            var fadeUpElements = ['.offers__link--training', '.feature.up', '.join-us__btn'];
            var fadeDownElements = ['.offers h1', '.posts h1', '.features h1', '.blog h1', '.join-us h1', '.feature.down', '.badge', '.offers__link--gym'];
            var fadeLeftElements = ['.offers__link--cardio', '.join-us p', '.post__figure--first', '.post__figure--third', '.post__info-wrapper--second'];
            var fadeRightElements = ['.offers__link--yoga', '.join-us__form', '.post__info-wrapper--first', '.post__info-wrapper--third', '.post__figure--second'];

            fadeUpElements.forEach(function (el) {
                $(el).waypoint(function () {
                    $(el).addClass('fadeInUp');
                }, {
                    offset: '100%'
                });
            });
            fadeDownElements.forEach(function (el) {
                $(el).waypoint(function () {
                    $(el).addClass('fadeInDown');
                }, {
                    offset: '80%'
                });
            });
            fadeLeftElements.forEach(function (el) {
                $(el).waypoint(function () {
                    $(el).addClass('fadeInLeft');
                }, {
                    offset: '80%'
                });
            });
            fadeRightElements.forEach(function (el) {
                $(el).waypoint(function () {
                    $(el).addClass('fadeInRight');
                }, {
                    offset: '80%'
                });
            });
        } else {
            $('.opacity_0').each(function () {
                $(this).removeClass('opacity_0');
            })
        }
    }

    // Move buttons in mobile nav
    function appendBtns() {
        if ($(window).outerWidth() < 768) {
            if ($('.btn__container').length == 0) {
                $('header .btn')
                    .wrap('<li class="btn__container">')
                    .parent()
                    .appendTo('.main-nav ul');
            }
        } else {
            $('header .btn').appendTo('.btns');
            $('.btn__container').remove();
        }
    }

    // Padding of <main> form <header>
    function paddingMain() {
        var headerHeight = $('header').innerHeight();
        var mainEl = $('main');
        mainEl.css('padding-top', headerHeight)
    }
    
    // Cardio Training Box margin from Gym Box
    function marginCardioBox() {
        var gymCol = $('.col--gym').outerHeight();
        var gymLinkBox = $('.offers__link--gym').outerHeight();
        var diffHeight = gymCol - gymLinkBox;
        var cardioLinkBox = $('.offers__link--cardio');
        $(cardioLinkBox).css('margin-top', -(diffHeight - 30));
    };

    // Owl carousel
    $('.owl-carousel').owlCarousel({
        margin: 60,
        loop: true,
        items: 1,
        stagePadding: 60,
        lazyLoad: true,
        dotsSpeed: 1500,
        dragEndSpeed: 1500,
        navSpeed: 1500,
        autoplaySpeed: 2000,
        autoplay: true,
        autoplayTimeout: 10000,
        responsive: {
            0: {
                items: 1,
                stagePadding: 0
            },
            1000: {
                items: 1,
                stagePadding: 200
            },
            1200: {
                items: 1,
                stagePadding: 250
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
    $('.open-nav').on('click', function () {
        $(this).toggleClass('open');
        $('.main-nav').toggleClass('visible');
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

    // Move Hero Heading on MouseOver
    if ($(".hero__container svg").length) {
        backgroundMouseMove(".hero__container svg ", 25);
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