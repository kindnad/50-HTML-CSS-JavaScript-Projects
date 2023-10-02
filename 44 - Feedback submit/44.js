const panel = document.getElementById('panel')
const ratings_container = document.querySelectorAll('.ratings-container')
const ratings= document.querySelectorAll('.rating')
const sendBtn = document.querySelector('.btn');
let ratingClass = 'satisfied'
panel.addEventListener('click', (e)=>{
    
    removeActives()
    if(e.target.parentNode.classList.contains('rating')){
        console.log(e.target)
        e.target.parentNode.classList.add('active')
        ratingClass = e.target.nextElementSibling.innerHTML;
        if(!ratingClass){
            ratingClass = e.target.innerHTML
        }
        
        console.log(ratingClass)
    }
})
sendBtn.addEventListener('click', ()=>Feedback())



function removeActives(){
    for(let i=0;i<ratings.length;i++){
        ratings[i].classList.remove('active')
    }
}

function Feedback(){
    panel.innerHTML = `
    <i class=fas fa-heart"></i>
    <p>
    Thank you for sumitting feedback for ${ratingClass}
    </p>
    `
    }