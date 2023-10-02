const buttons = document.querySelector("#buttons");
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach((sound, idx) =>{
const btn = document.createElement("button");
btn.classList.add('btn');


btn.addEventListener('click', () => {
    stopMusic();
    //console.log("After in stop music", idx, sound);
document.getElementById(sound).play(); 

})

btn.innerText = sound;
buttons.appendChild(btn);
})

function stopMusic(){
    sounds.forEach((sound, idx)=>{
        
           const song = document.getElementById(sound);
           console.log("In stop music",idx, sound);
           song.pause();
           song.currentTime = 0;
    })
}