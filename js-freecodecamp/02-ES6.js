// -----> rest parameters
// function howMany(...args) {
//   return "You have passed " + args.length + " arguments.";
// }
// console.log(howMany(1, 2, 4));
// console.log(howMany("string", null, [1, 2, 3], {})); // You have passed 4 arguments.

//------>
// const sum = (...args) => {
	//   // const args = [x, y, z];
	//   return args.reduce((a, b) => a + b, 0);
	// }
	// console.log(sum(1,2,4));
	
//------>
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = [];
  for(const item of result.failure){
    failureItems.push(`<li class="text-warning">${item}</li>`)
  }
  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);
console.log(failuresList);
