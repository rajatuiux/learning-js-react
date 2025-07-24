<article class="day-content">

## Day 19: Arrays – Storing Multiple Values in One Place

### What is an Array?

An **array** is a special variable that can hold **more than one value** at a time.

Instead of creating multiple variables:

```js
let fruit1 = "Apple";
let fruit2 = "Banana";
let fruit3 = "Mango";
```

You can store them all in one array:

```js
let fruits = ["Apple", "Banana", "Mango"];
```

### Array Syntax

```js
let arrayName = [value1, value2, value3];
```

#### Example:

```js
let colors = ["Red", "Blue", "Green"];
```

* Each value inside is called an **element**
* The **position** of each element is called its **index**

### Array Indexing

* Arrays start from **index 0**

```js
let colors = ["Red", "Blue", "Green"];

console.log(colors[0]); // Red
console.log(colors[1]); // Blue
console.log(colors[2]); // Green
```

You can also:

```js
colors[1] = "Yellow"; // changes "Blue" to "Yellow"
```

### Array Length

Use `.length` to get the total number of elements in the array:

```js
let numbers = [10, 20, 30];
console.log(numbers.length); // 3
```

### Looping Through an Array

#### Using `for` loop:

```js
let fruits = ["Apple", "Banana", "Mango"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

#### Using `for...of`:

```js
for (let fruit of fruits) {
  console.log(fruit);
}
```

### Common Array Methods

| Method                   | What It Does                             | Example                                           |
| ------------------------ | ---------------------------------------- | ------------------------------------------------- |
| `push()`                 | Add to end                               | `fruits.push("Grapes")`                           |
| `pop()`                  | Remove last element                      | `fruits.pop()`                                    |
| `unshift()`              | Add to beginning                         | `fruits.unshift("Orange")`                        |
| `shift()`                | Remove first element                     | `fruits.shift()`                                  |
| `indexOf(value)`         | Finds position/index of a value          | `fruits.indexOf("Banana")`                        |
| `includes()`             | Checks if array has a value (true/false) | `fruits.includes("Apple")`                        |
| `slice(start, end)`      | Gets part of an array                    | `fruits.slice(0, 2)` → first two items            |
| `splice(index, howMany)` | Remove/replace at index                  | `fruits.splice(1, 1)` → removes 1 item at index 1 |

#### Example:

```js
let cars = ["Honda", "Toyota", "BMW"];

cars.push("Tesla");         // Add Tesla at the end
cars.pop();                 // Remove Tesla
cars.unshift("Audi");       // Add Audi at the beginning
cars.shift();               // Remove Audi

console.log(cars.includes("BMW"));    // true
console.log(cars.indexOf("Honda"));   // 0
```

### Nested Arrays

An array **inside another array** is called a nested array.

```js
let matrix = [
  [1, 2, 3],
  [4, 5, 6]
];

console.log(matrix[0][1]); // 2
```

<div class="practice">

### Practice Times

1. Create an array of 5 cities and print them using a loop.
2. Add a new city to the end and beginning of the array.
3. Remove the last and first city using `.pop()` and `.shift()`
4. Check if a specific city exists using `.includes()`
5. Print the length of the array.
6. Use `.splice()` to remove the 2nd item.

</div>

✅ You now understand:

* What arrays are and how to create them
* How to access, add, and remove elements
* Useful methods like `push`, `pop`, `includes`, `splice`, etc.
* Looping through arrays using `for` and `for...of`

</article>
