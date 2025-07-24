<article class="day-block">

## Day 3: Operators in JavaScript

### 🟡 What are Operators?

Operators are **symbols or keywords** that let you do things with values:

* Do **math**
* **Compare** values
* **Assign** values
* Use **logic** (like AND/OR)

We'll look at 4 common types of operators today.

<div class="section-break"></div>

### ✅ Arithmetic Operators (Math)

Used to **do math**.

```jsx
let x = 10;
let y = 3;
```

| Operator | Meaning   | Example | Result |
| -------- | --------- | ------- | ------ |
| `+`      | Add       | `x + y` | `13`   |
| `-`      | Subtract  | `x - y` | `7`    |
| `*`      | Multiply  | `x * y` | `30`   |
| `/`      | Divide    | `x / y` | `3.33` |
| `%`      | Remainder | `x % y` | `1`    |

<div class="section-break"></div>

### ✅ Assignment Operators (Store Value)

Used to **store a value** in a variable.

```jsx
let a = 5;     // assign 5 to a

a += 2;        // same as a = a + 2 → 7
a -= 1;        // a = a - 1 → 6
a *= 3;        // a = a * 3 → 18
a /= 6;        // a = a / 6 → 3
```

<div class="section-break"></div>

### ✅ Comparison Operators (Check Conditions)

Used to **compare two values** and return `true` or `false`.

```jsx
let num1 = 10;
let num2 = "10";
```

| Operator | Meaning                         | Example         | Result  |
| -------- | ------------------------------- | --------------- | ------- |
| `==`     | Equal (values only)             | `num1 == num2`  | `true`  |
| `===`    | Strict equal (value + type)     | `num1 === num2` | `false` |
| `!=`     | Not equal (values only)         | `num1 != num2`  | `false` |
| `!==`    | Strict not equal (value + type) | `num1 !== num2` | `true`  |
| `>`      | Greater than                    | `num1 > 5`      | `true`  |
| `<`      | Less than                       | `num1 < 5`      | `false` |
| `>=`     | Greater or equal                | `num1 >= 10`    | `true`  |
| `<=`     | Less or equal                   | `num1 <= 9`     | `false` |

#### 🔹 `==` vs `===`

```jsx
10 == "10"   // true → only compares value
10 === "10"  // false → compares value and type
```

<div class="section-break"></div>

### ✅ Logical Operators (AND, OR, NOT)

Used when checking **multiple conditions**.

```jsx
let age = 20;
let isStudent = true;
```

| Operator | Name | Description                               |    |                                            |
| -------- | ---- | ----------------------------------------- | -- | ------------------------------------------ |
| `&&`     | AND  | True only if **both** conditions are true |    |                                            |
| `\|\|`   | OR | True if **at least one** condition is true |
| `!`      | NOT  | Reverses true to false and false to true  |    |                                            |

#### 🔹 Examples:

```jsx
age > 18 && isStudent    // true
age < 18 || isStudent    // true
!isStudent               // false
```

<div class="section-break"></div>

<div class="practice">

### 🔸 Practice Time

Try these in your browser console or VS Code:

1. Create 2 numbers and try all arithmetic operators
2. Compare a number and a string using `==` and `===`
3. Use `&&` and `||` in an if condition

```jsx
let age = 16;
let hasID = true;

if (age >= 18 && hasID) {
  console.log("You can enter");
} else {
  console.log("Access denied");
}
```

</div>

<div class="section-break"></div>

✅ **You’ve completed Day 3!**

You now understand how to:

* Do math with values
* Compare values
* Store and update values
* Use logic in decisions

</article>
