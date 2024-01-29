//아이디 값 html에서 얻어오기
//keyup이벤트 주기
// 정규표현식 (영어 소문자로 시작하고 영어 대/소문자, 숫자,-,_로만 
//이루어진 6~14글자사이 문자열인지 검사)하기

//형식이 일치할 경우 입력창의 배경색을 springgreen으로 변경



document.getElementById("id").addEventListener("keyup", (e)=>{
    
    const id=document.getElementById("id");
  
    const regExp = /^\[a-z]\[a-z][A-Z][0-9]\_,\-{6,14}$/;

    if( regExp.test(e.target.value)){
        span.style.backgroundColor = "springgreen";
    }


    
})