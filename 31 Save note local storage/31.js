const addEl = document.querySelector('.add');
const notes = JSON.parse(localStorage.getItem('notes')) 
//  console.log(notes)

 if(notes){
   notes.forEach(note=>addNote(note))
 }


addEl.addEventListener('click',()=> addNote('hello boy'))


function addNote(text = ''){
    
    const notEl = document.createElement('div')
    notEl.classList.add('note');
    notEl.innerHTML = `
    <div class="toolbox">
        <button class="edit">
          <i class="fas fa-edit"></i>
        </button>

        <button class="delete">
          <i class="fas fa-trash-alt"></i>
        </button>
      </div>

      <div class="main ${text ? "" : "hidden"}"></div>
      <textarea class="${text ? "hidden" : ""}"></textarea>
    `
const editBtn = notEl.querySelector('.edit');
const deleteBtn = notEl.querySelector('.delete');
const main = notEl.querySelector('.main');
const textArea = notEl.querySelector('textarea');

textArea.value = text

main.innerHTML = marked(text)

deleteBtn.addEventListener('click', ()=>{
  notEl.remove()
  updateLS()
})


editBtn.addEventListener('click', (e)=>{
  main.classList.toggle("hidden")
  textArea.classList.toggle("hidden");
  main.innerHTML = marked(textArea.value) 
})

textArea.addEventListener('input', (e)=>{
  const {value} = e.target
  console.log("e.target", e.target)
  console.log("e.target.value", e.target.value)
  console.log("value", value)

   main.innerHTML = marked(value)
   updateLS()
  
})

    document.body.appendChild(notEl)
}

function updateLS(){
const notesEl = document.querySelectorAll('.note')
const notesText = document.querySelectorAll('textarea')

const notes = []

notesText.forEach(note => {
  notes.push(note.value)
});

localStorage.setItem('notes', JSON.stringify(notes))
console.log(notes)

}