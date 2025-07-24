## Day 5: JavaScript Conditions – if, else, else if, switch, Comparisons, and Logical Operators

### 🟡 What Are Conditionals?

Conditionals allow your program to **make decisions**.
You tell JavaScript:

> “If **this** is true, do **this**. Otherwise, do something else.”

***Example:***

> If it’s raining → take an umbrella
> Else → go without it

In code, this is done using `if`, `else`, and `else if`.

<div class="small-grey-block">

#### ✅ 1. `if` Statement

Basic syntax:

```js
if (condition) {
  // run this code if condition is true
}
```
</div>

***Example:***

```js
let age = 20;

if (age >= 18) {
  console.log("You can vote.");
}
```

<div class="small-grey-block">

#### ✅ 2. `else` Statement

Use `else` to run something **if the condition is false**.

```js
let age = 16;

if (age >= 18) {
  console.log("You can vote.");
} else {
  console.log("You are too young to vote.");
}
```

</div>
<div class="small-grey-block">

#### ✅ 3. `else if` Statement – Multiple Conditions

Used to check **multiple conditions** in sequence.

```js
let score = 75;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 70) {
  console.log("Grade: B");
} else if (score >= 50) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}
```

- Only the first condition that is true will run.

</div>
<div class="small-grey-block">

#### ✅ 4. `switch` Statement

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
</div>

- `case` → compares with the given value
- `break` → stops checking further
- `default` → runs if no match found

### Comparison Operators

These are used to **compare values** inside `if` conditions.

| Operator | Meaning              | Example       | Result |
| -------- | -------------------- | ------------- | ------ |
| `==`     | Equal (value only)   | `5 == "5"`    | true   |
| `===`    | Equal (value + type) | `5 === "5"`   | false  |
| `!=`     | Not equal            | `10 != 8`     | true   |
| `!==`    | Not equal (strict)   | `10 !== "10"` | true   |
| `>`      | Greater than         | `7 > 3`       | true   |
| `<`      | Less than            | `2 < 5`       | true   |
| `>=`     | Greater or equal     | `6 >= 6`      | true   |
| `<=`     | Less or equal        | `4 <= 3`      | false  |

✅ Tip: Prefer `===` over `==` — it's safer and checks both type and value.


### Logical Operators

Used to **combine multiple conditions**.

| Operator | Name | Example                | Result                |          |     |          |                        |
| -------- | ---- | ---------------------- | --------------------- | -------- | --- | -------- | ---------------------- |
| `&&`     | AND  | `age > 18 && age < 60` | true if both are true |          |     |          |                        |
| `\|\|`                     | OR                    | `a > 10 \|\| b < 20` | true if either is true |
| `!`      | NOT  | `!isLoggedIn`          | true if false         |          |     |          |                        |

***Example:***

```js
let age = 25;

if (age > 18 && age < 60) {
  console.log("You can work.");
}

let isLoggedIn = false;

if (!isLoggedIn) {
  console.log("Please log in.");
}
```

#### ✅ Truthy and Falsy

When using `if`, the condition can be:

- **truthy** (acts like `true`)
- **falsy** (acts like `false`)

#### 🔹 Falsy Values (Treated as False):

 

| Falsy Value     | Falsy Value     |
|-----------------|-----------------|
| `false`         | `null`          |
| `0`             | `undefined`     |
| `""` (empty string) | `NaN`       |


Everything else is **truthy**.

<div class="small-grey-block">

***Example:***

```js
if (0) {
  console.log("This won't run");
}

if ("hello") {
  console.log("This will run");
}
```
</div>

<div class="section-break"></div>

<div class="practice">

### 🔸 Practice Time

1. Create a variable `marks`. Use `if/else` to check if it's a pass (above 40).
2. Use `if/else if` to assign grades (A, B, C, F).
3. Write a `switch` statement to show the name of a weekday from number (1 to 7).
4. Try checking `if (""), if (1), if (null)` and see which one runs.
5. Create a variable `temperature`. Log "Hot", "Warm", or "Cold" based on value.
6. Create a login check using `if` and logical operators.

</div>

<div class="section-break"></div>

✅ **You’ve completed Day 5!**
You now understand how to:

- Make decisions in your code using `if/else`, `else if`, and `switch`
- Use comparison and logical checks
- Know which values are treated as true or false
- Combine conditions using logical operators
