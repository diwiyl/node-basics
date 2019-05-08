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
