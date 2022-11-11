$(document).ready(function() {

    var swiper1 = new Swiper('.main_visual .swiper-container', {
        loop: true,
        navigation: {
            nextEl: '.main_visual .swiper-button-next',
            prevEl: '.main_visual .swiper-button-prev',
        },
        pagination: {
            el: '.main_visual .swiper-pagination',
            type: 'bullets',
        },
        // speed: 1,
        autoplay: {
            delay: 5000,
        },

    });


    var swiper2 = new Swiper("#technology .mySwiper", {
        slidesPerView: 4,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        // pagination: {
        //     el: "#technology .swiper-pagination",
        //     clickable: true,
        // },
        navigation: {
            nextEl: "#technology .swiper-button-next",
            prevEl: "#technology .swiper-button-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 20,
                slidesPerGroup: 1,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 50,
                slidesPerGroup: 1,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 40,
                slidesPerGroup: 1,
            },
            1280: {
                slidesPerView: 3,
                spaceBetween: 50,
                slidesPerGroup: 1,
            },
        },
    });

    
    var swiper3 = new Swiper("#product .mySwiper", {
        slidesPerView: 2,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
            nextEl: "#product .swiper-button-next",
            prevEl: "#product .swiper-button-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 20,
                slidesPerGroup: 1,
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 50,
                slidesPerGroup: 1,
            },
            991: {
                slidesPerView: 1,
                spaceBetween: 40,
                slidesPerGroup: 1,
            },
            1280: {
                slidesPerView: 2,
                spaceBetween: 50,
                slidesPerGroup: 1,
            },
        },
    });

    screenWidth = $(window).width();
    screenHeight = $(window).height();
    $(document).scroll(function(){
        var scrollTop = $(window).scrollTop();

        if(scrollTop > screenHeight-screenHeight/2){
            $('.quicktop').fadeIn();
        } else {
            $('.quicktop').fadeOut();
        }

        kframeFunc();


    });


});