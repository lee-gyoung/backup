// 탭메뉴를 클릭했을 때 함수를 실행하겠다는 의미
$('.tab > ul li').click(function () {
	// 1. html에서 on이 들어간 클래스 삭제

	$('.tab ul li').removeClass('on');
	// 클릭한 버튼에서 on을 삭제(공지사항, 갤러리 부분)
	$('.tab .conBox').removeClass('on');
	// 탭 내 컨텐츠 부분을 안보이도록 conbox에서 on을 삭제

	$(this).addClass('on');
	// 클릭한 메뉴에 on클래스를 붙여서 활성화 시킴

	$('#' + $(this).data('tab')).addClass('on');
	// $(this) < 이것의 의미처럼 클릭한 대상에서
	// .data('tab')) 이부분은 클릭한 대상의 data-tab속성의 값을
	// 가져와서 ($는 선택하는 것)
	//앞에 #을 붙이고
	// ---- 여기까지의 설명이 $('#' + $(this).data('tab') 이부분
	// 설명 앞에 $()이 붙어있으므로
	// 클릭한 대상의 data-tab속성의 값이랑 같은 아이디를 가진 대상을 찾아서
	// addClass('on') 즉 on클래스를 붙임
});
