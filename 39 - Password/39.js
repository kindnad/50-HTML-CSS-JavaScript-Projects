const background = document.querySelector('.background');
const password = document.querySelector('#password');

password.addEventListener('input', (e)=>{
const value = (e.target.value).length

const num = 20 - (value * 2)
console.log(num)
background.style.filter = `blur(${num}px)` 
})