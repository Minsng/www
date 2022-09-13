// JavaScript Document

$(document).ready(function() {

    var timeonoff;   //타이머 처리  홍길동 정보
    var imageCount = $('.gallery ul li').size();
    console.log(imageCount);
    var cnt=1;   //이미지 순서 1 2 3 4 5 1 2 3 4 5....(주인공!!=>현재 이미지 순서)
    var onoff=true; // true=>타이머 동작중 , false=>동작하지 않을때
    
    $('.btn1').css('background','#f00'); //첫번째 불켜
    $('.btn1').addClass('on');
    // $('.btn1').css('width','30'); // 버튼의 너비 증가
    
    
    $('.gallery .link1').fadeIn('slow'); //첫번째 이미지 보인다..
    $('.gallery .link1 span').delay(500).animate({bottom:430, opacity:1},'slow');

 
    function moveg(){
      if(cnt==imageCount+1)cnt=1;
      if(cnt==imageCount)cnt=0;  //카운트 초기화

      cnt++;  //카운트 1씩 증가.. 5가되면 다시 초기화 0  1 2 3 4 5 1 2 3 4 5..
     
    
     $('.gallery li').hide(); //모든 이미지를 보이지 않게.
     $('.gallery .link'+cnt).fadeIn('slow'); //자신만 이미지가 보인다..
	 		                    
      
      // $('.mbutton').css('background','#00f'); //버튼불다꺼!!
      // $('.mbutton').css('width','16'); // 버튼 원래의 너비
      // $('.btn'+cnt).css('background','#f00');//자신만 불켜
      // $('.btn'+cnt).css('width','30');    
      $('.btn').removeClass('on');
      $('.btn'+cnt).addClass('on');
      $('.gallery li span').css('bottom',380).css('opacity',0);
      $('.gallery .link'+cnt).find('span').delay(500).animate({bottom:430, opacity:1},'slow');

       if(cnt==imageCount)cnt=0;  //카운트의 초기화 0
     }
     
    timeonoff= setInterval( moveg , 7000);// 타이머를 동작 1~5이미지를 순서대로 자동 처리


   $('.mbutton').click(function(event){  //각각의 버튼 클릭시
	     var $target=$(event.target); //클릭한 버튼 $target == $(this)
       clearInterval(timeonoff); //타이머 중지     
	 
	    $('.gallery li').hide(); //모든 이미지 안보인다.

		  if($target.is('.btn1')){  //첫번째 버튼 클릭??
				 cnt=1;  //클릭한 해당 카운트를 담아놓는다
		  }else if($target.is('.btn2')){  //두번째 버튼 클릭??
				 cnt=2; 
		  }else if($target.is('.btn3')){ 
				 cnt=3; 
		  }

		  $('.gallery .link'+cnt).fadeIn('slow');  //자기 자신만 이미지가 보인다
		  
      $('.mbutton').css('background','#00f'); //버튼 모두불꺼
      $('.mbutton').css('width','16');
      $('.btn'+cnt).css('background','#f00');//자신 버튼만 불켜 
      $('.btn'+cnt).css('width','30');

      $('.gallery li span').css('bottom',380).css('opacity',0);
      $('.gallery .link'+cnt).find('span').delay(500).animate({bottom:430, opacity:1},'slow');
      
      if(cnt==imageCount)cnt=0;  //카운트 초기화
     
      timeonoff= setInterval( moveg , 7000); //타이머의 부활!!!
     
      if(onoff==false){ //중지상태냐??
            onoff=true; //동작~~
            $('.ps').css('background','url(images/stop.png)');
      }
      
    });



	 //stop/play 버튼 클릭시 타이머 동작/중지
  $('.ps').click(function(){ 
     if(onoff==true){ // 타이머가 동작 중이냐??
	       clearInterval(timeonoff);   //살인마 고용 stop버튼 클릭시
		     $(this).css('background','url(./images/play.png)'); //js파일에서는 경로의 기준이 html파일이 기준!!
         onoff=false;   
	   }else{  // false 타이머가 중지 상태냐??
		   timeonoff= setInterval( moveg , 7000); //play버튼 클릭시  부활
		   $(this).css('background','url(./images/stop.png)');
		   onoff=true; 
	   }
  });	

    //왼쪽/오른쪽 버튼 처리
    $('.main .btn').click(function(){

      clearInterval(timeonoff); //살인마

      if($(this).is('.btnRight')){ // 오른쪽 버튼 클릭
          if(cnt==imageCount)cnt=0;  //카운트가 마지막 번호(5)라면 초기화 0
          cnt++; //카운트 1씩증가
      }else if($(this).is('.btnLeft')){  //왼쪽 버튼 클릭
          if(cnt==1)cnt=imageCount+1;
          if(cnt==0)cnt=imageCount;
          cnt--; //카운트 감소
      }

    $('.gallery li').hide(); //모든 이미지를 보이지 않게.
    $('.gallery .link'+cnt).fadeIn('slow'); //자신만 이미지가 보인다..
                        
    $('.mbutton').css('background','#00f'); //버튼 모두불꺼
    $('.mbutton').css('width','16');
    $('.btn'+cnt).css('background','#f00');//자신 버튼만 불켜 
    $('.btn'+cnt).css('width','30');

    timeonoff= setInterval( moveg , 7000); //부활

    if(onoff==false){
      onoff=true;
      $('.ps').css('background','url(images/stop.png)');
    }
  });


});




