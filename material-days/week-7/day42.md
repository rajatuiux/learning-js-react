## Day 42 – Modern Array Loops: for...of and .forEach()

#### Why Modern Loops?

Traditional `for` loops can feel repetitive:

```
js
CopyEdit
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

```

Modern loops **simplify** this. Let’s learn the two most popular ways:

#### `for...of` Loop

### What it does:

Loops through **each value** in an array — simple and clean.

### Syntax:

```
js
CopyEdit
for (let item of array) {
  // use item
}

```

### Example:

```
js
CopyEdit
let fruits = ["apple", "banana", "mango"];

for (let fruit of fruits) {
  console.log(fruit);
}

```

> You don’t need to worry about indexes or .length.
>
> Just get each value directly in `fruit`.

#### `.forEach()` Method

### What it does:

Calls a function once for **each element** in the array.

### Syntax:

```
js
CopyEdit
array.forEach(function (item, index) {
  // do something
});

```

### Example:

```
js
CopyEdit
let colors = ["red", "green", "blue"];

colors.forEach(function (color, index) {
  console.log(`Color ${index + 1}: ${color}`);
});

```

> .forEach() gives both item and index.
>
> It does **not return** anything; just runs logic.

#### Comparison Table

| Feature       | `for` loop   | `for...of`   | `.forEach()`          |
| ------------- | ------------ | ------------ | --------------------- |
| Access index  | ✅           | ❌           | ✅ (second parameter) |
| Simple syntax | ❌           | ✅           | ✅                    |
| Break early   | ✅ (`break`) | ✅ (`break`) | ❌ Cannot break early |
| Return values | ❌           | ❌           | ❌                    |

#### Best Use Cases

| Use Case                     | Best Loop           |
| ---------------------------- | ------------------- |
| Just read values             | `for...of`          |
| Need index with value        | `.forEach()`        |
| Need to stop early (`break`) | `for` or `for...of` |

#### Real-Life Example: User Emails

```
js
CopyEdit
let users = [
  { name: "John", email: "john@example.com" },
  { name: "Sara", email: "sara@example.com" },
];

users.forEach(function (user) {
  console.log(`${user.name}'s email is ${user.email}`);
});

```

## 🔸 Practice Challenge:

1. Create an array of 5 book titles.
2. Loop through them using:
   - `for...of`
   - `.forEach()`
3. Print each with its position (e.g., “Book 1: Title”)

#### Key Takeaways:

- `for...of` is great for **simple value loops**
- `.forEach()` is great for **value + index**, but you can’t `break`
- Both are **cleaner alternatives** to `for` loops in many cases
