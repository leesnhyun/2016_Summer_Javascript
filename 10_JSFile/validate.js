/**
 * Created by SH on 2016-08-06.
 */
function checkNum(){

    var input, num;
    input = document.getElementById('input');
    num = input.value;

    try {
        if( !num || isNaN(num) ){
            throw 'Err1';
        } else if ( num < 2 || num > 10 ){
            throw 'Err2';
        }

    } catch(e) {

        var msg = '';

        switch (e){
            case 'Err1' : msg = '숫자를 입력'; break;
            case 'Err2' : msg = '2와 10사이의 숫자를 입력'; break;
            default : msg = '알 수 없는 에러 발생'; break;
        }

        alert(msg);

    } finally {
        input.value = '';
        input.focus();
        alert('external js file!');
    }
}