
const container =document.querySelector(".container");

//container에 있는 number들을 클릭하면 이벤트를 발생시킬 것을 함수로 지정
document.querySelector(".container").addEventListener("click",(e)=>{
    console.log(e.target.innerText);

    e.target.innerText 

    document.getElementById("result").innerText += e.target.innerText + ",";
    
    //reset 버튼을 눌렀을 때 result 값이 전부 사라지게 하기 

    console.log(reset); 
     
});

document.getElementById("reset").addEventListener("click",()=>{
   
    document.getElementById("result").innerText = "";


});

//number들의 값을 html에서 얻어오기
//number들을 클릭했을 때 값이 나올 수 있게 하기
//나온 값이 span태그 안에 나타나게 하기
//reset버튼을 눌렀을 때 클릭한 숫자의 결과가 사라지게 하기