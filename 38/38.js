const container = document.getElementById('container')

const colors = {
    
    grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
}
const main_types = Object.keys(colors)


const FetchPokemon = async () =>{
    for (let i = 1;i <5; i++){
       await getPokemon(i)
        
    }
    
}
const getPokemon = async (id) =>{
    const API = `https://pokeapi.co/api/v2/pokemon/${id}`
    const response = await fetch(API)
    const data = await response.json()
    displayPokemon(data)
}

FetchPokemon()


const displayPokemon = (Pokemon) =>{
    
    const pokeEL = document.createElement('div')
    pokeEL.classList.add('pokemon')
    // pokeEL.style.backgroundColor = 'rgb(169, 202, 169)'
    
    const pokemon_first = Pokemon.name.slice(0,1).toUpperCase()
    const Poke_name = pokemon_first + Pokemon.name.slice(1)
    const poke_types = Pokemon.types.map(type =>type.type.name)
    console.log("Poke_types", poke_types)
    const type = main_types.find(type => poke_types.indexOf(type)>-1)
    console.log("Find Type", type)
    console.log("Object keys",Object.keys(colors))
    pokeEL.style.backgroundColor = `${colors[type]}`
    console.log(poke_types)
    const pokeID = Pokemon.id.toString().padStart(3,'0')
     pokeEL.innerHTML = `
     <div class="img-container">
     <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Pokemon.id}.png">
   </div>
   <div class="info-container">
     <span class="pokeid">#${pokeID}</span>
     <h3 class="pokemon-name">${Poke_name}</h3>
     <small class="type">Type: <span>${type}</span></small>

    </div>
   `
     container.appendChild(pokeEL)
    
}
displayPokemon()