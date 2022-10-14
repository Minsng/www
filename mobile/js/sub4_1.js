$(document).ready(function(){
    
    var IRdetail1 = $('.IRchart1 ul li'); // 전체 li

    $('.IRchart1 ul li h5 a').click(function(e){
        e.preventDefault();

        var answer = $(this).parent().parent(); // 해당 li

        if(answer.is('.on')){ // li에 on이 있으면
            
            answer.removeClass('on'); // on없애고
            answer.children('.cts').stop().slideUp('fast'); // 본인 닫아라

        } else { // li에 on이 없으면

            IRdetail1.removeClass('on'); // 다른 li에 on 없애고
            answer.addClass('on'); // 내 li에만 on을 넣어라
            
            IRdetail1.children('.cts').stop().slideUp('fast');
            answer.children('.cts').stop().slideDown('fast');
        }
    });

    $('.all').toggle(function(e){
        e.preventDefault();

        $(this).text('표 모두 닫기').addClass('on');
        IRdetail1.addClass('on');
        IRdetail1.children().next().stop().slideDown('fast');

    }, function(e){
        e.preventDefault();

        $(this).text('표 모두 열기').removeClass('on');
        IRdetail1.removeClass('on');
        IRdetail1.children().next().stop().slideUp('fast');

    });


    var IRdetail2 = $('.IRchart2 ul li'); // 전체 li

    $('.IRchart2 ul li h5 a').click(function(e){
        e.preventDefault();

        var answer = $(this).parent().parent(); // 해당 li

        if(answer.is('.on')){ // li에 on이 있으면
            
            answer.removeClass('on'); // on없애고
            answer.children('.cts').stop().slideUp('fast'); // 본인 닫아라

        } else { // li에 on이 없으면

            IRdetail2.removeClass('on'); // 다른 li에 on 없애고
            answer.addClass('on'); // 내 li에만 on을 넣어라
            
            IRdetail2.children('.cts').stop().slideUp('fast');
            answer.children('.cts').stop().slideDown('fast');
        }
    });

    var IRdetail3 = $('.IRchart3 ul li'); // 전체 li

    $('.IRchart3 ul li h5 a').click(function(e){
        e.preventDefault();

        var answer = $(this).parent().parent(); // 해당 li

        if(answer.is('.on')){ // li에 on이 있으면
            
            answer.removeClass('on'); // on없애고
            answer.children('.cts').stop().slideUp('fast'); // 본인 닫아라

        } else { // li에 on이 없으면

            IRdetail3.removeClass('on'); // 다른 li에 on 없애고
            answer.addClass('on'); // 내 li에만 on을 넣어라
            
            IRdetail3.children('.cts').stop().slideUp('fast');
            answer.children('.cts').stop().slideDown('fast');
        }
    });

    var IRdetail4 = $('.IRchart4 ul li'); // 전체 li

    $('.IRchart4 ul li h5 a').click(function(e){
        e.preventDefault();

        var answer = $(this).parent().parent(); // 해당 li

        if(answer.is('.on')){ // li에 on이 있으면
            
            answer.removeClass('on'); // on없애고
            answer.children('.cts').stop().slideUp('fast'); // 본인 닫아라

        } else { // li에 on이 없으면

            IRdetail4.removeClass('on'); // 다른 li에 on 없애고
            answer.addClass('on'); // 내 li에만 on을 넣어라
            
            IRdetail4.children('.cts').stop().slideUp('fast');
            answer.children('.cts').stop().slideDown('fast');
        }
    });
    var IRdetail5 = $('.IRchart5 ul li'); // 전체 li

    $('.IRchart5 ul li h5 a').click(function(e){
        e.preventDefault();

        var answer = $(this).parent().parent(); // 해당 li

        if(answer.is('.on')){ // li에 on이 있으면
            
            answer.removeClass('on'); // on없애고
            answer.children('.cts').stop().slideUp('fast'); // 본인 닫아라

        } else { // li에 on이 없으면

            IRdetail5.removeClass('on'); // 다른 li에 on 없애고
            answer.addClass('on'); // 내 li에만 on을 넣어라
            
            IRdetail5.children('.cts').stop().slideUp('fast');
            answer.children('.cts').stop().slideDown('fast');
        }
    });
    var IRdetail6 = $('.IRchart6 ul li'); // 전체 li

    $('.IRchart6 ul li h5 a').click(function(e){
        e.preventDefault();

        var answer = $(this).parent().parent(); // 해당 li

        if(answer.is('.on')){ // li에 on이 있으면
            
            answer.removeClass('on'); // on없애고
            answer.children('.cts').stop().slideUp('fast'); // 본인 닫아라

        } else { // li에 on이 없으면

            IRdetail6.removeClass('on'); // 다른 li에 on 없애고
            answer.addClass('on'); // 내 li에만 on을 넣어라
            
            IRdetail6.children('.cts').stop().slideUp('fast');
            answer.children('.cts').stop().slideDown('fast');
        }
    });
    var IRdetail7 = $('.IRchart7 ul li'); // 전체 li

    $('.IRchart7 ul li h5 a').click(function(e){
        e.preventDefault();

        var answer = $(this).parent().parent(); // 해당 li

        if(answer.is('.on')){ // li에 on이 있으면
            
            answer.removeClass('on'); // on없애고
            answer.children('.cts').stop().slideUp('fast'); // 본인 닫아라

        } else { // li에 on이 없으면

            IRdetail7.removeClass('on'); // 다른 li에 on 없애고
            answer.addClass('on'); // 내 li에만 on을 넣어라
            
            IRdetail7.children('.cts').stop().slideUp('fast');
            answer.children('.cts').stop().slideDown('fast');
        }
    });
    var IRdetail8 = $('.IRchart8 ul li'); // 전체 li

    $('.IRchart8 ul li h5 a').click(function(e){
        e.preventDefault();

        var answer = $(this).parent().parent(); // 해당 li

        if(answer.is('.on')){ // li에 on이 있으면
            
            answer.removeClass('on'); // on없애고
            answer.children('.cts').stop().slideUp('fast'); // 본인 닫아라

        } else { // li에 on이 없으면

            IRdetail8.removeClass('on'); // 다른 li에 on 없애고
            answer.addClass('on'); // 내 li에만 on을 넣어라
            
            IRdetail8.children('.cts').stop().slideUp('fast');
            answer.children('.cts').stop().slideDown('fast');
        }
    });


});