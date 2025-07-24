<article class="day-content">

## Day 20: Objects – Grouping Related Data Together

### What is an Object?

An **object** is a way to store **related data and behavior (functions)** in one place.

> Think of it like a real-world item.
>
> Example: A **person** has a name, age, and actions like speak or walk.

```js
let person = {
  name: "Rajat",
  age: 25,
  isStudent: false,
};
```

* `name`, `age`, and `isStudent` are called **properties**
* Each has a **key** (name) and a **value**

### Basic Object Syntax

```js
let objectName = {
  key1: value1,
  key2: value2,
  ...
};
```

#### Example:

```js
let car = {
  brand: "Toyota",
  model: "Camry",
  year: 2023,
};
```

### Accessing Values from an Object

#### Using dot `.` notation:

```js
console.log(car.brand); // "Toyota"
```

#### Using bracket `[]` notation:

```js
console.log(car["model"]); // "Camry"
```

Use bracket notation when:

* You have spaces in the key
* The key is stored in a variable

### Adding or Updating Properties

#### Add new:

```js
car.color = "red";
```

#### Update existing:

```js
car.year = 2024;
```

### Deleting a Property

```js
delete car.model;
```

### Object with Functions (Methods)

An object can also store **functions**.

```js
let user = {
  name: "Anita",
  greet: function () {
    console.log("Hello, my name is " + this.name);
  },
};
```

* `greet` is called a **method**
* `this` refers to the current object

Calling it:

```js
user.greet(); // "Hello, my name is Anita"
```

### Looping Through an Object: `for...in`

```js
for (let key in user) {
  console.log(key + ": " + user[key]);
}
```

> This shows all keys and values in the object

### Nesting – Object Inside Object or Array

#### Object inside object:

```js
let student = {
  name: "Ravi",
  address: {
    city: "Delhi",
    zip: 110001,
  },
};

console.log(student.address.city); // "Delhi"
```

#### Array of objects:

```js
let products = [
  { name: "Pen", price: 10 },
  { name: "Pencil", price: 5 },
  { name: "Notebook", price: 50 },
];

console.log(products[1].name); // "Pencil"
```

### Object vs Array – Quick Comparison

| Feature   | Array            | Object                       |
| --------- | ---------------- | ---------------------------- |
| Structure | List of values   | Key-value pairs              |
| Access by | Index (0, 1, 2…) | Property name (like `.name`) |
| Best use  | Ordered data     | Related info about one thing |

<div class="practice">

### Practice Times

1. Create an object to represent a `book` with `title`, `author`, `pages`, `isAvailable`.
2. Log the `title` using both dot and bracket notation.
3. Add a new property `rating`, and update `isAvailable`.
4. Create a method `summary()` that returns: "Book: <title> by <author>"
5. Create an array of 3 such book objects and loop through to print each book’s title.

</div>

✅ You now understand:

* How objects store grouped data
* How to access, update, and delete values
* How to add functions inside objects
* Nested objects and array of objects

</article>
