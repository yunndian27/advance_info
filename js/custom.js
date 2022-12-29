$(function($) {
  $('.nav a[href*="#"]:not([href="#"])').click(function() {
    $(this).parents('.nav').find('a').removeClass('active');
    $(this).attr('class', 'active');
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, main').animate({
          scrollTop: target.offset().top-100
        }, 1000);
        return false;
      }
    }
  });

  $(".hamb").on('click',function(e){
    $(this).toggleClass('active');
  });

  $('.slick_content').slick({
    infinite: true,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 551,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
})