'use strict';

$(function(){
    //div요소를 클릭했을 때 class이름 추가/삭제
    $('div').on('click', function(){
        //attr(속성이름)    /////속성접근하는 메소드 attr (변수앞에 $써주는 암묵적 규칙)
        let $attr = $('div').attr('calss'); 
        let $this = $this.attr('class');

        if($attr === 'box-style-1'){
            $('div').addClass('box-style-2');
            $('div').removeClass('box-style-1');
        } else {
            $('div').addClass('box-style-1');
            $('div').removeClass('box-style-2');
        }
    });
});