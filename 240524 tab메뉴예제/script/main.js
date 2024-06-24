$(document).ready(function () {
	// $("#title ul li").on("click",(){})
	$('#title ul li').click(function () {
		$('#title ul li').removeClass('active');
		// 내가 클릭한 li만
		$(this).addClass('active');
		// 대상.attr(속성이름) -> 해당 속성을 대상에서 찾아서 가져옴
		// 대상.attr(속성이름, 변경할 내용) -> 해당 속성을 찾아서 변경됨
		let data = $(this).find('div').attr('data-tab');
		$('#coffee, #dessert, #sidemenu').removeClass('active');
		$(data).addClass('active');
	});
});
