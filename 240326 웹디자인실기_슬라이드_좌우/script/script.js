$('#slide .container').prepend($('#slide .container .slideItem3'));
//$(특정대상) => 특정대상을 dom에서 찾아달라는 의미의 코드
// $('#slide .container').append($('#slide .container .slideItem1'));
// $('#slide .container') == document.querySelector("#slide .container")

var width = 800;
var slide;

//setInterval은 특정 시간마다 함수를 실행합니다
//setInterval(함수,시간)
slide = setInterval(function () {
	$('#slide .container > li:nth-child(1)').animate(
		{
			'margin-left': width * -1 + 'px',
		},
		600,
		function () {
			$('#slide .container').append($('#slide .container > li:nth-child(1)'));
			$('#slide .container > li:nth-child(3)').css('margin-left', '0px');
		}
	);
}, 3000);
