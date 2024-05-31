let active_index = 0;
let len = $('.panel > li').length;
let enable_event = true;
let timer;

$('.next').on('click', function (e) {
	e.preventDefault();
	/*
    현재 on이라는 활성화 클래스가 붙어있는 순번을 찾아냄
    => 활성화 클래스가 붙은 순번을 변수에 current_index라고 담을 것임
    오리지널 순서는 0 1 2 3 4 0 1 2 . . .
    여기에서 current_index를 이동할 인덱스의 값과 비교하여
    방향을 설정해서 이동시키게 하는 방법으로 코딩이 되어야함
    */

	if (enable_event) {
		enable_event = false;
		let current_index = $('.panel>li').filter('.on').index();
		console.log(current_index);
		let next_index;
		if (current_index != len - 1) {
			next_index = current_index + 1;
		} else {
			next_index = 0;
		}
		active_index = next_index;
		// 위의 코드는 순환하는 슬라이드의 순번을 구해주는 코드
		// 최종 순번을 구한 값(next_index)을 전역변수인 active_index에 넣어서
		// 전체적인 슬라이드의 순번을 관리하게 함 -> 싱크를 맞추기 위해서
		show_next(active_index);
	}
});

/* 이동하는 방향에 따른 코드 */
// 다음으로 이동하는 코드
function show_next(index) {
	/* li 중에 활성화 클래스가 있는 li를 움직이게 함
    어떻게 움직이고 얼마동안 움직이고 움직인 후 행동은 animate(이안에 코딩함) */
	/* animate(무엇을 움직일지, 얼마동안, 움직인 후) */
	$('.panel>li')
		.filter('.on')
		.stop()
		.animate({ left: '-100%' }, 500, function () {
			$(this).removeClass('on').hide();
		});
	// 위의 코드는 현재 활성화 된 슬라이드 li를 옆으로(next방향으로)이동하는 코드

	// 이 다음 코드는 이후 슬라이드가 나타나게 하는 코드
	$('.panel>li')
		.eq(index)
		.show()
		.css({ left: '100%' })
		.animate({ left: '0%' }, 500, function () {
			$(this).addClass('on');
			enable_event = true;
		});
	$('.navi>li>a').removeClass('on');
	$('.navi>li').eq(index).children('a').addClass('on');
}

// prev 부분

$('.prev').on('click', function (e) {
	e.preventDefault();

	if (enable_event) {
		enable_event = false;
		let current_index = $('.panel>li').filter('.on').index();
		console.log(current_index);
		let prev_index;
		if (current_index != 0) {
			prev_index = current_index - 1;
		} else {
			prev_index = len - 1;
		}
		active_index = prev_index;
		show_prev(active_index);
	}
});
// 이전으로 이동하는 코드
function show_prev(index) {
	$('.panel>li')
		.filter('.on')
		.stop()
		.animate({ left: '100%' }, 500, function () {
			$(this).removeClass('on').hide();
		});

	$('.panel>li')
		.eq(index)
		.show()
		.css({ left: '-100%' })
		.animate({ left: '0%' }, 500, function () {
			$(this).addClass('on');
			enable_event = true;
		});
	$('.navi>li>a').removeClass('on');
	$('.navi>li').eq(index).children('a').addClass('on');
}

// 네비 버튼을 눌렀을 때 발생 조건에 따라서 함수를 호출함

$('.navi>li').on('click', function (event) {
	event.preventDefault();
	// ex) 현재는 5번이 보이고 2번을 누르는 상태

	if (enable_event) {
		enable_event = false;
		// 현재 활성화 클래스가 있는 인덱스를 구한다 => 5
		let current_index = $('.panel>li').filter('.on').index();

		// 타겟 인덱스를 구한다(네비 버튼을 가고자하는 타겟) => 2
		let target_index = $(this).index();

		// 중요!! 전역 변수와 싱크를 맞춰야 한다 //
		active_index = target_index;

		// 만약 활성화 인덱스와 타겟 인덱스가 같으면 아무 일이 일어나지 않음
		if (active_index == current_index) {
			enable_event = true;
			return;
		}

		// 만약 활성화 인덱스가 타겟 인덱스보다 크다면
		if (active_index > current_index) {
			show_next(active_index);
		}

		// 만약 활성화 인덱스가 타겟 인덱스보다 작다면
		if (active_index < current_index) {
			show_prev(active_index);
		}
	}
});

// 자동으로 롤링되는 슬라이드

$('#start').on('click', function () {
	// html 태그 속성을 변경하는 방법  attr( ) : 제이쿼리
	//  vanilla js에서는 getattribute, setattribute
	$('#start').attr('disabled', true);
	$('#stop').attr('disabled', false);
	// 3초 마다 함수를 반복적으로 실행하도록 web API에 요청하는 것
	timer = setInterval(function () {
		// 3항 연산자
		active_index != len - 1 ? active_index++ : (active_index = 0);
		show_next(active_index);
	}, 3000);
});

$('#stop').on('click', function () {
	$('#stop').attr('disabled', true);
	$('#start').attr('disabled', false);

	clearInterval(timer);
});
