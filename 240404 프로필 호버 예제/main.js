// 브라우저 자체에 load라는 이벤트 발생 시 함수를 실행함
window.addEventListener('load', () => {
	let imgs = document.querySelectorAll('.pic img');
	console.log(imgs);
	imgs.forEach((el) => {
		let card = el.closest('.cards');
		let colorThief = new ColorThief();
		let colorPalette = colorThief.getPalette(el, 10);
		let mainColor = colorThief.getColor(el);
		console.log(colorPalette);
		card.style.background = `linear-gradient(45deg,rgb(${mainColor}) 50%, rgb(${colorPalette[2]}))`;
	});
});

// 원시값
// let aaa = 1;
// let bbb = 2;
// let ccc = 3;

// 참조값
// 참조값 - 배열, 객체

// 배열 : 비슷한 종류의 값을 묶어서 표현하는 것
// ex) 과일에 속하는 사과, 바나나, 오렌지 등을 묶은 것

// 객체 : 서로 다른 종류의 값을 묶어서 표현하는 것
// ex) 한 사람을 나타내는 이름, 키, 성별, 거주지 등을 묶은 것
