<? 
    session_start(); 
    @extract($_GET); 
    @extract($_POST); 
    @extract($_SESSION);
?>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>로그인</title>
    <link rel="stylesheet" href="../common/css/common.css">
    <link rel="stylesheet" href="css/login.css">
    <script src="https://kit.fontawesome.com/f8a0f5a24e.js" crossorigin="anonymous"></script>
</head>
<body>    
    <div class="wrap">
        <div>
            <header>
                <h1>
                    <a class="logo" href="../index.html">
                        <img src="../common/images/header_logo240100.png" alt="한솔케미칼로고">
                    </a>
                </h1>
            </header>
            <article id="content">
                <h2>로그인</h2>
                <form name="member_form" method="post" action="login.php">
                    <div>
                        <label for="id">아이디</label>
                        <input type="text" id="id" name="id">
                    </div>
                    <div>
                        <label for="pass">비밀번호</label>
                        <input type="password" id="pass" name="pass">
                    </div>
                    <button type="submit">로그인</button>
                </form>
                <ul class="lastlist">
                    <li><a href="pw_find.php">비밀번호 찾기</a></li>
                    <li><a href="id_find.php">아이디 찾기</a></li>
                    <li><a href="../member/join.html">회원가입</a></li>
                </ul>
            </article>
        </div>
    </div>
</body>
</html>