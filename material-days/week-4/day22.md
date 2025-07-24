<article class="day-block">

## Day 22: Functions Deep Dive – Reusability & Clean Code

### Why revisit functions?

You’ve already learned the basics:

* How to define a function
* How to call it
* How to use parameters and return values

Now we’ll focus on:

* **Reusability**
* **Function expressions vs declarations**
* **Arrow functions vs regular functions**
* **Best practices**

### Function Declarations vs Expressions

#### Function Declaration

```jsx
function greet(name) {
  return "Hello, " + name;
}
```

* Can be **called before it's defined** in the code (because of hoisting)

#### Function Expression

```jsx
const greet = function (name) {
  return "Hello, " + name;
};
```

* Stored in a variable
* Cannot be called before the line it’s written on
* Useful when passing functions as arguments

### Arrow Functions Recap

Modern and shorter syntax:

```jsx
const greet = (name) => {
  return "Hello, " + name;
};
```

If there is **only one statement**, and it's a return, you can write:

```jsx
const greet = (name) => "Hello, " + name;
```

> Arrow functions are best for small, quick functions.
>
> They are commonly used in React, especially in event handlers and map/filter callbacks.

### Reusable Function Design

Let’s say we want to show a formatted user profile.

#### Problem:

We might write:

```jsx
let name1 = "Rajat";
let age1 = 25;
console.log("Name: " + name1 + ", Age: " + age1);

let name2 = "Anita";
let age2 = 30;
console.log("Name: " + name2 + ", Age: " + age2);
```

#### Better Way – Use a function:

```jsx
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

* **Sends back a value**
* Can be stored in variables or passed into other functions

```jsx
function getSum(a, b) {
  return a + b;
}

let total = getSum(5, 10); // total is 15
```

#### Console.log:

* **Just displays something on screen**
* Doesn’t store or pass values

```jsx
console.log(getSum(5, 10)); // prints 15
```

### Callback Functions (Preview)

You can **pass a function into another function**. This is called a **callback**.

```jsx
function greet(name, callback) {
  let message = "Hello, " + name;
  callback(message);
}

greet("Rajat", function (msg) {
  console.log(msg); // Hello, Rajat
});
```

This is **very important** for working with:

* Events
* Timers
* APIs
* React (later!)

### Best Practices for Functions

1. **One job per function**

   A function should do one clear task.

2. **Use meaningful names**

   `calculateTotal()`, `getUserData()` — not `doSomething()`.

3. **Keep them short**

   Prefer 5–15 lines. Break large tasks into smaller functions.

4. **Use default values** (optional):

   ```jsx
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

   ```jsx
   let user = { name: "Rajat", age: 25 };
   ```

   and returns a string: `"Rajat is 25 years old."`

</div>

#### Summary: You Now Know

* The difference between function declarations and expressions
* Arrow function syntax and when to use it
* How to write clean, reusable functions
* How to use `return` vs `console.log`
* A preview of **callback functions**

</article>