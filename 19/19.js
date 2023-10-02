const button = document.querySelector('.btn');
const spans = document.querySelectorAll('.whitespark');




    button.addEventListener('click', function (e){
    
        const leftviewportvalue = e.clientX
        const topviewportvalue = e.clientY
        
        
        const leftclicked = e.target.offsetLeft;
        const topclicked = e.target.offsetTop;
        
        console.log(leftviewportvalue, topviewportvalue);
        
        
        console.log("offset", leftclicked, topclicked);
        
        
        
        const top = topviewportvalue - topclicked;
        const left = leftviewportvalue - leftclicked;
        
        const spanEl = document.createElement('span');
        spanEl.classList.add('whitespark');
        this.appendChild(spanEl);
        spanEl.style.top = top + 'px';
        spanEl.style.left = left + 'px';
        
        
        setTimeout(()=>spanEl.remove(), 500)
        
        
        
        })
    

