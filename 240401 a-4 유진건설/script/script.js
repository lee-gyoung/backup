$('#gnb').hover(
	function () {
		$(this).find('.submenu').stop().slideDown();
		$('.bgGnb').stop().animate({ height: '150px' });
	},
	function () {
		$(this).find('.submenu').stop().slideUp();
		$('.bgGnb').stop().animate({ height: '0px' });
	}
);

$('#slide .frame li:gt(0)').hide();

setInterval(function () {
	$('#slide .frame li:first-child')
		.fadeOut()
		.next('li')
		.fadeIn()
		.end()
		.appendTo('.frame');
}, 3000);

$('.notice>.content>ul>li:nth-child(1)').click(function () {
	$('.popup').css('display', 'block');
});
$('button').click(function () {
	$('.popup').css('display', 'none');
});
