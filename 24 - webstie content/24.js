const nav = document.querySelector('.nav');

window.addEventListener('scroll', increaseHeight);

function increaseHeight(){
    const height = nav.offsetHeight;
    console.log(height);
    
    if(window.scrollY > height+ 100){
        nav.classList.add('active');
    }
    else{
    nav.classList.remove('active');}
}