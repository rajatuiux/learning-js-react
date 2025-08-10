## Day 46 – Finding Items with .find() and .some()

#### `.find()` – Find a Single Item

`.find()` searches through an array and returns the **first item** that matches the condition. If no match is found, it returns `undefined`.

### Example 1: Find a number

```js
let numbers = [5, 10, 15, 20];

let result = numbers.find(function (num) {
  return num > 10;
});

console.log(result); // 15 (first number > 10)
```

### Example 2: Find a user by name

```js
let users = [
  { name: "Rajat", age: 25 },
  { name: "Sara", age: 30 },
  { name: "Alex", age: 22 },
];

let match = users.find(function (user) {
  return user.name === "Sara";
});

console.log(match);
// { name: "Sara", age: 30 }
```

#### `.some()` – Check If **Any** Match Exists

`.some()` checks if **at least one** item matches the condition.

It returns `true` or `false`.

### Example 1: Is any number > 100?

```js
let prices = [25, 50, 75];

let hasExpensiveItem = prices.some(function (price) {
  return price > 100;
});

console.log(hasExpensiveItem); // false
```

### Example 2: Check if a username is taken

```js
let usernames = ["rajat", "alex", "sara"];

let isTaken = usernames.some(function (name) {
  return name === "alex";
});

console.log(isTaken); // true
```

#### Comparison Table

| Feature         | `.find()`                           | `.some()`            |
| --------------- | ----------------------------------- | -------------------- |
| What it returns | First matched item (or `undefined`) | `true` or `false`    |
| Stops early     | ✅ Yes                              | ✅ Yes               |
| Use case        | Get item                            | Check if item exists |

## 🔍 Real-World Examples

```js
let products = [
  { id: 1, name: "Phone", inStock: true },
  { id: 2, name: "Laptop", inStock: false },
  { id: 3, name: "Tablet", inStock: true },
];

// Find the first product that is out of stock
let unavailable = products.find((p) => p.inStock === false);

// Check if any product is in stock
let available = products.some((p) => p.inStock === true);

console.log(unavailable.name); // Laptop
console.log(available); // true
```

## 🔸 Practice Challenge

1. Create an array of users with `{ name, email }`
2. Use `.find()` to get a user by email
3. Use `.some()` to check if a specific email is already used

#### Key Takeaways

- Use `.find()` when you want **one item** that matches
- Use `.some()` when you want to **check if any** match
- Both stop as soon as the condition is satisfied (efficient)
