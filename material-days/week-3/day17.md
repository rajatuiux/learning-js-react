<!-- <article class="day-block">

## Day 17: Conditions in JavaScript – if, else, else if, Comparisons


### 🟡 What Are Conditions?

Conditions allow your program to **make choices** based on something being true or false.

 Example:

 If it’s raining → take an umbrella

 Else → go without it

In code, this is done using `if`, `else`, and `else if`.

<div class="section-break"></div>

### ✅ 1. `if` Statement

Basic syntax:

```js
if (condition) {
  // run this code if condition is true
}
```

**Example:**

```js
let age = 20;

if (age >= 18) {
  console.log("You can vote.");
}
```

<div class="section-break"></div>

### ✅ 2. `else` Statement

Use `else` to run something **if the condition is false**.

```js
let age = 16;

if (age >= 18) {
  console.log("You can vote.");
} else {
  console.log("You are too young to vote.");
}
```

<div class="section-break"></div>

### ✅ 3. `else if` Statement

Used to check **multiple conditions** in sequence.

```js
let score = 75;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 70) {
  console.log("Grade: B");
} else {
  console.log("Grade: C");
}
```

 Only the first condition that is true will run.

<div class="section-break"></div>

### ✅ Comparison Operators

These are used to **compare values** inside `if` conditions.

| Operator | Meaning               | Example (`a = 5`, `b = 10`) | Result |
| -------- | --------------------- | --------------------------- | ------ |
| `==`     | Equal (loose check)   | `a == '5'`                  | true   |
| `===`    | Equal (strict check)  | `a === '5'`                 | false  |
| `!=`     | Not equal             | `a != b`                    | true   |
| `!==`    | Not equal (strict)    | `a !== '5'`                 | true   |
| `>`      | Greater than          | `b  a`                     | true   |
| `<`      | Less than             | `a < b`                     | true   |
| `>=`     | Greater than or equal | `a >= 5`                    | true   |
| `<=`     | Less than or equal    | `a <= 5`                    | true   |

 Always prefer `===` over `==` in modern JavaScript

 `===` checks both **value and type** (more accurate)

<div class="section-break"></div>

### ✅ 4. Logical Operators

Used to **combine multiple conditions**.

| Operator | Name | Example                | Result                |          |   |          |                        |
| -------- | ---- | ---------------------- | --------------------- | -------- | - | -------- | ---------------------- |
| `&&`     | AND  | `age > 18 && age < 60` | true if both are true |          |   |          |                        |
| `\|\|`    | OR                    | `a > 10 \|\| b < 20` | true if either is true |
| `!`      | NOT  | `!isLoggedIn`          | true if false         |          |   |          |                        |

<div class="section-break"></div>

### ✅ Example with Logical Operators

```js
let age = 25;

if (age > 18 && age < 60) {
  console.log("You can work.");
}
```

```js
let isLoggedIn = false;

if (!isLoggedIn) {
  console.log("Please log in.");
}
```

<div class="section-break"></div>

<div class="practice">

### 🔸 Practice Time

Try these:

1. Create a variable `temperature`. Use `if/else` to log:

   * "Hot" if temp > 30
   * "Warm" if 20–30
   * "Cold" otherwise
2. Create a `marks` variable and show:

   * A for >=90
   * B for 70–89
   * C for 50–69
   * Fail below 50
3. Write an `if` statement using `&&` and `||` to check age ranges
4. Create a login check:

   * If user is logged in → show "Welcome"
   * Else → show "Please login"

</div>

<div class="section-break"></div>

✅ You now understand:

* How to use `if`, `else`, and `else if`
* Comparison and logical operators
* How JavaScript makes decisions based on values

➡️ Up Next: Arrays – storing and working with lists of data

</article> -->
