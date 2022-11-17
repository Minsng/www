<meta charset="utf-8">
<?
   @extract($_POST);
   @extract($_GET);
   @extract($_SESSION);

   if(!$nick) 
   {
      echo("닉네임을 입력하세요.");
   }
   else
   {
      include "../lib/dbconn.php";
 
      $sql = "select * from member where nick='$nick' ";

      $result = mysql_query($sql, $connect);
      $num_record = mysql_num_rows($result);

      if ($num_record)
      {
       
         echo "<span style='color:#0075c1'>다른 닉네임을 사용하세요.</span>";
         echo ("
            <script>
               $('.innick').css('border-color','#0075c1');
               $('#nick').removeClass();
               $('#nick').addClass('error');
            </script>
         ");
      }
      else
      {
         echo "<span style='color:#009944'>사용가능한 닉네임입니다.</span>";
         echo ("
            <script>
               $('.innick').css('border-color','#009944');
               $('#nick').removeClass();
               $('#nick').addClass('passed');
            </script>
         ");
         include "./checking.php";
      }
		 
      mysql_close();
   }
?>

