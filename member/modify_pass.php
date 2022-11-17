<meta charset="utf-8">
<?
   @extract($_POST);
   @extract($_GET);
   @extract($_SESSION);
   if(!$pass)  {
      echo("<span style='color:#0075c1'><i class='fas fa-times'></i>비밀번호를 입력하세요.</span>");
      echo ("
         <script>
            $('.inpass').css('border-color','#0075c1');
            $('#pass').removeClass();
            $('#pass').addClass('error');
         </script>
      ");
   } else  {
      if (strlen($pass)<4) {
         echo "<span style='color:#0075c1'><i class='fas fa-times'></i>4자 이상 입력해주세요.</span>";
         echo ("
            <script>
               $('.inpass').css('border-color','#0075c1');
               $('#pass').removeClass();
               $('#pass').addClass('error');
            </script>
            ");
      } else {
         echo "<span style='color:#009944'><i class='fas fa-check'></i>사용가능한 비밀번호입니다.</span>";
         echo ("
            <script>
               $('.inpass').css('border-color','#009944');
               $('#pass').removeClass();
               $('#pass').addClass('passed');
            </script>
      ");
      include "./checking2.php";
      }
      mysql_close();
   }
?>
