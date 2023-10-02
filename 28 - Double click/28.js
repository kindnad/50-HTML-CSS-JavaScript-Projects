const loveme = document.querySelector('.loveme');
const times = document.querySelector('.times');

let noTimes = 0;
let clickTime = 0;
loveme.addEventListener('click', (e)=>{

if(clickTime===0){
    clickTime = new Date().getTime()
}
else{
    if(new Date().getTime() - clickTime< 800){
        createHearts(e);
        clickTime=0;
    }
    else{
        clickTime = new Date().getTime()
    }

}
 
})

function createHearts(e){
    
    const x = e.clientX;
    const y = e.clientY;
    console.log(x,y)
    const top = e.target.offsetTop;
    const left = e.target.offsetLeft;

    const heartEL = document.createElement('i');
    heartEL.classList.add('fa');
    heartEL.classList.add('fa-heart');

    const yinside = y - top;
    const xinside = x - left;

    heartEL.style.left = `${xinside}px`
    heartEL.style.top = `${yinside}px`
    loveme.appendChild(heartEL);
    setTimeout(() => {
        heartEL.remove()
    }, 2000);
}