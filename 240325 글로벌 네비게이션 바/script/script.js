// $(function(){
//     // 이곳에 코드를 작성하면 바디가 html을 모두 읽고나서
//     // 이 안쪽의 코드를 실행함
// })

// gnb에 마우스가 호버가 되면
// gnb안의 .submenu를 선택해서 slideDown이라는 애니메이션을
// 적용시켜서 부드럽게 펼쳐지게 함

//gnb로부터 마우스가 떠나면
// gnb 안의 submenu 자식요소를 선택해서 slideuUp이라는
// 애니메이션을 적용시켜서 부드럽게 올라가게 함

/* 
$('.gnb > li') 는 클래스 gnb의 직계 자식으로 있는 li 모두를
선택한다는 뜻
*/
/* $('.gnb > li').hover(마우스가 들어왔을 때의 코드, 마우스가 나갔을 때의 코드);
 */
// $('.gnb > li').hover(
// gnb의 자식요소 li에 마우스를 올렸을 때
// =>li 4개에 모두 적용되는 코드
// 	function () {
// 		$(this).children('.submenu').stop().slideDown();
// 여기에서의 this는 4개의 li 중에 모두가 아니라
// 마우스가 올라가있는 1개의 li를 의미
// 그리고 children을 따라서 마우스가 올라간 그 중 한 li의
// 자식요소로 들어있는 submenu 하나를 찾아서 슬라이드 다운 시키는 것
// 	},
// 	function () {
// 		$(this).children('.submenu').stop().slideUp();
// 	}
// );

$('.gnb').hover(
	// gnb 자체에 마우스가 올라가면
	function () {
		// gnb 부분 중 마우스가 올라간 부분
		// gnb 안에 li 자식 요소를 모두 찾고, 또한 li의 자식요소인
		// submenu를 모두 찾음 (4개 모두)
		// 그리고 그 4개를 모두 슬라이드 다운 하는 것
		$(this).children('li').children('.submenu').stop().slideDown();
	},
	function () {
		$(this).children('li').children('.submenu').stop().slideUp();
	}
);
