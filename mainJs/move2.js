// JavaScript Document

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
   

    
    $('.mbutton').click(function(){  
        clearInterval(timeonoff); 
	 
	    $('.gallery li').hide(); 
        
        for(var i=0; i<=imageCount; i++){ 
            if(this.className == 'mbutton btn'+i){ cnt = i; }
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