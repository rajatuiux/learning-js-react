<article class="day-block">

## Day 25: find() and some() – Searching in Arrays

### Why Learn These?

Imagine:

* You want to **find** a product by name
* Or **check** if any product is out of stock

These tasks are super common in real apps.

Instead of writing long `for` loops, you can use `.find()` and `.some()`.

### `find()` – Find the First Matching Item

The `.find()` method searches through an array and returns the **first element that matches a condition**.

#### Syntax

```js
let result = array.find(function(item) {
  return condition; // true or false
});
```

> If nothing matches, it returns undefined.

#### Example 1: Find a number

```js
let numbers = [5, 8, 12, 20];

let firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven); // 8
```

#### Example 2: Find a user by name

```js
let users = [
  { name: "Rajat", age: 25 },
  { name: "Anita", age: 30 }
];

let foundUser = users.find(user => user.name === "Anita");
console.log(foundUser);
// { name: "Anita", age: 30 }
```

### `some()` – Check If At Least One Item Matches

The `.some()` method checks if **any** item in the array satisfies the condition.

> It returns true or false.

#### Syntax

```js
let result = array.some(function(item) {
  return condition;
});
```

#### Example 1: Check if there is any negative number

```js
let numbers = [1, 2, 3, -5, 6];

let hasNegative = numbers.some(num => num < 0);
console.log(hasNegative); // true
```

#### Example 2: Check if any user is underage

```js
let users = [
  { name: "Mini", age: 17 },
  { name: "Rajat", age: 25 }
];

let hasMinor = users.some(user => user.age < 18);
console.log(hasMinor); // true
```

### `.find()` vs `.filter()` – What’s the Difference?

| Method     | Returns                           | When to Use                                |
| ---------- | --------------------------------- | ------------------------------------------ |
| `find()`   | First item that matches condition | You want just **one** (like by ID or name) |
| `filter()` | **All** items that match          | You want **many** (like all adults)        |

<div class="practice">

### Practice Times

1. From `[2, 4, 7, 9, 10]`, find the first number greater than 5
2. From:

```js
let books = [
  { title: "JS Basics", pages: 100 },
  { title: "React Guide", pages: 300 }
];
```

Use `.find()` to get the book with title `"React Guide"`

3. Use `.some()` to check if any number is greater than 100 in `[25, 50, 150]`
4. From:

```js
let items = [
  { name: "Pen", inStock: true },
  { name: "Pencil", inStock: false }
];
```

Check if **any item is out of stock**

</div>

### You Now Know

* How to use `.find()` to get a single matching item
* How to use `.some()` to check if **at least one** item passes a test
* The difference between `find()`, `filter()`, and `some()`


</article>
