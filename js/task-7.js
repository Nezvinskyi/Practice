// Пользователь вводит диапазон нужно
// вывести на экран все простые числа
// из этого диапазона.Простыми числами
// называются числа, которые имеют всего 2 делителя, то есть
// делятся только на 1 и на самого себя!

// const min = +prompt('Enter min number');
// const max = +prompt('Enter max number');
const min = 1;
const max = 1000;

NextPrime:
for (let i = 2; i <= max; i += 1) {
  for (let j = 2; j < i; j += 1){
    if (i % j == 0) {
      continue NextPrime;
    }
  }
    console.log(i);
}

const firstNum = 1;
const lastNum = 36;
let simpleNums = '';
for(let i = firstNum; i <= lastNum; i += 1){
    if(i <= 2){
        simpleNums = simpleNums + i + ' '
    } else {
        const halfNum = Math.ceil(i / 2); 
        for(let dev = 2; dev < i; dev += 1){
            if(i % dev === 0){
                break;
            } else {
                if(dev === i - 1){
                    simpleNums = simpleNums + i + ' ';
                }
                continue;
            }
        }
    }   
}
console.log('simpleNums :>> ', simpleNums);
