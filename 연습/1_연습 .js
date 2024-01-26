const test =document.querySelector(".test");
const div1 =document.querySelector("#div1");
const div2 =document.querySelector("#div2");
const div3 =document.querySelector("#div3");


div1.addEventListener("click",()=>{
    console.log(div1.innerHTML) 
});

div2.addEventListener("click",()=>{
    console.log(div2.innerHTML)
});

div3.addEventListener("click", ()=>{
    console.log(div3.innerText)
});
