let n = 3;
let k = 5;

let container = document.getElementById('container');

for(let i = 1; i <= 100; i++){

    message = i;
    color = 'white';

    if (i % 5 == 0 && i % 3 == 0){
        message = i + ' FizzBuzz';
        color = 'green';
    }
    else if (i % 5 == 0){
        message = i + ' Buzz';
        color = 'orange';
    }
    else if (i % 3 == 0){
        message = i + ' Fizz';
        color = 'red';
    }

    let newItem = document.createElement('li');
    newItem.innerHTML = message;
    newItem.style.backgroundColor = color;
    container.appendChild(newItem);
}