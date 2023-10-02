const title = document.querySelector('.title');
const p = document.querySelector('.card-excerpt');
const header = document.querySelector('.card-header');
const animatedTexts = document.querySelectorAll('.animated-bg');
const profileImg = document.getElementById('profile-img');
const authorName = document.getElementById('author-name');
const date = document.getElementById('date');
const spanEL = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2500)

function getData(){
    header.innerHTML = `<img src="https://plus.unsplash.com/premium_photo-1676654935719-e1ba2546716a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="">`
    title.innerHTML = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, cumque.`;
    p.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Repellendus consectetur totam optio ratione, impedit quasi tempora at! Aliquid, ut repudiandae.`;
    profileImg.innerHTML = ` <img src="https://images.unsplash.com/photo-1536599018102-9f803c140fc1?auto=format&fit=crop&w=60&h=60&q=60" alt="">`;
    authorName.innerHTML= `John Doe`;
    date.innerHTML= `Oct 08, 2022`;
    animatedTexts.forEach(eachText => {
        eachText.classList.remove('animated-bg');
    })
    spanEL.forEach(span =>{
        span.classList.remove('animated-bg-text');
        //span.remove();
    })
}