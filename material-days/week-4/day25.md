<article class="day-block">

## Day 25: find() and some() – Searching in Arrays

### Why Learn These?

Imagine:

- You want to **find** a product by name
- Or **check** if any product is out of stock

These tasks are super common in real apps.

Instead of writing long `for` loops, you can use `.find()` and `.some()`.

### `find()` – Find the First Matching Item

The `.find()` method searches through an array and returns the **first element that matches a condition**.

#### Syntax

```js
let result = array.find(function (item) {
  return condition; // true or false
});
```

> If nothing matches, it returns undefined.

#### Example 1: Find a number

```js
let numbers = [5, 8, 12, 20];

let firstEven = numbers.find((num) => num % 2 === 0);
console.log(firstEven); // 8
```

#### Example 2: Find a user by name

```js
let users = [
  { name: "Rajat", age: 25 },
  { name: "Anita", age: 30 },
];

let foundUser = users.find((user) => user.name === "Anita");
console.log(foundUser);
// { name: "Anita", age: 30 }
```

### `some()` – Check If At Least One Item Matches

The `.some()` method checks if **any** item in the array satisfies the condition.

> It returns true or false.

#### Syntax

```js
let result = array.some(function (item) {
  return condition;
});
```

#### Example 1: Check if there is any negative number

```js
let numbers = [1, 2, 3, -5, 6];

let hasNegative = numbers.some((num) => num < 0);
console.log(hasNegative); // true
```

#### Example 2: Check if any user is underage

```js
let users = [
  { name: "Mini", age: 17 },
  { name: "Rajat", age: 25 },
];

let hasMinor = users.some((user) => user.age < 18);
console.log(hasMinor); // true
```

### `.find()` vs `.filter()` – What’s the Difference?

| Method     | Returns                           | When to Use                                |
| ---------- | --------------------------------- | ------------------------------------------ |
| `find()`   | First item that matches condition | You want just **one** (like by ID or name) |
| `filter()` | **All** items that match          | You want **many** (like all adults)        |

### JavaScript: `.filter()`, `.find()`, and `.some()` – Comparison with Examples

<div class="section-break"></div>

#### 🔍 1. `.filter()` – Get **all matching items**

- **Returns:** A **new array** of **all** elements that match the condition
- **Use case:** You want multiple results that meet a rule

```js
const numbers = [10, 20, 25, 30, 40];

const result = numbers.filter((num) => num > 20);
console.log(result); // [25, 30, 40]
```

✅ Returns **ALL** items > 20
❌ Does **not** stop early — checks entire array

<div class="section-break"></div>

#### 🔎 2. `.find()` – Get the **first matching item**

- **Returns:** The **first** element that matches the condition
- **Use case:** You want **only one** result, not an array

```js
const numbers = [10, 20, 25, 30, 40];

const result = numbers.find((num) => num > 20);
console.log(result); // 25
```

✅ Stops when it finds the **first match**
✅ Returns the **item itself**, not an array
❌ If nothing matches → returns `undefined`

<div class="section-break"></div>

#### ❓ 3. `.some()` – Does **any item match**?

- **Returns:** `true` or `false`
- **Use case:** You just want to check **if at least one item** meets the condition

```js
const numbers = [10, 20, 25, 30, 40];

const result = numbers.some((num) => num > 35);
console.log(result); // true
```

✅ Stops as soon as **one match** is found
✅ Super fast for yes/no checks
❌ Doesn’t give you the actual item(s)

<div class="section-break"></div>

### 🧠 Comparison Table

| Feature      | `.filter()`        | `.find()`                  | `.some()`              |
| ------------ | ------------------ | -------------------------- | ---------------------- |
| Returns      | Array of matches   | First match or `undefined` | Boolean (`true/false`) |
| How many?    | All matching items | First match only           | Just checks existence  |
| Output type  | Array              | Value or undefined         | Boolean                |
| Stops early? | ❌ No              | ✅ Yes                     | ✅ Yes                 |
| Use case     | Show filtered list | Find detail card           | Check condition exists |

<div class="section-break"></div>

### 🎯 Real-Life Analogy

Imagine a box of chocolates:

- `.filter()` – Take out **all dark chocolates**
- `.find()` – Grab the **first coconut-filled chocolate**
- `.some()` – Just check: "Is there **any chocolate with caramel**?"

<div class="section-break"></div>

<div class="practice">

### Practice Times

1. From `[2, 4, 7, 9, 10]`, find the first number greater than 5
2. From:

```js
let books = [
  { title: "JS Basics", pages: 100 },
  { title: "React Guide", pages: 300 },
];
```

Use `.find()` to get the book with title `"React Guide"`

3. Use `.some()` to check if any number is greater than 100 in `[25, 50, 150]`
4. From:

```js
let items = [
  { name: "Pen", inStock: true },
  { name: "Pencil", inStock: false },
];
```

Check if **any item is out of stock**

</div>

### You Now Know

- How to use `.find()` to get a single matching item
- How to use `.some()` to check if **at least one** item passes a test
- The difference between `find()`, `filter()`, and `some()`

</article>
