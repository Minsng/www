<?
    $connect=mysql_connect( "localhost", "minsng", "minsng1!@") or  
        die( "SQL server에 연결할 수 없습니다."); 

    mysql_select_db("minsng",$connect);



    
    // local
    // $connect=mysql_connect( "localhost", "minsng", "1234") or  
    //     die( "SQL server에 연결할 수 없습니다."); 

    // mysql_select_db("minsng_db",$connect);
?>
