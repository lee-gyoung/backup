/*
반복문이란
조건식의 평가 결과가 참인 경우 코드 블록을 실행함
그 이후 조건식을 다시 재평가해서 여전히 참이면,
코드 블록을 다시 재실행하고 거짓이면 멈추는, 
즉 거짓일 때까지 반복적으로 실행하는 구문
*/

let str = 'hello world';
console.log(str);
console.log(str.length);
let str_l = 'l';
let counter = 0;

// 기본 for문
for (let i = 0; i < str.length; i++) {
	if (str[i] === str_l) counter++;
}
console.log(counter);
/*
for는 반복하겠다는 의미
(let i = 0; i < str.length; i++) 가 조건문
if (str[i] === str_l) 는 [i]의 자리에 h,e,l,l,o...를 대입

i=0으로 시작함, ()안의 평가를 시작하는 것
i=0이면 i < str.length를 평가했을 때 참이므로 {}안의 코드를 실행

if()라고해서 str[i]인데 i는 현재 0임
따라서 str[0]인 것.
str[i] === str_l 를 물어보는 것임
str[0] [h,e,l,l,o, ,w,o,r,l,d] 여기에서 0번째인
h이므로 str_l에 들어있는 l과 === 일치하지 않음
따라서 거짓으로 평가되므로 무시하고 아무일도 일어나지 않음
*/
