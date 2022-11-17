<meta charset="utf-8">
<?
   
   @extract($_POST);
   @extract($_GET);
   @extract($_SESSION);
  
    if(!$id) 
   {
      echo("아이디를 입력하세요.");
   }
   else
   {
      include "../lib/dbconn.php";
 
      $sql = "select * from member where id='$id' ";

      $result = mysql_query($sql, $connect);
      $num_record = mysql_num_rows($result);


     
      if ($num_record)
      {
       
         echo "<span style='color:#0075c1'>다른 아이디를 사용하세요.</span>";
         echo ("<script>
                     $('.inid').css('border-color','#0075c1');
                     $('#id').removeClass();
                     $('#id').addClass('error');
                     </script>");
      }
      else
      {
         echo "<span style='color:#009944'>사용가능한 아이디입니다.</span>";
         echo ("<script>
                     $('.inid').css('border-color','#009944');
                     $('#id').removeClass();
                     $('#id').addClass('passed');
                     </script>");
         include "./checking.php";
      }
    
 
      mysql_close();
   }

?>

