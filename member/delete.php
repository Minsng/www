<meta charset="UTF-8">
<?
   session_start();
   @extract($_GET); 
  @extract($_POST); 
  @extract($_SESSION);

   include "../lib/dbconn.php";

   $sql = "delete from member where id = '$userid'";
   mysql_query($sql, $connect);
   echo"
      <script>
         alert('정상적으로 탈퇴되었습니다.');
      </script>
   ";

   mysql_close();
   unset($_SESSION['userid']);
   unset($_SESSION['username']);
   unset($_SESSION['usernick']);
   unset($_SESSION['userlevel']);
   echo "
	   <script>
	    location.href = '../index.html';
	   </script>
	";
?>

