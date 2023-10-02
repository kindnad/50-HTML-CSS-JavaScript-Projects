const APIURL = 'https://api.github.com/users/'
const form = document.querySelector('form');
const search = document.querySelector('.search');
const main = document.querySelector('#main');

//  getUser('bradtraversy');
async function getUser(username){
    try{
        const {data} = await axios(APIURL + username)
        console.log(data)
        createCard(data);
        getRepos(username)
    }
    catch(err){
            if(err.response.status==404){
            console.log("coming to error")
            console.log(err)
            createError('No profile found');
        }
    }
}

async function getRepos(username){
    try{
        const {data} = await axios(APIURL + username + '/repos')
        createRepos(data);
    }
    catch(err){
        if(err.response.status==404){
        console.log(err)
        createError('No Repos');
        }
    }
}

form.addEventListener('submit', (e)=>{
    e.preventDefault();
const user = search.value;
if(user){
    
    getUser(user);
    
    
    search.value=''
}
})

function createCard(userdata){
    const userID = userdata.name || userdata.login
    const userInfo = userdata.bio ? `<p>${userdata.bio}</p>`: ''
    const card = `
    <div class="card">

    <div>
        <img src="${userdata.avatar_url}" class="avatar" alt="">
    </div>
    <div class="user-info">
        <h2>${userID}</h2>
        <P>${userInfo}</P>
             <ul>
                <li>${userdata.followers} <strong>Followers</strong></li>
                <li>${userdata.following} <strong>Following</strong></li>
                <li>${userdata.followers} <strong>Followes</strong></li>
                
             </ul>
        <div id="repos">
            
        </div>
    </div>
</div>
    `
    main.innerHTML = card;
}

function createError(msg){
    const cardHTML = `<div class="card">
    <h1>${msg}</h1>
    </div>
    `
    main.innerHTML = cardHTML;
}
function createRepos(userdata){
    const reposEL = document.querySelector('#repos');
    userdata.slice(0,5).forEach(repo => {
        const repoEL = document.createElement('a')
    repoEL.href=repo.html_url;
    repoEL.target = '_blank'
    repoEL.classList.add('repos')

    repoEL.innerText = repo.name
    reposEL.appendChild(repoEL)
    });
    
    
}