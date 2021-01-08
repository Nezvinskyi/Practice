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

// -------> 

var myArray = [];

// Only change code below this line
var i = 5;
while (i!==-1) {
    myArray.push(i);
    i--;
}

console.log(myArray);