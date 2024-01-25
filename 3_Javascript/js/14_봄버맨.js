// const box = document.getElementById("box");
// const bomberman = document.getElementById("bomberman");

// document.addEventListener("keydown",function(e){
//     let idx;
    

//     switch(e.bomberman){
//         case '' : idx = 0; break;
//         case ' ': idx = 1; break;
//         case '' : idx = 2; break;
//         case '' : idx = 3; break;
//         default :return;
//     }
//     console.log(bomberman);
// });

console.log(box.innerHTML);

// 정답//
let xindex =0; //x좌표 방향대로 얼마만큼 이동했는지 기억할 변수
let yindex =0; //y좌표 방향대로 얼마만큼 이동했는지 기억할 변수
const box = document.getElementById("box");
//변수를 전역에 입력해야함 함수안에 들어가면 누적되지 않고 초기화 됨.

//addEventListener("이벤트종류", 함수(이벤트가 발생했을때 수행할 기능))
//전달인자 2개임
document.addEventListener("keydown",function(e){
    //e:이벤트객체
    const bomberman = document.getElementById("bomberman"); //봄버맨 이미지
    

    switch(e.key){
        case 'ArrowRight': xindex += 10; //xindex에 누적
        break;

        case 'ArrowLeft' : xindex -= 10; //xindex에 누적 
        break;  

        case 'ArrowUp'   : yindex -= 10; //yindex에 누적 
        break; 

        case 'ArrowDown' : yindex += 10; //yindex에 누적
        break;

        case 'x' : const box = document.getElementById("box");
        box.innerHTML += `<img src="/01_Webfront/images/봄버맨/boom.png"
        style="transform:translate3d(${xindex}px,${yindex}px,0); position: absolute;">`; break;
         default: alert("방향키와 x만 가능"); break;
    }
//요소의 위치 옮기는 것
    bomberman.style.transform = `translate3d(${xindex}px,${yindex}px,0)`;
})