## Day 47 – Deleting & Updating Items in Arrays

#### Part 1: Deleting Items using `.filter()`

We use `.filter()` to **keep only** the items we want.

### Example: Remove a user by name

```
js
CopyEdit
let users = [
  { name: "Rajat", age: 25 },
  { name: "Sara", age: 30 },
  { name: "Alex", age: 22 }
];

let updatedUsers = users.filter(function(user) {
  return user.name !== "Sara";
});

console.log(updatedUsers);
// [Rajat, Alex]

```

> !== means “not equal”. This removes Sara because we only keep users not named Sara.

#### Delete by ID (more common in real apps)

```
js
CopyEdit
let products = [
  { id: 1, name: "Phone" },
  { id: 2, name: "Tablet" },
  { id: 3, name: "Laptop" }
];

let remaining = products.filter(p => p.id !== 2);
console.log(remaining); // Phone & Laptop

```

#### Part 2: Updating Items using `.map()`

We use `.map()` to return a **new version** of the array, with **changed data**.

### Example: Update a user's age

```
js
CopyEdit
let users = [
  { name: "Rajat", age: 25 },
  { name: "Sara", age: 30 }
];

let updated = users.map(function(user) {
  if (user.name === "Rajat") {
    return { ...user, age: 26 };  // update age
  }
  return user;  // others stay the same
});

console.log(updated);
// [{ name: "Rajat", age: 26 }, { name: "Sara", age: 30 }]

```

> ...user means: copy all other properties. Then we override age.

#### Explanation of `...user` (spread operator)

```
js
CopyEdit
{ ...user, age: 26 }

```

This is the same as writing:

```
js
CopyEdit
{
  name: user.name,
  age: 26
}

```

But shorter and cleaner — especially when there are more fields.

#### Combine Delete + Update

You can chain `.filter()` and `.map()` to:

- Remove some items
- Update others

```
js
CopyEdit
let todos = [
  { id: 1, text: "Learn JS", done: false },
  { id: 2, text: "Practice", done: false },
  { id: 3, text: "Sleep", done: true }
];

// Remove completed tasks, and mark task 2 as done
let result = todos
  .filter(todo => todo.done === false)
  .map(todo => {
    if (todo.id === 2) {
      return { ...todo, done: true };
    }
    return todo;
  });

console.log(result);

```

## 🔸 Practice Challenge

1. Create an array of 4 products with `{ id, name, price }`
2. Use `.filter()` to delete a product by id
3. Use `.map()` to update the price of one product

#### Key Takeaways

- Use `.filter()` to **delete** (exclude) items
- Use `.map()` to **update** items
- Always return **new arrays** — don’t directly change the old one
- Use `...item` (spread) to keep the rest of the object intact
