'use strict';

//웹 페이지의 로드가 완료되었을 때 실행하는 메소드
// $(document).ready(function(){

// });

$(function(){ //위와 같으나 좀 더 축약된 형태

    //HTML요소객체에 접근 : $(CSS선택자)
    // --> jQuery객체를 반환해줌
    // --> jQuery라이브러리에 정의된 기능들을 사용할 수 있음
    // --> 하나의 요소 또는 여러 개의 요소를 반환
    console.log($('h1'));
    
    //html(): innerHTML과 같은 역할을 하는 '메소드(매개변수로 값 넘오오면 그 내용으로 값 적용할 수 있는것임)'
    console.log($('h1').html());

    //모든 h1요소의 내용을 '내용 변경하기!'로 변경  
    ///적용대상(jQuery객체배열에).모든내용에반복하여접근하게됨 <==반복문이 따로 필요 없음
    $('h1').html('내용 변경하기');

    //id가 'tit2'인 h1요소의 내용만 변경
    $('#tit2').html('두 번째 h1요소 접근!');    //아이디값가진 요소에 대해서만 접근

    //h1요소에 스타일 적용 : css(속성, 값) 메소드
    // $('h1').css('color','blue');              //모든h1요소 지정>> $('h1')
    // $('h1').css('font-size','16px');
    // $('h1').css('border','1px solid black')

    // $('h1').css('color','blue')                 //명령할대상을 맨 처음 한 번만 찾아서 적용 (위는 세번찾아서 적용==약간 더 느림)
    //        .css('font-size','16px')
    //        .css('border','1px solid black')
    //        .html('스타일 적용!')

    //css(객체) : 객체({key:value})로 스타일 적용
    $('h1').css({       //js []는 배열, {}는 객체(key와value구조)
        color:'blue',
        fontSize:'16px',
        border:'1px solid black'
    });

    //h1태그에 이벤트 적용: .on(이벤트종류, 콜백함수);
    $('h1').on('click', function(){
        // $('h1').html('클릭 이벤트 적용!');

        //this: 이벤트가 발생된 HTML요소의 정보를 저장하는 변수
        $(this).html('클릭 이벤트 적용!');

    });
});