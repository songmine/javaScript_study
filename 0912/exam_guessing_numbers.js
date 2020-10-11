'use strict';


//1.조작할(제어할) HTML객체 접근
let input = document.getElementById("answer");
let button = document.getElementById("btn");
let p_before = document.getElementById("before_result");
let p_result = document.getElementById("result");

//2.랜덤값 생성
let ran = parseInt(Math.random()*100 +1);
let count = 10;


const guessNumber = function guessNumber(){
    //  -기회 10번 체크
    if(count > 0) {
        //4.클릭 시 사용자가 입력한 값 접근(input태그에 입력된 값 가져오기)
        let val = parseInt(input.value);    //value는 String타입
        let msg = null;
        let before = '';    // null --> ''

        //5.접근한 입력된 값과 랜덤값 비교
        //  -같았을 때, 도전실패 : 버튼 비활성화, 멘트 출력)
        //  -클 때, 작을 때 : 이전결과출력, 멘트출력
        if(val===ran) {
            msg = '<span class="success">정답입니다!!!</span>';
            button.disabled = true;
        } else if(val > ran) {
            msg = '<span class="fail">작은 수를 입력하세요</span>';
            before += ' ' + val;
        } else if(val < ran) {
            msg = '<span class="fail">큰 수를 입력하세요</span>';
            before += ' ' + val;
        }

        p_before.innerHTML += before;
        p_result.innerHTML = msg;
        input.value = '';
        input.focus();  //input태그를 선택(input태그에 클릭하여 계속 선택하는 것처럼 커서 그 위에 있음)

        count -= 1;
    } else {
        p_result = '<span class="fail">도전실패...</span>';
        button.disabled = true;
    }       
};

//event객체: 
input.addEventListener('keyup', function(event){ //input태그는 기본적으로 엔터눌렀을때 전송되게 됨 이를막아주자~~
    // console.log(event.keyCode);

    if(event.keyCode === 13){

        guessNumber();

    }
});

//3.버튼에 클릭이벤트 적용
button.addEventListener('click', guessNumber)       //function(){
//});