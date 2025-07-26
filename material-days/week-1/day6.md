## Day 6: Loops – for, while, do-while, for...of

### 🟡 What Is a Loop?

A **loop** lets you run the same block of code **multiple times**.

Use loops when you want to **repeat something automatically** (instead of writing the same code again and again).

Example:

> Print "Hello" 5 times:

Instead of:

```jsx
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
```

Use:

```js
for (let i = 0; i < 5; i++) {
  console.log("Hello");
}
```

<div class="section-break"></div>

### ✅ Types of Loops in JavaScript

| Loop Type    | When to use                                          |
| ------------ | ---------------------------------------------------- |
| `for` loop   | Know how many times to repeat                        |
| `while` loop | Repeat **while** a condition is true                 |
| `do...while` | Like `while`, but runs at least **once**             |
| `for...of`   | Loop through values in an array or string            |
| `for...in`   | Loop through keys in an object (to be covered later) |

<div class="section-break"></div>

### ✅ `for` Loop

Use when you know **how many times** to repeat.

```js
for (let i = 1; i <= 5; i++) {
  console.log("Count:", i);
}
```

- `let i = 1` → start point
- `i <= 5` → condition to continue
- `i++` → step (increase by 1)

<div class="section-break"></div>

### ✅ `while` Loop

Use when you **don’t know exactly** how many times to repeat.

```js
let i = 1;

while (i <= 5) {
  console.log("Number:", i);
  i++;
}
```

<div class="section-break"></div>

### ✅ `do...while` Loop

Runs the code **at least once**, then checks the condition.

```js
let i = 1;

do {
  console.log("Running:", i);
  i++;
} while (i <= 3);
```

<div class="section-break"></div>

### ✅ `for...of` Loop

Used to loop through **arrays** or **strings**.

```js
let fruits = ["apple", "banana", "mango"];

for (let fruit of fruits) {
  console.log(fruit);
}
```

```js
let name = "Rajat";

for (let letter of name) {
  console.log(letter);
}
```

<div class="section-break"></div>

### 🔹 Looping Through Arrays with `for`

```js
let colors = ["red", "green", "blue"];

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
```

<div class="section-break"></div>

### 🔹 Break and Continue

#### `break`: Stops the loop completely

```js
for (let i = 1; i <= 10; i++) {
  if (i === 5) break;
  console.log(i);
}
```
```jsx
// Output: 1 2 3 4
```

#### `continue`: Skips current loop iteration

```js
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
```
```jsx
// Output: 1 2 4 5
```

<div class="practice">

### 🔸 Practice Time

Try these:

1. Print numbers from 1 to 10 using a `for` loop
2. Count down from 10 to 1 using a `while` loop
3. Print only even numbers from 1 to 20
4. Print the letters of your name using a `for...of` loop
5. Loop through an array of your 5 favorite movies and print each
6. Use `break` when number is 7 in a loop of 1 to 10
7. Use `continue` to skip printing number 5

</div>

✅ **You’ve completed this topic!**

You can now:

- Use `for`, `while`, `do-while`, and `for...of` loops
- Loop through arrays and strings
- Control loops using `break` and `continue`
