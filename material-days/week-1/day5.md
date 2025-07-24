<article class="day-block">

## Day 5: Conditionals – if/else, else if, switch

### 🟡 What Are Conditionals?

Conditionals allow your program to **make decisions**.

You tell JavaScript:

“If **this** is true, do **this**. Otherwise, do something else.”

<div class="section-break"></div>

### ✅ `if` and `else`

```jsx
let age = 20;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}
```

#### 🔹 Explanation:

* If the condition in `()` is **true**, the first block runs.
* If it's **false**, the `else` block runs.

<div class="section-break"></div>

### ✅ `else if` – Multiple Conditions

```jsx
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

* Checks each condition in order.
* As soon as one is true, it runs that block and stops checking.

<div class="section-break"></div>

### ✅ `switch` Statement

An alternative to `if/else if` when checking **one value** with **many possible matches**.

```jsx
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

#### 🔹 Explanation:

* `case` → compares with the given value
* `break` → stops checking further
* `default` → runs if no match found

<div class="section-break"></div>

### ✅ Comparison Review

| Operator | Meaning              | Example              |
| -------- | -------------------- | -------------------- |
| `==`     | Equal (value only)   | `5 == "5"` → true    |
| `===`    | Equal (value + type) | `5 === "5"` → false  |
| `!=`     | Not equal            | `10 != 8` → true     |
| `!==`    | Not equal (strict)   | `10 !== "10"` → true |
| `>`      | Greater than         | `7 > 3` → true       |
| `<`      | Less than            | `2 < 5` → true       |
| `>=`     | Greater or equal     | `6 >= 6` → true      |
| `<=`     | Less or equal        | `4 <= 3` → false     |

<div class="section-break"></div>

### 🟡 Truthy and Falsy

When using `if`, the condition can be:

* **truthy** (acts like `true`)
* **falsy** (acts like `false`)

#### 🔹 Falsy Values (Treated as False):

* `false`
* `0`
* `""` (empty string)
* `null`
* `undefined`
* `NaN`

Everything else is **truthy**.

```jsx
if (0) {
  console.log("This won't run");
}

if ("hello") {
  console.log("This will run");
}
```

<div class="section-break"></div>

<div class="practice">

### 🔸 Practice Time

1. Create a variable `marks`. Use `if/else` to check if it's a pass (above 40).
2. Use `if/else if` to assign grades (A, B, C, F).
3. Write a `switch` statement to show the name of a weekday from number (1 to 7).
4. Try checking `if (""), if (1), if (null)` and see which one runs.

</div>

<div class="section-break"></div>

✅ **You’ve completed Day 5!**

You now understand how to:

* Make decisions in your code using `if/else`, `else if`, and `switch`
* Use comparison and logical checks
* Know which values are treated as true or false

</article>