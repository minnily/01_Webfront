const lottoBoard = document.querySelector("#lottoBoard");
//로또판 값 얻어오기
//버튼 값 얻어오고 클릭시 이벤트 발생하기
document.querySelector("#createBtn").addEventListener("click",()=>{
    
    for(let i = 1; i<=45; i++){
        const num=document.createElement("div");
        num.classList.add("num");
        num.innerHTML=i
        console.log(num);
        lottoBoard.append(num);

        num.addEventListener("click",(e)=>{
            if(e.target.classList.add("active")){
               e.target.classList.contains("active")
               e.target.classList.remove("active")
            }else{ 
                //num class를 active라고 줄건데 그 클래스가 있다면 클릭을 제거하게 할거다
                //num의 길이가 6이상일때 알림창을 통해 안내할거다
            }
            const count=document.getElementsByClassName("active").length;
            
            if(count >= 6){ 
            alert("최대 5개까지 선택할 수 있습니다.")
            }else{
                e.target.classList.add("active");
            }

        })
        lottoBoard.append(num);
    }
})