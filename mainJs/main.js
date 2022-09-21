// 비주얼
$(document).ready(function() {

    var timeonoff; 
    var imageCount = 3; 
    var cnt = 1; 
    var onoff = true; 
    var timer = 7000; 

    $('.btn1').addClass('on'); 
    $('.gallery .link1').show(); 
    
    
    function moveg(){
        if(cnt == imageCount+1){ cnt=1; }
        if(cnt == imageCount){ cnt=0; } 
      
        cnt++;  
     
        $('.gallery li').hide(); 
        $('.gallery .link'+cnt).fadeIn('slow'); 
      
        $('.mbutton').removeClass('on'); 
        $('.btn'+cnt).addClass('on'); 
       
        if(cnt == imageCount){ cnt=0; }  
    }
    timeonoff= setInterval( moveg , timer);
   

    
    $('.mbutton').click(function(event){  
        var $target=$(event.target); //클릭한 버튼 $target == $(this)
        clearInterval(timeonoff); 
	 
	    $('.gallery li').hide(); 
        
        // for(var i=0; i<=imageCount; i++){ 
        //     if(this.className == 'mbutton btn'+i){ cnt = i; }
        // }

        if($target.is('.btn1')){  //첫번째 버튼 클릭??
            cnt=1;  //클릭한 해당 카운트를 담아놓는다
        }else if($target.is('.btn2')){  //두번째 버튼 클릭??
            cnt=2; 
        }else if($target.is('.btn3')){ 
            cnt=3; 
        }

        $('.gallery .link'+cnt).fadeIn('slow'); 

        $('.mbutton').removeClass('on'); 
        $('.btn'+cnt).addClass('on'); 
      
        if(cnt == imageCount){ cnt=0; }  
      
        timeonoff = setInterval( moveg , timer); 
      
        if(onoff == false){ 
            onoff = true; 
            $('.ps').removeClass('on'); 
        }
    });

    
    
    $('.ps').click(function(){
        if(onoff == true){ 
            clearInterval(timeonoff); 
            $(this).addClass('on'); 
            onoff = false;
        } else { 
            timeonoff = setInterval( moveg , timer); 
            $('.ps').removeClass('on'); 
            onoff = true;
        }
    });
    
    
    
    $('.main .btn').click(function(){
        clearInterval(timeonoff); 
      
        if($(this).is('.btnRight')){ 
            if(cnt == imageCount){ cnt=0; }  
            
            cnt++; 
        }else if($(this).is('.btnLeft')){  
            if(cnt==1){ cnt=imageCount+1; }
            if(cnt==0){ cnt=imageCount; }
            cnt--; 
        }
        
        $('.gallery li').hide(); 
        $('.gallery .link'+cnt).fadeIn('slow'); 
      
        $('.mbutton').removeClass('on'); 
        $('.btn'+cnt).addClass('on'); 

        timeonoff= setInterval( moveg , timer); 

        if(onoff==false){
            onoff=true;
            $('.ps').removeClass('on');
        }
    });

});


//스크롤


$(document).ready(function () {
    
    //첫번째 내용글 애니메이션 처리
    var smh= $('.main').height();  //메인 비주얼의 높이
    var h1= $('#content section:eq(1)').offset().top-400 ;
    var h2= $('#content section:eq(2)').offset().top-400 ;
    var h3= $('#content section:eq(3)').offset().top-400 ;
    var h4= $('#content section:eq(4)').offset().top-400 ;

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
        $('#content section:eq('+cnt+')').addClass('event');
        
        
    });

    // $('.elec').mouseenter(function(){
    //     $(this).css('z-index',20);
    //     $('.fine').css('z-index',10);
    // });
    // $('.fine').mouseenter(function(){
    //     $(this).css('z-index',20);
    //     $('.elec').css('z-index',10);
    // });

});

//비즈니스
$(function(){
    // Agencies accordion script
	function accordion(imgnum) {
		$('.business_title:eq('+imgnum +'), .business_inner li:not(:eq('+imgnum +')) .business_main').hide();
		$('.business_inner li:eq('+imgnum+') .business_main').fadeIn('slow');
		$('.business_inner span:eq('+imgnum+')').css('width', '100');
		$('.business_inner span:not(:eq(' + imgnum + '))').css('width', '400');
		$('.business_title:not(:eq(' + imgnum + '))').show().animate({ width: 400 });
	}

	$('.business_inner li span').mouseenter(function (event) {
		var $target = $(event.target);
		if ($target.is('.business_inner span:eq(0)')) {
			$('.business_inner li:eq(1)')
				.animate({ left: [800, 'easeOutQuad'] }, 500)
				.clearQueue();
			accordion(0);
		} else if ($target.is('.business_inner span:eq(1)')) {
			$('.business_inner li:eq(1)')
				.animate({ left: [400, 'easeOutQuad'] }, 500)
				.clearQueue();
			accordion(1);
		}
	});

	$('.business_inner>div').mouseleave(function (event) {
		$('.business_main').hide();
		$('.business_inner li:eq(0)')
			.animate({ left: [0, 'easeOutQuad'] }, 500)
			.clearQueue();
		$('.business_inner li:eq(1)')
			.animate({ left: [600, 'easeOutQuad'] }, 500)
			.clearQueue();
		$('.business_inner span').css('width', '');
		$('.business_title').animate({ width: 600 });
		$('.business_title').fadeIn(200);
	});

});

//뉴스 갤러리

// JavaScript Document
$(document).ready(function() {
    var position=0;  //최초위치
    var movesize=410; //이미지 하나의 너비
   
    $('.newsgallery ul').after($('.newsgallery ul').clone());
        //슬라이드 겔러리를 한번 복제
 
    $('.button').click(function(e){
        e.preventDefault();
     
        if($(this).is('.m1')){  //이전버튼 클릭
            if (position == -2050){
                $('.media .moveBox').css('left', 0);
                position = 0;
            }
            position-=movesize;  // 410씩 감소
            $('.newsgallery').stop().animate({left:position}, 'fast',
                function(){							
                    if(position==-2050){
                        $('.newsgallery').css('left',0);
                        position=0;
                    }
            });
        }else if($(this).is('.m2')){  //다음버튼 클릭
            if(position==0){
                $('.newsgallery').css('left',-2050);
                position=-2050;
            } 
            position+=movesize; // 410씩 증가
            $('.newsgallery').stop().animate({left:position}, 'fast',
                function(){							
                    if(position==0){
                        $('.newsgallery').css('left',-2050);
                        position=-2050;
                    }
                });
        }
    });
});

