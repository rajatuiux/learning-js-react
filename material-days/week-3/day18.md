<!-- <article class="day-block">

## Day 18: Loops – Doing Things Again and Again

 ### What Is a Loop?

A **loop** lets you **run the same block of code multiple times**.

Example:

> “Print ‘Hello’ 5 times”
>
> Instead of writing:

```js
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
```

You can write just **one line in a loop** to repeat it 5 times.

 ### Types of Loops in JavaScript

| Loop Type    | When to use                                        |
| ------------ | -------------------------------------------------- |
| `for` loop   | Know how many times to repeat                      |
| `while` loop | Repeat **while** a condition is true               |
| `do...while` | Like `while`, but runs at least **once**           |
| `for...of`   | Loop through values in an array (easy to use)      |
| `for...in`   | Loop through keys in an object (we’ll cover later) |

 ### `for` Loop

 ##### Syntax:

```js
for (start; condition; step) {
  // code to repeat
}

```

 ##### Example: Print 1 to 5

```js
for (let i = 1; i <= 5; i++) {
  console.log("Count:", i);
}

```

 ##### Explanation:

* `let i = 1` → starting point
* `i <= 5` → how long to repeat (as long as `i` is 5 or less)
* `i++` → increase `i` by 1 after each loop

 ### `while` Loop

Runs the block **while** the condition is true.

 ##### Example:

```js
let i = 1;

while (i <= 5) {
  console.log("Number:", i);
  i++;
}

```

Use while when you don’t know exactly how many times you’ll repeat

 ### `do...while` Loop

This loop **runs once no matter what**, then keeps running **while the condition is true**.

 ##### Example:

```js
let i = 1;

do {
  console.log("Running:", i);
  i++;
} while (i <= 3);
```

Even if the condition is false from the start, it runs once.

### `for...of` Loop (Very Useful)

Used to **loop through arrays or strings** directly.

##### Example with an array:

```js
let fruits = ["apple", "banana", "mango"];

for (let fruit of fruits) {
  console.log(fruit);
}

```

##### Example with a string:

```js
let name = "Rajat";

for (let letter of name) {
  console.log(letter);
}

```

### Breaking a Loop Early: `break`

You can stop a loop early using `break`.

```js
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break; // stops loop when i is 5
  }
  console.log(i);
}

```

 ### Skip Current Loop Turn: `continue`

`continue` skips the current iteration and moves to the next.

```js
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue; // skip printing 3
  }
  console.log(i);
}

```

<div class="practice">

### Practice Times

1. Print numbers 1 to 10 using a `for` loop
2. Print only even numbers from 1 to 20
3. Loop through an array of your 5 favorite movies and print each
4. Use a `while` loop to count down from 10 to 1
5. Use `for...of` to print each letter of your name

</div>

✅ You now understand:

* What loops are
* When to use `for`, `while`, `do...while`, `for...of`
* How to break and continue loops

</article> -->
