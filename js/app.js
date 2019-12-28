$(document).ready(function () {

  AOS.init();
  $('.testimonials-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-right'></i>/button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right'></i></button>",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.pz-product-slider').slick({
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    speed: 500,
    arrows: true,
    // centerPadding: '60px',
    // prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-right'></i>/button>",
    // nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right'></i></button>",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  });


  $('.rating-option').barrating({
    theme: 'fontawesome-stars',
    readonly: true,
  });

  $('.pz-burger i,.screen-overlay').click(function () {
    $('.pz-main-navigation').toggleClass('pz-show-main-nav');
    $('.site-brand-logo-sticky').toggleClass('mobile-logo-show ');
    $('.pz-burger').toggleClass('burger-nav-show');
    $('.screen-overlay').toggleClass('show');
    $('body').addClass('nav-open');
  });

  $(window).scroll(function () {
    var mainHeader = $('.main-header').height();
    if ($(this).scrollTop() >= mainHeader) {
      $('.pz-main-navigation').addClass('pz-sticky-nav ');
      $('body').addClass('pz-sticky-activated');
    }
    else {
      $('.pz-main-navigation').removeClass('pz-sticky-nav ');
      $('body').removeClass('pz-sticky-activated');
    }
  });

  $(document).on("scroll", onScroll);

  // dropdown
  // $(".dropdown-toggle").dropdown();

  //smoothscroll
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $(document).off("scroll");

    $('a').each(function () {
      $(this).removeClass('active');
    })
    $(this).addClass('active');

    var target = this.hash,
      menu = target;
    $target = $(target);
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 500, 'swing', function () {
      window.location.hash = target;
      $(document).on("scroll", onScroll);
    });
  });


});

function onScroll(event) {
  var scrollPos = $(document).scrollTop();
  $('#menu-center a').each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
      $('#menu-center ul li a').removeClass("active");
      currLink.addClass("active");
    }
    else {
      currLink.removeClass("active");
    }
  });
}


$('.panel-heading .clickable').addClass("panel-collapsed");
$('.panel-heading .clickable').parents(".panel").find('.panel-body').slideUp();
$(document).on('click', '.panel-heading .clickable', function (e) {
  var $this = $(this);
  if ($this.hasClass('panel-collapsed')) {
    $this.parents('.panel').find('.panel-body').slideDown();
    $this.removeClass('panel-collapsed ');
    $this.find(' .panel-title').addClass('.text-danger');
    $this.find('i').removeClass('fa fa-plus').addClass('fa fa-minus');

  } else {
    $this.parents('.panel').find('.panel-body').slideUp();
    $this.addClass('panel-collapsed');
    $this.find('i').removeClass('fa fa-minus').addClass('fa fa-plus');

  }
})