
$(function() {

   var smh=$('.visual').height();  //비주얼 이미지의 높이를 리턴한다   900px
   var on_off=false;  //false(안오버)  true(오버)
       $('#headerArea').mouseenter(function(){
          // var scroll = $(window).scrollTop();
           $(this).css('background','#fff');
           $('h1 a').css({'background':'url(./common/images/header_logo240100.png)'});
           $('.dropdownmenu li a').css('color','#333'); 
           $('.top_menu li a').css('color','#333'); 
          
           on_off=true;
       });
   
      $('#headerArea').mouseleave(function(){
           var scroll = $(window).scrollTop();  //스크롤의 거리
        //    console.log(scroll);
           if(scroll<smh-50 ){
               $(this).css('background','none').css('border-bottom','none'); 
               $('h1 a').css({'background':'url(./common/images/header_logo_white.png)'});
               $('.dropdownmenu li a').css('color','#fff');
               $('.top_menu li a').css('color','#fff'); 
           }else{
               $(this).css('background','#fff');
               $('h1 a').css({'background':'url(./common/images/header_logo240100.png)'});
               $('.dropdownmenu li a').css('color','#333');
               $('.top_menu li a').css('color','#333'); 
           }
          on_off=false;    
      });
   
      $(window).on('scroll',function(){//스크롤의 거리가 발생하면
           var scroll = $(window).scrollTop();  //스크롤의 거리를 리턴하는 함수
           console.log(scroll);
           console.log(smh);
        
           if(scroll>smh-500){//스크롤300까지 내리면
                $('#headerArea').css('background','#fff');
                $('h1 a').css({'background':'url(./common/images/header_logo240100.png)'});
                $('.dropdownmenu li a').css('color','#333');
                $('.top_menu li a').css('color','#333'); 
           }else{//스크롤 내리기 전 디폴트(마우스올리지않음)
              if(on_off==false){
                $('#headerArea').css('background','none').css('border-bottom','none'); 
                $('h1 a').css({'background':'url(./common/images/header_logo_white.png)'});
                $('.dropdownmenu li a').css('color','#fff');
                $('.top_menu li a').css('color','#fff');
              }
           };            
        });
   


    //2depth 열기/닫기
    $('ul.dropdownmenu').hover(
        function() { 
            $('ul.dropdownmenu li.menu ul').fadeIn('normal',function(){$(this).stop();}); //모든 서브를 다 열어라
            $('ul.dropdownmenu li.menu ul').css({'height':'450px'}).clearQueue();
            $('#headerArea').animate({height:460},'fast').clearQueue();
        },function() {
            $('ul.dropdownmenu li.menu ul').hide(); //모든 서브를 다 닫아라
            $('#headerArea').animate({height:220}).clearQueue();
    });
    
    //1depth 효과
    $('ul.dropdownmenu li.menu').hover(
        function() { 
            $('.depth1',this).css('color','#0075c1');
        },function() {
            $('.depth1',this).css('color','#333');
    });

    //2depth hover
    $('ul.dropdownmenu li.menu ul li a').hover(
        function(){
            $(this).css('color','#0075c1');            
        },
        function(){
            $(this).css('color','#333');
        }
    );
        

     //tab 처리
     $('ul.dropdownmenu li.menu .depth1').on('focus', function () {        
        $('ul.dropdownmenu li.menu ul').slideDown('normal');
        $('#headerArea').css('background','#fff');
        $('h1 a').css({'background':'url(./common/images/header_logo240100.png)'});
        $('.dropdownmenu li a').css('color','#333');
        $('.top_menu li a').css('color','#333');
        $('#headerArea').animate({height:460},'fast').clearQueue();
     });

    $('ul.dropdownmenu li.m6 li:last').find('a').on('blur', function () {        
        $('ul.dropdownmenu li.menu ul').slideUp('fast');
        $('#headerArea').animate({height:220},'normal').clearQueue();
        $('.dropdownmenu li a').css('color','#fff');
        $('.top_menu li a').css('color','#fff');
    });
});
