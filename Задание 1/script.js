var data = '';

const fetchData = async () => {
    await fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(json => (data = json));

    console.log(data);
    showComments();
}   

const showComments = () => {
   
    const commentSection = document.getElementById('commentSection');

    for(let i = 0; i < 25; i++){
        let comment = document.createElement('div');
        comment.className = 'comment';
        comment.innerHTML = `<h1> Comment № ${i+1}</h1><p>${data[i].body}</p>`;
        commentSection.append(comment);
   } 
}