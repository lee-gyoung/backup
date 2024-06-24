/*
쿠키란? 사용자의 컴퓨터 저장 정보를 의미함
정보가 발생하면 두군데 저장되는 경향이 있는데
클라이언트(사용자 컴퓨터)에 저장되는 정보를 쿠키라고 하고
서버에 저장되는 정보를 보통은 세션 혹은 쿠키라고 함
(간혹 쿠키 허용을 묻는 페이지는 서버가 우리에게 정보를 떠넘기는 것)

전체 로직: 팝업이 생성, 팝업 오늘 하루 안보기를 누르고 닫으면
쿠키를 생성해서 저장하고, 이 쿠키가 존재하는 동안 팝업을 안뜨게 하는 것
*/

let popup = document.querySelector('#popup');
let btnClose = popup.querySelector('.close');
let btnDel = document.querySelector('.del');
let btnView = document.querySelector('.view');

// 만약 쿠키가 있다면? 팝업을 안보이게 하고, 없으면 보이게 함
/*console.log(document.cookie);를 통해서 쿠키 현재 상황을 콘솔에 찍어보면
undefined=undefined 경=학생 today=done 이렇게 세 개가 존재하고 있음
이 문자열에서 우리가 찾는 쿠키가 있는지 알아보고 있으면 조건식을 참으로 하면 됨
문자열을 찾는 메소드는 대상.includes(찾는 문자열)이 있다
있으면 true, 없으면 false

또한 대상.indexOf(찾는 문자열)이 있는데
찾으면 찾은 문자열의 순번을 반환 예) 28
없으면 무조건 -1을 반환
*/

// let isCookie = document.cookie.includes('today=done');
let isCookie = document.cookie.indexOf('today=done');
console.log(isCookie);

if (isCookie == -1) {
	popup.style.display = 'block';
} else {
	popup.style.display = 'none';
}

btnView.addEventListener('click', () => {
	console.log(document.cookie);
});

// 쿠키 지우기
btnDel.addEventListener('click', () => {
	setCookie('today', 'done', 0);
});

btnClose.addEventListener('click', (e) => {
	e.preventDefault();
	let isChecked = popup.querySelector('input[type=checkbox]').checked;
	console.log(isChecked);
	if (isChecked) {
		// 참일 경우에만 쿠키를 만들어 줌
		setCookie('today', 'done', 1);
	}
	/* css의 스타일을 가져오는 방법
    html에 어떤 방법으로든 존재하면 혹은 css스타일 시트가 아니라면
    대상.style.해당css < 이렇게 가져옴

    css 스타일 시트에 존재하는 css를 가져올 때는
    대상.getComputedStyle.해당css < 이렇게 가져옴
    */
	popup.style.display = 'none';
});

function setCookie(name, value, due) {
	let today = new Date();
	console.log(today);
	// 변수에 현재 시간~날짜를 담음
	let useDate = today.getDate();
	console.log(useDate);
	today.setDate(useDate + due);
	console.log(today);
	let newDate = today.toGMTString();

	document.cookie = `${name}=${value}; path="/"; expires=${newDate}`;
	console.log(document.cookie);
}
