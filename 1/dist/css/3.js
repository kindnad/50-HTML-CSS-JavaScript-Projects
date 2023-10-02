const iconclick = document.querySelector(".fa-solid");
const container = document.querySelector(".container");

iconclick.addEventListener('click', () =>{
    container.classList.add('show-bar');
})