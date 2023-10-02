const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c5539dc21f355704969d57b9a177bc82&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

const search_API= 'https://api.themoviedb.org/3/search/movie?api_key=c5539dc21f355704969d57b9a177bc82&query="'

const overview = document.querySelector('.overview');
const search = document.querySelector('.search');
const form = document.getElementById('form');
const main = document.querySelector('#main');


getMovies(API_URL);
async function getMovies(url){
    const res = await fetch(url);
    const data = await res.json();
    
    showMovies(data.results);
    
}

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const searchTerm = search.value;
    if ((searchTerm!=='')&& (searchTerm)){
        getMovies(search_API + searchTerm);
        console.log(search_API + searchTerm);
        search.value = '';
    }
    else{
        window.location.reload();
    }
    
    
   
})

const showMovies = (movies) =>{
    main.innerHTML = ''
movies.forEach(movie => {
    const{title, vote_average, poster_path, overview} = movie;
    const movieEl = document.createElement('div');
    movieEl.classList.add('movie');
    
    movieEl.innerHTML = `
    <img src="${IMG_PATH+poster_path}" alt="${title}">
    <div class="movie-info">
      <h3>${title}</h3>
      <span class="${getRatings(vote_average)}">${vote_average}</span>
    </div>
    <div class="overview">
        <h3>${overview} </h3>
    </div>
    `
    main.appendChild(movieEl);
    
    
});    
}

const getRatings = (rating)=> {
if(rating >=8){
    return 'green'
}

else if(rating >=5){
    return 'orange'
}

else{
    return 'red'
}
}

