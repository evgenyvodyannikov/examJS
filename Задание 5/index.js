
const getVowels = (str) => {
    var m = str.match(/[aeiou]/gi);
    return m === null ? 0 : m.length;
  }

  let str = 'the world is gonna roll me'
  let vowels = getVowels(str);
  let consonants = str.length - vowels;

  console.log(`Строка имеет ${vowels} гласных и ${consonants} согласных`);