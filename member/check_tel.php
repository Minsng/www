<meta charset="utf-8">
<?
   @extract($_POST);
   @extract($_GET);
   @extract($_SESSION);
   if(!$tel)  {
      echo("<span style='color:#0075c1'><i class='fas fa-times'></i>번호를 입력하세요.</span>");
      echo ("
      <script>
      $('.inhp').css('border-color','#0075c1');
      $('#hp').removeClass();
      $('#hp').addClass('error');
      </script>");
   } else  {
      if (!preg_match("/^01[0-9]{8,9}$/", $tel)) {
         echo "<span style='color:#0075c1'><i class='fas fa-times'></i>올바른 형식의 번호가 아닙니다.</span>";
         echo ("
         <script>
         $('.inhp').css('border-color','#0075c1');         
         $('#hp').removeClass();
         $('#hp').addClass('error');
         </script>
         ");
      } else {
         echo "<span style='color:#009944'><i class='fas fa-check'></i>사용가능한 번호입니다.</span>";
         echo ("
         <script>
         $('.inhp').css('border-color','#009944');
         $('#hp').removeClass();
         $('#hp').addClass('passed');
         </script>
         ");
         include "./checking.php";
      }
      mysql_close();
   }
?>