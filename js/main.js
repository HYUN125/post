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

      // tab
      $('ul.tabs li').click(function(){
        let tab_id = $(this).attr('data-tab');
    
        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');
    
        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
      })

      // allmenu-popup
      const allBtn = $('header .all_menu')
      const allWrap = $('header .all_menu_popup')
      allBtn.click(function(){
        // allWrap.slideToggle(1000);
        allWrap.slideToggle(600);
      })
})