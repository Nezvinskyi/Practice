// Написать скрипт, который запрашивает 2 числа,
// начало и конец диапазона, и в результате выдаёт
// сумму всех нечетных чисел в этом диапазоне.


const min = +prompt('Enter min');
const max = +prompt('Enter max');
let total = 0;

for (let i = min; i <= max; i += 1) {
  if (i % 2 !== 0) {
    total += i;
  }
}
console.log(`Sum of all odd numbers in the range from ${min} to ${max} is :>> ${total}`);
