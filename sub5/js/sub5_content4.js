$(document).ready(function(){
   
    $('.contentArea ul li a').click(function(e){
        e.preventDefault();
  
        var ind = $(this).index('.contentArea ul li a');  // 0 1 2 3
  
        $('.contentArea .modal_box').fadeIn('fast');
        $('.contentArea .popup').fadeIn('slow');
  
        $('.contentArea .popup img').attr('src','./images/sub5_4_'+(ind+1)+'.png');
  
    });
  
    $('.close_btn,.pop .modal_box').click(function(e){
        e.preventDefault();
        $('.contentArea .modal_box').hide();
        $('.contentArea .popup').hide();
    });
  });