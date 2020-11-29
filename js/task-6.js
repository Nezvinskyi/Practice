// Нужно написать скрипт, который
// выводит в консоль количество гласных,
//   которые содержатся в строке.
// Гласными являются «a», «e», «i», «o», «u».


const text = 'abcdefghij'
let vowelsCounter = 0;
let vowelsCounterSwitch = 0;

console.log('text.length :>> ', text.length);

for (let i = 0; i < text.length; i += 1) {
  if (text[i] === 'a') {
    vowelsCounter += 1;
  } else if (text[i] === 'e') {
    vowelsCounter += 1;
  } else if (text[i] === 'i') {
    vowelsCounter += 1;
  } else if (text[i] === 'o') {
    vowelsCounter += 1;
  } else if (text[i] === 'u') {
    vowelsCounter += 1;
  }
}
console.log('vowelsCounter :>> ', vowelsCounter);


for (let i = 0; i < text.length; i += 1) {
  switch (text[i]) {
    case 'a':
      vowelsCounterSwitch += 1;
      continue;
    case 'e':
      vowelsCounterSwitch += 1;
      continue;
    case 'i':
      vowelsCounterSwitch += 1;
      continue;
    case 'o':
      vowelsCounterSwitch += 1;
      continue;
    case 'u':
      vowelsCounterSwitch += 1;
      continue;
  }
}

console.log('vowelsCounterSwitch :>> ', vowelsCounterSwitch);