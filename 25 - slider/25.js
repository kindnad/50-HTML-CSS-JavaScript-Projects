const slideContainer = document.querySelector('.slide-container');
const LeftSlide = document.querySelector('.left-slider');
const RightSlide = document.querySelector('.right-slider');
const downbutton = document.querySelector('.down-button');
const uputton = document.querySelector('.up-button');
const divLength = RightSlide.querySelectorAll('div').length;
LeftSlide.style.top = `-${(divLength - 1) * 100}vh`
let currentActive = 0;
uputton.addEventListener('click', () => changeSlide('up'))
downbutton.addEventListener('click', () =>changeSlide('down'))



const changeSlide = (direction) =>{
    const height = slideContainer.clientHeight;
    console.log(height);

    if(direction==='up'){
        currentActive++;
    
        if(currentActive>divLength - 1){
            currentActive = 0;
        }
    }
    else if(direction==='down'){
        currentActive--;
        if(currentActive < 0){
            currentActive = divLength - 1;
        }
    }
     LeftSlide.style.transform = `translateY(${currentActive * height}px)`;
     RightSlide.style.transform = `translateY(-${currentActive * height}px)`
    // LeftSlide.style.top = `-${currentActive * height}px`;
    // RightSlide.style.top = `-${currentActive * height}px`;
}