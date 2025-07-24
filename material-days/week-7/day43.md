## Day 43 – Arrays of Objects + Practical Looping

#### Why Arrays of Objects?

Imagine you have multiple users. Each user has:

- a name
- an age
- an email

You could store them like this:

```
js
CopyEdit
let user1 = { name: "Rajat", age: 25, email: "rajat@example.com" };
let user2 = { name: "Sara", age: 30, email: "sara@example.com" };

```

But when you have many, it’s better to use an **array of objects**:

```
js
CopyEdit
let users = [
  { name: "Rajat", age: 25, email: "rajat@example.com" },
  { name: "Sara", age: 30, email: "sara@example.com" },
  { name: "Alex", age: 28, email: "alex@example.com" }
];

```

Now you can loop through the entire list and access each user’s details.

#### Looping through Arrays of Objects

### Using `for...of`:

```
js
CopyEdit
for (let user of users) {
  console.log(user.name);
  console.log(user.email);
}

```

### Using `.forEach()`:

```
js
CopyEdit
users.forEach(function(user, index) {
  console.log(`${index + 1}. ${user.name} - ${user.email}`);
});

```

#### Accessing Properties

Use **dot notation** to access a property:

```
js
CopyEdit
user.name      // "Rajat"
user.email     // "rajat@example.com"

```

Or **bracket notation** (useful for dynamic keys):

```
js
CopyEdit
user["email"]  // "rajat@example.com"

```

#### Realistic Use Case: Product List

```
js
CopyEdit
let products = [
  { title: "Laptop", price: 50000 },
  { title: "Phone", price: 30000 },
  { title: "Tablet", price: 20000 }
];

products.forEach(function(product) {
  console.log(`${product.title} costs ₹${product.price}`);
});

```

## 🔸 Practice Challenge:

1. Create an array of 4 objects representing books (with `title` and `author`)
2. Loop through using `for...of` and print:

   “Book: [title] by [author]”

3. Then do the same using `.forEach()`

#### Bonus Tip: Combine with Conditions

You can combine loops with `if`:

```
js
CopyEdit
users.forEach(function(user) {
  if (user.age > 27) {
    console.log(`${user.name} is older than 27`);
  }
});

```

#### Key Takeaways:

- Arrays of objects = powerful way to store structured data
- Use loops to extract, display, and filter data
- `.forEach()` and `for...of` are perfect for reading this kind of data
