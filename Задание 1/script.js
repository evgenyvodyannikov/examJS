
const fetchData = async () => {

    let post = {};

    await fetch('https://jsonplaceholder.typicode.com/posts/54')
    .then(response => response.json())
    .then(json => (post = json));
    console.log(post)
    showPost(post);
    //showComments();
}   

const showPost = (post) => {

    const postId = document.getElementById('postId');
    const postTitle = document.getElementById('postTitle');
    const postBody = document.getElementById('postBody');

    postId.innerText = `ID: ${post.id}`;
    postTitle.innerText = post.title;
    postBody.innerText = post.body;
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