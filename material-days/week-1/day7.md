<article class="day-block">

## Day 7: Arrays in JavaScript

### 🟡 What is an Array?

An **array** is a special type of variable that can hold **multiple values** at once.

- Think of it like a list or a collection.
- Items in an array are ordered and can be accessed by their **index** (starting from 0).

***Example:***

```js
let fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]); // Output: apple
```

<div class="section-break"></div>

### ✅ Why Use Arrays?

- To **store multiple related values** in one place.
- Helps organize data for easier access and manipulation.
- Arrays can hold any type of data: strings, numbers, objects, even other arrays.

<div class="section-break"></div>

### ✅ Creating Arrays

```js
// Using square brackets
let colors = ["red", "green", "blue"];

// Using Array constructor (less common)
let numbers = new Array(1, 2, 3);
```

<div class="section-break"></div>

### ✅ Accessing Array Items

Use the **index number** to get or change an item.

```js
let colors = ["red", "green", "blue"];
console.log(colors[1]); // green
colors[2] = "yellow"; // change "blue" to "yellow"
```

<div class="section-break"></div>

### ✅ Array Length

The `.length` property tells how many items are in the array.

```js
let fruits = ["apple", "banana", "cherry"];
console.log(fruits.length); // 3
```

<div class="section-break"></div>

### ✅ Adding & Removing Items

```js
let numbers = [1, 2, 3];

// Add to end
numbers.push(4); // [1, 2, 3, 4]

// Remove from end
numbers.pop(); // [1, 2, 3]

// Add to start
numbers.unshift(0); // [0, 1, 2, 3]

// Remove from start
numbers.shift(); // [1, 2, 3]
```

<div class="section-break"></div>

### ✅ Arrays Can Hold Different Data Types

```js
let mixed = ["text", 42, true, { name: "John" }, [1, 2, 3]];
```

<div class="section-break"></div>

### ✅ Looping Over Arrays

Use a `for` loop to access each item.

```js
let fruits = ["apple", "banana", "cherry"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

<div class="section-break"></div>

### 🔑 Recap

| Concept      | Meaning                                       |
| ------------ | --------------------------------------------- |
| Array        | A list of multiple values                     |
| Index        | Position of an item in an array (starts at 0) |
| `.length`    | Number of items in the array                  |
| `.push()`    | Add item to the end                           |
| `.pop()`     | Remove item from the end                      |
| `.unshift()` | Add item to the start                         |
| `.shift()`   | Remove item from the start                    |

</article>
