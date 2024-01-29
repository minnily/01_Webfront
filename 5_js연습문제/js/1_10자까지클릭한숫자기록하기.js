//html에서 값얻어오기

const container = document.querySelector(".container");
const number = document.querySelector(".number");
const result = document.querySelector("#result");
const reset = document.querySelector("#reset");

//div에 있는 번호 클릭하면 span태그에 결과 나타나게 하기

number.addEventListener("click", () => {
    
    console.log(number.innerHTML);

    
});

//reset버튼을 누르면 span 태그의 값이 초기화되기

