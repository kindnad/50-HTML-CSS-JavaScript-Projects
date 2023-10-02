const counter = document.querySelectorAll('.counter');

counter.forEach(counter => {
    counter.innerText = '0';
    const updateCounter= ()=>{
        const target = +counter.getAttribute('data-target');
        console.log(target);
        const interval = target / 200;
        const c = +counter.innerText;

        if (c < target){
            counter.innerText = `${Math.ceil(c + interval)}`
            setTimeout(updateCounter, 1)
        }
    }

    updateCounter();

    
})

