// Решение с использованием цикла for
function findLongestWordLength(str) {
    let maxVal = '';
  
    const wordArr = str.split(' ');
  
    for(let i = 0; i < wordArr.length; i++) {
        let word = wordArr[i];
        if (word.length > maxVal.length) {
            maxVal = word;
        }
    }
    return maxVal;
  }
  
  // Решение с использованием метода array.forEach
  function findLongestWordLength2(str) {
    let maxVal = 0;
  
    const wordArr = str.split(' ');
  
    wordArr.forEach(word => {
        if (word.length > maxVal) {
            maxVal = word.length;
        }
    });
    return maxVal;
  }

let str = 'Я иду по огромнейшему лесу Мордвирд';

let container = document.getElementById('container');
let bigWord = findLongestWordLength(str);
container.innerHTML = `<p>${str.substring(0, str.indexOf(bigWord))}
<span style="color: green">${bigWord}</span>
${str.substring(str.indexOf(bigWord) + bigWord.length, str.length)}</p>`