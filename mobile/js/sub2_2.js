$(document).ready(function() {


    $.ajax({
        url: './js/elec.json',
        dataType: 'json',
        success: function(data){
            var useelec = data.elec;

            function printelec(){

                var electxt = '<ul>';

                for(var i in useelec){
                    electxt += '<li><a href="#">';
                    electxt += '<div class="image"><img src="' + useelec[i].image + '" alt="' + useelec[i].title + '"></div>';
                    electxt += '<p><span>' + useelec[i].subtitle + '</span>';
                    electxt += '<strong>' + useelec[i].title + '</strong>';
                    electxt += '<i>More</i></p>';
                    electxt += '</a></li>';
                }
                electxt += '</ul>';

                $('.elec_list').html(electxt);

            }
            printelec();


            //click event
            $('.elec_list ul li a').click(function(e){
                e.preventDefault();

                var ind = $(this).index('.elec_list ul li a');

                var elecpop = '<div class="image"><img src="' + useelec[ind].image + '" alt="' + useelec[ind].title + '"></div>';
                elecpop += '<div class="ttl">';
                elecpop += '<span>' + useelec[ind].subtitle + '</span>';
                elecpop += '<strong>' + useelec[ind].title + '</strong>';
                elecpop += '<p>' + useelec[ind].summary + '</p>';
                elecpop += '</div>';
                elecpop += '<div class="cont">';
                elecpop += '<dl>';
                elecpop += '<dt>제품용도 및 특성</dt>';
                elecpop += '<dd>'+ useelec[ind].spec1 +'</dd>';
                elecpop += '<dd>'+ useelec[ind].spec2 +'</dd>';
                elecpop += '<dd>'+ useelec[ind].spec3 +'</dd>';
                elecpop += '<dd>'+ useelec[ind].spec4 +'</dd>';
                elecpop += '</dl>';
                elecpop += '<dl>';
                elecpop += '<dt>담당자 연락처</dt>';
                elecpop += '<dd>';
                elecpop += '<table class="chart"><caption class="hidden">담당자 연락처</caption><thead>';
                elecpop += '<tr><th scope="col">분야</th><th scope="col">담당자</th><th scope="col">직급</th><th scope="col">TEL</th></tr></thead>';
                elecpop += '<tbody><tr>';
                elecpop += '<td>' + useelec[ind].cont1_1 + '</td>';
                elecpop += '<td>' + useelec[ind].cont1_2 + '</td>';
                elecpop += '<td>' + useelec[ind].cont1_3 + '</td>';
                elecpop += '<td>' + useelec[ind].cont1_4 + '</td>';
                // elecpop += '<td>' + useelec[ind].cont1_5 + '</td>';
                elecpop += '</tr><tr>';
                elecpop += '<td>' + useelec[ind].cont2_1 + '</td>';
                elecpop += '<td>' + useelec[ind].cont2_2 + '</td>';
                elecpop += '<td>' + useelec[ind].cont2_3 + '</td>';
                elecpop += '<td>' + useelec[ind].cont2_4 + '</td>';
                elecpop += '</tr><tr>';
                elecpop += '<td>' + useelec[ind].cont3_1 + '</td>';
                elecpop += '<td>' + useelec[ind].cont3_2 + '</td>';
                elecpop += '<td>' + useelec[ind].cont3_3 + '</td>';
                elecpop += '<td>' + useelec[ind].cont3_4 + '</td>';
                elecpop += '</tr><tr>';
                elecpop += '<td>' + useelec[ind].cont4_1 + '</td>';
                elecpop += '<td>' + useelec[ind].cont4_2 + '</td>';
                elecpop += '<td>' + useelec[ind].cont4_3 + '</td>';
                elecpop += '<td>' + useelec[ind].cont4_4 + '</td>';
                // elecpop += '<td>' + useelec[ind].cont2_5 + '</td>';
                elecpop += '</tr></tbody></table>';




                elecpop += '<dd>';

                elecpop += '</dd>';
                elecpop += '</dl>';
                elecpop += '</div>';
                elecpop += '<a href="#" class="close">닫기</a>';


                $('.elec_pop').html(elecpop);


                $("html, body").css({"overflow":"hidden"}); // body scroll 비활성화



                // click 시 팝업 fadein
                $('.elec_pop').fadeIn();
                $('.elec_pop').scrollTop(0);

                $('.elec_pop .close').click(function(e){
                    e.preventDefault();
                    $('.elec_pop').fadeOut();
                    $("html, body").css({"overflow":""}); // body scroll 활성화


                });
                
            });


        }
    });
    
});