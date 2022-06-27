// 멀티미디어 요소 로딩 전 실행
$(document).ready(function(){
    // 팝업닫기
    let pop = $('.banner');
    let pop_close = $('.banner-close');
    pop_close.click(function (event) {
        // a 태그의 href 로 이동하는 기능 막기
        event.preventDefault();

        pop.hide();
    });
});
// 멀티미디어 요소 로딩 완료 후 실행
window.onload = function () {
    // 상단 배너 슬라이드
    new Swiper('.sw-banner', {
        loop: true,
        // fade 효과(swiper demo 확인)
        effect: "fade",
        // pagination(swiper demo 확인, click 가능 )
        pagination: {
            el: '.sw-banner-pg',
            clickable: true
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        // touchMove 제거
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