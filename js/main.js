$(document).ready(function(){
    // swiper
    var swiper = new Swiper(".mySwiper", {
        autoplay: true,
        clickable: true,
        effect: "fade",
        speed: 1000,
        loop: true,
        navigation: {
          nextEl: ".btn-next",
          prevEl: ".btn-prev",
        },
      });
      var swiper = new Swiper(".q_swiper", {
        autoplay: true,
        clickable: true,
        loop: true,
        navigation: {
          nextEl: ".q_next",
          prevEl: ".q_prev",
        },
        slidesPerView : 6,
      });
})