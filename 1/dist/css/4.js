const bg = document.querySelector(".bg");
const loading = document.querySelector(".loading-text");

let load = 0;

//let x = setInterval(update, 30);

let int = setInterval(() => {
    update();
}, 30);

/* function update(){
    load++
    if (load > 99){
        clearInterval(int);
    }
    console.log(load);
    loading.innerText = `${load}%`;
} */

let update = () =>{
load++
if (load > 99){
    clearInterval(int);
}
console.log(load);
loading.innerText = `${load}%`;
loading.style.opacity = scale(load, 1, 100, 1, 0);
bg.style.filter = `blur(${scale(load, 1, 100, 30, 0)}px)`;

} 
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}