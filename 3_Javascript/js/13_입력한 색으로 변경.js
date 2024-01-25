const boxlist = document.querySelectorAll(".box");
const inputlist = document.querySelectorAll(".color-input");


document.querySelector("#changeButton").addEventListener("click", function(){
    
    for(let i=0; i<boxlist.length; i++){
        boxlist[i].style.backgroundColor =inputlist[i].value;
    }
});
