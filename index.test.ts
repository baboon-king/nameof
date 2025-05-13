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
