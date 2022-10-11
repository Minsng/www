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
});