$('#slide .container').prepend($('#slide .container .slideItem3'));
// $(특정대상) : 특정대상을 DOM에서 찾아달라는 의미의 코드
// $('#slide .container').append($('#slide .container .slideItem1'));

// var width = 100;
var height = 350;
var slide;

// setInterval은 특정 시간마다 함수 실행
//  setInterval(함수,시간)

slide = setInterval(function () {
	$('#slide .container > li:nth-child(1)').animate(
		{
			'margin-top': height * -1 + 'px',
		},
		600,
		function () {
			$('#slide .container').append($('#slide .container > li:nth-child(1)'));
			// ㄴ 맨 앞에 있는 사진을 잘라내어 맨 뒤로 보내 주는 코드
			$('#slide .container >li:nth-child(3)').css('margin-top', '0px');
			// ㄴ margin-left값의 기준점을 -800px에서 0px로 바꿔주는 코드
		}
	);
}, 3000);
