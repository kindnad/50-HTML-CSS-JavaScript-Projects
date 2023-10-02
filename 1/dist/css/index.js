
const container = document.querySelector(".container");
const progress = document.querySelector("#progress");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;
next.addEventListener('click', () => {
    currentActive++;
    
    if(currentActive>circles.length){
    currentActive = circles.length;

    }
    update();
});
prev.addEventListener('click', () => {
    currentActive--;
    if(currentActive<1){
    currentActive = 1;

    }
    update();
});



const update = () => {

circles.forEach((circle, indx) => {
    if(indx < currentActive){
        circle.classList.add('active');
    }
    else{
        circle.classList.remove('active');
    }

})
const actives = document.querySelectorAll('.active');
progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';
console.log(actives.length);
console.log(circles.length);
    // if(currentActive > circles.length){
    //     next.disabled = true;
    // }
    // else if(currentActive < 1){
    //     prev.disabled = true;
    // }
    // else{
    //     next.disabled = false;
    //     prev.disabled = false;
    // }
  };
