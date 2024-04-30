$('.gnb').hover(
	function () {
		$(this).children('li').children('.submenu').stop().slideDown();
	},
	function () {
		$(this).children('li').children('.submenu').stop().slideUp();
	}
);

$('#slide .inner .container').prepend(
	$('#slide .inner .container .slideItem3')
);

var width = 1200;
var slide;

slide = setInterval(function () {
	$('#slide .inner .container > li:nth-child(1)').animate(
		{
			'margin-left': width * -1 + 'px',
		},
		600,
		function () {
			$('#slide .inner .container').append(
				$('#slide .inner .container > li:nth-child(1)')
			);
			$('#slide .inner .container > li:nth-child(3)').css('margin-left', '0px');
		}
	);
}, 3000);

$('.board > ul li').click(function () {
	$('.board ul li').removeClass('on');
	$('.board .conBox').removeClass('on');
	$(this).addClass('on');
	$('#' + $(this).data('tab')).addClass('on');
});
