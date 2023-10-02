const magicButton = document.getElementById('btn')
const boxes = document.querySelector('.boxes');

magicButton.addEventListener('click', ()=>{
    boxes.classList.toggle('big')
})

function createBoxes(){
    for(let i=0;i<4;i++){
        for(let j = 0; j<4;j++){
            const boxEL = document.createElement('div')
            boxEL.classList.add('box')
            boxes.appendChild(boxEL)
            boxEL.style.backgroundPosition = `${-j*125}px ${-i*125}px`
        }
    }
}

createBoxes()