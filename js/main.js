$(function () {

   // $('.page__slider-box').slick({
   //    prevArrow: '<button class="slick-btn slick-prev"><img src="images/icon/arrow-prev.png" alt="prev"></button>',
   //    nextArrow: '<button class="slick-btn slick-next"><img src="images/icon/arrow-next.png" alt="next"></button>',
   //    slidesToShow: 3,
   //    slidesToScroll: 1,
   //    responsive: [
   //       {
   //          breakpoint: 560,
   //          settings: {
   //             slidesToShow: 2,
   //          }
   //       },
         
   //    ]
   // });

   new Swiper('.page__slider-box', {
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      },
      slidesPerView: 2,
      breakpoints: {
         992: {
            slidesPerView: 3,
         }
      },
   });

   $('.menu__btn').on('click', function () {
      $('.menu__btn').toggleClass('menu__btn--active');
      $('.menu__list').toggleClass('menu__list--active');
   });

   $('.menu__list-link').on('click', function () {
      $('.menu__btn').removeClass('menu__btn--active');
      $('.menu__list').removeClass('menu__list--active');
   });


});