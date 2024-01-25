function check1(){
    //1부터 10까지 1씩 증가하다가 5가 되면 멈춤
    for(let i =1; i <=10; i++){
        console.log("i", i);

        if(i == 5) break; //한줄만 있는 코드면 {}안써도됨
    }

}

//무한 반복하는 while문 멈추기
function check2(){
    let i =1;
    //i가 10초과시 멈추게 할예정
    while(true){
        //true일때 반복수행할 코드 작성

        console.log("i",i++);

        if(i > 10) {
            break;
        }
    }
}

// countinue 확인하기
function check3(){
    //1부터 20까지 출력. 단 3의 배수는 건너뛰기
    for(let i = 1; i<= 20; i++){
       
        //3의 배수인 경우
        
        if(i % 3 == 0) continue;
    // 3의 배수인 경우 아래코드는 수행하지 않음.
        console.log("i:", i);
    }
}
//1부터 30까지 1씩 증가하며 출력 
//단, 홀수 또는 10의 배수는 건너뛰기
function check4(){
    for(let i=1; i <=30; i++){
        if(i % 2 == 1 ||i % 10 == 0 ) continue;
    
        console.log("i:", i);
    }
    
}
 
// 0~9까지 5줄 출력
//-각 줄에서 4의 배수는 건너뛰기
//-3번째 줄 출력 후 멈추기
function check5(){
    for(let row = 1; row<=5; row++){
        let str = "";
        for(let col = 0; col <=9; col++){
            str += col;
        //을 제외한 4의 배수
        if(col !=0 && col % 4 == 0) continue;

        // str += col;
    
        }
        console.log(str);
        //3번째 줄 출력 후 멈춤
        if(row == 3) break; 

        console.log(str);
        
        
    }


function check5(){
    for(let num =1; num <= 5; num++){
        
    }
}


}