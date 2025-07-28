<article class="day-block">

## Day 22: Functions Deep Dive – Reusability & Clean Code

### Why revisit functions?

You’ve already learned the basics:

- How to define a function
- How to call it
- How to use parameters and return values

Now we’ll focus on:

- **Reusability**
- **Function expressions vs declarations**
- **Arrow functions vs regular functions**
- **Best practices**

### Function Declarations vs Expressions

#### Function Declaration

```js
function greet(name) {
  return "Hello, " + name;
}
```

- Can be **called before it's defined** in the code (because of hoisting)

#### Function Expression

```js
const greet = function (name) {
  return "Hello, " + name;
};
```

- Stored in a variable
- Cannot be called before the line it’s written on
- Useful when passing functions as arguments

### Arrow Functions Recap

Modern and shorter syntax:

```js
const greet = (name) => {
  return "Hello, " + name;
};
```

If there is **only one statement**, and it's a return, you can write:

```js
const greet = (name) => "Hello, " + name;
```

> Arrow functions are best for small, quick functions.
>
> They are commonly used in React, especially in event handlers and map/filter callbacks.

### Reusable Function Design

Let’s say we want to show a formatted user profile.

#### Problem:

We might write:

```js
let name1 = "Rajat";
let age1 = 25;
console.log("Name: " + name1 + ", Age: " + age1);

let name2 = "Anita";
let age2 = 30;
console.log("Name: " + name2 + ", Age: " + age2);
```

#### Better Way – Use a function:

```js
function showProfile(name, age) {
  console.log("Name: " + name + ", Age: " + age);
}

showProfile("Rajat", 25);
showProfile("Anita", 30);
```

> This makes your code clean, readable, and reusable.

### Returning vs Logging

Many beginners confuse `console.log()` with `return`.

#### Return:

- **Sends back a value**
- Can be stored in variables or passed into other functions

```js
function getSum(a, b) {
  return a + b;
}

let total = getSum(5, 10); // total is 15
```

#### Console.log:

- **Just displays something on screen**
- Doesn’t store or pass values

```js
console.log(getSum(5, 10)); // prints 15
```

## 🧠 Callback Functions in JavaScript – Made Simple

### ✅ What is a Callback Function?

A **callback function** is:

> A **function passed as an argument** to another function, so it can be **called later**.

Think of it like this:

> "Hey, do this task. When you're done, call this other function."

---

### 📦 Real-Life Example (Analogy)

Imagine ordering food:

- You: "I want a pizza. When it's ready, **call me**."
- The restaurant makes pizza (takes time)
- Later, they call you (callback)

In code, that **"call me later"** part is a callback function.

---

### 🧪 Simple Example

```js
function greet(name) {
  console.log("Hello, " + name);
}

function processUser(callback) {
  let userName = "Rajat";
  callback(userName); // 👈 calling the callback
}

processUser(greet); // Output: Hello, Rajat
```

### 💡 What's Happening?

- `greet` is passed **as an argument** to `processUser`
- Inside `processUser`, it **calls** `greet` with the user's name

---

### 🧰 Another Example: Math Operation

```js
function add(a, b) {
  console.log("Sum:", a + b);
}

function calculate(a, b, callback) {
  callback(a, b); // calls the passed function
}

calculate(5, 3, add); // Output: Sum: 8
```

✅ You can pass **any function** as a callback!

---

### 🕒 Why Use Callback Functions?

- **Control** when something runs (not immediately)
- Handle **async tasks** like fetching data, reading files
- Run a function **after another finishes**

---

### ⚠️ Confusion Alert: Don’t Use `()` When Passing

```js
// Wrong ❌ (this calls it immediately)
processUser(greet());

// Right ✅ (just passing the function, not calling it)
processUser(greet);
```

---

### 🧵 Example with setTimeout (Delays)

```js
function sayHi() {
  console.log("Hi there!");
}

setTimeout(sayHi, 2000); // sayHi will run after 2 seconds
```

Here, `sayHi` is a callback used by `setTimeout`

---

### 🔁 Array Methods Use Callbacks Too!

```js
let fruits = ["apple", "banana", "mango"];

fruits.forEach(function (fruit) {
  console.log(fruit);
});
```

- `.forEach()` uses a **callback function** to run for each item

---

### 🔐 Tip: Callback Naming

Name your callback clearly based on what it does.

```js
function onComplete() {
  console.log("Task done");
}
function onSuccess(result) {
  console.log(result);
}
```

---

This is **very important** for working with:

- Events
- Timers
- APIs
- React (later!)

### Best Practices for Functions

1. **One job per function**

   A function should do one clear task.

2. **Use meaningful names**

   `calculateTotal()`, `getUserData()` — not `doSomething()`.

3. **Keep them short**

   Prefer 5–15 lines. Break large tasks into smaller functions.

4. **Use default values** (optional):

   ```js
   function greet(name = "Guest") {
     console.log("Hello " + name);
   }

   greet(); // Hello Guest
   ```

5. **Avoid repeating code** — use functions instead.

<div class="practice">

### Practice Times

1. Create a function `multiply(a, b)` that returns the product of two numbers.
2. Create `introduce(name, profession)` that logs: "Hi, I am NAME and I work as a PROFESSION."
3. Write a function `isEven(num)` that returns true if a number is even.
4. Try converting all above functions into **arrow functions**.
5. BONUS: Create a function `formatUser(userObj)` that takes an object:

   ```js
   let user = { name: "Rajat", age: 25 };
   ```

   and returns a string: `"Rajat is 25 years old."`

6. Create a function that takes two numbers and a callback to do an operation
7. Write a `setTimeout` with a named function as callback
8. Use `.forEach()` on an array to print items in uppercase

</div>

#### Summary: You Now Know

- The difference between function declarations and expressions
- Arrow function syntax and when to use it
- How to write clean, reusable functions
- How to use `return` vs `console.log`
- A preview of **callback functions**
- A function passed to another function
- Called **after** some action or task
- Used for things like waiting, loops, async code

</article>
