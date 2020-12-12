// // 2. Создание объекта

// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// console.log('hotel :>> ', hotel);

// // 3. Доступ к свойствам

// console.log('hotel.name :>> ', hotel.name);
// console.log('hotel[stars] :>> ', hotel['stars']);

// hotel.manager = 'Smith';
// console.log('hotel :>> ', hotel);

// // 4. Удаление свойств

// delete hotel.manager;
// console.log('hotel :>> ', hotel);

// // 6. Короткие свойства

// let name = 'Resort Hotel';
// let stars = 5;

// // Эта ES5 запись избыточна
// const es5hotels = {
//   name: name,
//   stars: stars,
//   capacity: 100,
// };

// console.log('es5hotels :>> ', es5hotels);

// const es6hotels = {
//   name,
//   stars,
//   capacity: 100,
// };

// console.log(es6hotels);

// // 7. Вычисляемые свойства
// const key = 'person';
// const object = {};

// object[key] = 'Mango';

// console.log('object :>> ', object);

// const key = 'person';

// const getKey = function () {
//   return 'age'
// };

// const object = {
//   [key]: 'Mango',
//   [getKey()]: 2,
// }
// console.log(object);


// // 2. Цикл for...in
// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };
// console.log('hotel :>> ', hotel);

// for (const key in hotel) {
//   console.log('Key: ', key);
// }

// //3. Object.keys(), Object.values(), Object.entries()
// console.log(Object.keys(hotel));
// console.log(Object.values(hotel));
// console.log(Object.entries(hotel));

// const keys = Object.keys(hotel);

// for (const key of keys) {
//   console.log('hotel[key] :>> ', hotel[key]);
// }

// for (const entry of Object.entries(hotel)) {
//   console.log(`key :>> ' ${entry[0]}, value :>> ', ${entry[1]}`);
// }

// const goods = {
//   apples: 6,
//   grapes: 3,
//   bread: 4,
//   cheese: 7,
// };

// console.log('goods :>> ', goods);

// console.log(Object.values(goods));
// let total = 0;
// for (const value of Object.values(goods)) {
//   total += value;
// }
// console.log('total goods :>> ', total);

// // 2. Операция spread
// // 2.1. Распыление аргументов
// const temperatures = [18, 14, 12, 21, 17, 29];
// console.log(Math.min(temperatures));

// console.log(Math.min(...temperatures));

// // 2.2. Распыление массивов
// const houses = ['Arryn', 'Frey', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell'];
// const slicedHouses = houses.slice();
// const spreadHouses = [...houses];
// console.log('before');
// console.log('houses :>> ', houses);
// console.log('slicedHouses :>> ', slicedHouses);
// console.log('spreadHouses :>> ', spreadHouses);
// console.log('houses===slicedHouses :>> ', houses===slicedHouses);
// console.log('change');
// houses[0]= '0erryn'
// slicedHouses[0] = 'Berryn'
// spreadHouses[0] = 'Cerryn'

// console.log('after');
// console.log('houses :>> ', houses);
// console.log('slicedHouses :>> ', slicedHouses);
// console.log('spreadHouses :>> ', spreadHouses);

// // 2.3. Распыление объектов
// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };
// const c = Object.assign({}, a, b);
// console.log('c :>> ', c);

// const d = {...a, ...b}
// console.log('d :>> ', d);

// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };

// const c = { x: 5, j: 10, ...a, z: 15, ...b };

// console.log('c :>> ', c);

// const lion = { hasTail: true, legs: 4 };
// const eagle = { canFly: true };

// const chimera = { ...lion, ...eagle };
// console.log('chimera :>> ', chimera);

// // 3. Операция rest
// const add = function (value, ...args) {
//   console.log('value :>> ', value);
//   console.log('args :>> ', args);
// }

// add(1, 2, 3);
// add(1, 2, 3, 4, 5);

// // 1. Деструктуризация объектов
// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };
// const { name, stars, status ='empty' } = hotel;
// console.log(name, stars, status);
// console.log(hotel);

// const { name, ...rest } = hotel;

