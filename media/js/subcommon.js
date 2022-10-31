$(document).ready(function() {
    var screenSize, screenHeight, visHeight;
    var current=false;
  
    function screen_size(){
        screenSize = $(window).width(); //스크린의 너비
        screenHeight = $(window).height();  //스크린의 높이
        visHeight = $('.videoBox').height();
  
        $("#content").css('margin-top',screenHeight);
        
    }
  
    screen_size();  //최초 실행시 호출
    
   $(window).resize(function(){    //웹브라우저 크기 조절시 반응하는 이벤트 메소드()
        screen_size();
    }); 
    
    
    
    
    
  });