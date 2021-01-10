// Basic JavaScript: Record Collection

// const collection = {
//   2548: {
//     albumTitle: 'Slippery When Wet',
//     artist: 'Bon Jovi',
//     tracks: ['Let It Rock', 'You Give Love a Bad Name']
//   },
//   2468: {
//     albumTitle: '1999',
//     artist: 'Prince',
//     tracks: ['1999', 'Little Red Corvette']
//   },
//   1245: {
//     artist: 'Robert Palmer',
//     tracks: []
//   },
//   5439: {
//     albumTitle: 'ABBA Gold'
//   }
// };

// // Only change code below this line
// function updateRecords(object, id, prop, value) {
//   if (prop!=='tracks'&&value!==''){
//     object[id][prop] = value;
// 	}
//   if (prop==='tracks'&&!object[id].hasOwnProperty('tracks')){
//     object[id]['tracks'] = [value];
//   } else if (prop==='tracks'&&value!==''){
//     object[id]['tracks'].push(value);
//   }
//   if (value === '') {
//     delete object[id][prop];
// 	}
//   return object;
// }

// console.log(2, updateRecords(collection, 5439, "artist", "ABBA")); // artist should be ABBA

// console.log(3, updateRecords(collection, 5439, "tracks", "Take a Chance on Me")); // tracks should have Take a Chance on Me as the last element.

// console.log(4, updateRecords(collection, 2548, "artist", "")); // artist should not be set

// console.log(5, updateRecords(collection, 1245, "tracks", "Addicted to Love")); // tracks should have Addicted to Love as the last element.

// console.log(6, updateRecords(collection, 2468, "tracks", "Free"));	//tracks should have 1999 as the first element.

// console.log(7, updateRecords(collection, 2548, "tracks", "")); //tracks should not be set

// console.log(8, updateRecords(collection, 1245, "albumTitle", "Riptide")); //albumTitle should be Riptide

// -------> Replace Loops using Recursion

// function sum(arr, n) {
// 	if(n<=0) {
// 			return 0;
// 		} else {
// 			return sum(arr, n-1)+arr[n-1];
// 		}
// }

// -------> Basic JavaScript: Profile Lookup

// var contacts = [
//     {
//         "firstName": "Akira",
//         "lastName": "Laine",
//         "number": "0543236543",
//         "likes": ["Pizza", "Coding", "Brownie Points"]
//     },
//     {
//         "firstName": "Harry",
//         "lastName": "Potter",
//         "number": "0994372684",
//         "likes": ["Hogwarts", "Magic", "Hagrid"]
//     },
//     {
//         "firstName": "Sherlock",
//         "lastName": "Holmes",
//         "number": "0487345643",
//         "likes": ["Intriguing Cases", "Violin"]
//     },
//     {
//         "firstName": "Kristian",
//         "lastName": "Vos",
//         "number": "unknown",
//         "likes": ["JavaScript", "Gaming", "Foxes"]
//     }
// ];

// function lookUpProfile(name, prop){
// // Only change code below this line
// 	for (const contact of contacts) {
// 		if (contact.firstName === name) {
// 			if (prop in contact) {
// 				return contact[prop];
// 			} else {
// 				return 'No such property'
// 			}
// 		}
// 	}
// 	return 'no such name';
// // Only change code above this line
// }

// console.log(1, lookUpProfile("Akira", "likes"));
// console.log(2, lookUpProfile("Kristian", "lastName")); //"Vos"
// console.log(3, lookUpProfile("Sherlock", "likes")); // should return ["Intriguing Cases", "Violin"]
// console.log(4, lookUpProfile("Harry", "likes")); // should return an array
// console.log(5, lookUpProfile("Bob", "number"));// should return "No such contact"
// console.log(6, lookUpProfile("Bob", "potato"));// should return "No such contact"
// console.log(7, lookUpProfile("Akira", "address"));// should return "No such property"

//------> 
// function convertToInteger(str) {
// return parseInt(str, 2);
// }

// console.log(convertToInteger("10011"));


// ------> recursion
// function countdown(n){
//   if(n<1){
//   return []
//   } else{
// 		const reversedArray = countdown(n-1);
// 		reversedArray.unshift(n);
// 		return reversedArray;
//   }
// }

// console.log(countdown(5));

// ------> 
function rangeOfNumbers(startNum, endNum) {

		if (endNum < startNum) {
			return [];
		} else {
			const arr = rangeOfNumbers(startNum, endNum - 1);
			arr.push(endNum);
			return arr;
	}

};
console.log(rangeOfNumbers(6, 9));