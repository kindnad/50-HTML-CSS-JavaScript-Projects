const goIn = document.querySelector('.in')
const goOut = document.querySelector('.out')
const nums = document.querySelectorAll('.nums span');
const final = document.querySelector('.final');
const counter = document.querySelector('.countdown');

const replaybtn = document.querySelector('#Replay');

playAnimation()

function resetDOM(){
  counter.classList.remove('hide')
  final.classList.remove('show');
  nums.forEach(num =>{
    num.classList.value=''
    
  })
  nums[0].classList.add('in')
}

function playAnimation(){

nums.forEach((num,idx) => {
  const LastNum = nums.length - 1
  num.addEventListener('animationend', (e)=>{
    console.log(e)
      if(e.animationName === 'goIn' && idx !==LastNum){
        num.classList.remove('in');
        num.classList.add('out')
       
       
      }
      else if(e.animationName === 'goOut' && num.nextElementSibling){
        
        num.nextElementSibling.classList.add('in')
      }
      else{
        final.classList.add('show')
        counter.classList.add('hide')
      }
    })
});

}

replaybtn.addEventListener('click', ()=>{
  resetDOM()
  playAnimation()
})