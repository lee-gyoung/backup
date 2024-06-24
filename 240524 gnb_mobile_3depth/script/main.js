$('#gnb>li>a').on('click', function (e) {
	e.preventDefault();
	// 이미 열려있는 li를 닫는 코드
	$('#gnb>li>ul>li>a').removeClass('on');
	$('#gnb>li>ul>li>ul').slideUp();

	let isOn = $(this).hasClass('on');
	if (isOn) {
		//현재 클릭한 첫번째 depth인 a태그에 on클래스가 있다면
		// on을 제거하고 slideUp 열려있는 ul을 닫아준다
		$(this).removeClass('on');
		$(this).next('ul').stop().slideUp();
	} else {
		$('#gnb>li>a').removeClass('on');
		$('#gnb>li>ul').stop().slideUp();
		// 위의 반대
		$(this).addClass('on');
		$(this).next('ul').stop().slideDown();
	}
});

$('#gnb>li>ul>li>a').on('click', function (e) {
	e.preventDefault();

	let isOn = $(this).hasClass('on');
	let isDepth = $(this).next('ul').length;
	if (isDepth) {
		if (isOn) {
			$(this).removeClass('on');
			$(this).next('ul').stop().slideUp();
		} else {
			$('#gnb>li>ul>li>a').removeClass('on');
			$('#gnb>li>ul>li>ul').stop().slideUp();

			$(this).addClass('on');
			$(this).next('ul').stop().slideDown();
		}
	}
});
