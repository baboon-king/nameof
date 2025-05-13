# nameof

A tiny utility for safely extracting property names from TypeScript objects — just like C#'s `nameof` operator.

## ✨ Features

- ✅ Type-safe access to property names
- ✅ Fully typed with TypeScript
- ✅ Zero dependencies
- ✅ Ideal for logging, form handling, serialization, etc.

## 📦 Installation

```bash
# npm
npm install nameof
```

## 🚀 Usage

```ts
import nameof from "nameof";

const user = {
  id: 1,
  name: "Alice",
  age: 30,
};

const propName = nameof(user, "name"); // "name"
```

### Use Cases

- 🐞 Logging: `console.log(nameof(user, 'id'))`
- 📄 JSON mapping or serialization
- 🧪 Writing form handlers or validation schemas

## 🧠 Why?

TypeScript doesn't have a built-in `nameof` operator like C#, which means developers often hardcode property names as strings. This utility lets you reference object property names in a **type-safe** and **refactor-friendly** way, reducing the risk of bugs due to typos or renamed fields.

## 🛡️ Refactor-Safe by Design

One of the key benefits of using `nameof` is **type-safe property access during refactoring**.

### 🔍 What happens during a rename?

```ts
const user = {
  id: 123,
  name: "Alice",
};

const field = nameof(user, "name"); // "name"
```

Now suppose you **rename** the `name` field to `fullName` (using your IDE’s "Rename Symbol" or similar):

```ts
const user = {
  id: 123,
  fullName: "Alice",
};

// ❌ Error: Argument of type '"name"' is not assignable to parameter of type '"id" | "fullName"'
const field = nameof(user, "name");
```

✅ TypeScript immediately catches this and shows an error, because `"name"` is no longer a valid key of the `user` object.

---

### ⚠️ Compare with hardcoded strings

```ts
const field = "name"; // ❌ This will NOT cause an error if you rename the property
```

Hardcoded strings do **not** participate in renaming or type checking — leading to silent failures after refactoring.

---

### ✅ With `nameof`, you're safe

- `nameof(obj, "key")` enforces that `"key"` must be a real key of `obj`
- If you rename the property, your IDE and TypeScript will help you update all uses
- Ensures **compile-time safety** over fragile string literals

---

### 💡 Pro Tip

Use `as const` for extra strictness when working with constant objects:

```ts
const config = {
  apiEndpoint: "/api/data",
  retry: true,
} as const;

const key = nameof(config, "apiEndpoint"); // key: "apiEndpoint"
```

This ensures that TypeScript treats keys as **literal types**, which `nameof` returns exactly.

## 📌 API

### `nameof<T>(obj: T, key: keyof T): string`

- `obj`: The object to reference (used for type checking only).
- `key`: The property of the object whose name you want as a string.

Returns: A string representing the name of the property.

## 📁 Example with Forms

```ts
interface FormData {
  username: string;
  password: string;
}

function getLabel(field: keyof FormData) {
  return `Label for ${field}`;
}

const fieldName = nameof<FormData>({} as FormData, "username"); // "username"
console.log(getLabel(fieldName)); // "Label for username"
```

## 🔧 Development

Clone the repo:

```bash
git clone https://github.com/baboon-king/nameof.git
cd nameof
bun install
```

Build:

```bash
bun run build
```

Run tests (if any added):

```bash
bun test
```

## 📄 License

[MIT](LICENSE)

## ❤️ Contributing

Pull requests and issues are welcome! Feel free to open a discussion if you have ideas or suggestions.
