// for README.md
import nameof from "@nameof/nameof";

const obj = {
  name: "John",
  age: 30,
};
console.log(nameof(obj, "name")); // output: name

type Obj = typeof obj;
console.log(nameof<Obj>("age")); // output: age

console.log(nameof(Array)); // output: Array
console.log(nameof(Array, "isArray")); // output: isArray

const numbers = new Array<number>(1, 2, 3);
console.log(nameof({ numbers })); // output: numbers

const fn = () => {};
console.log(nameof(fn)); // output: fn
