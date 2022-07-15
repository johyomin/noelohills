$(document).ready(function () {
  // 안내창 기능
  // 추가기능 : 스크롤바 없애기
  $('html').css('overflow', 'hidden');

  let modalWrap = $('.modal-wrap');
  let modalClose = $('.modal-close');
  modalClose.click(function () {
    modalWrap.stop().fadeOut(100);
    // 추가기능 : 스크롤바 살리기
    $('html').css('overflow', 'auto');
  });

  let modalMain = $('.modal-main');
  // 내용 배경 클릭
  modalMain.click(function (event) {
    // 클릭 정보 전달 막기
    event.stopPropagation();
  });
  // 전체 배경 클릭
  modalWrap.click(function () {
    modalWrap.stop().fadeOut(100);
    // 추가기능 : 스크롤바 살리기
    $('html').css('overflow', 'auto');
  });

});

$(document).ready(function () {
  // 모바일 메뉴
  let mb_div = $('.mb-div');

  // 모바일 보기 버튼 기능
  let mb_bt = $('.mb-bt');
  mb_bt.click(function () {
    mb_div.show();
  });

  // 모바일 닫기 버튼 기능
  let mb_close = $('.mb-close');
  mb_close.click(function () {
    mb_div.hide();
  });

  mb_div.click(function () {
    mb_div.hide();
  });

  $('.mb-bg').click(function (event) {
    event.stopPropagation();
  });

  // 모바일 메뉴 기능
  let mb_menu_li = $(' .mb-menu > li ');
  $.each(mb_menu_li, function (index, item) {
    let temp = $(this).find('.mb-mainmenu');
    temp.click(function () {
      let result = temp.hasClass('mb-mainmenu-open');

      if (result == true) {
        temp.removeClass('mb-mainmenu-open');
        mb_menu_li.find('.mb-submenu').hide();

      } else {
        mb_menu_li.find('.mb-mainmenu').removeClass('mb-mainmenu-open');
        mb_menu_li.find('.mb-submenu').hide();

        temp.addClass('mb-mainmenu-open');
        mb_menu_li.eq(index).find('.mb-submenu').show();

      }

    });

  });

  $(window).resize(function () {
    let temp = $(window).width();
    if (temp >= 880) {
      mb_div.hide();
      $('.mb-mainmenu').removeClass('mb-mainmenu-open');
      $('.mb-submenu').hide();
    }
  });


});


window.onload = function () {
  let header = $('.header');
  let wrap = $('.wrap');
  let fixY = $('.banner').height();

  $(window).scroll(function () {
    let temp = $(window).scrollTop();
    if (temp > fixY) {
      header.addClass('header-fix');
      wrap.addClass('wrap-fix');
    } else {
      header.removeClass('header-fix');
      wrap.removeClass('wrap-fix');
    }
  });


  // 상단 배너 닫기 기능
  let banner_close = $('.banner-close');
  banner_close.click(function () {
    fixY = 0;
    $('.banner').slideUp(300);
  });

  // 상단 배너 슬라이드
  new Swiper('.sw-banner', {
    loop: true,
    effect: "fade",
    pagination: {
      el: '.sw-banner-pg',
      clickable: true
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    allowTouchMove: false,
  });

  // visual 슬라이드
  new Swiper('.sw-visual', {
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.sw-visual-pg',
      clickable: true
    }
  });
};