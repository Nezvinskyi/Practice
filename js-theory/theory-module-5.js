// function User(name) {
//   // this = {};  (неявно)

//   // добавляет свойства к this
//   this.name = name;
//   this.isAdmin = false;
  
//   // return this;  (неявно)
// };



// console.log(new User("Вася"));

// const Hotel = function (name, stars, capacity) {
//   this.name = name;
//   this.stars = stars;
//   this.capacity = capacity;

//   this.fullName = function () {
//     console.log(`hotel name: ${this.name}`);
//   }
// };
// const hotels = [];

// hotels.push(new Hotel('Resort Hotel', 5, 100));
// hotels.push(new Hotel('Sunlight Motel', 4, 300));
// hotels.push(new Hotel('XXX Hotel'))
// hotels[2].stars = 5;

// console.table(hotels);

// let marriot = new Hotel('Marriot');
// console.log(marriot.fullName());
// console.log(new Hotel('Sunlight Motel', 4, 300).fullName());


// Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:

// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму введённых свойств.
// mul() возвращает произведение введённых свойств.


// const Calculator = function (a, b) {
//   this.read = function () {
//     this.a = +prompt('a?');
//     this.b = +prompt('b?');
//   }
//   this.sum = function () {
//     this.read();
//     return this.a + this.b;
//   }
//   this.mul = function () {
//     this.read();
//     return this.a * this.b;
//   }
// }
// let calculator = new Calculator();

// console.log("Sum=" + calculator.sum());

// console.log("Mul=" + calculator.mul());

// Создаём Accumulator
// Напишите функцию-конструктор Accumulator(startingValue).

// Объект, который она создаёт, должен уметь следующее:

// Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
// Метод read() использует prompt для получения числа и прибавляет его к свойству value.
// Таким образом, свойство value является текущей суммой всего, что ввёл пользователь при вызовах метода read(), с учётом начального значения startingValue.

// const Accumulator = function (startingValue) {
//   this.value = startingValue;
//   this.read = function () {
//     this.value += +prompt('enter the number');
//   }
// }

// let accumulator = new Accumulator(1); // начальное значение 1

// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению

// console.log(accumulator.value); // выведет сумму этих значений

// const Hotel = function (name, stars, capacity) {
//   this.name = name;
//   this.stars = stars;
//   this.capacity = capacity;
//   this.guestCount = 0;

//   this.greet = function (guestName) {
//     console.log(`Dear ${guestName}, welcome to ${this.name}`);
//   }

//   this.addGuests = function(amount){
//     this.guestCount += amount;
//   }

//   this.removeGuests = function (amount) {
//     this.guestCount -= amount;
//   }
// }  

// const hotel = new Hotel('Marriot', 5, 100)
// console.log(hotel);
// // Hotel {name: "Sunrise Hotel", greet: ƒ, addGuests: f, removeGuests: f}
// hotel.greet('Mango'); // Hello Mango, wellcome to Sunrise Hotel
// hotel.addGuests(50);
// console.log(hotel.guestCount);
// hotel.removeGuests(48);
// console.log(hotel.guestCount);


// const mango = {
//   name: 'Mango',
//   sales: 5,
//   sell(product) {
//     this.sales += 1;
//     return (`The manager ${this.name} sold ${product}`)
//   },
// }

// console.log(mango);
// console.log(mango.name);
// console.log(mango.sell('TV'));
// console.log(mango.sell('iPad'));
// console.log(mango.sales);

// const poly = {
//   name: 'Poly',
//   sales: 10,
//   sell(product) {
//     this.sales += 1;
//     return (`The manager ${this.name} sold ${product}`)
//   },
// }
// console.log(poly.sales); // 10
// console.log(poly.sell('TV')); // Manager Poly sold TV
// console.log(poly.sell('Microwave')); // Manager Poly sold Microwave
// console.log(poly.sales); // 12

// const Manager = function (name = 'manager', sales = 0) {
//   this.name = name,
//   this.sales = sales,
//   this.sell = function(product) {
//     this.sales += 1;
//     return (`The manager ${this.name} sold ${product}`)
//   }
// }
// const managers = [];
// managers.push(new Manager('Mango', 5));
// console.log(managers[0].sell('Tesla'));

// managers.push(new Manager('Poly', 10));
// console.log(managers);
// console.log();

// прототипное наследование

// const animal = { eats: true };

// const dog = Object.create(animal);
// dog.barks= true;

// dog.__proto__ = animal;

// // В dog можно найти оба свойства
// console.log(dog.barks); // true
// console.log(dog.eats); // true
// console.log(dog);
// // console.log(dog.__proto__);

// const Guest = function(name, room) {
//   this.name = name;
//   this.room = room;
// };
// console.log(Guest.prototype);

// const mango = new Guest('Mango', 28);

// console.log(mango);

// const Guest = function(name, room) {
//   this.name = name;
//   this.room = room;
//   this.showGuestInfo = function() {
//   console.log(`name: ${this.name}, room: ${this.room}`);
// };
// };

// Guest.prototype.showGuestInfo = function() {
//   console.log(`name: ${this.name}, room: ${this.room}`);
// };

// const mango = new Guest('Mango', 28);
// const poly = new Guest('Poly', 36);

// mango.showGuestInfo(); // name: Mango, room: 28
// poly.showGuestInfo(); // name: Poly, room: 36
// console.log(mango);

// const Guest = function(name, room) {
//   this.name = name;
//   this.room = room;
// };

// Guest.prototype = {
//   constructor: Guest,
// };

// console.log(Guest.prototype);

// Наследование и конструкторы

const Hero = function(name, xp) {
  this.name = name;
  this.xp = xp;
};

Hero.prototype.gainXP = function (amount) {
  console.log(`${this.name} gained ${amount} experience points`);
  this.xp += amount;
}

const mango = new Hero('Mango', 1000);
console.log(mango);

mango.gainXP(500);

console.log(mango);

const Warrior = function (name, xp, weapon) {
  Hero.call(this, name, xp);
  this.weapon = weapon;
}

// Warrior.prototype.attack = function() {
//   console.log(`${this.name} attacks with ${this.weapon}`);
// }

Warrior.prototype = Object.create(Hero.prototype);
Warrior.prototype.constructor = Warrior;


Warrior.prototype.attack = function() {
  console.log(`${this.name} attacks with ${this.weapon}`);
};

const poly = new Warrior('Poly', 200, 'axe');
console.log(poly);
poly.attack();
poly.gainXP(500)