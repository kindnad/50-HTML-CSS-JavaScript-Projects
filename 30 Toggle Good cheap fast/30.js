const toggle = document.querySelectorAll('.toggle');
const Good = document.getElementById('Good');
const Cheap = document.getElementById('cheap');
const fast = document.getElementById('fast');


toggle.forEach(toggle => {
    toggle.addEventListener('change',(e)=> getFun(e.target))
});

function getFun(theclickedEvent){
    if(Good.checked && Cheap.checked && fast.checked){
        console.log("All checked");
        if(Good === theclickedEvent){
            fast.checked = false;
        }
        if(Cheap===theclickedEvent){
            Good.checked = false;
        }
        if(fast===theclickedEvent){
            Cheap.checked = false;
        }
        
    }
    
}