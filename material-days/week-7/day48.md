## Day 48 – Sorting & Reversing Arrays

### Part 1: `.sort()` – Sort an Array

The `.sort()` method **rearranges items in order**.

By default, it sorts values **as strings**, which can lead to surprises.

#### Sorting Strings

```js
let names = ["Sara", "Rajat", "Alex", "Zara"];

names.sort();
console.log(names); // ["Alex", "Rajat", "Sara", "Zara"]
```

> This works perfectly for simple alphabetical sorting (A to Z).

#### Sorting Numbers (⚠️ Default Is Wrong!)

```js
let numbers = [5, 100, 20];

numbers.sort();
console.log(numbers); // [100, 20, 5] ❌ (sorted as strings!)
```

To sort numbers correctly, you must pass a **compare function**:

```js
numbers.sort(function (a, b) {
  return a - b; // Ascending: smallest to largest
});
console.log(numbers); // [5, 20, 100]
```

#### Descending Order (High to Low)

```js
numbers.sort(function (a, b) {
  return b - a;
});
console.log(numbers); // [100, 20, 5]
```

#### Real-Life Example: Sort Products by Price

```js
let products = [
  { name: "Laptop", price: 60000 },
  { name: "Phone", price: 30000 },
  { name: "Tablet", price: 20000 },
];

products.sort(function (a, b) {
  return a.price - b.price;
});

console.log(products);
// Tablet, Phone, Laptop (low to high)
```

### Part 2: `.reverse()` – Reverse an Array

`.reverse()` simply **flips the order** of items in an array.

```js
let cities = ["Delhi", "Mumbai", "Chennai"];

cities.reverse();
console.log(cities); // ["Chennai", "Mumbai", "Delhi"]
```

You can **combine** it with `.sort()` to sort in reverse order.

```js
let sorted = cities.sort().reverse();
console.log(sorted); // ["Mumbai", "Delhi", "Chennai"]
```

### ⚠️ Warning:

Both `.sort()` and `.reverse()` **change the original array**!

If you want to keep the original array safe:

```js
let sortedCopy = [...cities].sort(); // make a copy first
```

### 🔸 Practice Challenge

<div class="practice">

1. Create an array of numbers: `[30, 10, 50, 20]`
2. Sort them in:
   - Ascending order
   - Descending order
3. Create an array of 4 products `{ name, price }`
4. Sort by price (low to high)
5. Reverse the order (high to low)

</div>

#### Key Takeaways

| Task                    | Method                   |
| ----------------------- | ------------------------ |
| Alphabetical sort (A–Z) | `.sort()`                |
| Number sort             | `.sort((a, b) => a - b)` |
| Reverse order           | `.reverse()`             |
| Don’t affect original   | Use `[...array]`         |

- `.sort()` is powerful with a compare function
- `.reverse()` flips the array
- Use both to build sorted UI lists like: newest comments, top-rated products, etc.
