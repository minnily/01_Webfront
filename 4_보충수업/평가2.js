//적용하기 버튼이 클릭되었을 때\\
const btn= document.querySelector("#btn");

btn.addEventListener("click", ()=>{
    //위에 작성된input 요소들을 모두 얻어오기
    const width = document.querySelector(".width"); -너비
    const height = document.querySelector(".height"); -높이
    const font_size = document.querySelector(".font_size"); -글자크기

    const bold = document.querySelector("[name='bold']:checked");
    const color =document.querySelector(".color");
    const  background =document.querySelector(".background");

    const row= document.querySelector("[name='row']:checked");
    const col= document.querySelector("[name='col']:checked");

    const text = document.querySelector(".text");
    const box= document.querySelector("#.id");
    
    //input에 작성된 값을 얻어와서 , 그 값에 따라 박스에 js로 css추가

    //너비에 입력하는 input에 값이 작성되어 있다면 trim(앞뒤공백제거)
    if(width.value.trim().length > 0) 
    //너비의 value 값에 앞뒤로 
    //공백을 제거를 한 후, value 값의 문자열 길이를 따졌더니, 0보다 클때 ==> 
    //뭔가 값이 있을때 
    {
        box.style.width = width.value +"px"; //뒤에 문자열로 px꼭 붙여줘야함
     }
    
   if(height.value.trim().length > 0)
   {box.style.height = height.value +"px" ;}//뒤에 문자열로 px꼭 붙여줘야함 

   if(font_size.value.trim().length > 0)
   {box.style.fontSize = font_size.value+"px";} //뒤에 문자열로 px꼭 붙여줘야함


   //radio는체크가 되있지 않은경우는 null로 함
//굵기 -> 체크된게 없으면 null, 체크된게 있다면 null아님

if(bold != null){//글자 굵기가 체크된게 있다면
    box.style.fontWeight =bold.value; //콘솔로 찍어보았을때 html에 value에 적용해놨기에 그걸 이용하여 쓰면 됨

}

if(color.value.trim().length > 0)
   {box.style.color = color.value ;}

if(background.value.trim().length > 0)
   {box.style.backgroundcolor = background.value; }


if( row != null){//글자 굵기가 체크된게 있다면
    box.style.justifyContent =row.value; //콘솔로 찍어보았을때 html에 value에 적용해놨기에 그걸 이용하여 쓰면 됨

}

if(col != null){//글자 굵기가 체크된게 있다면
    box.style.alignItems =col.value; //콘솔로 찍어보았을때 html에 value에 적용해놨기에 그걸 이용하여 쓰면 됨

}
if(text.value.trim().length > 0)
box.innerText=text.value;

});