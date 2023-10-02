const insert = document.querySelector("#insert");

window.addEventListener('keydown', (event) =>{
console.log(event);
insert.innerHTML = `

<div class="key">
            ${event.key === " " ? 'Space' : event.key}
            <small>event.key</small>
        </div>
        <div class="key">
            ${event.code}
            <small>event.Code</small>

        </div>
        <div class="key">
            ${event.keyCode}
            <small>event.KeyCode</small>

        </div>


`
})

