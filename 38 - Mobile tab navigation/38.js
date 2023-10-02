const images = document.querySelectorAll('.content');
const lists = document.querySelectorAll('nav ul li');

lists.forEach((list,indx) => {
    list.addEventListener('click', ()=>{
        hideActive()
        list.classList.remove('active')
            
                RemoveShowImages()
               
                list.classList.add('active')
                images[indx].classList.add('show')
            
    })
});

function RemoveShowImages(indx){
    images.forEach(image => {
        image.classList.remove('show')
    });
    
}

function hideActive(){
  lists.forEach(list =>{
    list.classList.remove('active')
  })
} 
