let panel = document.querySelector('.panel');
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let enable_event = true;
let delay = convertSpeed(panel.children[0]);
// children으로 가져오면 유사 배열의 형태로 가져옴
let startX;
let isTouching = false;

next.addEventListener(
	'click',
	moveNext
	// 밀어내기 식 슬라이드
	// 전체 영역이 존재한다면 처음이나 마지막의 요소를
	// 마지막 혹은 처음으로 넣게되면 공간은 정해져 있으므로
	// 각 요소들이 밀려서 마치 슬라이딩 되는 것으로 유도할 수 있음
);

prev.addEventListener('click', movePrev);

/* 
prev.addEventListener('click', movePrev);
=> 함수를 호출해서 함수값이 아닌 함수 동작만 호출하는 내용

prev.addEventListener('click', movePrev());
=> 함수의 실행결과값을 반환하는 것

=> 따라서 함수의 결과값을 사용하는지, 동작을 사용하는지에 따라 다르게 써야함
*/

function moveNext() {
	if (!enable_event) return;
	// enable_event가 거짓이면 return을 만나 이하의 구문이 전부 무시
	// enable_event가 참이면 if문 자체가 무시
	enable_event = false;
	panel.append(panel.firstElementChild);
	// 슬라이드 동작 이후 true로 다시 재할당을 해주어야 이벤트가 동작됨
	// 제이쿼리는 작업의 시간과 동작 순서를 지정할 수 있는 메서드가 있지만
	// 바닐라js는 지정하는 메서드가 제이쿼리처럼 동작하지 않음
	// 따라서 setTimeout이라는 web API에 있는 비동기 작업을 사용해야함
	setTimeout(() => {
		enable_event = true;
	}, delay);
	// webAPIs 를 통해서 0.5초 뒤에 enable_event = true를 적용하는
	// 코드를 작성할 수 있음
	// 하지만 500이 고정된 값으로 적용되면 유지보수에 도움이 되지 않음
	// 따라서 500이 의미하는 transition duration을 css에서 구해서
	// 가져오는 함수를 만들어 사용하면 됨
}
function movePrev() {
	if (!enable_event) return;

	enable_event = false;
	panel.prepend(panel.lastElementChild);

	setTimeout(() => {
		enable_event = true;
	}, delay);
}

function convertSpeed(el) {
	// 이 함수의 목적은 el이라는 대상이 가지고 있는 transition duration의 값을
	// css에서 캐오는 것
	// parseInt() : ()안의 값을 정수로 변환하는 내부 메서드
	// parseFloat() : ()안의 값을 실수로 변환하는 내부 메서드
	// 형변환까지 고려함. 예) 0.5s

	/*
    스타일을 가져오는 방법 2가지
    1. 외부 스타일시트 파일 안 (css)에 있는 스타일을 가져오는 방법
    getComputedStyle
    2. index에 인라인으로 적혀있는 css스타일을 가져오는 방법
    style
    */
	return parseFloat(getComputedStyle(el).transitionDuration) * 1000;
}

// 웹에서 드래그 했을 때
// 드래그의 의미에서 마우스 관련 이벤트
// 드래그 시작지점 : mousedown, 드래그 중 : mousemove, 드래그 종료지점 : mouseup
panel.addEventListener('mousedown', (e) => {
	console.log(e.clientX);
	startX = e.clientX;
	isTouching = true;
	// 기준점이 정확해야하기 때문에 전역에서 false로 지정하고
	// 정확한 지점이 있는 mousedown에서 true로 바꿔주는 것임
});

panel.addEventListener('mousemove', (e) => {
	if (!isTouching) return;
	let mouseX = e.clientX;
	console.log(mouseX);
	let mouseDiff = startX - mouseX;

	if (mouseDiff > 50) {
		moveNext();
		isTouching = false;
	} else if (mouseDiff < -50) {
		movePrev();
		isTouching = false;
	}
});

panel.addEventListener('mouseup', (e) => {
	isTouching = false;
});

// 터치 이벤트
// touchstart, touchmove, touchend
panel.addEventListener('touchstart', (e) => {
	console.log(e.clientX);
	startX = e.touches[0].clientX;
	isTouching = true;
});

panel.addEventListener('touchmove', (e) => {
	if (!isTouching) return;
	let touchX = e.touches[0].clientX;
	console.log(mouseX);
	let touchDiff = startX - touchX;

	if (touchDiff > 50) {
		moveNext();
		isTouching = false;
	} else if (touchDiff < -50) {
		movePrev();
		isTouching = false;
	}
});

panel.addEventListener('touchend', (e) => {
	isTouching = false;
});
