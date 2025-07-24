<article class="day-block">

## Day 6: Loops – for, while, do-while

### 🟡 What Is a Loop?

A **loop** lets you run the same block of code **multiple times**.

You use loops when you want to **repeat something automatically** (instead of writing the same code again and again).

<div class="section-break"></div>

### ✅ `for` Loop

Use when you know **how many times** you want to repeat.

```jsx
for (let i = 1; i <= 5; i++) {
  console.log("Count:", i);
}
```

#### 🔹 Explanation:

* `let i = 1` → Start from 1
* `i <= 5` → Repeat while `i` is less than or equal to 5
* `i++` → Increase `i` by 1 after each loop

```jsx
// Output:
Count: 1
Count: 2
Count: 3
Count: 4
Count: 5
```

<div class="section-break"></div>

### ✅ `while` Loop

Use when you **don’t know exactly** how many times to repeat, but you want to keep going **while** a condition is true.

```jsx
let i = 1;

while (i <= 3) {
  console.log("Number:", i);
  i++;
}
```

* Keeps running **until** `i` becomes more than 3

<div class="section-break"></div>

### ✅ `do...while` Loop

Like `while`, but runs the code **at least once**, even if the condition is false.

```jsx
let x = 1;

do {
  console.log("Value is:", x);
  x++;
} while (x <= 2);
```

* The code block runs **first**, then checks the condition

<div class="section-break"></div>

### 🔹 Looping Through Arrays

You can use loops to go through a list (array) of items.

```jsx
let colors = ["red", "green", "blue"];

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
```

* `colors.length` gives the number of items
* `colors[i]` gets each item by its index

<div class="section-break"></div>

### 🔹 Break and Continue

#### `break`: Stops the loop completely

```jsx
for (let i = 1; i <= 10; i++) {
  if (i === 4) break;
  console.log(i);
}
```

```jsx
// Output: 1 2 3
```

#### `continue`: Skips that round, moves to the next one

```jsx
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
```

```jsx
// Output: 1 2 4 5
```

<div class="section-break"></div>

<div class="practice">

### 🔸 Practice Time

1. Print numbers from 1 to 5 using `for` loop
2. Count down from 5 to 1 using `while` loop
3. Print only even numbers from 1 to 10
4. Print the letters of your name using a loop
5. Use `break` when number is 7 in a loop of 1 to 10
6. Use `continue` to skip printing number 5

</div>

<div class="section-break"></div>

✅ **You’ve completed Day 6!**

Now you can:

* Use `for`, `while`, and `do-while` to repeat actions
* Loop through arrays
* Control loops using `break` and `continue`

</article>