$(document).ready(function(){

    $('.sub_menu span a').toggle(function(e){
        e.preventDefault();
        
        $(this).parent().next('ul').stop().slideDown('fast');
        $(this).parents('.sub_menu').addClass('on');
        
    }, function(e){
        e.preventDefault();
        
        $(this).parent().next('ul').stop().slideUp('fast');
        $(this).parents('.sub_menu').removeClass('on');
        
    });


    // sub1_3
    var onoff = false;
    $(window).on('scroll',function(){ //스크롤 값의 변화가 생기면
        var scroll = $(window).scrollTop(); //스크롤의 거리
        
        if(scroll>10 && onoff == false){
            $('#content>div').hide();
            $('#content>div:eq(0)').show();
           $('#content>div:eq(1)').show();
           onoff = true;
        }
    });

    $('.tab_box li:eq(0)').addClass('on');
    $('.history:eq(0)').show();
    
    $('.tab_box a').click(function(e){
        e.preventDefault();
        
        var ind = $(this).index('.tab_box a');
        //console.log(ind);

        $('.history').hide();
        $('.history:eq('+ind+')').fadeIn();

        $('.tab_box li').removeClass('on');
        $('.tab_box li:eq('+ind+')').addClass('on');


    });

});