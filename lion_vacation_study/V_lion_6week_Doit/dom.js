const box = document.getElementById('box');

// // css 스타일 제어
// box.style.backgroundColor = 'red';
// box.style.color = '#fff';
// box.style.width = '100px';
// box.style.height = '100px';
// box.style.marginLeft = '30px';
//     // box.style['margin-left'] = '30px';

// box.style.border = '15px solid #000';

// // css 클라스 제어
// box.className;
// box.className = 'bg-red';
// box.className = 'bg-blue';
// box.className = 'txt-pink';
// // className에서 기존의 class를 유지하면서 새로운 class 추가
// box.className = 'bg-blue txt-pink'
// // 적용할 class가 여러개 일 경우 className은 불편하기에 잘 사용되지 않음
// // -> classList 프로퍼터 사용

//Node - classList(2)
// box.classList.add('txt-white'); //추가
// box.classList.remove('txt-white'); //삭제

// box.classList.add('bg-green', 'txt-pint'); //여러 속성 추가

// box.classList.replace('bg-red', 'bg-blue'); //대체

// Node - classList(3)
//1초에 한 번씩 'bg-red'가 적용
// setInterval(() => {
//     box.classList.toggle('bg-red');
// }, 1000); //100이 1초

// //li태그 클릭 시 색깔 변경
// const color = document.getElementById('color');

// color.onclick = function(e) {
//     const target = e.target;

//     //tagName이 li가 아니면 return
//     if(target.tagName != 'LI') return;

//     target.classList.toggle('txt-pink');
// };