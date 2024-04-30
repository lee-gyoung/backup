/* 이전처럼 toggle로는 코딩이 안됨
toggle은 클릭한 대상이 유지되어야 하는데 지금 상황에서는 클릭하면 안보이기 때문
*/

$('.btnCall').click(function () {
	$('.menuMo').addClass('on');
});
$('.close').click(function () {
	$('.menuMo').removeClass('on');
});

let offset = $('#header_wrap').offset();

console.log(offset.top);
// top과 0은 같은 의미임

$(window).scroll(function () {
	// console.log($(document).scrollTop());
	if ($(document).scrollTop() > offset.top) {
		$('#header_wrap').addClass('on');
	} else {
		$('#header_wrap').removeClass('on');
	}
});
