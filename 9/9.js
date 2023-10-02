const button = document.getElementById('btn');
const joke = document.getElementById('joke');

button.addEventListener('click', update)
update()


async function update() {
    
const config = {
        headers: {
            Accept: 'application/json'
        }, 
        
    }

    const response = await fetch('https://icanhazdadjoke.com', config)

    const data = await response.json()
    joke.innerHTML = data.joke
    
   
    

    // fetch('https://icanhazdadjoke.com', config) 
    // .then((res) => res.json())
    // .then ((data) => {
    //     joke.innerText = data.joke;
    // })

    
}

