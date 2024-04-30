$('.gnb').hover(
	function () {
		// $(this).children('li').chilndren('.submenu').stop().slideDown();
		$(this).find('.submenu').stop().slideDown();
		$('#gnb_bg').stop().animate({ height: '100px' });
	},
	function () {
		// $(this).children('li').children('.submenu').stop().slideUp();
		$(this).find('.submenu').stop().slideUp();
		$('#gnb_bg').stop().animate({ height: '0px' });
	}
);
