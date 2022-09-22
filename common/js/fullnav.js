
$(function() {

    var smh=$('.main').height();  //비주얼 이미지의 높이를 리턴한다   900px
    var on_off=false;  //false(안오버)  true(오버)
    $('#headerArea').mouseenter(function(){
        $(this).addClass('on');          
        on_off=true;
    });
    $('#headerArea').mouseleave(function(){
    var scroll = $(window).scrollTop(); // 스크롤링 리턴
    if(scroll < smh-300){
        $(this).removeClass('on');
    } else {
        $(this).addClass('on');
    }
    on_off = false;
    })
    
    $(window).on('scroll',function(){//스크롤의 거리가 발생하면
        var scroll = $(window).scrollTop();  //스크롤의 거리를 리턴하는 함수
    //    console.log(scroll);
    //    console.log(smh);
    
        if(scroll>smh-300){//스크롤300까지 내리면
            $('#headerArea').addClass('on');
        }else{
            if(on_off==false){
            $('#headerArea').removeClass('on');
            }
        };            
    });   


    //2depth 열기/닫기
    $('ul.dropdownmenu').hover(
        function() { 
            $('ul.dropdownmenu li.menu ul').fadeIn('normal',function(){$(this).stop();}); //모든 서브를 다 열어라
            $('#headerArea').animate({height:460},'fast').clearQueue();
        },function() {
            $('ul.dropdownmenu li.menu ul').hide(); //모든 서브를 다 닫아라
            $('#headerArea').animate({height:210}).clearQueue();
    });

    //tab 처리
    $('ul.dropdownmenu li.menu .depth1').on('focus',function(){        
        $('ul.dropdownmenu li.menu ul').slideDown('normal');
        $('#headerArea').animate({height:460},'fast').clearQueue();
        $('#headerArea').addClass('on');
    });
    
    $('ul.dropdownmenu li.m6 li:last').find('a').on('blur',function(){        
        $('ul.dropdownmenu li.menu ul').slideUp('fast');
        $('#headerArea').animate({height:210},'fast').clearQueue();
        $('#headerArea').removeClass('on');
    });

    //topmove
    $('.topmove').click(function(e){
        e.preventDefault();
         //상단으로 스르륵 이동합니다.
        $("html,body").stop().animate({"scrollTop":0},500); 
    });



    //family    
    
    $('.othercompany>a').toggle(function(e){
        e.preventDefault();
		$('.othercompany ul').stop().fadeIn('fast');
        $('.othercompany>a').css('background','#0075c1').css('color','#fff');
        $('.othercompany>a>span').html('▼');
	},function(e){
        e.preventDefault();
        $('.othercompany ul').stop().fadeOut('fast');
        $('.othercompany>a').css('background','#fff').css('color','#333');
        $('.othercompany>a>span').html('▲');
	});
    
    $('.othercompany>a').hover(function(){
        $(this).css({background:'#0075c1',color:'#fff'});
    },function(){
        $(this).css({background:'#fff',color:'#333'});
    });

	//tab키 처리
    $('.othercompany>a').on('focus', function () {        
            $('.othercompany ul').fadeIn('slow');	
    });
    $('.othercompany ul li:last a').on('blur', function () {        
            $('.othercompany ul').fadeOut('fast');
    });

    $('.family>a').toggle(function(e){
        e.preventDefault();
		$('.family ul').stop().fadeIn('fast');
        $('.family>a').css('background','#0075c1').css('color','#fff');
        $('.family>a>span').html('▼');
	},function(e){
        e.preventDefault();
        $('.family ul').stop().fadeOut('fast');
        $('.family>a').css('background','#fff').css('color','#333');
        $('.family>a>span').html('▲');
	});

    $('.family>a').hover(function(){
        $(this).css({background:'#0075c1',color:'#fff'});
    },function(){
        $(this).css({background:'#fff',color:'#333'});
    });

	//tab키 처리
    $('.family>a').on('focus', function () {        
            $('.family ul').fadeIn('slow');	
    });
    $('.family ul li:last a').on('blur', function () {        
            $('.family ul').fadeOut('fast');
    });



            // gnb 검색 열기
            $('#headerArea .top_menu a.searchimg').click(function(e){
                e.preventDefault();
                // $(".headerSearch").html(data);
                //console.log($('#headerSearch #search'));
                $('#headerSearch').slideDown();

                // 검색 닫기
                $('#headerSearch .close').click(function(e){
                    e.preventDefault();
                    $('#headerSearch').slideUp();                    
                });
            });



    
});
