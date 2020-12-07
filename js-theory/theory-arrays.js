// const arr = ['mango', 'apple', 'peach'];

// console.log('arr :>> ', arr);

// for (let i = 0; i < arr.length; i+=1) {
//   console.log(`arr[${i}] :>> ${arr[i]}`);
// }

// arr[3] = 'Kiwi';
// console.log('arr :>> ', arr);

// arr[0] = 'Ripe mango';
// console.log('arr :>> ', arr);

// arr[5] = 'gap?';
// console.log('arr :>> ', arr);
// console.log(`arr[${4}] :>> ${arr[4]}`)

// console.log('arr.length :>> ', arr.length);

// arr.length = 2;
// console.log('arr.length :>> ', arr.length);
// console.log('arr :>> ', arr);

// const numbers = [];

// for (let i = 0; i < 10; i += 1) {
//   numbers.push(`label-${ i }`);
// }
// console.log('numbers :>> ', numbers);


// for (const number of numbers) {
//   console.log('number :>> ', number);
// }

// const string = 'javastript';

// for (const character of string) {
//   console.log('character :>> ', character);
// }

// const clients = ['Mango', 'Poly', 'Ajax'];
// const clientNameToFind = 'Polys';
// let message;

// for (const client of clients) {
//   if (client === clientNameToFind) {
//     message = 'There is client with this name in database';
//     break;
//   } 
//   message = 'There is no client with this name!'
// }

// console.log(message);

// const numbers = [1, 2, 3, 5, 6, 3, 1, 45, 8, 9, 43, 645, 343, 30];
// const threshold = 30;

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`The number bigger than ${threshold}: ${numbers[i]}`);
// }

// const matrix = [[1, 2, 3,'first row'], [4, null, 6,'2nd raw'], [7, 8, 9,'3rd row']]

// console.log('matrix :>> ', matrix);

// console.log('matrix[1] :>> ', matrix[1]);

// console.log('matrix.length :>> ', matrix.length);

// for (let i = 0; i < matrix.length; i += 1) {
//   for (let j = 0; j < matrix[i].length; j += 1) {
//     console.log('matrix[i][j] :>> ', matrix[i][j]);
//   }
// }

// ----> methods - split and join

// const message = 'welcome to bahamas';

// console.log(message.split(' '));
// console.log(message);
// console.log('message.length :>> ', message.length);

// const messageArray = message.split(' ');
// console.log('messageArray :>> ', messageArray);

// const arrayToJoin = ['Do', 'not', 'go', 'gentle', 'into', 'that', 'good', 'night'];

// console.log('arrayToJoin :>> ', arrayToJoin);
// console.log('arrayToJoin.join(" ") :>> ', arrayToJoin.join(' '));

// ----> methods indexof(), includes()

// const arrayIndexOf = ['Old', 'age', 'should', 'burn', 'and', 'rave', 'at', 'close', 'of', 'day'];

// console.log('arrayIndexOf.indexOf("and") :>> ', arrayIndexOf.indexOf('and'));

// console.log('arrayIndexOf.includes("rave") :>> ', arrayIndexOf.includes('rave'));

// ----> methods push(), pop(), shift(), unshift()

// const stack = [0, 'a'];

// for (let i = 0; i < 10; i += 1){
//   stack.push(i);
// }
// console.log('stack :>> ', stack);

// stack.pop();
// console.log('stack pop:>> ', stack);

// console.log('stack.pop() :>> ', stack.pop());
// console.log('stack :>> ', stack);

// console.log(stack.shift());
// console.log('stack :>> ', stack);

// stack.unshift(null);
// console.log('stack :>> ', stack);


// ----> method slice()

// const arraySlice = ['Rage,', 'rage', 'against', 'the', 'dying', 'of', 'the', 'light.'];
// const newArray = arraySlice.slice(0, 2);
// console.log('newArray :>> ', newArray);

// // const endArray = arraySlice.slice(4);
// const endArray = arraySlice.slice(-3);
// console.log('endArray :>> ', endArray);

// const copyArray = arraySlice;
// console.log('copyArray :>> ', copyArray);

// arraySlice[0] = 'r-@-g-e,';
// console.log('arraySlice :>> ', arraySlice);
// console.log('newArray :>> ', newArray);
// console.log('copyArray :>> ', copyArray);

// ----> method splice()

// const bigArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const smallArray = bigArray.splice(5, 2);

// console.log('bigArray :>> ', bigArray);
// console.log('smallArray :>> ', smallArray);

// bigArray.splice(5, 0, 'a', 'b', 'c');
// console.log('bigArray :>> ', bigArray);


// ----> Functions

// const add = function (a,b=1,c=1) {
//   return Math.pow(a,2)+2*b+c
// };

// const result = add(3,);
// console.log('result :>> ', result);

// ----->pseudoarray arguments

// const sum = function () {
//   let total = 0;

//   for (const argument of arguments) {
//     total += argument;
//   }
//   return total;
// }

// console.log('sum(1,2,3) :>> ', sum(1,2,3));

