<meta charset="utf-8">
<?
   @extract($_POST);
   @extract($_GET);
   @extract($_SESSION);
   if(!$name)  {
      echo("<span style='color:#0075c1'><i class='fas fa-times'></i>이름을 입력하세요.</span>");
      echo ("
      <script>
         $('.inname').css('border-color','#0075c1');
         $('#name').removeClass();
         $('#name').addClass('error');
      </script>
      ");
   } else {
      echo "<span style='color:#009944'><i class='fas fa-check'></i>사용가능한  이름입니다.</span>";
      echo ("
         <script>
            $('.inname').css('border-color','#009944');
            $('#name').removeClass();
            $('#name').addClass('passed');
         </script>
      ");
      include "./checking.php";
      mysql_close();
   }
?>