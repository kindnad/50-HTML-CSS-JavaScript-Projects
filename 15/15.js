const counter = document.querySelectorAll('.counter');

const remained = document.querySelector('.remained');
const liters = document.querySelector('#litres');
const percentage = document.querySelector('.percentage');
const smallCups = document.querySelectorAll('.cup-small');

() => updateBigcup()
smallCups.forEach((cup, clickedCupIndx)=>{
    
cup.addEventListener('click', () => highlightcups(clickedCupIndx));
})

const highlightcups = (clickedCupIndx) =>{
    
    if((smallCups[clickedCupIndx].classList.contains('full')) && (!smallCups[clickedCupIndx].nextElementSibling.classList.contains('full'))){
        clickedCupIndx--;
    }
    smallCups.forEach((cup, idx)=>{
        
        if(idx<=clickedCupIndx){
            cup.classList.add('full');
        }
        else{
            cup.classList.remove('full');
        }
    })
    updateBigcup();
}

const updateBigcup = () => {
    const fullCups = document.querySelectorAll('.cup-small.full').length;
    console.log(fullCups);
    const totalCups = smallCups.length;
    if (fullCups === 0){
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0;
    }
    else{
        percentage.style.visibility = 'visible';
        percentage.style.height = `${(fullCups/totalCups) * 330}px`;
        percentage.innerText = `${fullCups/totalCups*100}%`;
        liters.innerText = `${2 - (250 * fullCups / 1000)}`

    }
    if(fullCups===totalCups){
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
    }
    else{
        remained.style.visibility = 'visible';
        
    }

}