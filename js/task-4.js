// Дано произвольное целое число n.
// Написать программу, которая
// разбивает число n на цифры и
// выводит их на экран;
// подсчитывает сколько цифр в числе n;
// находит сумму цифр числа n;
// меняет порядок цифр числа n на обратный.
// Пример: ввожу число 123
// цифр в числе = 3
// сумма = 6(это значение получили 
//   следующим образом 1 + 2 + 3)
// обратный порядок = 321

const n = 123456789;
const str = n.toString();
let total = 0;
let reverse = '';

console.log(`Количество цифр в числе :>> ${str.length}`);

for (let i = 0; i < str.length; i += 1) {
  total += Number(str[i]);
}
console.log('Сумма цифр в числе ==:>> ', total);

for (let i = str.length-1; i >= 0; i -= 1) {
  reverse += str[i];
}
console.log('reverse :>> ', reverse);

// нужно ли ответ переводить из строки в число?