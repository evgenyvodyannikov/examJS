const sendRequest = () => {

    fetch('http://localhost:4444/users')
    .then(response => response.json)
    .then(data => alert(data));

}