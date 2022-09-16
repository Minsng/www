
$(document).ready(function () {
    
    //첫번째 내용글 애니메이션 처리
    var smh= $('.main').height();  //메인 비주얼의 높이
    var h1= $('#content section:eq(1)').offset().top-600 ;
    var h2= $('#content section:eq(2)').offset().top-600 ;
    var h3= $('#content section:eq(3)').offset().top-600 ;
    var h4= $('#content section:eq(4)').offset().top-600 ;

    var cnt=-1;
    
    // console.log(smh);
    // console.log(h1);
    // console.log(h2);
    // console.log(h3);
    // console.log(h4);
     //스크롤의 좌표가 변하면.. 스크롤 이벤트
    $(window).on('scroll',function(){
        var scroll = $(window).scrollTop();
        //스크롤top의 좌표를 담는다
       
        $('.text').text(scroll);
        //스크롤 좌표의 값을 찍는다.
        

        //스크롤의 거리의 범위를 처리
        if(scroll>=smh-500 && scroll<h1){
            cnt = 0;
        }else if(scroll>=h1 && scroll<h2){
            cnt = 1;
        }else if(scroll>=h2 && scroll<h3){
            cnt = 2;
        }else if(scroll>=h3 && scroll<h4){
            cnt = 3;
        }else if(scroll>=h4){
            cnt = 4;
        }        
        
        // $('#content div').removeClass('boxMove');
        $('#content section:eq('+cnt+')').addClass('boxMove');
        
        
    });

    $('.elec').mouseenter(function(){
        $(this).css('z-index',20);
        $('.fine').css('z-index',10);
    });
    $('.fine').mouseenter(function(){
        $(this).css('z-index',20);
        $('.elec').css('z-index0',10);
    });

});