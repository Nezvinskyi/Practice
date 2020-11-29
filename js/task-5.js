// Палиндром — слово, предложение или последовательность
// символов, которая абсолютно одинаково читается как в
// привычном направлении, так и в обратном.К примеру,
// "Anna" — это палиндром, а "table" и "John" — нет

const input = prompt('Введите слово');
const word = input.toLowerCase();
let reverseWord = '';

for (let i = 0; i < word.length; i += 1) {
  reverseWord += word[word.length-1-i];
}

if (word === reverseWord) {
  console.log('Слово палиндром :>> ', input);
} else {
  console.log(`Слово "${input}" не является палиндромом`);
}


// альтернативное решение: https://habr.com/ru/company/skillbox/blog/445360/