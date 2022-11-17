<meta charset="utf-8">
<?
   @extract($_POST);
   @extract($_GET);
   @extract($_SESSION);
   if(!$passcon) {
      echo("<span style='color:#0075c1'><i class='fas fa-times'></i>비밀번호를 입력하세요.</span>");
      echo ("
      <script>
      $('.inpasscon').css('border-color','#0075c1');
      $('#pass_confirm').removeClass();
      $('#pass_confirm').addClass('error');
      </script>
      ");
   } else {
      if ($pass == $passcon) {
         echo "<span style='color:#009944'><i class='fas fa-check'></i>비밀번호가 일치합니다.</span>";
         echo ("
         <script>$('.inpasscon').css('border-color','#009944');
         $('#pass_confirm').removeClass();
         $('#pass_confirm').addClass('passed');
         </script>");
         include "./checking2.php";
      } else  {
         echo "<span style='color:#0075c1'><i class='fas fa-times'></i>비밀번호가 일치하지 않습니다.</span>";
         echo ("
         <script>
         $('.inpasscon').css('border-color','#0075c1');
         $('#pass_confirm').removeClass();
         $('#pass_confirm').addClass('error');
         </script>
         ");
         include "./checking2.php";
      }
      mysql_close();
   }
?>
