// for README.md
// https://www.typescriptlang.org/play
import nameof from "@nameof/nameof";

// basic
const obj = { name: "John", age: 30 };
const keyName = nameof(obj, "name");
console.log(`keyName: ${keyName}`);

// single key
const keyName2 = nameof<typeof obj>("age");
console.log(`keyName2: ${keyName2}`);

// variable name
const numbers = [1, 2, 3, 4, 5];
const variableName = nameof({ numbers });
console.log(`variableName: ${variableName}`);

// Class Name
class Person {}
const className = nameof(Person);
console.log(`className: ${className}`);

// Function Name
function bar() {}
const functionName = nameof(bar);
console.log(`functionName: ${functionName}`);
