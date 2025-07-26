## Day 7: Arrays in JavaScript

### 🟡 What Is an Array?

An **array** is a special variable that holds **multiple values** in a single place. Think of it like a list:

```js
let colors = ["red", "green", "blue"];
```

You can mix different types:

```js
let mixed = [10, "hello", true];
```

Instead of multiple variables:

```js
let fruit1 = "Apple";
let fruit2 = "Banana";
```

Use:

```js
let fruits = ["Apple", "Banana"];
```

---

### ✅ Accessing and Modifying Array Items

Use **index numbers** (starting from 0):

```js
console.log(fruits[0]); // Apple
fruits[1] = "Orange"; // Replaces Banana with Orange
```

---

### ✅ Adding and Removing Items

```js
fruits.push("Grape"); // Adds to end
fruits.unshift("Kiwi"); // Adds to beginning
fruits.pop(); // Removes last
fruits.shift(); // Removes first
```

---

### 🔹 Array Length

```js
let count = fruits.length;
console.log(count); // Total number of items
```

---

### 🔹 Looping Through Arrays

#### Using `for` loop:

```js
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

#### Using `for...of` loop:

```js
for (let fruit of fruits) {
  console.log(fruit);
}
```

#### Using `.forEach()`:

```js
fruits.forEach(function (fruit, index) {
  console.log(`Fruit ${index + 1}: ${fruit}`);
});
```

---

### 🔹 Common Array Methods

| Method                 | What It Does                | Example                    |
| ---------------------- | --------------------------- | -------------------------- |
| `push()`               | Add to end                  | `fruits.push("Grapes")`    |
| `pop()`                | Remove last element         | `fruits.pop()`             |
| `unshift()`            | Add to beginning            | `fruits.unshift("Orange")` |
| `shift()`              | Remove first element        | `fruits.shift()`           |
| `indexOf(value)`       | Finds index of a value      | `fruits.indexOf("Banana")` |
| `includes(value)`      | Checks if value exists      | `fruits.includes("Apple")` |
| `slice(start, end)`    | Gets a portion of the array | `fruits.slice(0, 2)`       |
| `splice(index, count)` | Remove/replace at index     | `fruits.splice(1, 1)`      |

---

### 🔹 Nested Arrays

An array inside another array:

```js
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
];

console.log(matrix[0][1]); // 2
```

---

### 🔹 Modern Looping Options

#### `for...of` – Simple value loop

```js
for (let fruit of fruits) {
  console.log(fruit);
}
```

#### `.forEach()` – Value with index

```js
fruits.forEach(function (fruit, index) {
  console.log(`Fruit ${index + 1}: ${fruit}`);
});
```

---

### 🔸 Practice Time

1. Create an array of your 5 favorite movies
2. Add one more using `.push()`
3. Remove the first movie using `.shift()`
4. Print each movie with a `for...of` loop
5. Check if a certain movie exists using `.includes()`
6. Replace the second movie with something else
7. Use `.splice()` to remove the third movie
8. Use `.forEach()` to print movies with position

---

✅ **You’ve completed this topic!**

You can now:

- Create and modify arrays
- Use key array methods (`push`, `pop`, `splice`, etc.)
- Loop using `for`, `for...of`, and `.forEach()`
- Work with nested arrays and index positions
