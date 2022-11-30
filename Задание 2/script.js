var data = '';

const fetchData = async () => {
    await fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => (data = json));

    console.log(data);
    showUsers(); 
}

const showUsers = () => {
    const userList = document.getElementById('userList');

    for(let i = 0; i <= data.length; i++){
        let user = document.createElement('div');
        user.id = `user${data[i].id}`;
        user.className = 'user';
        user.innerHTML = `<h1>${data[i].name}</h1>`;
        userList.append(user);
   }
}

const search = () => {
    let searchText = document.getElementById('searchInput').value;
    if(searchText.length > 0){

        hideElements();
        for(let i = 0; i <= data.length; i++){
            if(data[i].name.toLowerCase().indexOf(searchText) >= 0) {
                showElement(data[i].id);
            }
        }
    }
    else{
       showElements();
    }
}

const showElement = (id) => {

    let elemToHide = document.getElementById(`user${id}`);
    console.log(`user${id}`);
    if(elemToHide){
        elemToHide.style.visibility = 'visible';
    }
}

const showElements = () => {
    for(let i = 0; i <= data.length; i++){
        let elemToShow = document.getElementById(`user${i}`);
        if(elemToShow){
            elemToShow.style.visibility = 'visible';
        }
    }
}

const hideElements = () => {
    for(let i = 0; i <= data.length; i++){
        let elemToHide = document.getElementById(`user${i}`);
        if(elemToHide){
            elemToHide.style.visibility = 'hidden';
        }
    }
}