
for(let num = 1; num <= 5; num++) {
    //조건식이 true 인 경우 반복 수행할 코드;
    console.log("통과!");
}

function check1(){

    let result= ""; // 빈문자열

    for(let num =1; num <=5; num++){
        // console.log(num);
        
        result += num;
        //result    =  result  + num;
        //  "1"     =    ""    +  1 (1턴)
        //  "12"    =   "1"    +  2 (2턴)
        //  "123"   =   "12"   +  3 (3턴)
        //  "1234"  =   "123"  +  4 (4턴)
        //  "12345" =   "1234" +  5 (5턴) 
    }

    console.log(result);
}

function check2(){

    for(let num=1; num <=10; num++){
        console.log(num);
    }
}

function check3(){
    for(let num=1; num <=20; num++){
        console.log(num);
    }
}

function check4(){
    for(let num=5; num <=15; num++)
    console.log(num);
}

function check5(){
    for(let num=1; num <=30; num +=2){
        
        console.log(num);
    }
}

function check6(){
    let sum = 0; //합계를 저장하기 위한 변수
    for(let num =1 ; num <= 10; num++) {// num 1~10변함}
        sum += num;
    }
    console.log(sum);
}



function sumFn(){
    //input에 작성된 값을 얻어와 저장
    const start= Number(document.getElementById("inputNumber1-1").value);
    const end= Number(document.getElementById("inputNumber1-2").value);
    
// 결과를 출력하기 위한 요소 얻어와 저장
    const result1 =document.getElementById("result1");
//start 부터 end 까지 1씩 증가하는 for 문
    let sum = 0;
    for(let num = start; num<= end; num++) { 
        sum += num;

    }

    result1.innerText = sum;
}

function executeFn2() {
    const start= Number(document.getElementById("inputNumber2-1").value);
    const end= Number(document.getElementById("inputNumber2-2").value);
    const val= Number(document.getElementById("inputNumber2-3").value);

    //결과 출력한 ul요소
    const ul = document.getElementById("result2"); //ul태그


    ul.innerHTML = ""; // 이전 ul에 작성된 내용을 모두 삭제
    //start 부터 end 까지 val씩  증가
    for(let num = start; num <= end; num += val){
        ul.innerHTML += `<li>${num}</li>`;

    }

}


    //요소.innerText = `<li>${num}</li>`; ->요소의 내용으로 문자열을 대입
    //(HTML) 태그를 해석하지 않고 문자열 그대로 보여줌
    //요소.innerHTML = `<li>${num}</li>`; 
    //-> HTML 태그를 해석해서 화면에 태그의 본 기능대로 출력


function executeFn3(){
    const input  = Number(document.getElementById("input3").value);// 입력된 값(단)
    const ul = document.getElementById("result3"); //결과를 출력할 요소 ul태그
    ul.innerHTML = "";// 이전내용 삭제

    //입력받은 단이 2~9 사이가 아닐 경우 "2~9사이만 입력해주세요" 알림창 띄우기
    if(input <2 || input >9){
        alert("2~9사이만 입력해 주세요");
        return; //return 뒤에 값을 쓰면 함수를 종료하고 호출한 곳으로 돌아가는 역할인데
                //현재는 값을 뒤에 쓰지 않고 함수 종료 정도로만 인식하는 역할을 함
    }           

    for(let num = 1; num <= 9; num++){
    // num이 1부터 인 이유는 구구단의 시작이 0*1~0*9로 시작하기 때문
    //단은 input 곱해지는 값 num으로 작성할 예정 += :누적시키는것
    ul. innerHTML += `<li>${input} x ${num} = ${input * num} </li>`;

    }
}    
/*다음 모양 출력하기
12345
12345
12345
12345 
*/

function check8(){
    
    //4바퀴 반복하는 for문
    for(let y= 1; y <= 4; y++){

        //"12345"를 출력하는 구문 만들기
        let str = ""; //결과 저장용 만들기
        for(let x =1 ; x <= 5; x++){
             str += x;
            //"12345"
        }

        console.log(str);
    }
}


function check9(){
    for(let y=1; y<=5; y++){
        let str = "";
        for(let x = 1; x <=y; x++){ //x가 y번째만큼 하나씩 늘어나야하기에
            str += x;
        }
        console.log(str);
    }
}

function check16(){
    //변수 선언만 해두기

    let val; //undefined

    //취소를 누르기 전까지 계속 반복
    //== 취소를 누르면 반복하지 않겠다(종료하겠다)

    while(val !== null){
        //!== : 동일 비교 연산자 (값과 자료형이 모두 다른경우 TRUE)
        //A!=B : A와 B의 값이 다른경우
        //=== : 값, 자료형이 모두 같은 경우 TRUE
    

        val = prompt("입력 후 확인"); // 변수에 prompt 값 대입
        // prompt 값 확인 누르면 입력한 값 들어오고 취소 누르면 null

        console.log(val);
    }   
}

function check17(){
    //메뉴가격
    const gimbap =3000;
    const ramen =3500;
    const donkkaseu =5000; 
    
    //주문 개수 카운트

    let gcount = 0; //김밥
    let rcount = 0; //라면
    let dcount = 0; //돈까스


    //prompt로 입력한 값을 저장할 변수 선언
    let input; //현재 상태 undefined
    
    //확인버튼 : 입력한 값 , 취소버튼 : null

    while(input !== null) { //취소 누르기 전까지 반복

        input = prompt("메뉴번호를 입력하세요!");

        switch(input){
            case "1" : gcount++; break;
            case "2" : rcount++; break;
            case "3" : dcount++; break;
            case null : alert("주문완료!"); break;
            default  : alert("메뉴에 작성된 번호만 입력해주세요"); break; 
        }
    }

    alert(`김밥:${gcount},라면:${rcount},돈까스:${dcount}`);
    let sum =(gcount * gimbap) + (rcount * ramen) + (dcount * donkkaseu);
    alert(`총가격: ${sum}원`);
}


function check18(){
    //1부터 10까지 출력
    let num = 1; 
    while(num < 11){
        console.log(num);

        num++;; //이걸 쓰지않으면 브라우저 멈출수 있음!
    }
    console.log('---')
    //10부터 1까지 1씩 감소

    let x= 10;
    while(x > 0){
        console.log(x);
        x--;;
    }
}