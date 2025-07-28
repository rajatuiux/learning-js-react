<article class="day-block">

## Day 22: Functions Deep Dive – Reusability, Clean Code & Callbacks

<div class="section-break"></div>

### 🔁 Recap: What You Already Know

- How to define a function
- How to call a function
- Using parameters and return values

Now, let’s go beyond basics to learn:

- Function expressions vs declarations
- Arrow functions vs regular functions
- Clean, reusable function design
- Callback functions (a powerful concept in JS)

<div class="section-break"></div>

### 🔧 Function Declarations vs Expressions

#### Function Declaration (Hoisted)

```js
function greet(name) {
  return "Hello, " + name;
}
```

✅ Can be called before its definition

#### Function Expression (Not Hoisted)

```js
const greet = function (name) {
  return "Hello, " + name;
};
```

✅ Useful when passing functions as arguments

<div class="section-break"></div>

### 🏹 Arrow Functions

A shorter way to write functions:

```js
const greet = (name) => "Hello, " + name;
```

- Ideal for one-liners
- Great for event handlers, array methods, etc.

<div class="section-break"></div>

### ✅ Writing Reusable Functions

#### Before:

```js
let name1 = "Rajat";
let age1 = 25;
console.log("Name: " + name1 + ", Age: " + age1);

let name2 = "Anita";
let age2 = 30;
console.log("Name: " + name2 + ", Age: " + age2);
```

#### Better:

```js
function showProfile(name, age) {
  console.log("Name: " + name + ", Age: " + age);
}

showProfile("Rajat", 25);
showProfile("Anita", 30);
```

✅ Cleaner, reusable, readable

<div class="section-break"></div>

### 🔄 Return vs Console.log

#### Return = Send Value

```js
function getSum(a, b) {
  return a + b;
}
let total = getSum(5, 10);
```

#### Console.log = Just Print

```js
console.log(getSum(5, 10)); // prints 15
```

✅ Use `return` when you need to **use** the result elsewhere

<div class="section-break"></div>

### 🧠 What Are Callback Functions?

A **callback** is a function **passed to another function** to run later.

#### Basic Example:

```js
function sayHello() {
  console.log("Hello!");
}
function greet(callback) {
  callback();
}

greet(sayHello); // Output: Hello!
```

🧠 You passed `sayHello` **as a value** (not `sayHello()`)

<div class="section-break"></div>

### 🍎 Kid-Friendly Example:

```js
function calculate(a, b, callback) {
  callback(a, b);
}
function add(x, y) {
  console.log("The sum is:", x + y);
}
calculate(5, 3, add);
```

✅ Think of it like a magic calculator — you give it numbers and a recipe (callback)

<div class="section-break"></div>

### 💡 Why Use Callbacks?

- Run something **after a task finishes**
- Make code **flexible and reusable**
- Essential in **async programming** (like APIs)

<div class="section-break"></div>

### 🧪 More Examples

#### Arrow Callback

```js
doMath(10, 2, (x, y) => console.log("Multiply:", x * y));
```

#### With setTimeout

```js
function sayHi() {
  console.log("Hi there!");
}
setTimeout(sayHi, 2000); // After 2 sec
```

#### .forEach() Callback

```js
let fruits = ["apple", "banana", "mango"];
fruits.forEach((fruit) => console.log(fruit.toUpperCase()));
```

<div class="section-break"></div>

### ⚠️ Common Mistake

```js
// ❌ Wrong: This executes immediately
greet(sayHello());

// ✅ Right: Just pass the function
greet(sayHello);
```

<div class="section-break"></div>

### ✅ Best Practices for Functions

1. **Do one job only**
2. **Use clear names** (`getData()`, `showAlert()`)
3. **Short is sweet** – 5–15 lines
4. **Use default values**

```js
function greet(name = "Guest") {
  console.log("Hello " + name);
}
```

5. **Use functions to remove repetition**

<div class="section-break"></div>

<div class="practice">

### 🧪 Practice Time

1. Create a function `multiply(a, b)` that returns the product.
2. `introduce(name, job)` logs: "Hi, I am NAME and I work as a JOB."
3. `isEven(num)` returns true if number is even
4. Convert above to arrow functions
5. BONUS: `formatUser(user)`

```js
let user = { name: "Rajat", age: 25 }; // Output: Rajat is 25 years old.
```

6. Function that takes two numbers + a callback
7. Write a `setTimeout` with a named function
8. Use `.forEach()` to print array items in uppercase

</div>

<div class="section-break"></div>

### ✅ Summary

- Difference: declarations, expressions, arrow functions
- Writing clean, reusable functions
- When to use return vs console.log
- What is a callback
- How callbacks are used in events, timeouts, async, React

</article>
