const left = document.querySelector('#left');
const right = document.querySelector('#right');
const slides = document.querySelectorAll('.slides');
const slidesContainer = document.querySelector('.slides');
const body = document.body;

let activeNum = 2;

setBgtoBody();

function setBgtoBody(){
    
    body.style.backgroundImage = slides[activeNum].style.backgroundImage;

}

const setSlides = () =>{
    console.log("hello");
   slides.forEach(slide => slide.classList.remove('active'))


    slides[activeNum].classList.add('active');
}

left.addEventListener('click', () => {

    activeNum--;
    if(activeNum < 0){
        activeNum = slides.length - 1;
    }
    setBgtoBody();
    setSlides();
})
    
right.addEventListener('click', () => {

    activeNum++;
    if(activeNum > (slides.length - 1)){
        activeNum = 0;
    }
    setBgtoBody();
    setSlides();
})
    