$('.gnb').hover(
	function () {
		$(this).children('li').children('.submenu').stop().slideDown();
	},
	function () {
		$(this).children('li').children('.submenu').stop().slideUp();
	}
);

$('#slide .container').prepend($('#slide .container li:nth-child(3)'));

var width = 1200;
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

$('.tab > ul li a').click(function () {
	// 1. html에서 on이 들어간 클래스 삭제
	$('.tab ul li a').removeClass('on');
	// 클릭한 버튼에서 on을 삭제(공지사항, 갤러리 부분)
	$('.tab .conBox').removeClass('on');
	// 탭 내 컨텐츠 부분을 안보이도록 conbox에서 on을 삭제

	$(this).addClass('on');
	// 클릭한 메뉴에 on클래스를 붙여서 활성화 시킴

	$('#' + $(this).data('tab')).addClass('on');
});

$('#con1>ul>li:nth-child(1)').click(function () {
	$('.popup').css('display', 'block');
});

$('button').click(function () {
	$('.popup').css('display', 'none');
});
