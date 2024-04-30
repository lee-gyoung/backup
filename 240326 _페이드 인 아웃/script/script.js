$('#slide .container li:gt(0)').hide();

setInterval(function () {
	$('#slide .container li:first-child')
		.fadeOut()
		.next('li')
		.fadeIn()
		.end()
		.appendTo('.container');
}, 3000);
