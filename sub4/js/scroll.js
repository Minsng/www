
$(document).ready(function () {
    
    //첫번째 내용글 애니메이션 처리
    var smh= $('.main').height();  //메인 비주얼의 높이
    var h1= $('.contentArea ul li:eq(0)').offset().top-200 ;
    var h2= $('.contentArea ul li:eq(1)').offset().top-300 ;
    var h3= $('.contentArea ul li:eq(2)').offset().top-300 ;
    var h4= $('.contentArea ul li:eq(3)').offset().top-300 ;

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
       
        //스크롤의 거리의 범위를 처리
        if(scroll>=smh && scroll<h1){
            cnt = 0;
        }else if(scroll>=h1 && scroll<h2){
            cnt = 1;
        }else if(scroll>=h2 && scroll<h3){
            cnt = 2;
        }else if(scroll>=h3){
            cnt = 3;
        }
        
        // $('#content div').removeClass('boxMove');
        $('.contentArea ul li:eq('+cnt+')').addClass('event');
        
        
    });
});