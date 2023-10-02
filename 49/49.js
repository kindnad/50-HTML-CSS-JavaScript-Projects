const input = document.querySelector('.input')
const ul = document.querySelector('.todos')
const form = document.querySelector('.form')
// localStorage.clear();
const todos = JSON.parse(localStorage.getItem('todosMo'))

if(todos){
  todos.forEach(todo => {
    addTodo(todo)
  });
}
form.addEventListener('submit', (e)=>{
  e.preventDefault()
  addTodo()
  updateLS()
})


function addTodo(todo){
  let todoText = input.value;
  
  if(todo){
    todoText = todo.text
    console.log("Local storage full list", todo)
    console.log("Local storage text", todo.text)
    
  }
 
  if(todoText){
    const li = document.createElement('li')
    if(todo && todo.completed){
    li.classList.add('completed')
    }
    li.innerText = todoText
    li.addEventListener('click', ()=>{
      li.classList.toggle('completed')
      updateLS()
    })
    li.addEventListener('contextmenu', (e)=>{
      e.preventDefault()
      li.remove()
      updateLS()
    })
    //toggle()
    
    input.value = ''
    //  toggle()
    ul.appendChild(li)
     updateLS()
   
  }
  
}
// function toggle(){
//   const liItems = document.querySelectorAll('ul li')
//   liItems.forEach(listItem => {
//     listItem.addEventListener('click', ()=>{
//       listItem.classList.toggle('completed')
//       updateLS()
//     })
//     listItem.addEventListener('contextmenu', (e)=>{
//       e.preventDefault()
//       listItem.remove()
//       updateLS()
//     })
//   });
// }

function updateLS(){
  const liItems = document.querySelectorAll('ul li')
  const todolist = []
  liItems.forEach(li => {
    todolist.push({
      text:li.innerText,
      completed: li.classList.contains('completed')
    })
  });
  localStorage.setItem('todosMo', JSON.stringify(todolist))
}