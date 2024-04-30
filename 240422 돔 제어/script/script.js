let hello = document.getElementById('text');

console.log(hello.innerText);
console.log(hello.innerHTML);
console.log(hello.textContent);

console.log(hello.firstChild);
console.log(hello.firstChild.nodeValue);
console.log(hello.lastChild);
console.log(hello.lastChild.nodeValue);
console.log(hello.lastChild.firstChild);
console.log(hello.lastChild.firstChild.nodeValue);

// 노드는 요소 안에 들어있는 독립적인 존재,
// 요소 노드가 있고 텍스트 노드가 있다
// 요소 노드에다가 노트값을 반환하라고 하면 못함
// 따라서 요소노드에서 안에 텍스트노드로 세분화해서 들어가야
// 그 요소노드 안에 있는 텍스트 노드 값을 반환할 수 있음

// DOM 조작 = 돔제어

let inHello = document.querySelector('#text');
console.log(inHello.textContent);
// 마크업을 무시함(다른 태그가 있어도 텍스트만 가져옴)
console.log(inHello.innerHTML);
// 마크업을 포함해서 가져옴(태그가 있다면 보존한 상태로 가져옴)

// inHello.addEventListener('click', () => {
// 	inHello.innerHTML = 'DOM을 변경해봅시다';
// 	// innerHTML, textContent는 삽입하는 과정임
// 	// 따라서 둘 다 사이드 스크립팅 공격에 취약함
// 	// 그래서 html5에서는 innerHTML, textContent가 삽입으로
// 	// 스크립트를 변경하는 경우(주의) 스크립트를 실행하지 않을 때가 있음
// });

// inHello.addEventListener('click', () => {
// 	inHello.textContent = 'DOM을 변경해봅시다';
// });

// 템플릿 리터럴
// es6 문법에서 생성된 문자를 넣는 방법으로, 삽입되는 스크립트의 보안에
// 적합한 방법임
inHello.addEventListener('click', () => {
	let tag = `DOM <p>을</p> <strong>변경해봅시다</strong>`;
	document.body.innerText = tag;

	// inHello = `DOM을 변경해봅시다`;
	// inHello += `DOM <p>을</p> <strong>변경해봅시다</strong>`;
});

/* DOM 동적으로 생성하기 */
// 1번 방법 - 번거롭고 고생하는 방법

let h1 = document.createElement('h1');
let a = document.createElement('a');
let href = document.createAttribute('href');
let target = document.createAttribute('target');

href.nodeValue = 'https://www.naver.com';
target.nodeValue = '_blank';

a.setAttributeNode(href);
a.setAttributeNode(target);
console.log(a);
a.innerText = 'naver';
h1.append(a);

console.log(h1);
document.body.append(h1);

// 2번 방법 - 템플릿 리터럴

let href2 = 'https://www.naver.com';
let target2 = '_blank';
let txt = 'naver';
let tagss = '';

tagss += `<h1>
            <a href=${href2} target=${target2}>
                ${txt}
            </a>
        </h1>`;
console.log(tagss);
document.body.innerHTML = tagss;
// document.body.append(tagss);

let domInfo = [
	{
		href: 'https://www.daum.net',
		target: '_blank',
		text: '다음',
	},
	{
		href: 'http://www.naver.com',
		tagret: '_blank',
		text: 'naver',
	},
	{
		href: 'https://www.google.co.kr',
		target: '_blank',
		text: 'google',
	},
];

let tags = '';

domInfo.map(function (_, index) {
	return (tags += `
            <h1>
                <a href=${domInfo[index].href}
                target=${domInfo[index].target}>
                ${domInfo[index].text}</a>
            </h1>
            `);
});
document.body.innerHTML = tags;
