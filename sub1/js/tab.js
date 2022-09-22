$(document).ready(function(){

    $('.tab ul li:eq(0)').addClass('current');
   

    var onoff = false;
    $(window).on('scroll',function(){ //스크롤 값의 변화가 생기면
        var scroll = $(window).scrollTop(); //스크롤의 거리
        
        if(scroll>10 && onoff == false){
            $('.contentArea>div').hide();
            $('.contentArea>div:eq(0)').show();
           $('.contentArea>div:eq(1)').show();
           onoff = true;
        }
     });



    $('.tab ul a').click(function(e){
        e.preventDefault();
        
        var ind = $(this).index('.tab ul a');

        $('.tab ul li').removeClass('current');
        $('.tab ul li:eq('+ind+')').addClass('current');

        $('.contentArea>div').hide();
        $('.contentArea>div:eq(0)').show();
        $('.contentArea>div:eq('+(ind+1)+')').fadeIn();

    });
    
});