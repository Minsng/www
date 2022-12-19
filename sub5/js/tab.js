$(document).ready(function(){

    $('.tab ul li:eq(0)').addClass('current');
    $('.contentArea>div').hide();
    $('.contentArea>div:eq(0)').show();
    $('.contentArea>div:eq(1)').show();


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
