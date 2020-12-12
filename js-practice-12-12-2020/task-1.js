// Напишите ф-цию, которая принимает аргументом массив обьектов и строку с названием камня. 
// Ф-ция считает сколько будет стоить то к-во камней, которой записано в объекте
const stones = [
    { name: 'Изумруд', price: 1300, quantity: 4 },
    { name: 'Бриллиант', price: 2700, quantity: 3 },
    { name: 'Сапфир', price: 400, quantity: 7 },
    { name: 'Щебень', price: 200, quantity: 2 },
];

const stonePrice = (stones, stoneName) => {
  for (const stone of stones) {
    if (stone.name === stoneName) {
      return stone.price * stone.quantity;
    }
  }
}

console.log(stonePrice(stones, 'Сапфир'));