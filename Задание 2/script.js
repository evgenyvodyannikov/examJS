const fetchData = async () => {

    let todos = [];

    await fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => (todos = json));


    console.log(todos);
    showTodos(todos);
}

const showTodos = (todos) => {

    let container = document.getElementById('container');

    for(let i = 0; i < 25; i++){

        let newTodo = document.createElement('div');
        newTodo.className = 'todo';
        
        let newTodoTitle = todos[i].title;
        let newTodoCompleteText = todos[i].completed ? 'Completed' : 'In process';
        
        newTodo.innerHTML = `
            <div class="todo__body">
            <p class="tag ${todos[i].completed ? 'tag-blue' : 'tag-red'}">Task ${i+1}: ${newTodoCompleteText}</p>
            <p>${todos[i].title}</p>
            </div>
        `
        container.appendChild(newTodo);
    }
}