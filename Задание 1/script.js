
const fetchData = async () => {

    let post = {};

    await fetch('https://jsonplaceholder.typicode.com/posts/54')
    .then(response => response.json())
    .then(json => (post = json));
    showPost(post);

    let comments = [];

    await fetch('https://jsonplaceholder.typicode.com/posts/54/comments')
    .then(response => response.json())
    .then(json => (comments = json));
    showComments(comments);

}   

const showPost = (post) => {

    const postId = document.getElementById('postId');
    const postTitle = document.getElementById('postTitle');
    const postBody = document.getElementById('postBody');

    postId.innerText = `ID: ${post.id}`;
    postTitle.innerText = post.title;
    postBody.innerText = post.body;
}


const showComments = (comments) => {

    const commentSection = document.getElementById('commentSection');

    for(let i = 0; i < comments.length; i++){
        let newElement = document.createElement('div');
        newElement.className = 'comment';
        newElement.innerHTML = `<h1>${comments[i].name}</h1><p>${comments[i].body}</p>`;
        commentSection.append(newElement);
        console.log(comments[i]);
   } 
}