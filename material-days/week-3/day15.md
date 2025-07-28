<!-- <article class="day-block">

## Day 15: JavaScript Functions – What, Why & How


### 🟡 What is a Function?

A **function** is a **reusable block of code** that does a specific task.

<div class="section-break"></div>

### ✅ Why Do We Use Functions?

* To **organize** code
* To **reuse** code without rewriting
* To **break down complex tasks** into small, manageable parts

<div class="section-break"></div>

### ✅ Real-Life Analogy

Imagine a coffee machine:

- You press a button (give input) → it runs its process (function) → and gives you coffee (output).

- You don’t need to rebuild the machine every time.

Functions in JavaScript work the same way:

* You **define** them once
* You can **run** (or “call”) them many times

<div class="section-break"></div>

### ✅ How to Define a Function

```js
function functionName() {
  // code to run
}
```

**Example:**

```js
function greetUser() {
  console.log("Hello, user!");
}
```

This **defines** a function but doesn’t run it yet.

<div class="section-break"></div>

### ✅ How to Call (Run) a Function

You **call** a function using its name with parentheses `()`:

```js
greetUser(); // Output: Hello, user!
```

You can call it **anywhere** after it's defined.

<div class="section-break"></div>

### ✅ Function with Parameters

You can pass **values** into a function using **parameters**.

```js
function greet(name) {
  console.log("Hello, " + name);
}

greet("Rajat"); // Output: Hello, Rajat
greet("Anita"); // Output: Hello, Anita
```

* `name` is a **parameter** (like a placeholder)
* `"Rajat"` is an **argument** (the actual value we pass)

<div class="section-break"></div>

### ✅ Function that Returns a Value

Functions can **return a value** using `return`.

```js
function add(a, b) {
  return a + b;
}

let result = add(5, 3);
console.log(result); // Output: 8
```

* `return` ends the function and sends the result back
* You can **store** that result in a variable

<div class="section-break"></div>

### ✅ Function Keyword Summary

| Term        | Meaning                                         |
| ----------- | ----------------------------------------------- |
| `function`  | Declares a function                             |
| `()`        | Used to call or define parameters               |
| `return`    | Sends a result back from the function           |
| `parameter` | Placeholder for values when defining a function |
| `argument`  | Actual value passed when calling the function   |

<div class="section-break"></div>

### ✅ Arrow Functions (Modern Short Syntax)

Arrow functions are a **shorter way** to write functions.

**Regular function:**

```js
function sayHi(name) {
  return "Hi " + name;
}
```

**Arrow function:**

```js
const sayHi = (name) => {
  return "Hi " + name;
};
```

**Shorter version:**

```js
const sayHi = (name) => "Hi " + name;
```

Note: Use arrow functions often in modern JavaScript — especially for React later on.

<div class="section-break"></div>

<div class="practice">

### 🔸 Practice Time

Try these:

1. Write a function called `printName()` that logs your name.
2. Write a function `addTwoNumbers(a, b)` that returns their sum.
3. Write a function that takes someone's age and logs `"You are a teen"` or `"You are an adult"` depending on the age.
4. Convert one of the above functions to an arrow function.

</div>

<div class="section-break"></div>

✅ You now understand:

* What functions are
* How to define and call them
* How to use parameters and return values
* Arrow functions (modern JS syntax)

</article> -->
