<article class="day-block">

## Day 26: every(), sort(), and reverse() – More Array Tools

### `every()` – Check if All Items Match a Condition

The `.every()` method checks **if all items in an array pass a test** (i.e., the condition returns `true` for all of them).

#### Syntax

```js
array.every(function(item) {
  return condition;
});
```

> ✅ Returns `true` only if every item matches the condition.
> ❌ If **even one fails**, it returns `false`.

#### Example: Check if all numbers are positive

```js
let numbers = [5, 10, 15];

let allPositive = numbers.every(num => num > 0);
console.log(allPositive); // true
```

#### Example: All users are adults?

```js
let users = [
  { name: "Rajat", age: 25 },
  { name: "Mini", age: 17 }
];

let allAdults = users.every(user => user.age >= 18);
console.log(allAdults); // false
```

### `sort()` – Arrange Items in Order

The `.sort()` method **sorts the array**. By default, it sorts **as strings**, which can cause confusion with numbers.

#### Example: Sort strings alphabetically

```js
let names = ["Rajat", "Anita", "Yash"];
names.sort();
console.log(names); // ["Anita", "Rajat", "Yash"]
```

#### ⚠️ Problem: Sort numbers (default behavior is incorrect)

```js
let nums = [10, 5, 20, 2];
nums.sort();
console.log(nums); // [10, 2, 20, 5] (WRONG!)
```

#### ✅ Correct Way: Use compare function

```js
nums.sort((a, b) => a - b); // Ascending
console.log(nums); // [2, 5, 10, 20]
```

```js
nums.sort((a, b) => b - a); // Descending
console.log(nums); // [20, 10, 5, 2]
```

> 🔼 `a - b` → small to big
> 🔽 `b - a` → big to small

#### Example: Sort objects by age

```js
let users = [
  { name: "Rajat", age: 25 },
  { name: "Anita", age: 30 },
  { name: "Yash", age: 20 }
];

users.sort((a, b) => a.age - b.age);

console.log(users);
// [{Yash}, {Rajat}, {Anita}]
```

### `reverse()` – Flip the Order of an Array

The `.reverse()` method **reverses the order** of items in an array.

```js
let letters = ["a", "b", "c"];
letters.reverse();
console.log(letters); // ["c", "b", "a"]
```

> ♻️ This changes the original array.

### Summary of Behavior

| Method      | Purpose                            | Returns              | Changes Original? |
| ----------- | ---------------------------------- | -------------------- | ----------------- |
| `every()`   | Check if **all** items match       | Boolean (true/false) | No                |
| `sort()`    | Sort alphabetically or numerically | Sorted array         | Yes               |
| `reverse()` | Reverse the order of items         | Reversed array       | Yes               |

<div class="practice">

### 🧠 Practice Time

1. Check if all numbers are less than 100 in `[20, 40, 80, 150]`
2. Sort `[45, 10, 2, 99]` in ascending and descending order
3. Reverse `["HTML", "CSS", "JavaScript"]`
4. Sort this list of objects by `price` (low to high):

```js
let products = [
  { name: "Pen", price: 10 },
  { name: "Book", price: 50 },
  { name: "Pencil", price: 5 }
];
```

</div>

### ✅ You Now Know

* How to use `.every()` to check if all values meet a condition
* How `.sort()` works, and how to properly sort numbers or objects
* How `.reverse()` flips the order of an array

</article>
