<article class="day-block">

## Day 8: What is the DOM?

### 🟡 What is the DOM?

The **DOM (Document Object Model)** is a programming interface provided by the browser.

* It represents the HTML structure of a webpage as a **tree of objects** (called nodes).
* JavaScript can **read**, **modify**, **add**, or **remove** elements from this tree.
* Think of it like a live map of your webpage that JS can control.
* The browser creates this tree automatically when the page loads.

#### Example:

```html
<body>
  <h1>Hello</h1>
  <p>Welcome!</p>
</body>
```

##### DOM Tree:

<div class="small-grey-block">

```
document
 └── body
     ├── h1 → "Hello"
     └── p → "Welcome!"
```

</div>

##### With JavaScript:

```js
document.querySelector("h1").textContent = "Hi!";
```

This finds the `<h1>` and changes its text.

<div class="section-break"></div>

### ✅ What is an Object?

An **object** is a collection of **related data and functions**.

* Data stored in key-value pairs are called **properties**.
* Functions inside an object are called **methods**.
* Objects help group related info, making code cleaner and reusable.
* Real-life analogy: A person has a name, age (properties) and actions like walk, talk (methods).

#### Example:

```js
const user = {
  name: "Rajat",
  age: 30,
  greet: function () {
    console.log("Hello!");
  }
};
```
- `user` is an **object**

- `name` and `age` are **properties** (also called variables inside an object)

- `greet` is a **method** (a function inside the object)

- `console.log()` is a **built-in method**

- `user.greet()` is how you **call the method** using dot (`.`) notation

<div class="section-break"></div>

### ✅ Function vs Method

| Term     | Meaning                     | Example             |
| -------- | --------------------------- | ------------------- |
| Function | A block of reusable code    | `sayHi()`           |
| Method   | A function inside an object | `console.log("Hi")` |

* **Functions** are independent blocks of logic.
* **Methods** are functions tied to objects.
* Both do actions, but methods belong to something (an object).

**Examples:**

```js
// Functionunction sayHi() {
  console.log("Hi!");
}
sayHi();

// Method
console.log("Hello!"); // 'log' is a method of the console object
```

<div class="section-break"></div>

### 🟡 What is the dot `.` for?

The **dot (.)** is used to access **properties** or **methods** of an object.

* Think of it as a way to "reach inside" an object.
* It connects the object and the action/data you want.
* Commonly used in DOM manipulation.

**Examples:**

```js
document.querySelector("h1").textContent = "Welcome!";
```

* `document` is an object
* `.querySelector()` is a method
* `.textContent` is a property

<div class="section-break"></div>

### 🔑 Summary

| Concept   | Meaning                                    |
| --------- | ------------------------------------------ |
| **DOM**       | Page structure as a tree for JS to control |
| **Object    | A container of data and methods            |
| Function  | Independent block of code                  |
| Method    | Function inside an object                  |
| Dot (`.`) | Used to access parts of an object          |


</article>