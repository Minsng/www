<? session_start(); ?>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>로그인</title>
    <link rel="stylesheet" href="css/login.css">
    <script src="https://kit.fontawesome.com/f8a0f5a24e.js" crossorigin="anonymous"></script>
</head>
<body>
    
<form  name="member_form" method="post" action="login.php"> 


    <div id="id_pw_input">
        <ul>
            <li><input type="text" name="id" class="login_input" required></li>
            <li><input type="password" name="pass" class="login_input" required></li>
        </ul>						
	</div>
    <div id="login_button">
		<button type="submit">로그인</button>
	</div>
    <div id="join_button">
        <a href="../member/member_check.php">회원가입</a>
    </div>

    <ul>
        <li><i class="fas fa-lock"></i>보안접속</li>
        <li>
            <span><a href="id_find.php">아이디 찾기</a></span>
            <span><a href="pw_find.php">비밀번호 찾기</a></span>
        </li>
	</ul>

</form>

</body>
</html>