// console.log(name);
// console.log(rest);

// 2. Деструктуризация массивов
// const rgb = [200, 255, 100];
// const [red, green, blue] = rgb;

// console.log(red, green, blue);

// const rgb = [200, 255, 100];

// const [red, ...otherColors] = rgb;

// console.log(red, otherColors);

// const rgb = [200, 255, 100];

// const [firsth,,last] = rgb;

// console.log(firsth, last);

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4.7,
//   price: 5000,
//   tags: ['premium', 'promoted', 'top', 'trusted'],
//   owner: {
//     name: 'Генри Сибола',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com'
//   }
// };

// // Пиши код ниже этой строки
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = { country: 'Ямайка', city: 'Кингстон' };

// console.log(apartment);

// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = 'Манго';

// for (const key in dog) {
//   console.log(key);
// }

// console.log(Object.keys(dog));
// // console.log(animal);
// // console.log(dog); // {name: 'Манго'}
// // console.log(dog.name); // 'Манго'
// // console.log(dog.legs); // 4


// const keys = [];
// const values = [];
// const advert = {
//   service: 'apt',
// };
// const apartment = Object.create(advert);
// apartment.descr = 'Просторная квартира в центре';
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Пиши код ниже этой строки
//   // console.log('key :>> ', key);
//   // console.log('apartment[key] :>> ', apartment[key]);
//   if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);
//   }
//   // Пиши код выше этой строки
// }
// console.log(keys);
// console.log(values);

// console.log('service' in advert);
// console.log('service' in apartment);

// function countProps(object) {
//   let propCount = 0;
//   // Пиши код ниже этой строки
// for (const key in object) {
//   if (object.hasOwnProperty(key)) {
//       propCount +=1;
//       }
// }
//   // Пиши код выше этой строки
//   console.log('propCount :>> ', propCount);
// }
// countProps({ name: 'Mango', age: 2 })

// function countProps(object) {
//   // Пиши код ниже этой строки
//   let propCount = 0;

// for(const key of Object.keys(object)) {
//   propCount++;
// }

//   return propCount;
//   // Пиши код выше этой строки
// }

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Пиши код ниже этой строки

// for (const value of Object.values(salaries)) {
//  console.log('value :>> ', value);
//   totalSalary += value;
//   console.log('  totalSalary:>> ',   totalSalary
// );
// }
//   // Пиши код выше этой строки
//   console.log(totalSalary);
// }

// countTotalSalary({ mango: 100, poly: 150, alfred: 80 })
// countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 })

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Пиши код ниже этой строки
//   const propValues=[];
  
//   for (const product of products) {
//     console.log('product :>> ', product);
//     console.log('product.hasOwnProperty(propName) :>> ', product.hasOwnProperty(propName));
//     console.log('product[propName] :>> ', product[propName]);
//     propValues.push(product[propName]);
//     // if (product.hasOwnProperty(propName)){
//       //   propValues.push.product[propName]
//       // }
//   }
//   console.log(propValues);
  
//   // Пиши код выше этой строки
// }
// getAllPropValues('quantity')

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//   let total=0;
//   for (const product of products) {
//     console.log(product);
//     // console.log(Object.values(product).includes(productName));
//     if (Object.values(product).includes(productName)) {
//       total = product['price'] * product['quantity'];
//     }
//   }
//     console.log(total);
//   return total;
//   // Пиши код выше этой строки
// }
// calculateTotalPrice('Радар');
// calculateTotalPrice('Сканер');

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Пиши код ниже этой строки
// const { yesterday, today, tomorrow } = highTemperatures;

// // Пиши код выше этой строки
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// console.log('meanTemperature :>> ', meanTemperature);

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Пиши код ниже этой строки

// for (const color of colors) {
//   const {hex, rgb} = color;
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

// console.log('hexColors :>> ', hexColors);
// console.log('rgbColors :>> ', rgbColors);

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Пиши код ниже этой строки
// const {
//   today: {
//     high: highToday,
//     low: lowToday,
//     icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg', },
//   tomorrow: {
//     high: highTomorrow,
//     low: lowTomorrow,
//     icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg', },
// } = forecast;
  
