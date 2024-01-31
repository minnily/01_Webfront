//생성 버튼을 클릭했을 때 input에 
//입력한 값으로 div에 나타나게하기


document.getElementById("btn").addEventListener("click",()=>{
   
    // box.remove
   //현재 input의 id,class가 없기에 버튼의 이전 형제요소를 불러오는 
   //명칭을 써서 input을 불러옴. 그리고 그 input의 값을 얻어옴.
   //input의 값을 불러오는 명칭이 길기에 변수로 지정하여 사용.
    const inputV = btn.previousElementSibling.value; //input의 값 얻어옴.
    
    //i=0
    //i가 value값 만큼 반복
    //value값 만큼 input box 생성

    for (let i = 1; i <= inputV; i++) {
        const box=document.createElement("input"); 
        //box라는 변수를 지정해 input요소를 만든다
        box.type="number";
        box.id="inputBox"; 
        //변수의 형태는 숫자로 한다
        const container=document.getElementById("container");
        //container라는 것을 문서에서 얻어온다
        container.append(box);
        //container애 box라는 input요소를 붙여준다
    }
    

    //infut에 아무것도 입력하지 않았을때 알림창 띄우기
    if(inputV==""){
        alert ("숫자를 입력해주세요")
    } 
           
    //sumBtn을 입력했을때 클릭하면 나오는 이벤트 만들기

});



document.getElementById("sumBtn").addEventListener("click",()=>{

    //새로 생성된 input값인 box요소안의 값을 얻어오기
    //변수 만들기
    const inputBox = document.querySelectorAll("#inputBox");
   
    let sum= 0;
    //for문을 사용하여 box요소안의 값을 더하기
    
    //생성된 inputBox(inputBox에 넣은 값)가 
    //input에 넣은 i의 수만큼 증가할 때마다 
    //생성된 inputbox안에 넣은 값을 반복하여 더한다.
    for(let i =0; i < inputBox.length; i++){

        //sum 이라는 변수는 i개의 inputBox 값의 합이다.
        
        
        sum += Number(inputBox[i].value);
        console.log([inputBox[i].value]);

        document.getElementById("result").innerText= sum;
        //sum(i개의 inputBox 값의 합)을 result로 나타내게 한다.
        //문서에서 result를 얻어온 후 innertext는 sum과 같음을 명시한다.
        
        
       console.log(sum);

    
    };
    

});
    

