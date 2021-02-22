// function copyMachine(arr, num) {
//   let newArr = [];
//   while (num >= 1) {
//     // Only change code below this line
//     newArr.push([...arr]);
//     // Only change code above this line
//     num--;
//   }
//   return newArr;
// }

// console.log(copyMachine([true, false, true], 2));
// console.log('object');

// -----------

// function quickCheck(arr, elem) {
//   // Only change code below this line
//   if (arr.indexOf(elem) === -1) {
//     return false;
//   } else {
//     return true;
//   }
//   // Only change code above this line
// }

// console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

// console.log(quickCheck(['onions', 'squash', 'shallots'], 'onions'));

// -----------
function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) === -1) {
      newArr.push(arr[i]);
    }
  }
  // Only change code above this line
  return newArr;
}

console.log(
  filteredArray(
    [
      [3, 2, 3],
      [1, 6, 3],
      [3, 13, 26],
      [19, 3, 9],
    ],
    3,
  ),
);
// -----------------------

let users = {
  Alan: {
    age: 27,
    online: true,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: true,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};

function isEveryoneHere(obj) {
  // if (
  //   obj.hasOwnProperty('Alan') &&
  //   obj.hasOwnProperty('Jeff') &&
  //   obj.hasOwnProperty('Sarah') &&
  //   obj.hasOwnProperty('Ryan')
  // ) {
  //   return true;
  // }
  // return false;

  return ['Alan', 'Jeff', 'Sarah', 'Ryan'].every(name =>
    obj.hasOwnProperty(name),
  );
}

console.log(isEveryoneHere(users));

const usersObj = {
  Alan: {
    online: false,
  },
  Jeff: {
    online: true,
  },
  Sarah: {
    online: false,
  },
};

function countOnline(usersObj) {
  // Only change code below this line
  let count = 0;
  for (let user in usersObj) {
    if (usersObj[user].online) {
      count++;
    }
  }
  return count;
  // Only change code above this line
}

console.log(countOnline(usersObj));

//----------

function reverseString(str) {
  str = str.split('').reverse().join('');
  return str;
}

console.log(reverseString('hello'));

//----------
function findLongestWordLength(str) {
  let arr = str.split(' ');
  let longestWord = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > longestWord.length) {
      longestWord = arr[i];
    }
  }
  return longestWord.length;
}

console.log(
  findLongestWordLength('The quick brown fox jumped over the lazy dog'),
);

//----------
function largestOfFour(arr) {
  let filteredArray = [];
  for (let i = 0; i < arr.length; i++) {
    let maxEl = arr[i][0];
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > maxEl) {
        maxEl = arr[i][j];
      }
    }
    filteredArray.push(maxEl);
  }
  return filteredArray;
}

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ]),
);

//----------
function confirmEnding(str, target) {
  // for (let i = 0; i < target.length; i++) {
  //   if (target[target.length - 1 - i] !== str[str.length - 1 - i]) {
  //     return false;
  //   }
  // }
  // return true;
  return str.slice(-target.length) === target;
}

console.log(confirmEnding('Bastian', 'ian'));
