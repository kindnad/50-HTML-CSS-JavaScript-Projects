const keeray = document.querySelectorAll('.choose-insect-btn')
const scoreContainer = document.querySelector('.score-container')
const message = document.querySelector('.message')
const scoreEl = document.querySelector('.score')
const startGameBtn = document.querySelector('.playGameBtn')
const time = document.querySelector('.time')
let score = 0
let seconds = 0
const screens = document.querySelectorAll('.screen')
let selected_keera = {}
startGameBtn.addEventListener('click',()=> startGame(100))


function startGame(size){
  console.log("screen coming")
  screens[0].classList.add('up')
screens[0].style.marginTop = `-${size}vh`
selectKeera()
}

function selectKeera(){
  keeray.forEach(keera => {
    keera.addEventListener('click', (e)=>{
      const imgEl = keera.querySelector('img')
      const imgSrc = imgEl.getAttribute('src')
      const alt = imgEl.getAttribute('alt')
      selected_keera = { imgSrc, alt }
        // console.log(selected_keera)
        setTimeout(createKeera, 1000)
        startGame(200)
        startTimer()
    })
  });
}
function createKeera(){
  // console.log(selected_keera)
  const insectEl = document.createElement('div')
  insectEl.classList.add('insect')
  const {x,y} = getRandomPosition()
  insectEl.style.top = `${y}px`
  insectEl.style.left = `${x}px`
  // console.log("XY",x,y)
  insectEl.innerHTML = `<img src="${selected_keera.imgSrc}" alt ="${selected_keera.alt}" style="transform:rotate(${getRandomNumber()*360}deg)"/>`
 
  insectEl.addEventListener('click',catchInsects)
  scoreContainer.appendChild(insectEl)
}
function getRandomPosition(){
  const width = window.innerWidth
  const height = window.innerHeight
const x = getRandomNumber() * (width -200)+100;
const y = getRandomNumber() * (height - 200) + 100;
  return {x,y}
}
function getRandomNumber(){
  return Math.random()

}
function catchInsects(){
  increaseScore()
  // console.log(e)
 console.log(this)
  
  this.classList.add('caught')
  setTimeout(()=>this.remove(),2000)
  setTimeout(createKeera,1000)
  setTimeout(createKeera, 1500)
  
}

function startTimer(){
  setInterval(gameIn, 1000)
}
function gameIn(){
let minutes = Math.floor(seconds/60);
let secs = seconds % 60
minutes = minutes<10 ? `0${minutes}`:minutes
secs = secs<10? `0${secs}`: secs

time.innerHTML = `Time: ${minutes} : ${secs}`
seconds++


}
function increaseScore(){
  score++
  if(score>3){
message.classList.add('show')
  }
  scoreEl.innerHTML = `Score: ${score}`
}