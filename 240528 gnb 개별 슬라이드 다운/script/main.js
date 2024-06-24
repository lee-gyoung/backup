$('#gnb>li').on('mouseenter', function () {
	$(this).children('ul').stop().slideDown();
	$(this).children('a').addClass('on');
});

$('#gnb>li').on('mouseleave', function () {
	// $(this).children('ul').stop().slideUp();
	$(this).find('ul').stop().slideUp();
	// find는 자손에서 찾는 선택자
	// children은 직계 자손만 찾는 선택자
	$(this).children('a').removeClass('on');
});
