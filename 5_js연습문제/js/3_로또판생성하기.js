//로또판 생성 시 45개 숫자 나오기
//클릭된 값은 색깔 변하기
//6개이상 클릭될 경우 알림창으로 안내


//createBtn버튼을 클릭했을때 이벤트가 발생하도록 설정
document.querySelector("#createBtn").addEventListener("click", ()=>{
   
    //lottoBoard를 문서에서 얻어옴           
    //총 45개의 div를 만들어야하기에 for문을 사용하여 
    //45번 반복하여 div가 만들어질 수 있게 함.
    //i라는 변수를 임시로 두고 수가 늘어날때마다 div가 
    //하나씩 생성되도록 하는 for문을 만듦.
    
    for(let i=1; i<=45; i++){
     
        //num이라는 변수를 사용하여 div를 추가로 만들고
        //num이라는 class를 가진 div를 로또판에 붙임
        //for문 안에 만들어야 한번에 45개가 만들어지며,
        //for문 밖에서 만들경우 클릭할때마다 하나씩 생성됨.

        const num= document.createElement("div");
        num.innerHTML = i //div안에 값을 넣는 방법(문자열일 경우 "" 사용)
        num.classList.add("num"); //div에 class를 설정하는 방법 
        lottoBoard.append(num); //lottoBoard에 자식요소로 num이라는
                                //클래스를 가진 div를 넣는방법
        document.getElementById("lottoBoard").append(num);
        //추가된 num을 lottoBoard에 나타나게 추가하는방법

        //num을 클릭했을 때 배경색이 변하게 하는 방법
        document.querySelector(".num").addEventListener("click",()=>{
             
            if(num.traget.value <= 5){
                num.style.backgroundColor = "orange";
            }else{ alert("더 이상 클릭할 수 없습니다");}

            console.log(num);
        }
        
         
    )}

    
    
    
    
});




 //생성된 num의 div들을 클릭했을 때 배경색이 변하게 하는 방법

 //if문을 사용하여 클릭했을 때 배경색이 변한다는 조건문 작성

 //6개이상 클릭하는 경우에는 알림창으로 "더이상 클릭할 수 없습니다"
 //라는 문구 띄우기

