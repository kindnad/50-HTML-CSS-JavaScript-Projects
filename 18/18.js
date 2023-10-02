const toggle = document.querySelector('#toggle');
const hourEL = document.querySelector('.hour');
const minuteEL = document.querySelector('.minute');
const secondEL = document.querySelector('.second');
const html = document.querySelector('html');
const timeEL = document.querySelector('.time');
const dateEL = document.querySelector('.date');
const dateNum = document.querySelector('.day-date');

const weeks = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const months = ['jan', 'feb', 'mar', 'apr', 'may', 'june', 'july', 'Aug', 'sep', 'oct', 'nov','dec'];

toggle.addEventListener('click', (e)=>{
    if(html.classList.contains('dark')){
        html.classList.remove('dark');
        e.target.innerText = 'Dark Mode'
    }
    else{
        html.classList.add('dark');
        e.target.innerText = 'Light Mode'
    }
}) 


function setTime() {
const time = new Date();
const month = time.getMonth();
const day = time.getDay();
const currentDate = time.getDate();
const hour = time.getHours();
const ampm = hour >= 12? 'pm': 'am';
const hoursForClock = hour % 12;

const minute = time.getMinutes(); 
const second = time.getSeconds();
    hourEL.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`;
    minuteEL.style.transform = `translate(-50%, -100%) rotate(${scale(minute, 0, 59, 0, 360)}deg)`;
    secondEL.style.transform = `translate(-50%, -100%) rotate(${scale(second, 0, 59, 0, 360)}deg)`;

timeEL.innerHTML = `${hoursForClock}:${minute < 10? `0${minute}`:minute}${ampm}`
dateEL.innerHTML = `${weeks[day-1]}     ,${months[month]} <span class="day-date">${currentDate}</span>`



}
function scale  (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
setInterval(setTime, 1000)

