// gnb영역 중에 2depth 메뉴 중 제일 큰 높이값을 구해서 변수에 담음
// -> bgGnb를 동적으로 생성할 때 css로 해당 변수를 높이값으로 부여
let ht_arr = [];
let ht_max = 0;
let speed = 500;

$('#gnb>li').each(function (i) {
	ht_arr.push($(this).children('ul').height());
	ht_max = Math.max(ht_max, ht_arr[i]);
	// math라는 객체는 계산을 담당함
	// 지금은 최대값을 구하는 용도로 사용함
});

$('#gnb').on('mouseenter', function () {
	// bgGnb를 동적으로 만드는 코드를 작성하고
	// ul과 bgGnb를 동시에 slideDown되게 함
	// (bgGnb를 동적으로 만들면서 정확한 css동작이 이루어지지 않음
	// 따라서 생성과 동시에 css를 입혀주어 해결해야함)
	$('#gnb').prepend(
		$('<div class="bgGnb">').css({
			height: ht_max,
			position: 'fixed',
		})
	);

	// $('#gnb>li>ul') = $('#gnb').children('li').children('ul')
	$('#gnb>li>ul').stop().slideDown(speed);
	$('.bgGnb').stop().slideDown(speed);
});

$('#gnb').on('mouseleave', function () {
	$('#gnb>li>ul').stop().slideUp(speed);
	$('.bgGnb')
		.stop()
		.slideUp(speed, function () {
			$(this).remove();
		});
});

$('#gnb>li').on('mouseenter', function () {
	$(this).children('a').addClass('on');
});
$('#gnb>li').on('mouseleave', function () {
	$(this).children('a').removeClass('on');
});
