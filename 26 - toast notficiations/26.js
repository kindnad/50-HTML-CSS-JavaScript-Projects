const btn = document.querySelector('.btn');
const toasts = document.getElementById('toasts');


const notifications = ['Notification 1', 
'Notification 2', 
'Notification 3',
'Notification 4'
];
const types = ['success', 
'error', 
'info'
];


btn.addEventListener('click', ()=> getNotifications())


function getNotifications(message=null, type=null){
    const toastEl = document.createElement('div');
    toastEl.className = 'toast';
     toastEl.classList.add(type ? type : getTypes());
    //  toastEl.className += ` ${type ? type : getTypes()}`;
    toastEl.innerText = message ?  message : showNotifications()
    console.log(toastEl);
    toasts.append(toastEl);
     setTimeout(()=>{
        toastEl.remove()}, 2000)
}

function showNotifications(){
return notifications[Math.floor(Math.random()* notifications.length)]
}

function getTypes(){
    return types[Math.floor(Math.random()* types.length)]
    }