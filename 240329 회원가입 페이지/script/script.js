let toggleBtn = document.getElementById('toggleBtn');
let pwd1 = document.querySelector('#pwd1');

toggleBtn.addEventListener('click', () => {
	if (pwd1.type === 'password') {
		pwd1.setAttribute('type', 'text');
		toggleBtn.classList.add('hide');
	} else if (pwd1.type === 'text') {
		pwd1.setAttribute('type', 'password');
		toggleBtn.classList.remove('hide');
	}
});

// if(조건1의 내용){
//     조건 1이 참이면 실행하는 코드가 입력됨
// }else if(조건2의 내용){
//     조건 1이 거짓이면서 동시에 조건 2가 참이면 실행하는 코드
// }
