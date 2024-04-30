let red = document.getElementsByClassName('red');
console.log(red);

for (let i = 0; i < red.length; i++) {
	red[i].className = 'blue';
}
console.log(red);

/*
 HTMLCollection(3) [li.red, li.red, li.red]
 getElementsByClassName , getElementsByTagName 등
 콘솔에 HTMLCollection으로 반환이 되는 것들은
 html 컬렉션에서 반복을 돌게 되면 실시간으로 변경이 됨
 따라서 0인덱스에 클래스값을 red에서 blue로 변경하는 순간
 동시에(실시간으로) red라는 변수에 담은 getElementsByClassName('red')의
 내용과 일치하지 않게 됨 따라서 변수 red에서 실시간으로 탈락됨

 탈락하고나서 1인덱스였던 li가 순식간에 0인덱스가 되어버림
 따라서 반복문은 이제 0을 지나 1인덱스를 반복할 차례가 되고
 1인덱스였던 지금0인덱스인 li는 반복을 하지 않고 건너뛰어서
 2인덱스였던 지금1인덱스인 li가 반복해서 blue로 변경되고
 더이상 반복할 것이 없어 종료됨
 즉 모든 요소가 반복되지않는 불완전한 반복문이 되어버림
 */

let reds = document.querySelectorAll('.red');
console.log(reds);

for (let i = 0; i < red.length; i++) {
	red[i].className = 'blue';
}
console.log(reds);

/*
 실시간이 아니라 처음 셀렉팅하는 그 순간에 고정적으로 노드 객체를 반영함
 따라서 중간에 변경이 되어도 실시간이 반영된 html컬렉션처럼 결과가 달라지지 않는 것
 */

//  =>요약 : 반복문을 사용하려면 querySelectorAll, querySelector과 같이
// nodeList로 반환하는 메서드로 가지고 온 대상만을 사용해야함

// let list = document.getElementById('list');
// console.log(list);

// let redChild = list.childNodes;
// console.log(redChild);

let main = document.getElementsByTagName('main');
console.log(main);

let item1 = document.getElementsByClassName('item1');
console.log(item1);

let item3 = document.getElementById('item3');
console.log(item3);

let ul = document.querySelector('ul');
console.log(ul);
let lis = document.querySelector('#lis');
console.log(lis);

let lis_node = lis.previousElementSibling;
console.log(lis_node);
let lis_nodes = lis.previousSibling;
console.log(lis_nodes);

let lis_child = lis.childNodes;
console.log(lis_child);
let lis_childs = lis.children;
console.log(lis_childs);

console.log(lis.firstElementChild);
console.log(lis.firstChild);

console.log(lis.lastElementChild.previousSibling);
console.log(lis.lastElementChild.previousElementSibling);

console.log(
	lis.lastElementChild.previousSibling.previousSibling.previousSibling
);
console.log(lis.lastElementChild.previousElementSibling.previousSibling);
