<? 
	session_start(); 
	@extract($_POST);
	@extract($_GET);
	@extract($_SESSION);
?>
<!DOCTYPE html>
<html lang="ko">
<head> 
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="../common/css/common.css">
    <link rel="stylesheet" href="../sub6/common/css/sub6common.css">
    <link rel="stylesheet" href="./css/greet.css">
	
	<script src="https://kit.fontawesome.com/d488d1cfdc.js" crossorigin="anonymous"></script>
	<script src="../common/js/prefixfree.min.js"></script>
	<script>
		function del(href) 
		{
			if(confirm("한번 삭제한 자료는 복구할 방법이 없습니다.\n\n정말 삭제하시겠습니까?")) {
					document.location.href = href;
			}
		}
	</script>
</head>

<body>
	<? include "../common/sub_header.html" ?>
		<div class="main">
            <img src="../sub6/images/sub6visual.png" alt="서브6비주얼이미지">
            <h3>고객지원</h3>
        </div>
		<div class="subNav">
            <ul>
                <li><a href="../greet/list.php" class="current">공지사항</a></li>
                <li><a href="../concert/list.php">뉴스</a></li>
                <li><a href="../product/list.php">제품검색</a></li>
                <li><a href="../sub6/sub6_4.html">문의하기</a></li>
            </ul>
        </div>
		<article id="content">

            <div class="titleArea">
                <div class="lineMap">
                    <span><i class="fa-solid fa-house"></i></span> &gt; <span>고객지원</span> &gt; <span>공지사항</span>
                </div>
                <h2>공지사항</h2>
            </div>
			<div class="contentArea">
                <!-- 본문 콘텐츠 영역 -->
				<div class="bbs_wrap">
					<form  name="board_form" method="get" action="insert.php?liststyle=<?=$liststyle?>">
						<ul class="bbs_write_top">
							<li>
								<dl>
									<dt>닉네임</dt>
									<dd><?=$usernick?></dd>
								</dl>
							</li>
							<li>
								<dl>
									<dt><label for="subject">제목</label></dt>
									<dd><input type="text" id="subject" name="subject"></dd>
								</dl>
							</li>
							<li>
								<dl>
									<dt><label for="content">내용</label></dt>
									<dd>
										<div class="check">
											<input type="checkbox" name="html_ok" id="html_ok" value="y">
											<label for="html_ok">HTML 쓰기</label>
										</div>
										<div>
											<textarea name="content" id="content"></textarea>
										</div>
									</dd>
								</dl>
							</li>
						</ul>
					
						<div class="btn_wrap">
							<a href="list.php?page=<?=$page?>&liststyle=<?=$liststyle?>">목록</a>
							<button type="submit" class='active'>완료</button>
						</div>
					</form>
				</div>












				</div>
        </article>
    <? include '../common/sub_footer.html' ?>
</body>
</html>