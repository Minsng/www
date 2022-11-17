$(document).ready(function () {
	$('.reg').css({ 'pointer-events': 'none', opacity: 0.3 });
    
	function blocking() {
		$('.reg').css({ 'pointer-events': 'none', opacity: 0.3 });
	}

	$('#id').keyup(function () {
		blocking();
		var id = $('#id').val(); 
		$.ajax({
			type: 'POST',
			url: 'check_id.php',
			data: 'id=' + id,
			cache: false,
			success: function (data) {
				$('#loadtext').html(data);
			},
		});
	});

	$('#nick').keyup(function () {
		blocking();
		var nick = $('#nick').val();
		$.ajax({
			type: 'POST',
			url: 'check_nick.php',
			data: { nick: nick },
			cache: false,
			success: function (data) {
				$('#loadtext2').html(data);
			},
		});
	});

	$('#pass').keyup(function () {
		blocking();
		var pass = $('#pass').val();
		$.ajax({
			type: 'POST',
			url: 'check_pass.php',
			data: 'pass=' + pass,
			cache: false,
			success: function (data) {
				$('#passtext').html(data);
			},
		});
	});

	$('#pass_confirm').keyup(function () {
		blocking();
		var passcon = $('#pass_confirm').val();
		var pass = $('#pass').val();
		$.ajax({
			type: 'POST',
			url: 'check_pass2.php',
			data: { pass: pass, passcon: passcon },
			cache: false,
			success: function (data) {
				$('#passcontext').html(data);
			},
		});
	});

	$('#name').keyup(function () {
		blocking();
		var name = $('#name').val();
		$.ajax({
			type: 'POST',
			url: 'check_name.php',
			data: { name: name },
			cache: false,
			success: function (data) {
				$('#nametext').html(data);
			},
		});
	});

	$('#hp1, #hp2, #hp3').keyup(function () {
		blocking();
		var tel = $('#hp1').val() + $('#hp2').val() + $('#hp3').val();
		$.ajax({
			type: 'POST',
			url: 'check_tel.php',
			data: { tel: tel },
			cache: false,
			success: function (data) {
				$('#teltext').html(data);
			},
		});
	});
});