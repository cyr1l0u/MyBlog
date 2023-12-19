Object.prototype.objCustom = function () {};
Array.prototype.arrCustom = function () {};

let obj = { name: "tom", age: "18" };

let iterable = [3, 5, 7];
iterable.foo = "hello";

for (let key in obj) {
  console.log(" obj key =", key); // logs: name, age, objCustom
}

for (let key in iterable) {
  console.log("iterable key", key); // logs: 0, 1, 2, "foo", "arrCustom", "objCustom"
}

for (let key in iterable) {
  if (iterable.hasOwnProperty(key)) {
console.log(key); // logs: 0, 1, 2, "foo"
  }
}

for (let value of iterable) {
  console.log(value); // logs: 3, 5, 7
}
