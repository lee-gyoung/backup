// 화면에서 스크롤 이벤트가 발생하는 경우 {}안의 코드를 실행하라는 뜻
// (스크롤은 "window에만" addEventListener를 적용할 수 있음)
let sections = document.querySelectorAll('main section');
let sections_array = Array.from(sections);
// console.log(sections);
// console.log(sections_array);
let lis = document.querySelectorAll('ul li');
let lis_array = Array.from(lis);
// console.log(lis_array);
let position_array = [];
let base = 300;
let box = document.querySelector('.box');
setPosition();
console.log(position_array);
console.log(sections[0].offsetTop);
console.log(sections[1].offsetTop);
console.log(sections[2].offsetTop);
console.log(sections[3].offsetTop);
function setPosition() {
	for (let el of sections_array) {
		position_array.push(el.offsetTop);
	}
}

window.addEventListener('scroll', () => {
	// let scroll = window.scrollY;
	// let scroll = window.pageYOffset;
	// let scroll = document.documentElement.scrollTop;
	let scroll =
		window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
	box.style.left = `${(scroll - position_array[2]) * 2}px`;
	// 크로스 브라우징 (웹 호환성)
	// 브라우저의 버전과 css 혹은 js의 버전에 따라서 호환이 안되는 문제나
	// 브라우저의 해석 특성상 특정 css, js가 적용되지 않는 이슈가 있음
	// 이때 호환되지 않는 내용도 커버할 수 있도록 하는 작업을 크로스 브라우징이라고 함

	// if (scroll < 1000) {
	// 	for (let i = 0; i < lis.length; i++) lis[i].classList.remove('on');
	// 	lis[0].classList.add('on');
	// 	sections[0].classList.add('on');
	// } else if (scroll < 2200) {
	// 	for (let i = 0; i < lis.length; i++) lis[i].classList.remove('on');
	// 	lis[1].classList.add('on');
	// 	sections[1].classList.add('on');
	// }

	// map 메소드를 사용한 반복문
	sections_array.map((el, index) => {
		if (scroll + base >= position_array[index]) {
			for (let i = 0; i < 4; i++) {
				lis_array[i].classList.remove('on');
				sections_array[i].classList.remove('on');
			}
			lis_array[index].classList.add('on');
			sections_array[index].classList.add('on');
		}
	});
});
