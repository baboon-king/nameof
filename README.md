# `nameof`

> A tiny utility for safely extracting property names from TypeScript objects — inspired by C#'s `nameof` operator.

## ✨ Features

- ✅ **Type-safe** access to property names
- ✅ **Preserves literal types**
- ✅ **Refactor-friendly**
- ✅ **Zero dependencies**
- ✅ Designed for Bun (but works with any TypeScript setup)
- ✅ Great for logging, forms, schemas, serialization, and more

## 📦 Installation

```bash
# With Bun
bun add @nameof/nameof

# Or with npm
npm install @nameof/nameof
```

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

### Use Cases

- 🐞 Logging: `console.log(nameof(user, "id"))`
- 📄 JSON mapping / serializers
- 🧪 Form handlers & validation schemas
- 🔧 Column mapping / query builders

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

## 📌 API

```ts
function nameof<T, K extends keyof T>(obj: T, key: K): K;
```

- `obj`: Used only for typing context
- `key`: The property name to extract
- **Returns**: The property name as a string literal (with preserved type)

## 📋 Example: Forms

```ts
interface FormData {
  username: string;
  password: string;
}

function getLabel(field: keyof FormData) {
  return `Label for ${field}`;
}

const field = nameof<FormData>({} as FormData, "username");
console.log(getLabel(field)); // Label for username
```

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

### References

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

## 🙌 Contributing

Suggestions, issues, and PRs are welcome!

If you find this useful, please ⭐️ the repo and help others discover it!
