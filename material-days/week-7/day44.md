## Day 44 – Filtering Data with .filter()

#### What is `.filter()`?

`.filter()` is a **built-in array method** that creates a **new array** with only the elements that **pass a condition**.

### Simple Example:

```
js
CopyEdit
let numbers = [1, 2, 3, 4, 5];

let evenNumbers = numbers.filter(function(num) {
  return num % 2 === 0;
});

console.log(evenNumbers); // [2, 4]

```

- It **does not change** the original array.
- It returns only items where the `function` returns `true`.

#### Syntax:

```
js
CopyEdit
array.filter(function (item, index, array) {
  return condition;
});

```

- `item`: current value being checked
- `index`: (optional) current index
- `array`: (optional) the whole array

#### Real-Life Example: Filtering Users

```
js
CopyEdit
let users = [
  { name: "Rajat", age: 25 },
  { name: "Sara", age: 32 },
  { name: "John", age: 29 },
  { name: "Zara", age: 20 }
];

let adults = users.filter(function(user) {
  return user.age >= 30;
});

console.log(adults);
// [{ name: "Sara", age: 32 }]

```

#### Real Use Case: Product Filtering

```
js
CopyEdit
let products = [
  { title: "Laptop", price: 60000 },
  { title: "Phone", price: 25000 },
  { title: "Tablet", price: 18000 },
  { title: "Monitor", price: 12000 }
];

let expensive = products.filter(function(product) {
  return product.price >= 20000;
});

console.log(expensive);
// [Laptop, Phone]

```

#### You Can Store or Chain It

```
js
CopyEdit
let cheapProducts = products
  .filter(p => p.price < 20000)
  .map(p => p.title);

console.log(cheapProducts); // ["Tablet", "Monitor"]

```

## 🔸 Practice Challenge

1. Create an array of 5 students `{ name, score }`
2. Use `.filter()` to get students with score ≥ 80
3. Print the names of these high scorers

#### Common Use Cases for `.filter()`

| Task                          | Example                       |
| ----------------------------- | ----------------------------- |
| Filter users by age           | `user.age >= 18`              |
| Get products under ₹1000      | `product.price < 1000`        |
| Find all unread notifications | `notification.read === false` |
| Keep only completed tasks     | `task.completed === true`     |

#### Key Takeaways:

- `.filter()` lets you get a **subset** of data
- It returns a **new array** — original stays untouched
- Useful when you need to **search, sort, or display filtered results**
