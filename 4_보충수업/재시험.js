
btn.addEventListener("click", ()=>{
    
    const width =document.querySelector(".width");
    const height =document.querySelector(".height");
    const font_size =document.querySelector(".font_size");
    const bold =document.querySelectorAll("[name='fw']:checked");
    const color =document.querySelector(".color");
    const bg =document.querySelector(".bg");
    const row =document.querySelector("[name='row']:checked");
    const col =document.querySelector("[name='col']:checked");
    const text =document.querySelector(".text");
    const box =document.querySelector("#box");
    
    if(width.value.trim().length > 0) 
        {box.style.width = width.value +"px";}
    
    if(height.value.trim().length > 0)
        {box.style.height = height.value +"px" ;} 

    if(font_size.value.trim().length > 0)
        {box.style.fontSize = font_size.value+"px";} 
    
    if(bold != null)
        {box.style.fontWeight = bold.value;} 
        console.log(bold);
    if(color.value.trim().length > 0)
        {box.style.color = color.value ;}

    if(bg.value.trim().length > 0)
        {box.style.backgroundColor = bg.value;}

        console.log(bg);
    if( row != null)
        {box.style.justifyContent =row.value; }
        console.log(row);
    if(col != null)
        {box.style.alignItems =col.value;}
        console.log(col);
    if(text.value.trim().length > 0)
        {box.innerText=text.value;}
    
console.log(btn);
});
 
