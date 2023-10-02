const result = document.querySelector('#result');
const filter = document.querySelector('#filter');

const API = 'https://randomuser.me/api?results=50'
const listItems = []


filter.addEventListener('input', (e)=>{
    console.log(e.target.value)
searchList(e.target.value)
})
async function getData(){
const res = await fetch(API)
const data = await res.json()
const {results} = data
result.innerHTML = ''
showData(results)
//console.log(results)
}


function showData(results){
     
    results.forEach(user => {
        const li = document.createElement('li')
    listItems.push(li)
    console.log("li: ", li)
        console.log("lisitems: ", listItems)
        li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.title}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `
        result.appendChild(li)
   });
}


function searchList(searchTerm){
listItems.forEach(item => {
    if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())){
        item.classList.remove('hide')
    }
    else{
        item.classList.add('hide')
    }
});

}
getData()

