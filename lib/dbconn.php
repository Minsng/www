<?
    $connect=mysql_connect( "localhost", "minsng", "minsng1!@") or  
        die( "SQL server에 연결할 수 없습니다."); 

    mysql_select_db("minsng",$connect);
?>
