const openBtn = document.querySelector('.open-btn')
const closeBtn = document.querySelector('.close-btn')
const sliders = document.querySelectorAll('.slider')

openBtn.addEventListener('click', ()=>{
  console.log("hello")
  sliders.forEach(slider => {
    slider.classList.add('visible')
  });
})

closeBtn.addEventListener('click', ()=>{
  sliders.forEach(slider => {
    slider.classList.remove('visible')
  });
})