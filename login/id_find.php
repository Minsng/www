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
    <title>아이디 찾기</title>
    <link rel="stylesheet" href="../common/css/common.css">
	<link rel="stylesheet" href="./css/login.css">
    <script src="https://kit.fontawesome.com/f8a0f5a24e.js" crossorigin="anonymous"></script>
    <script src="../common/js/jquery-1.12.4.min.js"></script>
    <script src="../common/js/jquery-migrate-1.4.1.min.js"></script>
<script>
	$(document).ready(function() {

         $(".find").click(function() {    // id입력 상자에 id값 입력시
            var name = $('#name').val(); //홍길동
            var hp1 = $('#hp1').val(); //010
            var hp2 = $('#hp2').val(); //1111
            var hp3 = $('#hp3').val(); //2222

            $.ajax({
                type: "POST",
                url: "find.php", 
                data: "name="+ name+ "&hp1="+hp1+ "&hp2="+hp2+ "&hp3="+hp3,  /*매개변수id도 같이 넘겨줌*/
                // data: "name="+ name+ "&hp="+hp,  /*매개변수id도 같이 넘겨줌*/
                cache: false, 
                success: function(data) /*이 메소드가 완료되면 data라는 변수 안에 echo문이 들어감*/
                {
                     $("#loadtext").html(data); /*span안에 있는 태그를 사용할것이기 때문에 html 함수사용*/
                }
            });
             
            $("#loadtext").addClass('loadtexton'); // css 변경
        }); 

    });
</script>
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
                <ul class="find_list">
                    <li><a href="id_find.php" class="selected">아이디 찾기</a></li>
                    <li><a href="pw_find.php">비밀번호 찾기</a></li>
                </ul>
                <form name="find" method="post" action="find.php">
                    <div>
                        <label for="name">이름</label>
                        <input type="text" id="name" name="name">
                    </div>
                    <div>
                        <label for="name">휴대전화</label>
                        <div class="contact">
                            <input type="text" id="hp1" name="hp1" maxlength="3">
                            <p>-</p>
                            <input type="text" id="hp2" name="hp2" maxlength="4">
                            <p>-</p>
                            <input type="text" id="hp3" name="hp3" maxlength="4">
                        </div>
                    </div>
                    <span id="loadtext"></span>
                    <button class="find" type="button">아이디 찾기</button>
                </form>
                <ul class="lastlist findform">
                    <li><a href="login_form.php">로그인</a></li>
                    <li><a href="../member/join.html">회원가입</a></li>
                </ul>
            </article>
        </div>
    </div> 
</body>
</html>