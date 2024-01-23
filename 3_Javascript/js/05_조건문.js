//if - 양수인지 검사
const input1 =document.getElementById("input1");

function check1(){
    const value =Number(input1.value);//입력받은 값
    
    if(value > 0) {
        alert("양수입니다");  
        //value가 0보다 커서 true인 경우
            
    }

    if(value <= 0) {
         alert("음수입니다");
        //value가 0보다 작거나 같아서 true인 경우
        //-> value가 양수가 아닌경우        
    }
 }
//if -else -> 홀짝 판별하기
function check2(){
    // 난수 발생 : Math.random()
    // 난수 범위 : 0 < = Math.random() < 1 (소숫점 단위)

    // 0~100사이 난수

  const randomNumber = Math.floor(Math.random() * 101);//내림처리하는 방법
  
  if(randomNumber % 2 == 1) { // 홀수
    alert(`${randomNumber}는 홀수 입니다`);
    } else{ //홀수가 아닌경우== 짝수
alert(`${randomNumber}는 짝수입니다`);
    }

} 

// -3 ~ 3사이 난수를 발생시켜 양수, 음수, 0판별

function check3(){

    const randomNumber = Math.floor( Math.random() * 7) - 3;

    let message = randomNumber + "은/는";

    if(randomNumber == 0){

       //message = message + "0 입니다"; 

       message += "0 입니다";
    } else if (randomNumber > 0) { //양수인 경우
        message +="양수입니다";

    }  else { //0도 아니고, 양수도 아닌경우 ==음수인 경우
        message += "음수입니다";
    }

    alert(message);
}

//어린이, 청소년, 성인 구분하기
const inputAge = document.getElementById("inputAge");

function check4() {

    //입력한 나이 값 얻어오기
    const age =Number(inputAge.value);

    console.log("age",age);

    console.log(inputAge.value.length);

    //"문자열".length : 문자열의 길이

    // 입력된 나이의 길이가 0인 경우 == 입력 안한 경우

    if(inputAge.value.length == 0){
        alert("미입력");
    } else { //어떤 값이든 입력한 경우 -> 이때 어린이, 청소년, 성인 검사

        //중첩 if문

        if(age < 0 || age> 150 ) {//0~150 사이가 아닌경우
            alert("잘못 입력 하셨습니다");
        } else if (age >= 0 && age <= 13) { //어린이
            alert("어린이");
        } else if (age <=19 ){ //청소년
            alert("청소년");
        } else {//성인
            alert("성인");
        }
    }

}

// switch 문을 이용한 계산기

const number1 =document.getElementById("number1");
const number2 =document.getElementById("number2");
const calcResult= document.getElementById("calcResult");

//clac()안에 변수명은 어떤걸로 써도 상관없음 
//매개변수 (Parameter) : 함수 호출 시 전달되는 값을 저장하는 변수

// ex)  매개변수가 op일때, cale ('+') '+'값이 op변수에 저장됨
function calc(op){
    console.log(op);

    const v1 =Number(number1.value);
    const v2 =Number(number2.value);

    //switch(식)에서 "식"은 다양한 값이 나타날 수 있는 변수 또는 계산식
    
    let result; //결과 저장 변수 선언

    switch(op){
        //op 값에 따른 처리 case 작성
        //->case에 break; 를 작성하지 않으면 멈추지 않고 다음 case로 넘어간다
        case '+': result =v1 + v2; break; 
        case '-': result =v1 - v2; break;
        case '*': result =v1 * v2; break;
        case '/': result =v1 / v2; break;
        case '%': result =v1 % v2; break;

        // 맞는 case가 없을 경우에 적용할 기본 값 (else)
        default : result = "잘못된 연산자"; break;
    }
    

    // if 문 버전

    //  if(op=='+'){
    // calcResult.innerText =v1+v2;
    // } else if (op=='-'){
    // calcResult.innerText =v1-v2;
    // }else if (op=='*'){
    // calcResult.innerText =v1*v2;
    // }else if (op=='/'){
    //   calcResult.innerText =v1/v2;
    // }else if (op=='%'){
    //  calcResult.innerText =v1%v2;
    // }else{
    //   calcResult.innerText = "잘못된 연상자";
    // }


    calcResult.innerText =result;
}


