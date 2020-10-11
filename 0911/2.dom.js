'use strict';   //코드의 문법을 정확하게 작성할 수 있도록 설정해주는 코드

// let a = 10;
// console.log(a);

//id가 'txt'인 p요소의 값을 콘솔창에 출력
let p = document.getElementById('txt'); //여기서 p는 HTML요소객체 타입

console.log(p);


//innerHTML: HTML요소 객체에 저장된 값을 접근하거나 변경시 사용하는 속성
//
//요소에 저장된 값을 저장하는 속성
console.log(p.innerHTML);

//요소에 저장된 값을 다른 값으로 변경 (텍스트or텍스트+태그 와 같은 형태로 적용 가능하다!)
p.innerHTML = '<h1>DOM 다루기!</h1>';

//=================================================================
//1.HTML요소객체 접근(p, button2개)
//아이디를 통해 접근하는것이므로 #쓰지 않음(이전에는 선택자(_querySelect만 유일하게쓸수있음)를 값으로 받기때문에 #을 무조건 썼던것)
let p2 = document.getElementById('num'); 
let increBtn = document.getElementById('increBtn'); 
let decreBtn = document.getElementById('decreBtn');
//2.Button객체에 이벤트 적용하기
//- p요소에 저장된 값 접근 -> 정수타입으로 변환 -> +1 or -1 되게 하기
//  -> p요소의 값을 변경
increBtn.addEventListener('click', function(){
    let num = parseInt(p2.innerHTML);
    p2.innerHTML = num + 1;
});

decreBtn.addEventListener('click', function(){
    let num = parseInt(p2.innerHTML);

    //num이 0보다 클 경우에만 감소
    if(num > 0){
        p2.innerHTML = num - 1;
    }
});

