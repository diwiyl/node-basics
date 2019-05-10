function hello() {
  console.log("Hello world!");
}

hello();

console.log("== process.env.SPECIAL_MESSAGE:", process.env.SPECIAL_MESSAGE);

var circle = require('./lib/circle');
console.log("== circle.circumference(5):", circle.circumference(5));
console.log("== circle.area(5):", circle.area(5));

var figlet = require('figlet');
figlet(process.env.SPECIAL_MESSAGE, function (err, data) {
  if (!err) {
    console.log(data);
  }
});

var fs = require('fs');

fs.readFile('./lib/circle.js', 'utf8', function (err, contents) {
  if (err) {
    throw err;
  }
  console.log("== File contents:", contents);
});
console.log("== This call comes after fs.readFile()");

var contents = fs.readFileSync('./lib/circle.js', 'utf8');
console.log("== Synchronous file contents:", contents);

fs.writeFile('./hello.txt', "Hello world, for the second time!\n", function (err) {
  if (err) {
    throw err;
  }
  console.log("== File contents written.");
});
