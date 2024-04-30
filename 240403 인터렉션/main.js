// vanilla js ver.
let gallery = document.querySelector('.gallery');
let btn = document.querySelector('button');

btn.addEventListener('click', function () {
	gallery.classList.toggle('on');
});

/*
js는 html, css의 요소들을 변경하거나 움직이는 동작을 수행하도록 하는
컴퓨터 언어.
이 동작을 브라우저가 인식해서 사용하도록 하려면 대상을 콕 집어서 정확하게
지정하고, 동작도 정확하게 명령해야 작동함
*/

// 제이쿼리 ver.
var $gallery = $('.gallery');
var $btn = $('button');
