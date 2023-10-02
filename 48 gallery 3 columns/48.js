const unsplashURL = 'https://source.unsplash.com/random/'
const container = document.querySelector('.container')


createImages()
function createImages(){
// const imageSrc = 

for(let i=0;i<10;i++){
  const img = document.createElement('img')
  // img.src = `${unsplashURL}${getRandomSize()}`
  img.src = unsplashURL + `${getRandomNumber()}x${getRandomNumber()}`
  container.appendChild(img)
}

}
function getRandomSize(){
  return `${getRandomNumber()}x${getRandomNumber()}`
}

function getRandomNumber(){
  return Math.floor(Math.random()*10) + 300;
}