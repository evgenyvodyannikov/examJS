// Задание 1
console.log('\n-------------- Задание 1 --------------\n');

let str = 'I love you';
let result = false;

if(str.match(/[A-Z]/).index == 0){
    result = true;
}
console.log(`Начинается с заглавной: ${result}`);

// Задание 2
console.log('\n-------------- Задание 2 --------------\n');
str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nunc dolor, cursus sit amet est lacinia, tincidunt pulvinar purus. Sed augue est, feugiat aliquam interdum sit amet, varius sed libero. Nam eget placerat ex. Donec ligula nisl, elementum et feugiat ac, dapibus id lorem. Donec consequat malesuada eros, ac porta quam posuere non. Nunc congue tempor odio id maximus. Ut et libero vitae nulla laoreet ullamcorper in in eros.'
console.log(`Количество гласных: ${str.match(/[aeiou]/gi).length}`);


// Задание 3
console.log('\n-------------- Задание 3 --------------\n');
str = '1 11 1111 11111 111111 1111111';
console.log(str.match(/\d{3,}/g));

// Задание 4
console.log('\n-------------- Задание 4 --------------\n');
const getPercent = (childArray, parentString) => {
    let percent = childArray.length / parentString.length * 100;
    return Math.round(percent * 100) / 100;
}

str = 'I started work at 10 am and had left it after 6 pm'

let chars = str.match(/[A-z]/g);
let spaces = str.match(/\s/ig);
let digits = str.match(/\d/ig);

console.log(`
Количество символов = ${str.length}\n
% букв: ${getPercent(chars, str)}\n
% цифр: ${getPercent(digits, str)}\n
% пробелов: ${getPercent(spaces, str)}`);

