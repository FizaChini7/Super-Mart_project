$(function () {
  //Mobile menu js
  $('.mobile_menu li').on('click', function () {
    $('.mobile_menu li > ul').slideToggle(300);
  });
  $('.mobile_menu li').on('click', function () {
    $('.mobile_menu li > mobile_dropdown_home').slideToggle(300);
  });
  $('.mobile_menu li').on('click', function () {
    $('.mobile_menu li > mobile_dropdown_shop').slideToggle(300);
  });
  $('.mobile_menu li').on('click', function () {
    $('.mobile_menu li > mobile_dropdown_page').slideToggle(300);
  });
  $('.mobile_menu li').on('click', function () {
    $('.mobile_menu li > mobile_dropdown_blog').slideToggle(300);
  });

  /*********************************
      /*  Mobile Menu Expand
      *********************************/
  $(".mobile_menu .nav__link").on("click", function (event) {
    event.preventDefault();
    $(this).parent(".has__dropdown").find(".sub__menu").slideToggle();
  });

  $(".mobile_menu .sub__menu .nav__link").on("click", function (event) {
    event.preventDefault();
    $(this).parent(".has__dropdown").find(".sub__sub-menu").slideToggle();
  });

  // header js
  var menutop = $('.header_fix').offset().top;
  $(window).on('scroll', function () {
    var scrollToTop = $(window).scrollTop();
    if (scrollToTop > menutop) {
      $('.header_fix').addClass('menufix');
    }
    else {
      $('.header_fix').removeClass('menufix');
    }
    if (scrollToTop > 500) {
      $('.backtop').fadeIn(500);
    } else {
      $('.backtop').fadeOut(500);
    }
  });

  //backtop js
  $('.backtop').on('click', function () {
    $('html , body').animate({
      scrollTop: 0
    }, 500);
  })


  //swiper js
  var swiper = new Swiper(".hero_slider", {
    pagination: {
      el: ".slider_number",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper_next",
      prevEl: ".swiper_prev",
    },
  });

  // arrival js

  var swiper = new Swiper(".projuct_slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
      clickable: true,
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },

      1024: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
    },
  });

  // catagory slider
  var swiper = new Swiper(".catagory_slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      576: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 8,
        spaceBetween: 10,
      },
    },
  });

  // on_sale_slider
  var swiper = new Swiper(".on_sale_slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
      clickable: true,
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },

      1024: {
        slidesPerView: 5,
        spaceBetween: 0,
      },
    },
  });

  // feather_items js
  var swiper = new Swiper(".feather_items", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
      clickable: true,
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
    },
  });

  ///////////////// about page js ///////////////////////////
  //about team js

  var swiper = new Swiper(".about_team_img", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 50,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 80,
      },
    },
  });

  // about client slider
  /*$('.client_content_slider').slick({
    vartical:true,
    Verticalswipemode :true,
    centerMode: true,
    centerPadding: '0',
    asNavFor : '.client_logo_slider',
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
  $('.client_logo_slider').slick({
    slidesToShow : 1,
    arrows :false,
    asNavFor : '.client_content_slider',
  });*/


  //blog_list_slider js
  var swiper = new Swiper(".blog_list_slider", {
    navigation: {
      nextEl: ".blog_slider_next",
      prevEl: ".blog_slider_prev",
    },
  });
  //Sign Up
  /*$('.active2 i').on('click', function () {
    $('.search_main').addClass('search_main_show');
  });
  $('.close_icon').on('click', function () {
    $('.search_main').removeClass('search_main_show');
  });*/

});