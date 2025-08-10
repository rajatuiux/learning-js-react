## Day 5: Conditionals – if/else, else if, switch

### 🟡 What Are Conditionals?

Conditionals allow your program to **make decisions** based on whether something is true or false.

Example:

> If it’s raining → take an umbrella
> Else → go without it

You tell JavaScript:

“If **this** is true, do **this**. Otherwise, do something else.”

<div class="section-break"></div>

### ✅ `if` Statement

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

### ✅ `else` Statement

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

### ✅ `else if` – Multiple Conditions

Used to check **multiple conditions** in sequence.

```js
let score = 70;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 75) {
  console.log("Grade: B");
} else if (score >= 50) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}
```

- Checks each condition in order.
- As soon as one is true, it runs that block and stops checking.

<div class="section-break"></div>

### ✅ `switch` Statement

An alternative to `if/else if` when checking **one value** with **many possible matches**.

```js
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the week");
    break;
  case "Friday":
    console.log("Almost weekend!");
    break;
  case "Sunday":
    console.log("Weekend!");
    break;
  default:
    console.log("Midweek day");
}
```

**Explanation:**

- `case` → compares with the given value
- `break` → stops checking further
- `default` → runs if no match found

<div class="section-break"></div>

### ✅ Comparison Operators

Used to **compare values** inside `if` conditions.

| Operator | Meaning               | Example (`a = 5`, `b = 10`) | Result |
| -------- | --------------------- | --------------------------- | ------ |
| `==`     | Equal (loose check)   | `a == '5'`                  | true   |
| `===`    | Equal (strict check)  | `a === '5'`                 | false  |
| `!=`     | Not equal             | `a != b`                    | true   |
| `!==`    | Not equal (strict)    | `a !== '5'`                 | true   |
| `>`      | Greater than          | `b > a`                     | true   |
| `<`      | Less than             | `a < b`                     | true   |
| `>=`     | Greater than or equal | `a >= 5`                    | true   |
| `<=`     | Less than or equal    | `a <= 5`                    | true   |

> Always prefer `===` over `==` in modern JavaScript. `===` checks both **value and type** (more accurate).

<div class="section-break"></div>

### ✅ Logical Operators

Used to **combine multiple conditions**.

| Operator | Name | Example                | Result                 |     |     |     |     |
| -------- | ---- | ---------------------- | ---------------------- | --- | --- | --- | --- |
| `&&`     | AND  | `age > 18 && age < 60` | true if both are true  |     |     |     |     |
| `\|\|`   | OR   | `a > 10 \|\| b < 20\`  | true if either is true |
| `!`      | NOT  | `!isLoggedIn`          | true if false          |     |     |     |     |

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

### 🟡 Truthy and Falsy

When using `if`, the condition can be:

- **truthy** (acts like `true`)
- **falsy** (acts like `false`)

#### 🔹 Falsy Values (Treated as False):

- `false`
- `0`
- `""` (empty string)
- `null`
- `undefined`
- `NaN`

Everything else is **truthy**.

```js
if (0) {
  console.log("This won't run");
}

if ("hello") {
  console.log("This will run");
}
```

<div class="practice">

### 🔸 Practice Time

Try these:

1. Create a variable `marks`. Use `if/else` to check if it's a pass (above 40).
2. Use `if/else if` to assign grades (A, B, C, F).
3. Write a `switch` statement to show the name of a weekday from number (1 to 7).
4. Create a variable `temperature`. Use `if/else` to log:

   - "Hot" if temp > 30
   - "Warm" if 20–30
   - "Cold" otherwise

5. Write an `if` statement using `&&` and `||` to check age ranges.
6. Create a login check:

   - If user is logged in → show "Welcome"
   - Else → show "Please login"

7. Try checking `if (""), if (1), if (null)` and see which one runs.

</div>

<div class="section-break"></div>

✅ **You’ve completed this topic!**

You now understand how to:

- Make decisions in your code using `if/else`, `else if`, and `switch`
- Use comparison and logical checks
- Know which values are treated as true or false
