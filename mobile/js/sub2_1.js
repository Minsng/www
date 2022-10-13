$(document).ready(function() {


    $.ajax({
        url: './js/fine.json',
        dataType: 'json',
        success: function(data){
            var usefine = data.fine;

            function printfine(){

                var finetxt = '<ul>';

                for(var i in usefine){
                    finetxt += '<li><a href="#">';
                    finetxt += '<div class="image"><img src="' + usefine[i].image + '" alt="' + usefine[i].title + '"></div>';
                    finetxt += '<p><span>' + usefine[i].subtitle + '</span>';
                    finetxt += '<strong>' + usefine[i].title + '</strong>';
                    finetxt += '<i>More</i></p>';
                    finetxt += '</a></li>';
                }
                finetxt += '</ul>';

                $('.fine_list').html(finetxt);

            }
            printfine();


            //click event
            $('.fine_list ul li a').click(function(e){
                e.preventDefault();

                var ind = $(this).index('.fine_list ul li a');

                var finepop = '<div class="image"><img src="' + usefine[ind].image + '" alt="' + usefine[ind].title + '"></div>';
                finepop += '<div class="ttl">';
                finepop += '<span>' + usefine[ind].subtitle + '</span>';
                finepop += '<strong>' + usefine[ind].title + '</strong>';
                finepop += '<p>' + usefine[ind].summary + '</p>';
                finepop += '</div>';
                finepop += '<div class="cont">';
                finepop += '<dl>';
                finepop += '<dt>제품용도 및 특성</dt>';
                finepop += '<dd>'+ usefine[ind].spec1 +'</dd>';
                finepop += '<dd>'+ usefine[ind].spec2 +'</dd>';
                finepop += '<dd>'+ usefine[ind].spec3 +'</dd>';
                finepop += '<dd>'+ usefine[ind].spec4 +'</dd>';
                finepop += '</dl>';
                finepop += '<dl>';
                finepop += '<dt>담당자 연락처</dt>';
                finepop += '<dd>';
                finepop += '<table class="chart"><caption class="hidden">담당자 연락처</caption><thead>';
                finepop += '<tr><th scope="col">분야</th><th scope="col">담당자</th><th scope="col">직급</th><th scope="col">TEL</th></tr></thead>';
                finepop += '<tbody><tr>';
                finepop += '<td>' + usefine[ind].cont1_1 + '</td>';
                finepop += '<td>' + usefine[ind].cont1_2 + '</td>';
                finepop += '<td>' + usefine[ind].cont1_3 + '</td>';
                finepop += '<td>' + usefine[ind].cont1_4 + '</td>';
                // finepop += '<td>' + usefine[ind].cont1_5 + '</td>';
                finepop += '</tr><tr>';
                finepop += '<td>' + usefine[ind].cont2_1 + '</td>';
                finepop += '<td>' + usefine[ind].cont2_2 + '</td>';
                finepop += '<td>' + usefine[ind].cont2_3 + '</td>';
                finepop += '<td>' + usefine[ind].cont2_4 + '</td>';
                // finepop += '<td>' + usefine[ind].cont2_5 + '</td>';
                finepop += '</tr></tbody></table>';




                finepop += '<dd>';

                finepop += '</dd>';
                finepop += '</dl>';
                finepop += '</div>';
                finepop += '<a href="#" class="close">닫기</a>';


                $('.fine_pop').html(finepop);


                $("html, body").css({"overflow":"hidden"}); // body scroll 비활성화



                // click 시 팝업 fadein
                $('.fine_pop').fadeIn();
                $('.fine_pop').scrollTop(0);

                $('.fine_pop .close').click(function(e){
                    e.preventDefault();
                    $('.fine_pop').fadeOut();
                    $("html, body").css({"overflow":""}); // body scroll 활성화


                });
                
            });


        }
    });
    
});