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
    // var onoff = false;
    // $(window).on('scroll',function(){ //스크롤 값의 변화가 생기면
    //     var scroll = $(window).scrollTop(); //스크롤의 거리
        
    //     if(scroll>10 && onoff == false){
    //         $('.map_cont').hide();
    //         $('map_cont:eq(0)').show();
    //        onoff = true;
    //     }
    // });

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

    // sub1_4

    $('.tabbox li:eq(0)').addClass('on');
    $('#content>div:eq(0)').show();
    
    $('.tabbox a').click(function(e){
        e.preventDefault();
        
        var ind = $(this).index('.tabbox a');
        //console.log(ind);

        $('.sub1_4content').hide();
        $('.sub1_4content:eq('+ind+')').fadeIn();

        $('.tabbox li').removeClass('on');
        $('.tabbox li:eq('+ind+')').addClass('on');


    });


    // sub3_2
    var onoff = false;
    $(window).on('scroll',function(){ //스크롤 값의 변화가 생기면
        var scroll = $(window).scrollTop(); //스크롤의 거리
        // console.log(scroll);
        // console.log(onoff);
        
        if(scroll>10 && onoff == false){
            $('.fade>div').hide();
            $('.fade>div:eq(0)').show();
           onoff = true;
        }
    });

    $('.tabbox li:eq(0)').addClass('on');
    $('.fade>div:eq(0)').show();
    
    $('.tabbox a').click(function(e){
        e.preventDefault();
        
        var ind = $(this).index('.tabbox a');
        // console.log(ind);

        $('.fade>div').hide();
        $('.fade>div:eq('+ind+')').fadeIn();

        $('.tabbox li').removeClass('on');
        $('.tabbox li:eq('+ind+')').addClass('on');


    });

});