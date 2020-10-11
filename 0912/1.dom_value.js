'use strict';

let input = document.getElementById('data');
let button = document.getElementById('btn');
let p = document.getElementById('view');

button.addEventListener('click',function(){
    //클릭했을 때? --> input태그에 입력된 값 접근 -> p태그에 적용
    //value: 입력태그(='입력요소객체')(input태그, select태그, textarea)에 입력된 값 접근or 수정
    let val = input.value;   // 접근    ///사용자가 값 입력했을때 그 값이 계속 담기고*3..는 속성
    
    p.innerHTML = val;                  ///innerHTML이용하여 val에 값 저장

    input.value = '';       // 빈 값으로 수정(초기화)

    button.disabled = true; // 버튼을 비활성화 상태로 변경

});

input.addEventListener('keyup', function(){         //반응이빠른 keyup(keypress,keydown 등 있음)
    let val = input.value;   // 접근
    
    p.innerHTML = val;  
});