// function makeTask(data) {
//   const completed = false;
//   const category = 'Общее';
//   const priority = 'Обычный';
//   // Пиши код ниже этой строки
// const newTask = { category: category, priority: priority, completed: completed , ...data}
//   console.log('newTask :>> ', newTask);
//   // Пиши код выше этой строки
// }
// makeTask({});
// makeTask({ category: 'Домашнее', priority: 'Низкий', text: 'Вынести мусор' });
// makeTask({ category: 'Финансы', text: 'Забрать проценты' });
// makeTask({ priority: 'Низкий', text: 'Выбрать шампунь' });
// makeTask({ text: 'Купить хлеб' });


// function add(...args) {
//   console.log(args);

//   // console.log(Math.sum(args)); 
//   // Пиши код выше этой строки
// }
// add(12, 4, 11, 48);

// function multiply(firstNumber, secondNumber, ...otherArgs) {
//   console.log(firstNumber); // Значение первого аргумента
//   console.log(secondNumber); // Значение второго аргумента
//   console.log(otherArgs); // Массив остальных аргументов
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

// // Пиши код ниже этой строки
// function findMatches(array, ...otherArgs) {
//   const matches = []; // Не изменяй эту строку
//   for (const arg of otherArgs) {
//     for (const item of array) {
//       if (item === arg) {
//         console.log('arg===item :>> ', item);
//         matches.push(item);
//       }
//   }
//   }
//   console.log('otherArgs :>> ', otherArgs);
//   // Пиши код выше этой строки
//   console.log('matches :>> ', matches);
//   return matches;
// }
// // findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7)
// findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2)
// findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41)

// const bookShelf = {
//   books: ['Последнее королевство', 'Мгла', 'Страж снов'],
//   updateBook(oldName, newName) {
//     // Пиши код ниже этой строки
//     const log = this.books.splice(this.books.indexOf(oldName),1, newName);
	
// 	console.log(log);
//     // Пиши код выше этой строки
//   },
// };

// bookShelf.updateBook('Мгла', 'Хроники подземелий')

const atTheOldToad = {
  potions: [
    { name: 'Зелье скорости', price: 460 },
    { name: 'Дыхание дракона', price: 780 },
    { name: 'Каменная кожа', price: 520 },
    { name: 'Невидимка', price: 620 },
  ],
  // Пиши код ниже этой строки
  // getPotions() {
  //   console.log(this.potions);
  //   // return this.potions;
  // },
  addPotion(potionName) {

    for (const potion of this.potions) {
      if (potion.name===potionName.name) {
      console.log(`Зелье ${potionName} уже есть в инвентаре!`);
      // return `Зелье ${potionName} уже есть в инвентаре!`;
    }
}
    

    this.potions.push(potionName);
  },
  // removePotion(potionName) {
  //   let potionIndex = -1;
  //   for (let i = 0; i < this.potions.length; i+=1) {
  //     console.log(this.potions[i]);
  //     if (Object.values(this.potions[i]).includes(potionName)) {
  //       potionIndex = i;
  //     }
  //   }
  //   if (potionIndex === -1) {
  //     return `Зелья ${potionName} нет в инвентаре!`;
  //   }
  //     console.log(potionIndex);
  //   this.potions.splice(potionIndex, 1);
  // },
  // updatePotionName(oldName, newName) {
  //   const potionIndex = this.potions.indexOf(oldName);

  //   if (potionIndex === -1) {
  //     return `Зелья ${oldName} нет в инвентаре!`;
  //   }

  //   this.potions.splice(potionIndex, 1, newName);
  // },
  // Пиши код выше этой строки
};
// atTheOldToad.getPotions()
atTheOldToad.addPotion({ name: 'Невидимка', price: 620 })
// atTheOldToad.addPotion({ name: 'Зелье силы', price: 270 })
// atTheOldToad.removePotion('Дыхание дракона')
// atTheOldToad.removePotion('Дыхание ')