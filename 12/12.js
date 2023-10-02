const tagsEL = document.getElementById('tags');
const textarea = document.querySelector('#textarea');


textarea.focus();
textarea.addEventListener('keyup', (e) => {
    
if(e.key === 'Enter'){
    
    setTimeout (()=>{
        e.target.value='';
        
    },10)
    CreaterandomTags();
}
CreateElement(e.target.value);

})
let CreateElement = (input) => {
    const tags = input.split(',').filter(tag => tag.trim()!== '').map(tag => tag.trim())
    console.log(tags);
    tagsEL.innerHTML = '';
    tags.forEach((tag, i) => {
        
        const tagspan = document.createElement('span');
        tagspan.classList.add('tag');
        
        tagspan.innerText = tag;
        tagsEL.appendChild(tagspan);
    });
}

CreaterandomTags =() => {
    const times = 30;
    console.log("Coming to createrandomtags function");
const interval = setInterval(()=>{
    const randomTag = pickrandomtag();
    console.log(randomTag);
    highlight(randomTag);

    setTimeout(()=>{
        unhighlight(randomTag);

            
    },100)

},100)

setTimeout(()=>{
    clearInterval(interval);

    setTimeout(()=>{
       const randomTag = pickrandomtag();
        highlight(randomTag);

    },100)
    
},times * 100)    
}



pickrandomtag = ()  =>{
    const Alltags = document.querySelectorAll('.tag');
    return Alltags[Math.floor(Math.random()*Alltags.length)];
}

const highlight =(tag) =>{
tag.classList.add('highlight');
}

const unhighlight =(tag) =>{
    tag.classList.remove('highlight');
    }