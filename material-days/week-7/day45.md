## Day 45 – Transforming Data with .map()

#### What is `.map()`?

`.map()` creates a **new array** by applying a **function to each item** in the original array.

It’s used when you want to **change** or **extract** part of each element.

### Simple Example:

```js
let numbers = [1, 2, 3];

let doubled = numbers.map(function (num) {
  return num * 2;
});

console.log(doubled); // [2, 4, 6]
```

- `numbers` remains unchanged
- `doubled` is the new transformed array

#### Syntax

```js
array.map(function (item, index, array) {
  return transformedItem;
});
```

#### Real-Life Example: Extracting Titles

```js
let products = [
  { title: "Laptop", price: 60000 },
  { title: "Phone", price: 25000 },
  { title: "Tablet", price: 18000 },
];

let titles = products.map(function (product) {
  return product.title;
});

console.log(titles); // ["Laptop", "Phone", "Tablet"]
```

#### Example: Change Object Structure

```js
let users = [
  { name: "Rajat", age: 25 },
  { name: "Sara", age: 30 },
];

let usernames = users.map(function (user) {
  return user.name.toLowerCase();
});

console.log(usernames); // ["rajat", "sara"]
```

#### You Can Combine `.map()` and `.filter()`

```js
let expensiveTitles = products
  .filter((p) => p.price > 20000)
  .map((p) => p.title);

console.log(expensiveTitles); // ["Laptop", "Phone"]
```

## 🔍 Real Use: Create UI Cards in React

In React, `.map()` is used to render lists dynamically:

```js
products.map((product) => (
  <ProductCard title={product.title} price={product.price} />
));
```

You’ll use this **a lot** when building interfaces.

## 🔸 Practice Challenge:

1. Create an array of 5 books `{ title, author }`
2. Use `.map()` to return only the titles
3. Then return a new array like:

   `"Title by Author"`

#### Common Use Cases for `.map()`

| Goal                            | `.map()` Output          |
| ------------------------------- | ------------------------ |
| Extract emails from users       | `user.email`             |
| Convert names to uppercase      | `name.toUpperCase()`     |
| Format prices as `₹price`       | `"₹" + price`            |
| Create strings from object data | `"Rajat (25 years old)"` |

#### Key Takeaways:

- `.map()` transforms every item and returns a new array
- It’s perfect for **formatting**, **displaying**, or **calculating**
- Does **not modify** the original array
