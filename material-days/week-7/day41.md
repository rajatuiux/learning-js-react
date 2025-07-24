## Day 41 – Intro to Arrays

#### What is an Array?

An **array** is a special variable that holds **multiple values** (usually of the same type) in **one place**.

```
js
CopyEdit
let colors = ["red", "green", "blue"];

```

Each value in an array is called an **element**, and each element has an **index number** starting from **0**.

| Index | Element |
| ----- | ------- |
| 0     | "red"   |
| 1     | "green" |
| 2     | "blue"  |

#### Why Use Arrays?

Arrays let you:

- Store multiple items in one variable
- Loop through data (like a list of users)
- Apply operations on collections of data (sort, filter, count, etc.)

#### Declaring Arrays

```
js
CopyEdit
let fruits = ["apple", "banana", "mango"];
let numbers = [10, 20, 30, 40];
let mixed = ["text", 123, true];  // valid, but avoid mixing types unless needed

```

#### Accessing Values

```
js
CopyEdit
console.log(fruits[0]);  // "apple"
console.log(fruits[2]);  // "mango"

```

> Indexing starts from 0, not 1.

#### Changing Values

```
js
CopyEdit
fruits[1] = "orange";
console.log(fruits);  // ["apple", "orange", "mango"]

```

#### Array Length

```
js
CopyEdit
console.log(fruits.length);  // 3

```

#### Adding Elements

```
js
CopyEdit
fruits.push("grape");   // Add to end
fruits.unshift("kiwi"); // Add to start

console.log(fruits);
// ["kiwi", "apple", "orange", "mango", "grape"]

```

#### Removing Elements

```
js
CopyEdit
fruits.pop();      // Removes last element
fruits.shift();    // Removes first element

```

#### Looping Through Arrays

```
js
CopyEdit
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

```

#### Real-Life Example

```
js
CopyEdit
let users = ["john", "maria", "alex"];

console.log(`Total users: ${users.length}`);

for (let i = 0; i < users.length; i++) {
  console.log(`User ${i + 1}: ${users[i]}`);
}

```

## 🔸 Challenge

1. Create an array of 5 favorite movies
2. Add one more using `.push()`
3. Replace the second movie
4. Loop through and print each movie with its position

#### Key Takeaways

- Arrays = ordered list of values
- Use index to access/update
- Use `.length`, `.push()`, `.pop()`, etc. to manipulate them
- Loop through arrays with `for` loop
