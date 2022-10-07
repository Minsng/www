$(document).ready(function() {

    //business
var BusiCNT = 0;
    $('.business .controls a').click(function(e){
        e.preventDefault();

        var ind = $(this).index('.business .controls a');
        
        if(ind == 0){
            if(BusiCNT == 0){ BusiCNT = 2;}
            BusiCNT --;
        } else if (ind == 1){
            if(BusiCNT == 1){ BusiCNT = -1;}
            BusiCNT ++;
        }

        $('.business ul li').hide();
        $('.business ul li:eq(' + BusiCNT + ')').fadeIn();
        
    });

});