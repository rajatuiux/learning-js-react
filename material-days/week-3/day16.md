<!-- <article class="day-block">

## Day 16: Scope in JavaScript – Where Variables "Live”

### 🔹 What is Scope?

**Scope** means: "Where in your code can you access (or use) a variable?"

When you create a variable, it's only **available (or visible)** in certain parts of your code.

<div class="section-break"></div>

### ✅ Types of Scope in JavaScript

There are **3 types** of scope:

| Scope Type     | Where it works                                          |
| -------------- | ------------------------------------------------------- |
| Global Scope   | Anywhere in your code                                   |
| Function Scope | Only inside the function where it's created             |
| Block Scope    | Only inside `{}` like loops, conditionals, or functions |

<div class="section-break"></div>

### ✅ 1. Global Scope

A variable declared **outside** of any function or block:

```js
let name = "Rajat"; // global

function sayName() {
  console.log(name); // ✅ Can access global variable
}

sayName(); // Output: Rajat
```

* Any code in the file can use the `name` variable
* But this also means it **can be changed accidentally**

<div class="section-break"></div>

### ✅ 2. Function Scope

A variable declared **inside** a function is **only available in that function**:

```js
function greet() {
  let message = "Hello!";
  console.log(message); // ✅ Works
}

greet();
console.log(message); // ❌ Error: message is not defined
```

* `message` only exists **inside** the `greet()` function

<div class="section-break"></div>

### ✅ 3. Block Scope (`let` and `const` only)

If a variable is declared inside `{}` with `let` or `const`, it's **only accessible inside** that block:

```js
if (true) {
  let x = 10;
  const y = 20;
  console.log(x); // ✅ 10
}

console.log(x); // ❌ Error: x is not defined
```

With `var`, the variable is **not block-scoped** (not recommended):

```js
if (true) {
  var z = 30;
}
console.log(z); // ✅ 30 (but this can lead to bugs!)
```

<div class="section-break"></div>

### ✅ Function Inside Function (Nested Scope)

You can access outer variables from an inner function:

```js
function outer() {
  let outerVar = "outside";

  function inner() {
    console.log(outerVar); // ✅ "outside"
  }

  inner();
}

outer();
```

> But the **outer function cannot access variables from the inner function**.

<div class="section-break"></div>

### ✅ Scope Rules Summary

| Rule                                     | Example           |
| ---------------------------------------- | ----------------- |
| Outer scope can’t access inner variables | ❌                 |
| Inner scope can access outer variables   | ✅                 |
| Use `let` and `const` for block scope    | ✅ Better practice |
| Avoid using `var`                        | ❌ Can cause bugs  |

<div class="section-break"></div>

<div class="practice">

### 🔹 Practice Time

Try these:

1. Create a global variable and log it inside a function.
2. Create a function with a `let` variable and try to log it **outside** the function.
3. Use an `if` block to define a variable with `let` and try accessing it outside.
4. Make a function inside a function and try accessing variables from both levels.

</div>

<div class="section-break"></div>

✅ You now understand:

* The different types of scope in JavaScript
* Where variables are accessible
* Why `let` and `const` are safer than `var`


</article> -->
