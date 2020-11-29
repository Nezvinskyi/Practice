// Задача.В переменной min лежит число от 0 до 59.
// Определите в какую четверть часа попадает это число
// (в первую, вторую, третью или четвертую).

const min = prompt('Enter any number between 0 and 59');
let message = '';

if (min >= 0 && min < 15) {
  message = 'The number belongs to the 1st quarter';
} else if (min >= 15 && min < 30) {
  message = 'The number belongs to the 2nd quarter';
} else if (min >= 30 && min < 45) {
  message = 'The number belongs to the 3rd quarter';
} else if (min >= 45 && min < 59) {
  message = 'The number belongs to the 4th quarter';
} else {
  message = 'The number is out of range';
}


alert(`You entered ${min}. ${message}`);
