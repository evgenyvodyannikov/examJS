
const getVowelsConsonants = (str) => {
  // получаем все буквы в строке (массив)
  let words = str.match(/\w/gi);
  // объединяем массив в строку и ищем гласные (массив)
  let vowels = words.join('').match(/[aeiou]/gi);
  // получаем кол-во гласных
  vowels = vowels === null ? 0 : vowels.length;
  // получаем кол-во согласных
  let consonants = words.length - vowels;
  // возвращаем объект содержащий кол-во гласных и согласных
  return {
    vowels: vowels,
    consonants: consonants,
  }
}

// определяем тестовую строку
let str = 'the world is gonna roll me'
// вызываем функцию
let statistic = getVowelsConsonants(str);
// выводим
console.log(`Строка имеет ${statistic.vowels} гласных и ${statistic.consonants} согласных`);