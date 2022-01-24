// Find the Symmetric Difference

// The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of the two sets but not in both. For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

// Symmetric difference is a binary operation, which means it operates on only two elements. So to evaluate an expression involving symmetric differences among three elements (A △ B △ C), you must complete one operation at a time. Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.
// Create a function that takes two or more arrays and returns an array of their symmetric difference. The returned array must contain only unique values (no duplicates).

function sym(...args) {
  const symDiff = (array1, array2) => [
    ...array1.filter(item => !array2.includes(item)),
    ...array2.filter(item => !array1.includes(item)),
  ];

  return [...new Set(args.reduce(symDiff))];
}
// console.log(sym([1, 2, 3], [5, 2, 1, 4], [7, 0, 0]));

// -------------------
// Inventory Update
//Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.

function updateInventory(arr1, arr2) {
  arr2.forEach(item => {
    arr1.find(e => {
      if (item[1] === e[1]) {
        e[0] += item[0];
      }
    });
    if (!arr1.some(e => item[1] === e[1])) {
      arr1.push(item);
    }
  });
  return arr1.sort((a, b) => (a[1] > b[1] ? 1 : -1));
}

// Example inventory lists
var curInv = [
  [21, 'Bowling Ball'],
  [2, 'Dirty Sock'],
  [1, 'Hair Pin'],
  [5, 'Microphone'],
];

var newInv = [
  [2, 'Hair Pin'],
  [3, 'Half-Eaten Apple'],
  [67, 'Bowling Ball'],
  [7, 'Toothpaste'],
];

// console.log(updateInventory(curInv, newInv));
// console.log(
// updateInventory(
//   [
//     [21, 'Bowling Ball'],
//     [2, 'Dirty Sock'],
//     [1, 'Hair Pin'],
//     [5, 'Microphone'],
//   ],
//   [
//     [2, 'Hair Pin'],
//     [3, 'Half-Eaten Apple'],
//     [67, 'Bowling Ball'],
//     [7, 'Toothpaste'],
//   ],
// ),
// );

// -------------------
// // Pairwise
// Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.

// You may use multiple pairs that have the same numeric elements but different indices. Each pair should use the lowest possible available indices. Once an element has been used it cannot be reused to pair with another element. For instance, pairwise([1, 1, 2], 3) creates a pair [2, 1] using the 1 at index 0 rather than the 1 at index 1, because 0+2 < 1+2.

// For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11]. We can then write out the array with their indices and values.

// Index	0	1	2	3	4
// Value	7	9	11	13	15
// Below we'll take their corresponding indices and add them.

// 7 + 13 = 20 → Indices 0 + 3 = 3
// 9 + 11 = 20 → Indices 1 + 2 = 3
// 3 + 3 = 6 → Return 6

function pairwise(array, arg) {
  if (array.length === 0) return 0;
  let result = [];
  array.forEach((el, idx, arr) => {
    arr.forEach((e, i) => {
      if (
        idx !== i &&
        el + e === arg &&
        !result.includes(idx) &&
        !result.includes(i)
      ) {
        result.push(idx);
        result.push(i);
      }
    });
  });
  return result.reduce((acc, el) => acc + el);
}

// console.log(pairwise([], 2));

// -------------------
// Bubble sort
function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j + 1], array[j]] = [array[j], array[j + 1]];
      }
    }
  }

  return array;
}

// console.log(
//   bubbleSort([
//     1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92, 10000,
//   ]),
// );
// i=0 => 1 < 4 => ...
// i=1 => 4 > 2 => 1, 2, 4, ...
// i=3

// --------------
// Selection sort
function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    [array[min], array[i]] = [array[i], array[min]];
  }

  return array;
}

// console.log(
//   selectionSort([
//     1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
//   ]),
// );

// --------------
// Insertion Sort
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let curr = array[i];
    for (var j = i - 1; j >= 0 && array[j] > curr; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = curr;
  }
  return array;
}

// console.log(
//   insertionSort([
//     10, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
//   ]),
// );

// i=1, curr=4
// cycle j=0, 10>4, [10,10], j=-1 end cycle
// [4, 10, 2, ...]
// i=2, curr = 2
// cycle j=1, 10>2,   arr[2] = arr[1], [4, 2, 2, ...],
// j = 0, 4>2, arr[2] = arr[1],

// --------------
// Quick Sort
function quickSort(array) {
  if (array.length === 0) {
    return [];
  } else {
    const pivotValue = array[0];
    // Sort elements into three piles
    let lesser = [];
    let equal = [];
    let greater = [];
    for (let e of array) {
      if (e < pivotValue) {
        lesser.push(e);
      } else if (e > pivotValue) {
        greater.push(e);
      } else {
        equal.push(e);
      }
    }
    return [...quickSort(lesser), ...equal, ...quickSort(greater)];
  }
}

// console.log(
//   quickSort([
//     1, 4, 33, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
//   ]),
// );

// --------------
// Merge Sort
function mergeSort(array) {
  if (array.length === 1) {
    return array;
  } else {
    const splitIndex = Math.floor(array.length / 2);
    return merge(
      mergeSort(array.slice(0, splitIndex)),
      mergeSort(array.slice(splitIndex)),
    );
  }
  // Merge two sorted arrays
  function merge(array1, array2) {
    let merged = [];
    while (array1.length && array2.length) {
      if (array1[0] < array2[0]) {
        merged.push(array1.shift());
      } else if (array1[0] > array2[0]) {
        merged.push(array2.shift());
      } else {
        merged.push(array1.shift(), array2.shift());
      }
    }
    // After looping ends, one array is empty, and other array contains only
    // values greater than all values in `merged`
    return [...merged, ...array1, ...array2];
  }
}

// console.log(
//   mergeSort([
//     1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
//   ]),
// );

// ---------
// Binary search
function binarySearch(searchList, value) {
  const arrayPath = [];
  let low = 0;
  let high = searchList.length - 1;
  let mid = Math.floor(high / 2);

  // if first comparison finds value
  if (searchList[mid] == value) {
    arrayPath.push(searchList[mid]);
    return arrayPath;
  }

  while (searchList[mid] !== value) {
    arrayPath.push(mid);

    if (high < low) {
      return 'Value Not Found';
    }

    if (searchList[mid] < value) {
      low = mid + 1;
      mid = low + Math.floor((high - low) / 2);
    } else if (searchList[mid] > value) {
      high = mid - 1;
      mid = low + Math.floor((high - low) / 2);
    }

    if (searchList[mid] === value) {
      arrayPath.push(mid);
    }
  }

  return arrayPath;
}
const testArray = [
  0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 49, 70,
];

console.log(binarySearch(testArray, 1));
