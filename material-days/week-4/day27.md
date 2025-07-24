<article class="day-block">

## Day 27: Spread (...), Destructuring, and Rest Parameters

### Spread Operator (`...`)

#### What is it?

The **spread operator** `...` allows you to **copy**, **combine**, or **expand** arrays and objects.

> It “spreads out” the items inside an array or object.

#### Spread in Arrays

```js
let numbers = [1, 2, 3];
let moreNumbers = [...numbers, 4, 5];

console.log(moreNumbers); // [1, 2, 3, 4, 5]
```

* `...numbers` takes all items from `numbers` and puts them inside the new array.

#### Spread in Objects

```js
let user = { name: "Rajat", age: 25 };
let newUser = { ...user, city: "Delhi" };

console.log(newUser);
// { name: "Rajat", age: 25, city: "Delhi" }
```

> You can add or override properties while copying.

#### Merging Arrays

```js
let arr1 = [1, 2];
let arr2 = [3, 4];
let combined = [...arr1, ...arr2];

console.log(combined); // [1, 2, 3, 4]
```

### Destructuring – Pulling Out Values

Destructuring means to **break apart** arrays or objects and **assign values to variables** directly.

#### Destructuring Arrays

```js
let colors = ["red", "blue", "green"];

let [first, second] = colors;
console.log(first);  // "red"
console.log(second); // "blue"
```

> You can skip items too:

```js
let [, , third] = colors;
console.log(third); // "green"
```

#### Destructuring Objects

```js
let user = { name: "Rajat", age: 25 };

let { name, age } = user;
console.log(name); // "Rajat"
console.log(age);  // 25
```

> You can even rename variables:

```js
let { name: userName } = user;
console.log(userName); // "Rajat"
```

### Rest Parameters – Catch All Remaining Values

While the **spread operator expands**, the **rest parameter collects** multiple values into one.

#### In Functions

```js
function sum(...numbers) {
  console.log(numbers); // All passed values as an array
}

sum(10, 20, 30); // [10, 20, 30]
```

> You can now loop through numbers inside the function.

#### Mix with Regular Parameters

```js
function greet(first, ...others) {
  console.log(first);  // "Hello"
  console.log(others); // ["Rajat", "Anita"]
}

greet("Hello", "Rajat", "Anita");
```

### Summary: Spread vs Rest

| Feature    | Looks Like | Purpose        | Use Case                       |
| ---------- | ---------- | -------------- | ------------------------------ |
| **Spread** | `...data`  | Expands things | Copying, merging, passing data |
| **Rest**   | `...args`  | Gathers things | Functions collecting arguments |

<div class="practice">

### 🧠 Practice Time

1. Use the spread operator to:

   * Copy `[1, 2, 3]` into a new array with `4, 5` added
   * Merge two arrays `[a, b]` and `[c, d]`

2. Use object destructuring to pull `title` and `price` from:

```js
let product = { title: "Book", price: 250 };
```

3. Use array destructuring to pull the first two names from:

```js
let names = ["Rajat", "Anita", "Rohan"];
```

4. Create a function `total(...nums)` that returns the sum of all numbers passed to it.

</div>

### ✅ You Now Know

* How to **spread** arrays/objects using `...`
* How to **destructure** data from arrays/objects
* How to **use rest parameters** in functions to collect multiple values

</article>
