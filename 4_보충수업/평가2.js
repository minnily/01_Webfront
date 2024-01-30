//적용하기 버튼이 클릭되었을 때\\
const btn= document.querySelector("#apply-btn");

btn.addEventListener("click", ()=>{
    //위에 작성된input 요소들을 모두 얻어오기
    const 너비 = document.querySelector("너비"); -너비
    const 높이 = document.querySelector("높이"); -높이
    const 글자크기 = document.querySelector("글자크기"); -글자크기

    const 굵기 = document.querySelector("[name='굵기']:checked");
    const 폰트색=document.querySelector(폰트컬러);
    const 배경색 =document.querySelector("배경색");

    const 가로정렬= document.querySelector("[name='가로정렬']:checked");
    const 세로정렬= document.querySelector("[name='세로정렬']:checked");

    const 출력문자열 = document.querySelector(출력문자열);
    const 박스= document.querySelector(박스);
    
    //input에 작성된 값을 얻어와서 , 그 값에 따라 박스에 js로 css추가

    //너비에 입력하는 input에 값이 작성되어 있다면 trim(앞뒤공백제거)
    if(너비.value.trim().length > 0) 
    //너비의 value 값에 앞뒤로 
    //공백을 제거를 한 후, value 값의 문자열 길이를 따졌더니, 0보다 클때 ==> 
    //뭔가 값이 있을때 
    {
        박스.style.width = 너비.value +"px"; //뒤에 문자열로 px꼭 붙여줘야함
     }
    
   if(높이.value.trim().length > 0)
   {박스.style.height = 높이.value +"px" ;}//뒤에 문자열로 px꼭 붙여줘야함 

   if(글자크기.value.trim().length > 0)
   {박스.style.fontSize = 글자크기.value+"px";} //뒤에 문자열로 px꼭 붙여줘야함


   //radio는체크가 되있지 않은경우는 null로 함
//굵기 -> 체크된게 없으면 null, 체크된게 있다면 null아님

if(굵기 != null){//글자 굵기가 체크된게 있다면
    박스.style.fontWeight =굵기.value; //콘솔로 찍어보았을때 html에 value에 적용해놨기에 그걸 이용하여 쓰면 됨

}

if(글자색.value.trim().length > 0)
   {박스.style.color = 글자색의.value ;}

if(배경색.value.trim().length > 0)
   {박스.style.backgroundcolor = 배경색의.value; }


if( 가로정렬 != null){//글자 굵기가 체크된게 있다면
    박스.style.justifityContent =가로정렬.value; //콘솔로 찍어보았을때 html에 value에 적용해놨기에 그걸 이용하여 쓰면 됨

}

if(세로정렬 != null){//글자 굵기가 체크된게 있다면
    박스.style.alianItams =세로정렬.value; //콘솔로 찍어보았을때 html에 value에 적용해놨기에 그걸 이용하여 쓰면 됨

}
if(출력문자열.value.trim().length > 0)
박스.innerText=출력문자열.value

});