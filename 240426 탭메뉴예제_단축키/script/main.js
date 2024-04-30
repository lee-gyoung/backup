// $(document).ready(function(){
//     이곳에 제이쿼리 문법에 맞는 코드를 작성함
// })
// => defer와 같은 역할

$('#tabMenu>ul>li>a')
	.click(function (e) {
		e.preventDefault();
		// a태그에 기본으로 들어있는 링크 이벤트를 없애줌
		$('#tagName>span').text($('#tabMenu>ul>li>a').filter(this).text());
		console.log($('#tabMenu>ul>li>a').filter(this).text());
		/*탭 메뉴의 버튼을 클릭하면 > a태그에 들어있는 이벤트를 막고 >
    탭 메뉴의 클릭한 대상의 안에 있는 텍스트를 가져오는 코드
    
    $('#tagName>span').text()
    탭 메뉴의 버튼을 클릭할 시 tagName 안에 span 태그의 글씨를 ()안의 값으로
    변경하는 코드

    $('#tagName>span').text($('#tabMenu>ul>li>a').filter(this).text());
    위의 두개의 코드를 합쳐서
    tagName 안에 span 태그 글자를 내가 클릭한 탭 메뉴의 글자로 변경함
    */

		// console.log($(this.hash));
		// 클릭한 a태그 안에 있는 #으로 시작하는 내용을 찾음

		// $(this.hash).siblings().hide();
		// this.hash는 this에서 #가 붙은 애를 찾는 것 = 여기서는 #tabMenu
		// siblings는 대상의 형제를 찾음
		// 여기서는 포토샵 클릭 시 일러스트 내용을 안보이게 하는 것

		$(this.hash).siblings().hide().end().show(0);
		// .end()는 앞의 코드를 마친 뒤라는 의미
		// show()는 $(this.hash)에 연결된 내용으로 클릭한 대상을 뜻함
		// 따라서 show()는 클릭한 대상을 보이라는 뜻
		// show()안의 0은 '즉시' 보여준다는 뜻 (숫자가 커지면 천천히)
		// 다 합치면 클릭한 대상의 형제의 내용은 숨기고 클릭한 대상을 보이게 하는 코드

		$('#tabMenu>ul>li>a').click(function () {
			$(this).addClass('on');
		});

		$('#tabMenu>ul>li>a').removeClass('on');
	})
	.filter(':eq(0)')
	.click()
	.addClass('on');
// .filter(":eq(0)").click().addClass("on");

// 검색 부분 코딩

$('#inputs').keyup(function () {
	let key = $(this).val();
	// input태그에 작성된 밸류값을 key라는 변수에 대입함 (val이 value)
	let temp = $("tr>td>span:contains('" + key + "')");
	console.log(temp);
	$('tbody').children('tr').hide();
	// 인풋에 키보드 이벤트가 일어나면 tbody 안을 깨끗히 지우고
	// 이후 검색된 내용이 들어있는 tr만 보이게 할 예정
	$(temp).parent().parent().show();
});
