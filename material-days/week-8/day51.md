## Day 51: Props in React

### 1. What Are Props?

**Props** (short for “properties”) let you **pass data from a parent component to a child component** in React.

Think of props like **function arguments** — when you call a function, you give it inputs; similarly, you give components inputs via props.

This allows components to be **dynamic and reusable** because you can send different data each time.

<div class="section-break"></div>

### 2. How Props Work

Example:

```js
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```

Using the component:

```js
<Greeting name="Rajat" />
```

Here, `name="Rajat"` is passed as a prop, and inside the component, you access it via `props.name`.

The component will render: **Hello, Rajat!**

<div class="section-break"></div>

### 3. Props Are Read-Only

Props are **immutable** inside the component — you cannot change them.

If you need data that changes, you use **state** (which we will learn soon).

<div class="section-break"></div>

### 4. Destructuring Props

To write cleaner code, you can use **destructuring** in the function parameter:

```js
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}
```

<div class="section-break"></div>

### 5. Passing Multiple Props

You can send many props:

```js
function UserCard({ name, age, hobby }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Hobby: {hobby}</p>
    </div>
  );
}
```

Usage:

```js
<UserCard name="Rajat" age={27} hobby="Reading" />
```

<div class="section-break"></div>

### 6. Props Can Be Any Data Type

Props can be:

* Strings
* Numbers
* Booleans
* Arrays
* Objects
* Functions

Example passing an array prop:

```js
function ItemList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

<ItemList items={['Apple', 'Banana', 'Cherry']} />
```

<div class="section-break"></div>

### 7. Practice

<div class="practice">

1. Create a component `Welcome.jsx` that accepts a `name` prop and displays “Welcome, {name}!”
2. Create a component `UserProfile.jsx` that takes `name`, `age`, and `city` props and displays them.
3. Use these components inside `App.jsx` and pass different values for props.

</div>

<div class="section-break"></div>

### 8. Interview Tips

* Props are how **parent components pass data** to children.
* Props are **read-only** inside child components.
* Destructuring props makes your code cleaner.
* Props can be any valid JavaScript type.