const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const increase = document.querySelector('#plus');
const decrease = document.querySelector('#minus');
const sizeEL = document.getElementById('size');
const colorEl = document.querySelector('#color');
const clear = document.querySelector('#clr');



let size = 10;
let color;
let x;
let y;
let isPressed = false;
clear.addEventListener('click', ()=>{
    ctx.clearRect(0,0,canvas.width,canvas.height)
})
colorEl.addEventListener('change', (e)=>{
    console.log(e);
    color = e.target.value;
    })
increase.addEventListener('click', ()=>{
   

        size = size + 5;
        if(size > 30){
            size = 30;
        }
        sizeEL.innerText=size;
})
decrease.addEventListener('click', ()=>{
    size-=5;
    if(size<0){
        size = 0;
    }
    sizeEL.innerText=size;
    }) 

canvas.addEventListener('mousedown', (e)=>{
    isPressed = true;
console.log(e);
x = e.offsetX
y = e.offsetY
DrawCircle(x,y);

})

canvas.addEventListener('mouseup',(e)=>{
    isPressed=false;
    x = undefined;
     y = undefined;
})
canvas.addEventListener('mousemove',(e)=>{
    if(isPressed){
        let x2 = e.offsetX;
        let y2 = e.offsetY
        console.log(x2,y2)
        DrawLine(x,y,x2,y2)
        //DrawCircle(x2,y2)
        x = x2;
        y = y2;
        
        
    }
})

function DrawCircle(x,y){

    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI*2);
    ctx.fillStyle = color;
    ctx.fill();
}

function DrawLine(x1,y1,x2,y2){

    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}
/* function updatesizeonScreen(){

} */