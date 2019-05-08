function circumference(r) {
  return 2 * Math.PI * r;
}

function foo() {
  console.log("foo!");
}

function area(r) {
  foo();
  return Math.PI * r * r;
}

module.exports = {
  circumference: circumference,
  area: area
};
