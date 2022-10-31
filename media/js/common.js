$(document).ready(function() {
    var screenSize, screenHeight, visHeight;
    var current = 0;
    $(window).resize(function () {
        var screenSize = $(window).width();
        if (screenSize > 1024) {
            $("#headerArea #gnb").show();
            current = 1;
        }
        if (current == 1 && screenSize <= 1024) {
            $("#headerArea #gnb").hide();
            current = 0;
        }
    });
    var op = false; //네비가 열려있으면(true) , 닫혀있으면(false)
    $('.menu_open').toggle(function () {
        $('#headerArea').addClass('mn_open');
        $('#headerArea #gnb').slideDown();
        $('.menu_open').addClass('mn_open');

    }, function () {
        $('#headerArea #gnb').slideUp();
        $('.menu_open').removeClass('mn_open');
        $('#headerArea').removeClass('mn_open');
    });


    $('.topMove').hide();
    $(window).on('scroll', function () { //스크롤 값의 변화가 생기면
        var scroll = $(window).scrollTop(); //스크롤의 거리

        if (scroll > 500) { //500이상의 거리가 발생되면
            $('.topMove').fadeIn('slow'); //top노출
        } else {
            $('.topMove').fadeOut('fast'); //top미노출
        }
    });
    $('.topMove').click(function (e) { //아이콘 클릭 시 상단으로 스르륵 이동
        e.preventDefault();
        $("html,body").stop().animate({
            "scrollTop": 0
        }, 1000);
    });




    $('.down').click(function(){
        screenHeight = $(window).height();
        $('html,body').animate({'scrollTop':screenHeight}, 1000);
    });
  
    $(document).scroll(function(){
  
      var windowTop = $(window).scrollTop();
      if(windowTop > visHeight-150){
          $('#headerArea').addClass('on');
      } else {
          $('#headerArea').removeClass('on');
      }
  
    });


    
});
