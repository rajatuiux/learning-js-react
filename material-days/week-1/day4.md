<article class="day-block">

## Day 4: Functions + Scope

### 🟡 What is a Function?

A **function** is a reusable block of code that performs a specific task.

- It helps **avoid repetition**.
- Makes code **organized** and **readable**.
- Can take **inputs (parameters)** and give **outputs (return values)**.

#### 📌 Why use Functions?

- To **reuse** the same code again and again.
- To keep code **clean and manageable**.
- Makes debugging and testing easier.

#### Example:

```js
function greet() {
  console.log("Hello!");
}
greet(); // Calls the function
```

<div class="section-break"></div>

### ✅ Parameters vs Arguments

- **Parameters** are placeholders for input values (when **declaring** a function).
- **Arguments** are actual values passed (when **calling** the function).

```js
function greet(name) {
  // 'name' is a parameter
  console.log("Hello, " + name);
}

greet("Rajat"); // 'Rajat' is an argument
```

<div class="section-break"></div>

### ✅ Return Values

Functions can return a value using the `return` keyword. This lets you **capture the result** and use it elsewhere in your code.

```js
function add(a, b) {
  return a + b;
}
const result = add(3, 4); // result is 7
```

You can return **any data type** – number, string, array, object, etc.

<div class="section-break"></div>

### ✅ Function Types

> Think of functions like different styles of writing the same thing.

| Type               | Looks Like                    | Can call before it's defined? | Own `this`? |
| ------------------ | ----------------------------- | ----------------------------- | ----------- |
| **Declaration**    | `function greet() {}`         | ✅ Yes (hoisted)              | ✅ Yes      |
| **Expression**     | `const greet = function() {}` | ❌ No                         | ✅ Yes      |
| **Arrow Function** | `const greet = () => {}`      | ❌ No                         | ❌ No       |

> 🧠 **Hoisted** means the function is **lifted up** to the top of your code before it runs. So you can use it **even before it's written**.

#### 🟢 1. Function Declaration

You define it using the `function` keyword — very beginner-friendly.

```js
sayHello(); // ✅ Works, because it's hoisted

function sayHello() {
  console.log("Hello!");
}
```

✅ Use this when you want to define a function normally.

#### 🟡 2. Function Expression

You save a function **inside a variable** — like saving text in a folder.

```js
const sayHi = function () {
  console.log("Hi!");
};

sayHi(); // ✅ Works, but only after this line
```

✅ Useful if you're passing a function as a value.

#### 🔵 3. Arrow Function

A **shorter** way to write a function. Good for small code.

```js
const greet = () => {
  console.log("Hey there!");
};
```

✅ Best when writing short logic or when you don’t need `this`.

#### ⚠️ `this` Difference

- Function Declaration & Expression: Have their own `this`
- Arrow Function: **Don’t** have their own `this`, they use the outer one

> 🔸 So, avoid arrow functions inside objects if you need access to `this`.

<div class="section-break"></div>

### 🟡 What is Scope?

**Scope** defines where variables can be accessed in your code.

📦 Imagine each part of your code is a box. Scope tells you **which variables live in which box**.

#### 1. Global Scope

Variables declared **outside** functions – accessible everywhere.

```js
let globalVar = "I am global";
function show() {
  console.log(globalVar); // works
}
```

#### 2. Function (Local) Scope

Variables inside a function – only available within that function.

```js
function show() {
  let localVar = "I'm local";
  console.log(localVar);
}
// console.log(localVar); // ❌ Error: not accessible outside
```

#### 3. Block Scope (with `let` and `const`)

Variables declared with `let` or `const` inside `{}` are limited to that block.

```js
if (true) {
  let age = 25;
  console.log(age); // 25
}
// console.log(age); // ❌ Error: not visible outside the block
```

#### 🧠 `var` is function-scoped (not block scoped)

This means it doesn't care about `{}` blocks – it only checks if it's inside a function.

```js
if (true) {
  var x = 10;
}
console.log(x); // ✅ 10
```

<div class="section-break"></div>

### 🔁 Recap

| Concept      | Meaning                                |
| ------------ | -------------------------------------- |
| Function     | Reusable code block                    |
| Parameter    | Placeholder input for function         |
| Argument     | Actual value passed to function        |
| Return       | Output value from a function           |
| Scope        | Where a variable is accessible         |
| Global Scope | Accessible everywhere                  |
| Local Scope  | Only inside function                   |
| Block Scope  | Only inside `{}` if `let`/`const` used |

</article>
