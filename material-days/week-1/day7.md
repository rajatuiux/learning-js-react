<article class="day-block">

## Day 7: Arrays in JavaScript

### 🟡 What Is an Array?

An **array** is a special variable that can hold **multiple values** at once.

Think of it like a list:

```jsx
let colors = ["red", "green", "blue"];
```

You can store numbers, strings, or even mix types:

```jsx
let mixed = [10, "hello", true];
```

<div class="section-break"></div>

### ✅ Accessing Array Items

You access items using **index numbers** (starting from 0):

```jsx
let fruits = ["apple", "banana", "mango"];

console.log(fruits[0]);  // apple
console.log(fruits[1]);  // banana
```

* `fruits[0]` means the **first item**
* `fruits[2]` would be the **third item**

<div class="section-break"></div>

### ✅ Modifying Arrays

You can change an item by using its index:

```jsx
fruits[1] = "orange";  // Replaces "banana" with "orange"
```

You can also add new items:

```jsx
fruits.push("grape");     // adds at the end
fruits.unshift("kiwi");   // adds at the beginning
```

And remove items:

```jsx
fruits.pop();     // removes last item
fruits.shift();   // removes first item
```

<div class="section-break"></div>

### 🔹 Array Length

To know how many items are in an array:

```jsx
let count = fruits.length;
console.log(count);  // 3 or 4, etc.
```

<div class="section-break"></div>

### 🔹 Looping Through Arrays

You can use a loop to go through each item:

```jsx
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

Or use the newer `for...of` loop:

```jsx
for (let fruit of fruits) {
  console.log(fruit);
}
```

<div class="section-break"></div>

### 🔹 Array Methods

| Method             | What It Does           |
| ------------------ | ---------------------- |
| `push()`           | Adds to end            |
| `pop()`            | Removes from end       |
| `unshift()`        | Adds to beginning      |
| `shift()`          | Removes from beginning |
| `length`           | Number of items        |
| `indexOf("item")`  | Finds position of item |
| `includes("item")` | Checks if item exists  |

```jsx
let tools = ["pen", "pencil", "eraser"];

console.log(tools.includes("pen"));     // true
console.log(tools.indexOf("eraser"));    // 2
```

<div class="section-break"></div>

<div class="practice">

### 🔸 Practice Time

1. Create an array of your 5 favorite movies
2. Add one more movie to the end
3. Remove the first movie
4. Print each movie one by one using a loop
5. Check if a certain movie exists using `includes()`

</div>

<div class="section-break"></div>

✅ **You’ve completed Day 7!**

Now you can:

* Create and use arrays
* Add, remove, and modify items
* Loop through lists
* Use helpful array methods like `push()`, `pop()`, `includes()`

</article>
