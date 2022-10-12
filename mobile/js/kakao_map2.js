 window.onload = function() {
    var onoff = false;
    $(window).on('scroll',function(){ //스크롤 값의 변화가 생기면
        var scroll = $(window).scrollTop(); //스크롤의 거리
        
        if(scroll>10 && onoff == false){
            $('#content>div').hide();
            $('#content>div:eq(0)').show();
           $('#content>div:eq(1)').show();
           onoff = true;
        }
    });

    $('.map_tab li:eq(0)').addClass('on');
    $('.map_cont:eq(0)').show();
    
    $('.map_tab a').click(function(e){
        e.preventDefault();
        
        var ind = $(this).index('.map_tab a');
        //console.log(ind);

        $('.map_cont').hide();
        $('.map_cont:eq('+ind+')').fadeIn();

        $('.map_tab li').removeClass('on');
        $('.map_tab li:eq('+ind+')').addClass('on');

        // setTimeout(function(){
        //     map2.relayout();
        //     map2.setCenter(new daum.maps.LatLng(37.513126, 127.055585));
        //     map3.relayout();
        //     map3.setCenter(new daum.maps.LatLng(35.975664, 129.385207));
        //     map4.relayout();
        //     map4.setCenter(new daum.maps.LatLng(34.937514, 127.724656));
        // }, 0);

    });





    var container = document.getElementById('headofficeMap');
    var options = {
        center: new daum.maps.LatLng(37.5080060, 127.058872),
        level: 2
    };

    var map = new daum.maps.Map(container, options);
    
    var mapTypeControl = new daum.maps.MapTypeControl();
    map.addControl(mapTypeControl, daum.maps.ControlPosition.TOPRIGHT);

    var zoomControl = new daum.maps.ZoomControl();
    map.addControl(zoomControl, daum.maps.ControlPosition.RIGHT);
    
    var markerPosition  = new daum.maps.LatLng(37.5080060, 127.058872); 
    var marker = new daum.maps.Marker({
        position: markerPosition
    });

    marker.setMap(map);
    
    var overlay = new daum.maps.CustomOverlay({
        map: map,
        position: marker.getPosition()       
    });
     
    //두번째 맵
     
      var container2 = document.getElementById('jeonjuMap');
    var options2 = {
        center: new daum.maps.LatLng(35.945403, 127.123484),
        level: 2
    };

    var map2 = new daum.maps.Map(container2, options2);
    
    var mapTypeControl2 = new daum.maps.MapTypeControl();
    map2.addControl(mapTypeControl2, daum.maps.ControlPosition.TOPRIGHT);

    var zoomControl2 = new daum.maps.ZoomControl();
    map2.addControl(zoomControl2, daum.maps.ControlPosition.RIGHT);
    
    var markerPosition2  = new daum.maps.LatLng(35.945403, 127.123484); 
    var marker2 = new daum.maps.Marker({
        position: markerPosition2
    });

    marker2.setMap(map2);
    
    var overlay2 = new daum.maps.CustomOverlay({
        map: map2,
        position: marker2.getPosition()       
    }); 
     
     
    //세번째 맵
     
     var container3 = document.getElementById('ulsanMap');
   var options3 = {
       center: new daum.maps.LatLng(35.517770, 129.361083),
       level: 2
   };

   var map3 = new daum.maps.Map(container3, options3);
   
   var mapTypeControl3 = new daum.maps.MapTypeControl();
   map3.addControl(mapTypeControl3, daum.maps.ControlPosition.TOPRIGHT);

   var zoomControl3 = new daum.maps.ZoomControl();
   map3.addControl(zoomControl3, daum.maps.ControlPosition.RIGHT);
   
   var markerPosition3  = new daum.maps.LatLng(35.517770, 129.361083); 
   var marker3 = new daum.maps.Marker({
       position: markerPosition3
   });

   marker3.setMap(map3);
   
   var overlay3 = new daum.maps.CustomOverlay({
       map: map3,
       position: marker3.getPosition()       
   }); 
   
    //네번째 맵
     
     var container4 = document.getElementById('laboratoryMap');
   var options4 = {
       center: new daum.maps.LatLng(35.945403, 127.123484),
       level: 2
   };

   var map4 = new daum.maps.Map(container4, options4);
   
   var mapTypeControl4 = new daum.maps.MapTypeControl();
   map4.addControl(mapTypeControl4, daum.maps.ControlPosition.TOPRIGHT);

   var zoomControl4 = new daum.maps.ZoomControl();
   map4.addControl(zoomControl2, daum.maps.ControlPosition.RIGHT);
   
   var markerPosition4  = new daum.maps.LatLng(35.945403, 127.123484); 
   var marker4 = new daum.maps.Marker({
       position: markerPosition2
   });

   marker4.setMap(map4);
   
   var overlay2 = new daum.maps.CustomOverlay({
       map: map4,
       position: marker4.getPosition()       
   }); 
//     
//     
}
