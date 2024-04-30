//변수설정 - 데이터, 이 페이지에서 사용하게 될 데이터를
// 효과적으로 운용하기 위해 변수에 동적인 변화를 일으킬
// 대상을 자바스크립트에 알려주도록 변수선언을 한다

let btns = document.querySelectorAll('.btns li');
// 버튼을 클릭했을 때 상황이 발생하므로 버튼을 찾아 변수에 넣어야 함

let h1 = document.querySelector('h1');
let img = document.querySelector('.showBox img');
let str = document.querySelector('strong');
let span = document.querySelector('span');

let total = btns.length;

span.innerText = total;
btns[1].addEventListener('click', (e) => {
	e.preventDefault();
	// a태그가 가지고있는 기본 이벤트를 막고자 쓰는 태그

	str.innerText = 1 + 1;

	// 클릭한 a태그 안에 href속성에 들어있는 이미지 주소를
	// 추출해서 변수에 담는다

	let imgSrc = btns[1].querySelector('a').getAttribute('href');

	img.setAttribute('src', imgSrc);

	let txt = btns[1].querySelector('a').innerText;
	h1.innerText = txt;

	btns[0].classList.remove('.on');
	btns[1].classList.add('.on');
});
