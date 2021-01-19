// const numbers = [1, 2, 3, 5, 4];

// // Классический for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(numbers[i]);
// }

// // Функциональный forEach
// numbers.forEach(item => console.log(item));

// // Указываем параметр idx если нужен доступ к счетчику
// numbers.forEach((num, idx, numbers) => console.log(`index ${idx}, value ${num}, ${numbers}`));

// let animals = [
//   { name: 'Joey', species: 'cow' },
//   { name: 'Natasha', species: 'chicken' },
//   { name: 'Ed', species: 'pig' },
//   { name: 'Paul', species: 'fish' },
//   { name: 'Asal', species: 'cat' },
// ];

// // for (let i = 0; i < animals.length; i++) {
// //   console.log(animals[i]);
// // }

// animals.forEach((animal, index) => console.log(index, animal));


// // !----> Array.map()

// const array1 = [1, 4, 9, 16];

// const map1 = array1.map((x) => (x += 1) 

// );

// console.log(map1);

// // Mapping an array of numbers to an array of square roots

// let numbers = [1, 4, 9];
// // let roots = numbers.map(x => Math.sqrt(x));
// let roots = numbers.map(function (x) {
//   return Math.sqrt(x)
// })

// console.log(roots);

// // Using map to reformat objects in an array
// let kvArray = [{key: 1, value: 10},
//                {key: 2, value: 20},
//   { key: 3, value: 30 }]
               
// // let reformattedArray = kvArray.map(function (obj) {
// //   let rObj = {}
// //   rObj[obj.key] = obj.value
// //   return rObj
// // })

// let reformattedArray = kvArray.map(obj => {
//   let rObj = {}
//   rObj[obj.key] = obj.value
//   return rObj
// })

// console.log(reformattedArray);

// // Mapping an array of numbers using a function
// // containing an argument

// let numbers = [1, 4, 9];
// let doubles = numbers.map(num => num * 2)
// console.log(doubles);


// // Using map generically
// // This example shows how to use map on a String to get
// // an array of bytes in the ASCII encoding representing
// // the character values:

// let map = Array.prototype.map
// let a = map.call('Hello World', function(x) {
//   return x.charCodeAt(0)
// })
// console.log(a);

// // Mapped array contains undefined
// // When undefined or nothing is returned:
// let numbers = [1, 2, 3, 4]
// let filteredNumbers = numbers.map((num, index) => {
//   if (index < 3) {
//     return num
//   }
// })
// console.log(filteredNumbers);

// //Array.prototype.filter()
// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,0, null, false, 5, NaN];
// const filteredNumbers = numbers.filter(num => num == false);
// console.log(filteredNumbers);

// // Используем filter чтобы пройти по базе данных users и
// // выбрать активных и неактивных пользователей по значению
// // свойства isActive.
// const users = [
//   { name: 'Mango', isActive: true },
//   { name: 'Poly', isActive: false },
//   { name: 'Ajax', isActive: true },
//   { name: 'Chelsey', isActive: false },
// ];
// const activeUsers = users.filter(user => user.isActive);
// console.log(activeUsers);

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// const result = words.filter(word => word.length > 6);
// console.log(result);

// // Filtering out all small values
// // The following example uses filter() to create a filtered array that has all elements with values less than 10 removed.
// function isBigEnough(value) {
//   return value >= 10
// }
// const array = [12, 5, 8, 130, 44];
// const filteresArray = array.filter(isBigEnough);
// console.log(filteresArray);

// // Find all prime numbers in an array
// // The following example returns all prime numbers in the array:

// // const a = +prompt('Enter min of range');
// // const b = +prompt('Enter max of range');
// // const array = [];

// // for (let i = a; i <= b; i++){
// //   array.push(i);
// // }
// const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// function isPrime(num) {
//   for (let i = 2; i < num; i++){
//     if (num % i === 0) {
//       return 
//     }
//   }
//   return num>1;
// }
// console.log(array.filter(isPrime));

// Searching in array
// Following example uses filter() to filter array content based on search criteria.

// let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];
// function filterItems(array, query) {
//   return array.filter(el => {
//     return el.indexOf(query) !== -1
//   })
// }
// console.log(filterItems(fruits, 'ap'))
// console.log(filterItems(fruits, prompt('Enter query:')))

// function isBigEnough(element, index, array) {
//   // console.log(element >= 10);
//   return element >= 10;
// }
// console.log([12, 5, 8, 130, 44].some(isBigEnough));

// // Array.prototype.reduce()
// const numbers = [1, 2, 3, 4, 5];
// // const sum = numbers.reduce(function(acc, value) {
// //   return acc + value;
// // })
// const sum = numbers.reduce((acc, value) => acc + value);
// console.log(sum);

// // Допустим у нас есть следующая задача: из массива постов твиттера отдельного пользователя необходимо посчитать сумму всех лайков. Можно перебрать циклом for или forEach, каждое из этих решений потребует дополнительного кода. А можно использовать reduce.

// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// // tweets.forEach(like => console.log(like.likes))

// // let total = 0;
// // for (const tweet of tweets) {
// //   // console.log(tweet.likes);
// //   total += tweet.likes;
// // }

// // console.log(total);

// const total = tweets.reduce((totalLikes, value) => totalLikes + value.likes,0)
// console.log(total);

