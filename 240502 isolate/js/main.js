window.addEventListener('load', function () {
	//1. 플러그인을 적용해서 아티클들을 맞춰정렬하기
	const grid = new Isotope('section', {
		itemSelector: 'article',
		colomnWidth: 'article',
		transitionDuration: '0.5s',
	});
	//2. 버튼에 이벤트를 걸어서, sort하기
	// let btns = this.document
	let btns = document.querySelectorAll('main ul li');

	for (let el of btns) {
		el.addEventListener('click', (e) => {
			e.preventDefault();
			// e.currentTarget는 클릭한 대상 즉 li를 의미함
			// li안에 있는 a태그를 찾고 a태그가 갖고 있는 href 속성 안의 내용을 변수에 담음
			let sort = e.currentTarget.querySelector('a').getAttribute('href');

			grid.arrange({
				filter: sort,
			});

			for (let el of btns) el.classList.remove('on');
			// 어떤 버튼을 누르든지 on클래스를 지워서 색상을 없앰
			// 내가 클릭한 li에 on클래스를 부여해서 색상을 넣어야함
			e.currentTarget.classList.add('on');
		});
	}
});

// window.addEventListener("load",()=>{
//     let btn = document.querySelector();
// })
// window.addEventListener("load",function(){
//     let btn = this.document.querySelector();
// })

// var iso = new Isotope(elem, {
// 	// options
// 	itemSelector: '.grid-item',
// 	layoutMode: 'fitRows',
// });
