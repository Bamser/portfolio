const swiper = new Swiper('.swiper', {
    loop: true,
  slidesPerView: 3,
  slidesPerGroup: 3,
  speed: 1500,
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    780: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    }
   
  },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  
  });
 