// // Заметили свойство tags у каждого поста? Продолжая тему reduce мы соберем в массив все теги которые встречаются в постах.
// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];
// // const tags = tweets.reduce((allTags, tweet) => {
// //   allTags.push(...tweet.tags)
// //   return allTags
// // }, [])
// // console.log(tags);
// const getTags = array =>
//   array.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);
//     return allTags;
//   }, []);
// console.log(getTags(tweets));

// // После того как мы собрали все теги из постов, хорошо бы было посчитать количество уникальных тегов в массиве. И снова reduce тут как тут.
// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// const getTags = tweets =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// const tags = getTags(tweets);

// // Вынесем callback-функцию отдельно, а в reducе передадим ссылку на нее.
// // Это стандартная практика если callback-функция довольно большая.

// // Если в объекте-аккумуляторе acc нету своего свойства с ключем tag,
// // то создаем его и записывает ему значение 0.
// // В противном случае увеличиваем значение на 1.
// const getTagStats = (acc, tag) => {
//   if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0;
//   }

//   acc[tag] += 1;

//   return acc;
// };

// // Начальное значение аккумулятора это пустой объект {}
// const countTags = tags => tags.reduce(getTagStats, {});

// const tagCount = countTags(tags);
// console.log(tagCount);

// Sum all the values of an array
// const array = [0, 1, 2, 3]
// const sum = array.reduce(function (acc, curVal) {
//   return acc+curVal
// }, 0)
// console.log(sum);
// const array = [0, 1, 2, 3]
// console.log(array.reduce((acc, curVal) => acc+curVal));

// // // Sum of values in an object array
// // // To sum up the values contained in an array of objects, you must supply an initialValue, so that each item passes through your function.
// const array = [{ x: 1 }, { x: 2 }, { x: 3 }];
// // let initialValue = 0;
// // console.log(array.reduce(function(acc, curVal) {
// //   return acc + curVal.x;
// // }, initialValue));

// console.log(array.reduce((acc, curVal) =>
//   acc + curVal.x, 0));
 
// // Flatten an array of arrays
// const array = [[0, 1], [2, 3], [4, 5]]
// const flattened = array.reduce((acc, curVal) =>
//   acc.concat(curVal));
// console.log(flattened);

// // Counting instances of values in an object
// let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']
// const nameCount = names.reduce((allNames, name) => {
//   if (name in allNames) {
//     allNames[name]++;
//   } else {
//     allNames[name] = 1;
//   }
//   return allNames
// }, {})
// console.log(nameCount);

// // Grouping objects by a property

// let people = [
//   { name: 'Alice', age: 21 },
//   {name: 'Max', age: 21 },
//   { name: 'Max', age: 20 },
//   { name: 'Jane', age: 20 },
//   { name: 'Kelly', age: 30 }
// ];

// const groupBy = (array, property) => {
//   return array.reduce(function (acc, obj) {
//     let key = obj[property];
//     if (!acc[key]) {
//       acc[key] = []
//     }
//     acc[key].push(obj);
//     return acc
//   }, {})
// }

// const groupedPeople = groupBy(people, 'age');
// console.log(groupedPeople);

// // Bonding arrays contained in an array of objects using the spread operator and initialValue

// // friends - an array of objects
// // where object field "books" is a list of favorite books
// let friends = [{
//   name: 'Anna',
//   books: ['Bible', 'Harry Potter'],
//   age: 21
// }, {
//   name: 'Bob',
//   books: ['War and peace', 'Romeo and Juliet'],
//   age: 26
// }, {
//   name: 'Alice',
//   books: ['The Lord of the Rings', 'The Shining'],
//   age: 18
//   }]

// let allBooks = friends.reduce(function (acc, curVal) {
//     return [...curVal.books, ...acc]
//   }, [])

// console.log(allBooks);
  
// // Remove duplicate items in an array
// const myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']
// const orderedArray = myArray.reduce(function (acc, curVal) {
//   if (acc.indexOf(curVal) === -1) {
//     acc.push(curVal)
//   }
//   return acc
//  }, [])
// console.log(orderedArray);

// // Array.prototype.sort()

// const numbers = [2, 1, 4, 3, 5];
// console.log('Before sort :>> ', numbers);
// console.log('Sort :>> ', numbers.sort());
// console.log('After sort :>> ', numbers);

// const clients = ['Mango', 'Ajax', 'Poly', 'Chelsey'];
// console.log(clients.sort());

// const users = [
//   { name: 'Mango', daysActive: 15 },
//   { name: 'Poly', daysActive: 4 },
//   { name: 'Ajax', daysActive: 27 },
//   { name: 'Chelsey', daysActive: 2 },
// ];

// const sortByActiveDays = (a, b) => -a.daysActive + b.daysActive;

// console.log(users.sort(sortByActiveDays));

// const players = [
// 	{id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false},
// 	{id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true},
// 	{id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true},
// 	{id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false},
// 	{id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true},
// ]

// const playerNames = players.map(function (player) {
// 	return {
// 		...player,
// 	points: player.points+player.points*100}
// });

// console.log(playerNames);

// const hardcorePlayers = players.filter((player) => player.timePlayed > 200);
// console.table(hardcorePlayers);

/* 
*
* -------------> Arrow functions <------------------
*
*/

const foo = function () {
	console.log(arguments);
	const arr = [...arguments];
	return arr
}
console.log(foo(1,2,3,4));