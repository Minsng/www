<? 
	session_start(); 
    @extract($_POST);
    @extract($_GET);
    @extract($_SESSION);
?>

<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<title>회원가입</title>
	<link rel="stylesheet" href="../common/css/common.css">
	<link rel="stylesheet" href="./css/member_form.css">
    <script src="./js/jquery-1.12.4.min.js"></script>
    <script src="./js/jquery-migrate-1.4.1.min.js"></script>
    
	<script>
	 $(document).ready(function() {
  
   
 
 //id 중복검사
 $("#id").keyup(function() {    // id입력 상자에 id값 입력시
    var id = $('#id').val(); //aaa

    $.ajax({
        type: "POST",
        url: "check_id.php",
        data: "id="+ id,  
        cache: false, 
        success: function(data)
        {
             $("#loadtext").html(data);
        }
    });
});
		 
//nick 중복검사		 
$("#nick").keyup(function() {    // id입력 상자에 id값 입력시
    var nick = $('#nick').val();

    $.ajax({
        type: "POST",
        url: "check_nick.php",
        data: "nick="+ nick,  
        cache: false, 
        success: function(data)
        {
             $("#loadtext2").html(data);
        }
    });
});		 


});
	
	
	
	</script>
	<script>
   

  
   function check_input()
   {
      if (!document.member_form.id.value)
      {
          alert("아이디를 입력하세요");    
          document.member_form.id.focus();
          return;
      }

      if (!document.member_form.pass.value)
      {
          alert("비밀번호를 입력하세요");    
          document.member_form.pass.focus();
          return;
      }

      if (!document.member_form.pass_confirm.value)
      {
          alert("비밀번호확인을 입력하세요");    
          document.member_form.pass_confirm.focus();
          return;
      }

      if (!document.member_form.name.value)
      {
          alert("이름을 입력하세요");    
          document.member_form.name.focus();
          return;
      }

      if (!document.member_form.nick.value)
      {
          alert("닉네임을 입력하세요");    
          document.member_form.nick.focus();
          return;
      }


      if (!document.member_form.hp2.value || !document.member_form.hp3.value )
      {
          alert("휴대폰 번호를 입력하세요");    
          document.member_form.nick.focus();
          return;
      }

      if (document.member_form.pass.value != 
            document.member_form.pass_confirm.value)
      {
          alert("비밀번호가 일치하지 않습니다.\n다시 입력해주세요.");    
          document.member_form.pass.focus();
          document.member_form.pass.select();
          return;
      }

      document.member_form.submit(); 
		   // insert.php 로 변수 전송
   }

   function reset_form()
   {
      document.member_form.id.value = "";
      document.member_form.pass.value = "";
      document.member_form.pass_confirm.value = "";
      document.member_form.name.value = "";
      document.member_form.nick.value = "";
      document.member_form.hp1.value = "010";
      document.member_form.hp2.value = "";
      document.member_form.hp3.value = "";
      document.member_form.email1.value = "";
      document.member_form.email2.value = "";
	  
      document.member_form.id.focus();

      return;
   }
</script>
</head>
<body>
    <header>
        <h1><a class="logo" href="../index.html"><img src="../common/images/navlogo.png" alt="한샘로고"></a></h1>
    </header>
    <article id="content">  	  
        <div>
            <h2>정보 입력</h2>
            <form name="member_form" method="post" action="insert.php">
                <div>
                    <label for="id">아이디</label>
                    <div class="inner inid">
                        <input type="text" name="id" id="id" required>
                        <span id="loadtext" ></span>
                    </div>
                </div>
                <div>
                    <label for="pass">비밀번호</label>
                    <div class="inner inpass">
                        <input type="password" name="pass" id="pass" required>
                        <span id="passtext"></span>
                    </div>
                </div>
                <div>
                    <label for="pass_confirm">비밀번호 재확인</label>
                    <div class="inner inpasscon">
                        <input type="password" name="pass_confirm" id="pass_confirm" required>
                        <span id="passcontext"></span>
                    </div>
                </div>
                <div class="name">
                    <label for="name">이름</label>
                    <div class="inner inname">
                        <input type="text" name="name" id="name" required>
                        <span id="nametext"></span>
                    </div>
                </div>
                <div class="nick">
                    <label for="nick">닉네임</label>
                    <div class="inner innick">
                        <input type="text" name="nick" id="nick" required>
                        <span id="loadtext2"></span>
                    </div>
                </div>
                <div class="tel">
                    <label for="hp">휴대전화</label>
                        <div class="tel_inner">
                            <div class="inner inhp">
                                <input type="text" maxlength="3" name="hp1" id="hp1" required>
                                <span id="teltext"></span>
                            </div>
                        </div>
                        <p>-</p>
                        <div class="tel_inner">
                            <div class="inner inhp">
                                <input type="text" maxlength="4" name="hp2" id="hp2" required>
                                <span id="teltext"></span>
                            </div>
                        </div>
                        <p>-</p>
                        <div class="tel_inner">
                            <div class="inner inhp">
                                <input type="text" maxlength="4" name="hp3" id="hp3" required>
                                <span id="teltext"></span>
                            </div>
                        </div>
                    <!-- <div class="tel_inner">
                        <label class="hidden" for="hp1">전화번호앞3자리</label>
                        <select class="hp" name="hp1" id="hp1"> 
                            <option value='010'>010</option>
                            <option value='011'>011</option>
                            <option value='016'>016</option>
                            <option value='017'>017</option>
                            <option value='018'>018</option>
                            <option value='019'>019</option>
                        </select>
                        <p>-</p>
                        <label class="hidden" for="hp2">전화번호중간4자리</label>
                        <input type="text" class="hp" name="hp2" id="hp2" maxlength="4" required>
                        <p>-</p>
                        <label class="hidden" for="hp3">전화번호끝4자리</label>
                        <input type="text" class="hp" name="hp3" id="hp3" maxlength="4" required>
                    </div> -->
                </div>
                <div class="mail">
                    <label for="email">이메일</label>
                    <div class="inner inmail">
                        <input type="email" name="email" id="email" required placeholder="admin@hansol.com">
                        <span id="mailtext"></span>
                    </div>
                </div>
                <div class="button">
                    <a href="#" class="reg" id="reg" onclick="check_input()">가입하기</a>
                    <a href="#" onclick="reset_form()">다시작성하기</a>
                </div>
            </form>
        </div>
    </article>
<!-- <a href="#"><img src="images/button_reset.gif" onclick="reset_form()"></a> -->
</body>
</html>


