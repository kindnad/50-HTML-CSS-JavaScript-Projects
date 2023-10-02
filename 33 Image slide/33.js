const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const images = document.querySelector('.images');
const allImages = document.querySelectorAll('img')
let indx = 0
let interval = setInterval(run,2000)
function run(){
indx++
changeImage()
  
}
next.addEventListener('click', ()=>{
indx++;

changeImage()
  reset()
})
prev.addEventListener('click', ()=>{
  indx--;
  changeImage()
  reset()
    
  })
  
function changeImage(){
  
  if(indx > allImages.length - 1)
  {
    indx = 0
  }
  else if(indx < 0)
  {
    indx = allImages.length - 1
  }
  images.style.transform = `translateX(-${indx*550}px)`
}

function reset(){
  clearInterval(interval)
  interval = setInterval(run,2000)

}