<article class="day-block">

## Day 23: forEach() and map() – Looping & Transforming Arrays

### What is a Higher-Order Function?

A **Higher-Order Function** is a function that:

* **Takes another function as an argument**, or
* **Returns a function**

> In simple words:
>
> It works **with functions as data**.

Examples in JS: `forEach()`, `map()`, `filter()`, `reduce()`

### 1. `forEach()` – Loop Through an Array (Like a Cleaner `for` Loop)

#### Syntax:

```js
array.forEach(function(item, index) {
  // do something with item
});
```

#### Example:

```js
let fruits = ["apple", "banana", "mango"];

fruits.forEach(function(fruit, index) {
  console.log(index + ": " + fruit);
});
```

* `fruit` is the current item
* `index` is the position (optional)
* No new array is created
* You **can't stop** `forEach` early — it runs through the entire array

#### Arrow function version:

```js
fruits.forEach((fruit, index) => console.log(index, fruit));
```

### 2. `map()` – Transform Each Item in an Array

#### Syntax:

```js
let newArray = array.map(function(item) {
  return newValue;
});
```

> map() creates a new array with the same number of items, but transformed.

#### Example 1: Multiply all numbers by 2

```js
let numbers = [1, 2, 3];

let doubled = numbers.map(function(num) {
  return num * 2;
});

console.log(doubled); // [2, 4, 6]
```

Or with arrow function:

```js
let doubled = numbers.map(num => num * 2);
```

#### Example 2: Format user names

```js
let users = [
  { name: "Rajat", age: 25 },
  { name: "Anita", age: 30 }
];

let names = users.map(user => user.name);
console.log(names); // ["Rajat", "Anita"]
```

### Difference Between `forEach()` vs `map()`

| Feature    | `forEach()`                      | `map()`                               |
| ---------- | -------------------------------- | ------------------------------------- |
| Returns    | Nothing (undefined)              | A **new array**                       |
| Use case   | When you're just doing something | When you want to **transform** data   |
| Can chain? | No                               | Yes (you can chain `.filter()`, etc.) |

### Another Real Example: Add "Hello" to every name

```js
let names = ["Rajat", "Anita", "Rohan"];

let greetings = names.map(name => "Hello, " + name);

console.log(greetings);
// ["Hello, Rajat", "Hello, Anita", "Hello, Rohan"]
```

<div class="practice">

### Practice Times

1. Use `forEach()` to print all elements in `["HTML", "CSS", "JavaScript"]`
2. Use `map()` to make all items uppercase: `["a", "b", "c"] → ["A", "B", "C"]`
3. From an array of numbers `[10, 20, 30]`, create a new array with each number + 5
4. Create a new array of only user names from:

```js
[
  { name: "Mini", age: 18 },
  { name: "Yash", age: 22 }
]
```
</div>

### You Now Understand:

* What higher-order functions are
* How to use `forEach()` for clean looping
* How to use `map()` to create transformed arrays
* The difference between `map()` and `forEach()`

➡️ You’ve now covered all 3 core array helpers: `map`, `forEach`, and `filter`


</article>
