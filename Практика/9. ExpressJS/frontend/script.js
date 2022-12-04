const getPosts = () => {
    fetch('http://localhost:4444/posts')
    .then(response => response.json())
    .then(data => console.log(data));
};

const addPost = () => {

    let title = document.getElementById('title').value;
    let text = document.getElementById('text').value;

    fetch('http://localhost:4444/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: title,
            text: text,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
};   