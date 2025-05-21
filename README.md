# `nameof`

A tiny utility for safely extracting property names from TypeScript objects — inspired by C#'s [`nameof`](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/nameof) operator.

## 💡 Examples

```ts
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
```

[Try Online (only type)](https://www.typescriptlang.org/play/?#code/JYWwDg9gTgLgBAOwIYgKYQGZw1CI4BEAAsmpgPSnoYEDcAUPeeXAEZIDOwAxvdxAg7wIrAFZwAvHADeiFKgBchAFIQAFggIAaOEgDmiuAGYADHAC+DfoPgBrVAE8AcvMlyyGABQjROglQIASgYmFi4EPQAbVDh7Bz4BIVjHFzQAJjcqTAAeGAcwajgfAD5PAn1UIJDmOAA3JChgJFZo91QEm0QAVxBWVCgONwBtAEYdNJ0jHQAWHQBWAF0rRPh6xubo1JipLK9ZBB6+gYtgxhqAYUjOQa2+K45BgAV+jgEZcw6k7nuOLcz5TCeZ4DATBOA1YGvBBnFgAMS6CG4MGAb1uGARSJRCDYDU8gXen3g6MRyIEfx2AK87CgYJq1PoQA)

## ✨ Features

- ✅ **Type-safe** access to property names
- ✅ **Preserves literal types**
- ✅ **Refactor-friendly**
- ✅ **Zero dependencies**

## 📦 Installation

```bash
# With Bun
bun add @nameof/nameof
```

with `npm` `yarn` `pnpm` amd more [see here](/Installation.md)

## 🚀 Usage

```ts
import nameof from "@nameof/nameof";

const user = {
  id: 1,
  name: "Alice",
  age: 30,
};

const propName = nameof(user, "name"); // "name"
```

## 🧠 Why?

TypeScript lacks a built-in `nameof` operator like C#. Developers often fall back on hardcoded strings, which:

- ❌ Aren't checked by the compiler
- ❌ Don’t update when properties are renamed
- ❌ Easily lead to bugs in refactors

This utility gives you **type-safe property name extraction**, with full support for TypeScript’s type system and IDE refactor tools.

## 🛡️ Refactor-Safe by Design

One of the key benefits of `nameof` is its **compile-time safety during refactoring**.

### 🔁 Rename-safe

```ts
const user = {
  id: 123,
  name: "Alice",
};

const field = nameof(user, "name"); // "name"
```

Now, if you rename `name` to `fullName`:

```ts
const user = {
  id: 123,
  fullName: "Alice",
};

// ❌ TypeScript error:
const field = nameof(user, "name");
// Argument of type '"name"' is not assignable to ...
```

✅ TypeScript catches it instantly. Your code is safe from silent bugs caused by outdated strings.

### 🔍 What about hardcoded strings?

```ts
const field = "name"; // ❌ No error on rename
```

Hardcoded strings aren’t tracked by the compiler — you lose all refactor safety.

### 💡 Pro Tip: Use `as const`

For stricter typing:

```ts
const config = {
  apiEndpoint: "/api/data",
  retry: true,
} as const;

const key = nameof(config, "apiEndpoint"); // type: "apiEndpoint"
```

Literal types are preserved in the result!

## ❌ Why Not a Macro or Compiler?

Some libraries implement `nameof(foo.bar)` using Babel or AST transforms. This package **deliberately avoids** those approaches.

### 🚫 No macros or compilers required

- ❌ No Babel plugins
- ❌ No SWC or TypeScript transformers
- ❌ No custom build setup

### ✅ Just TypeScript

- Works in **any environment** (Node, Bun, Vite, Webpack, etc.)
- Transparent and reliable
- Keeps your build chain simple

### 🔗 References

- https://github.com/dsherret/ts-nameof/issues/121

## 🔧 Development

This project is built with [Bun](https://bun.sh/) — fast, modern, and TypeScript-first.

```bash
git clone https://github.com/baboon-king/nameof.git
cd nameof
bun install
bun run build
```

## 📄 License

[MIT License](https://github.com/nameof/nameof/blob/main/LICENSE) © 2025-PRESENT [BaboonKing](https://github.com/baboon-king)

## 🌸 Thanks

This project is heavily inspired by the following awesome projects.

- [nameof expression (C# reference)](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/nameof)
- [ts-nameof](https://github.com/dsherret/ts-nameof)
- [ts-keyof](https://github.com/sotnikov-link/ts-keyof)

## 🙌 Contributing

Suggestions, issues, and PRs are welcome!

If you find this useful, please ⭐️ the repo and help others discover it!
