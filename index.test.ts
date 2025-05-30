import { expect, it } from "bun:test";

import { nameof } from "./index";

it("should return the name of the property", () => {
  const obj = { name: "John", age: 30 };
  const name = nameof(obj, "name");
  expect(name).toBe("name");
});

it("should return the name of the property with a different type", () => {
  const obj = { name: "John", age: 30 };
  const age = nameof(obj, "age");
  expect(age).toBe("age");
});

it("should return the name of the property using generic type", () => {
  const obj = { name: "John", age: 30 } as const;
  const name = nameof<typeof obj>("name");
  expect(name).toBe("name");
});

it("should return the name of the method property", () => {
  const obj = {
    name: "John",
    age: 30,
    jump() {
      console.log("jump");
    },
  } as const;
  const fnName = nameof(obj, "jump");
  expect(fnName).toBe("jump");
});

it("should return the name of the class property", () => {
  class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  }

  const person = new Person("John", 30);
  const name = nameof(person, "name");
  expect(name).toBe("name");
});

it("should return the name of the variable property", () => {
  const numbers = [1, 2, 3, 4, 5];
  const varName = nameof({ numbers });
  expect(varName).toBe("numbers");
});

it("should return the name of the static method property", () => {
  const fnName = nameof(Array, "isArray");
  expect(fnName).toBe("isArray");
});

it("should return the name of the built-in class", () => {
  const fnName = nameof(Array);
  expect(fnName).toBe("Array");
});

it("should return the name of the function", () => {
  function bar() {}
  const fnName = nameof(bar);
  expect(fnName).toBe("bar");
});

it("should return the name of the class", () => {
  class Foo {}
  const fnName = nameof(Foo);
  expect(fnName).toBe("Foo");
});
