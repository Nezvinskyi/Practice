// let myString = "Hello, World!";
// let myRegex = /Hello/;
// let result = myRegex.test(myString); // Change this line
// console.log(result);


//------->
// let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
// let vowelRegex = /[aeiou]/ig; // Change this line
// let result = quoteSample.match(vowelRegex); // Change this line
// console.log(result);

//------->
// let quoteSample = "The quick brown fox jumps over the lazy dog.";
// let alphabetRegex = /[a-z]/ig; // Change this line
// let result = quoteSample.match(alphabetRegex); // Change this line
// console.log(result);

//------->
// let quoteSample = "Blueberry 3.141592653s are delicious.";
// let myRegex = /[h-s2-6]/ig; // Change this line
// let result = quoteSample.match(myRegex); // Change this line
// console.log(result);

//------->
// let quoteSample = "3 blind mice.";
// let myRegex = /[^aeiou0-9]/ig; // Change this line
// let result = quoteSample.match(myRegex); // Change this line
// console.log(result);

//------->
// let difficultSpelling = "Misssissippi";
// let myRegex = /s+/ig; // Change this line
// let result = difficultSpelling.match(myRegex);
// console.log(result);

//------->
// let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
// // Only change code below this line
// let chewieRegex = /Aa*/; // Change this line
// // Only change code above this line

// let result = chewieQuote.match(chewieRegex);
// console.log(result);

//------->
// let text = 'titanic';
// let regex = /t[a-z]*?i/;
// console.log(text.match(regex));

//------->
// let text = "<h1>Winter is coming</h1>";
// let myRegex = /<.*?>/; // Change this line
// let result = text.match(myRegex);
// console.log(result);

//------->
// let longHand = /[A-Za-z0-9_]+/;
// let shortHand = /\w+/;
// let numbers = "42";
// let varNames = "important_var";
// console.log(numbers.match(longHand)); // Returns true
// console.log(numbers.match(shortHand)); // Returns true
// console.log(varNames.match(longHand)); // Returns true
// console.log(varNames.match(shortHand)); // Returns true

//------->
// let quoteSample = "The five boxing wizards jump quickly.";
// let wordsRegex = /\w+/gi; // Change this line
// let alphabetRegex = /\w/gi; // Change this line
// let wordsCount = quoteSample.match(wordsRegex).length;
// let characterCount = quoteSample.match(alphabetRegex).length;
// console.log('wordsCount :>> ', wordsCount);
// console.log('characterCount :>> ', characterCount);

//------->
// Usernames can only use alpha-numeric characters.
// The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.
// Username letters can be lowercase and uppercase.
// Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.

// let username = "JackOfAllTrades";
// let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; // Change this line
// let result = userCheck.test(username);
// console.log(result);

// function userCheck(username) {
// 	let regex = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
// 	return `${username} ${regex.test(username)}`;
// }

// console.log(userCheck('JACK'));
// console.log(userCheck('J'));
// console.log(userCheck('Jo'));
// console.log(userCheck('Oceans11'));
// console.log(userCheck('RegexGuru'));
// console.log(userCheck('007'));
// console.log(userCheck('9'));
// console.log(userCheck('A1'));
// console.log(userCheck('BadUs3rnam3'));
// console.log(userCheck('Z97'));
// console.log(userCheck('c57bT3'));
// console.log(userCheck('AB1'));

// ------->
// let A4 = "haaaah";
// let A2 = "haah";
// let A100 = "h" + "a".repeat(100) + "h";
// let multipleA = /ha{3,}h/;
// multipleA.test(A4); // Returns true
// multipleA.test(A2); // Returns false
// multipleA.test(A100); // Returns true
// console.log(A4.match(multipleA));
// console.log(A2.match(multipleA));
// console.log(A100.match(multipleA));

// ------->
// let myString = "Eleanor Roosevelt";
// let myRegex = /(Franklin|Eleanor).*\sRoosevelt/;
// let result = false;


// const checkRoosevelt = (name) => {
// 	let myRegex = /(Franklin|Eleanor).*\sRoosevelt/;
// 	return myRegex.test(name);
// }

// console.log(checkRoosevelt('Eleanor Roosevelt'));
// console.log(checkRoosevelt('Franklin D. Roosevelt'));
// console.log(checkRoosevelt('Franklin Rosevelt'));
// console.log(checkRoosevelt('Frank Roosevelt'));

