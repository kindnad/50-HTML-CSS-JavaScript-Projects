const text = document.querySelector('.textchange');
const speedEl = document.querySelector('#speed');

const message = "We Love Programming"
let indx = 1;
let speed;

speedEl.addEventListener('input',(e)=>speed = 300 / e.target.value)


// function changeSpeed(e){
//     console.log("show message");
// speed = 300 / e.target.value;
// } 

showMessage()
function showMessage(){
    
    
    
    let msg = message.slice(0,indx)
    
    text.innerText = msg;
    indx++;
    if (indx > message.length - 1){
        indx = 1;
    }
    
setTimeout(showMessage, speed)
}

