$(document).ready(function () {
        
    $('.tab li:eq(0)').find('a').addClass('spy');
    //첫번째 서브메뉴 활성화
    
    // $('#content div:eq(0)').addClass('boxMove');
    //첫번째 내용글 애니메이션 처리
    var smh= $('.main').height();  //메인 비주얼의 높이
    var h1= $('.contentArea>div:eq(2)').offset().top-300 ;
    var h2= $('.contentArea>div:eq(3)').offset().top-300 ;
    var h3= $('.contentArea>div:eq(4)').offset().top-300 ;

    var cnt=0;
    
    // console.log(smh);
    // console.log(h1);
    // console.log(h2);
    // console.log(h3);
     //스크롤의 좌표가 변하면.. 스크롤 이벤트
    $(window).on('scroll',function(){
        var scroll = $(window).scrollTop();
        //스크롤top의 좌표를 담는다
       
        $('.text').text(scroll);
        //스크롤 좌표의 값을 찍는다.
        
        //sticky menu 처리
        if(scroll>smh+550){ 
            $('.tabbox').addClass('tabOn');
            //스크롤의 거리가 350px 이상이면 서브메뉴 고정
            $('header').hide();
        }else{
            $('.tabbox').removeClass('tabOn');
            //스크롤의 거리가 350px 보다 작으면 서브메뉴 원래 상태로
            $('header').show();
        }
        
        
        
        $('.tab li').find('a').removeClass('spy');
        //모든 서브메뉴 비활성화~ 불꺼!!!
        
    
         //스크롤의 거리의 범위를 처리
        if(scroll>=0 && scroll<h1){
            cnt = 0;
        }else if(scroll>=h1 && scroll<h2){
            cnt = 1;
        }else if(scroll>=h2 && scroll<h3){
            cnt = 2;
        }else if(scroll>=h3){
            cnt = 3;
        }        
        
        // $('#content div').removeClass('boxMove');
        $('.tab li:eq('+cnt+')').find('a').addClass('spy');            
        // $('#content div:eq('+cnt+')').addClass('boxMove');
        
        
    });
    // tab click, scroll move
    $('.tab li a').click(function(e){
        e.preventDefault();

        var ind = $(this).index('.tab li a');
        // var value = $('.history_wrap .year:eq(' + ind + ')').offset().top()-100;
        var value = $('.contentArea>div:eq('+(ind+1)+')').offset().top+30;
        
        // value의 위치로 움직여라
        $("html,body").stop().animate({"scrollTop":value},500);
    });


});