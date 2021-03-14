const validJSON = '{ "name": "Mango", "age": 3 }';
const invalidJSON = '{lksdjhf sldkjfh sdfkj}';

console.log(JSON.parse(validJSON));
try {
  console.log(1);
  console.log(JSON.parse(invalidJSON));
  console.log(2);
} catch (error) {
  console.dir(error);
}
