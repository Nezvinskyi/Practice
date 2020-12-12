// Напишите ф-цию которая принимает массив
// чисел  и возвращает массив в котором 
// останутся только уникальные числа

const numbers = [1, 2, 3, 5, 6, 4, 2, 1, 4, 6, 23, 23, 123];
const array = [];
const getUniqueNum = function (numbers) {
  for (const number of numbers) {
    if (!array.includes(number)) {
      array.push(number);
    }
    
  }
  return array;
}

console.log(getUniqueNum(numbers));