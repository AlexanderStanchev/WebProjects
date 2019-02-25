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