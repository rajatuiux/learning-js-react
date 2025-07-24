<article class="day-block">

## Day 24: filter() – Get Only the Items You Want from an Array

### What is `filter()`?

The `.filter()` method creates a **new array** that contains **only the items that match a condition**.

It’s like saying:

> “Give me just the things I want from this list.”

### Basic Syntax

```js
let result = array.filter(function(item) {
  return condition; // returns true or false
});
```

If the condition is `true`, that item is kept.
If `false`, it’s skipped.

### Simple Example: Filter even numbers

```js
let numbers = [1, 2, 3, 4, 5, 6];

let evenNumbers = numbers.filter(function(num) {
  return num % 2 === 0; // only keep even numbers
});

console.log(evenNumbers); // [2, 4, 6]
```

### With Arrow Function

You can write the same thing shorter:

```js
let even = numbers.filter(num => num % 2 === 0);
```

> If it’s just one line, no need for curly braces or return

### Real-World Example: Filter active users

```js
let users = [
  { name: "Rajat", isActive: true },
  { name: "Anita", isActive: false },
  { name: "Rohan", isActive: true }
];

let activeUsers = users.filter(user => user.isActive);

console.log(activeUsers);
```

Result:

```js
[
  { name: "Rajat", isActive: true },
  { name: "Rohan", isActive: true }
]
```

### How Is `filter()` Different from `map()`?

| Feature | `map()`                       | `filter()`                          |
| ------- | ----------------------------- | ----------------------------------- |
| Output  | Same length as original array | Only items that match the condition |
| Purpose | Transform each item           | Pick/select items                   |

### Filtering Based on String Length

```js
let fruits = ["apple", "banana", "kiwi", "fig", "mango"];

let shortFruits = fruits.filter(fruit => fruit.length <= 4);
console.log(shortFruits); // ["kiwi", "fig"]
```

### Filter Numbers Greater Than a Value

```js
let prices = [150, 50, 299, 999, 1200];

let expensive = prices.filter(price => price > 500);
console.log(expensive); // [999, 1200]
```

### Important Notes

* `.filter()` **does not change the original array**
* It always returns a **new array**
* Inside the callback, you can use any logic as long as it returns true or false

<div class="practice">

### Practice Times

1. Filter all numbers greater than 100 from `[90, 200, 50, 300]`
2. From this array:

```js
let books = [
  { title: "Book A", pages: 120 },
  { title: "Book B", pages: 340 },
  { title: "Book C", pages: 90 }
];
```

Filter books with more than 100 pages.

3. From `["js", "react", "html", "css", "python"]`, filter names with **4 or more letters**
4. Filter users with age over 18 from this:

```js
let users = [
  { name: "Rajat", age: 25 },
  { name: "Mini", age: 16 },
  { name: "Yash", age: 19 }
];
```
</div>

### You Now Know

* How `filter()` works
* How to use it with numbers, strings, objects
* Why it's cleaner than using loops manually

</article>
